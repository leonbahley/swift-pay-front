import { useMachine } from "@xstate/react";
import FlippableCard from "../components/FlippableCard/FlippableCard";
import { machine } from "../machines/cardsMachine";

const Cards = () => {
  const [state, send] = useMachine(machine);

  return (
    <div className="flex flex-col items-center bg-[#f3f5f7] h-screen relative">
      {state.matches("fetchFailure") && (
        <p className="text-red-600 text-lg pt-5">{state.context.error}</p>
      )}
      <div className="flex gap-8 mt-20 ">
        {!state.context.cards.find((item) => item.type === "usd") && (
          <button
            onClick={() => send({ type: "getEURCard", data: { type: "usd" } })}
            className="px-4 py-1 font-bold"
          >
            Get USD card
          </button>
        )}
        {!state.context.cards.find((item) => item.type === "eur") && (
          <button
            onClick={() => send({ type: "getEURCard", data: { type: "eur" } })}
            className="px-4 py-1  font-bold"
          >
            Get EUR card
          </button>
        )}
      </div>
      <p className="mt-10">To see CVV code click a card</p>
      <p className="mb-10">Click a card number to copy</p>
      <div className="flex gap-20 ">
        {state.context.cards.map(({ type, cardNumber, ownerName, cvv }) => (
          <FlippableCard
            key={type}
            data={{ type, cardNumber, ownerName, cvv }}
            gradient={
              type === "eur"
                ? "bg-gradient-to-r from-blue-900 to-blue-300"
                : "bg-gradient-to-r from-yellow-400 to-red-500"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
