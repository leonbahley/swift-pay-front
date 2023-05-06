import { useEffect, useState } from "react";
import { machine } from "../machines/cardsMachine";
import { useMachine } from "@xstate/react";

interface ITransaction {
  type: string;
  amount: number;
  beneficiary: string;
  formattedDate: string;
  sender: string;
}

const Transactions = () => {
  const [beneficiary, setBeneficiary] = useState("");
  const [amount, setAmount] = useState(0);

  const [isUSDCardSelected, setIsUSDCardSelected] = useState(true);
  const [USDCard, setUSDCard] = useState<{
    balance: number;
    cardNumber: string;
    transactions: [];
    owner: string;
  }>();
  const [EURCard, setEURCard] = useState<{
    balance: number;
    cardNumber: string;
    transactions: [];
    owner: string;
  }>();
  const [state, send] = useMachine(machine);

  useEffect(() => {
    const USDIndex = state.context.cards.findIndex(
      (item) => item.type === "usd"
    );
    setUSDCard(state.context.cards[USDIndex]);
    const EURIndex = state.context.cards.findIndex(
      (item) => item.type === "eur"
    );
    setEURCard(state.context.cards[EURIndex]);
  }, [state.context.cards]);

  const sendMoney = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send({
      type: "sendMoney",
      data: {
        beneficiary,
        sender: (isUSDCardSelected
          ? USDCard?.cardNumber
          : EURCard?.cardNumber)!,
        amount,
        donate: false,
      },
    });
  };

  return (
    <div className=" bg-[#f3f5f7] min-h-screen">
      {JSON.stringify(
        state.context.cards.filter((item) => item.type === "usd")[0] &&
          state.context.cards.filter((item) => item.type === "usd")[0]
            .transactions
      )}

      <div className="flex pt-8 justify-center gap-20 relative">
        <p className="text-red-600 absolute left-1/2 -translate-x-1/2 top-0 text-lg">
          {state.context.error}
        </p>
        <div className="w-[580px]  flex flex-col ">
          <div className="flex items-center">
            <span className="text-7xl">
              {isUSDCardSelected ? "$" : "\u20AC"}{" "}
              {isUSDCardSelected ? USDCard?.balance : EURCard?.balance}
            </span>
            <button
              onClick={() => setIsUSDCardSelected(true)}
              className={`ml-10 font-bold ${
                isUSDCardSelected && "bg-white"
              }  px-4 py-2 rounded-xl`}
            >
              USD card
            </button>
            <button
              onClick={() => setIsUSDCardSelected(false)}
              className={`ml-8 font-bold ${
                !isUSDCardSelected && "bg-white"
              }  px-4 py-2 rounded-xl`}
            >
              EUR card
            </button>
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            {isUSDCardSelected
              ? state.context.cards.filter((item) => item.type === "usd")[0] &&
                state.context.cards
                  .filter((item) => item.type === "usd")[0]
                  .transactions.map(
                    (
                      {
                        formattedDate,
                        type,
                        beneficiary,
                        sender,
                        amount,
                      }: ITransaction,
                      i: number
                    ) => (
                      <li
                        key={i}
                        className="bg-white rounded-xl flex flex-col p-2"
                      >
                        <span>
                          <span className="font-bold">Date:</span>{" "}
                          {formattedDate}{" "}
                        </span>
                        <span>
                          <span className="font-bold">
                            {type === "send" ? "Beneficiary:" : "Emitent:"}
                          </span>{" "}
                          {type === "send" ? beneficiary : sender}{" "}
                        </span>
                        <span>
                          <span className="font-bold">Amount: </span>
                          {type === "send" && "-"} {amount}{" "}
                        </span>
                      </li>
                    )
                  )
              : state.context.cards
                  .filter((item) => item.type === "eur")[0]
                  .transactions.map(
                    (
                      {
                        formattedDate,
                        type,
                        beneficiary,
                        amount,
                        sender,
                      }: ITransaction,
                      i: number
                    ) => (
                      <li
                        key={i}
                        className="bg-white rounded-xl flex flex-col p-2"
                      >
                        <span>
                          <span className="font-bold">Date:</span>{" "}
                          {formattedDate}{" "}
                        </span>
                        <span>
                          <span className="font-bold">
                            {type === "send" ? "Beneficiary:" : "Emitent:"}
                          </span>{" "}
                          {type === "send" ? beneficiary : sender}{" "}
                        </span>
                        <span>
                          <span className="font-bold">Amount: </span>
                          {type} {amount}{" "}
                        </span>
                      </li>
                    )
                  )}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl">Send money</h2>
          <form
            onSubmit={sendMoney}
            className="bg-white rounded-xl w-[271px] h-[211px] py-3 px-2 mt-5 flex flex-col"
          >
            <input
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
              className="bg-[#f3f5f7] w-full px-2 py-2 rounded-xl outline-none"
              type="number"
              placeholder="Benificiary card number"
            />
            <input
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Amount"
              className="bg-[#f3f5f7] w-full px-2 py-2 rounded-xl mt-3 outline-none"
              type="number"
            />
            <button
              disabled={!amount || !beneficiary}
              className="mt-auto rounded-xl bg-[#007efc] w-full text-white py-2 disabled:bg-[#007efc]/50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
// {"type":"send","amount":50,"beneficiary":"7941949511461444","formattedDate":"06-05-2023"}
