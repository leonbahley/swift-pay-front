import { actions, assign, createMachine } from "xstate";

export const machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMCGAnCsCyrkAsBLAOzADoAbAe1QhKgAI1NYBiCK0skgNyoGtyMAC4BhDFgDaABgC6iUAAcqsQsMKcFIAB6IATNIBsZI3oCsBgBwBGQ3cNmAzABoQAT0Q2yZ6b+vnDaTMATgB2MzMAX0jXZixcAhJyalp6Jgk2MHR0KnQyRQpUYQAzXIBbMhFxFhl5JBBlVXVNet0EA2NTC2kbewcXd0RrUIAWMmCnW2GfYKDQw2iYkGIqCDgtOJw8IlItRrUNYi02gFpDRzJDPWG9Ef9LUL1HaxGzVw8EE+sLwOkb0Ossz0wVewWisQyCR2yRodGIjE2exUBxaoFO1jMl2ujzuegeTxeb0GCFCF0swWClkclgielG0j0CyWmyhSTImwAYmBhARIEimodjohHI8yMNAYyGeSRo4jO8htILiN5oZ-H9gvYwuCQCztmzityCBzUIQKABXdBgfkoo6tYWi8XBSV4kGywzyhDDC4TZ4RV6hJ0WPSLSJAA */
  context: {
    token: null,
    cards: [] as any[],
    error: "",
  },
  schema: {
    events: {} as
      | { type: "getEURCard"; data: { type: string } }
      | {
          type: "sendMoney";
          data: {
            beneficiary: string;
            sender: string;
            amount: number;
            donate: boolean;
          };
        },
  },

  initial: "loading cards",
  id: "cardsMachine",
  predictableActionArguments: true,
  states: {
    "loading cards": {
      entry: assign({
        token: (context, event) => JSON.parse(localStorage.getItem("token")!),
      }),
      invoke: {
        id: "getCards",
        src: (context, event) => {
          return fetch(`${process.env.REACT_APP_API_URL}card/cards`, {
            headers: {
              Authorization: `bearer ${context.token}`,
            },
          }).then((response) => response.json());
        },

        onDone: {
          target: "cardsFetched",
          actions: assign({ cards: (context, event) => event.data.cards }),
        },
        onError: {
          actions: assign({
            error: (ctx, ev) => "Something went wrong, try reloading a page",
          }),
          target: "fetchFailure",
        },
      },
    },
    cardsFetched: {
      on: {
        getEURCard: "getting eur card",
        sendMoney: "sending money",
      },
    },
    fetchFailure: {},
    "getting eur card": {
      invoke: {
        id: "getEURCard",
        src: (context, event) =>
          fetch(`${process.env.REACT_APP_API_URL}card/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `bearer ${context.token}`,
            },
            body: JSON.stringify(event.data),
          }).then((res) => res.json()),

        onDone: {
          target: "cardsFetched",
          actions: assign({
            cards: (context, event) => [...context.cards, event.data.card],
          }),
        },
        onError: {
          target: "fetchFailure",
        },
      },
    },
    "sending money": {
      invoke: {
        id: "sendMoneyToSomeone",
        src: (context, event) =>
          fetch(`${process.env.REACT_APP_API_URL}card/transaction`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `bearer ${context.token}`,
            },
            body: JSON.stringify(event.data),
          }).then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("No beneficiary found");
            }
          }),

        onDone: {
          target: "cardsFetched",
          actions: assign({
            cards: (context, event) =>
              context.cards.map((item) => {
                if (item.cardNumber === event.data.card?.cardNumber) {
                  return { ...item, balance: event.data.card.balance };
                }
                return item;
              }),
          }),
        },
        onError: {
          actions: assign({ error: "No beneficiary found" }),
          target: "cardsFetched",
        },
      },
    },
  },
});
