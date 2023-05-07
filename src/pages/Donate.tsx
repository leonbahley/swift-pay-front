import { useEffect, useState } from "react";
import { useMachine } from "@xstate/react";

import heart from "../assets/heart.png";
import { machine } from "../machines/cardsMachine";

const Donate = () => {
  const [state, send] = useMachine(machine);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [firstFundUSD, setFirstFundUSD] = useState<number>(0);
  const [firstFundEUR, setFirstFundEUR] = useState<number>(0);
  const [secondFundUSD, setSecondFundUSD] = useState<number>(0);
  const [secondFundEUR, setSecondFundEUR] = useState<number>(0);
  const [thirdFundUSD, setThirdFundUSD] = useState<number>(0);
  const [thirdFundEUR, setThirdFundEUR] = useState<number>(0);
  const [USDCard, setUSDCard] = useState("");
  const [EURCard, setEURCard] = useState("");

  const handleDonate = (name: string, card: string, amount: number) => {
    send({
      type: "sendMoney",
      data: {
        beneficiary: name,
        sender: card,
        amount,
        donate: true,
      },
    });
    setIsMessageVisible(true);
    setTimeout(() => {
      setIsMessageVisible(false);
    }, 1000);
  };

  useEffect(() => {
    const USDIndex = state.context.cards.findIndex(
      (item) => item.type === "usd"
    );
    setUSDCard(state.context.cards[USDIndex]?.cardNumber);
    const EURIndex = state.context.cards.findIndex(
      (item) => item.type === "eur"
    );
    setEURCard(state.context.cards[EURIndex]?.cardNumber);
  }, [state.context.cards]);

  return (
    <div className="bg-[#f3f5f7] h-screen">
      <div className="flex justify-center  gap-10 pt-24 relative">
        <div className="group w-[393px] h-[408px] rounded-2xl bg-white relative px-3 py-2 flex flex-col justify-between">
          <h2 className="font-bold text-xl">The Against Malaria Foundation</h2>
          <img
            className="group-hover:scale-125 transition absolute top-20 left-1/2 -translate-x-1/2 "
            width={150}
            src={heart}
            alt="heart"
          />
          <div className="flex flex-col gap-3">
            {state.context.cards.findIndex((item) => item.type === "usd") !==
            -1 ? (
              <div className="flex gap-4 ">
                <input
                  value={firstFundUSD}
                  onChange={(e) => setFirstFundUSD(Number(e.target.value))}
                  className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                  type="number"
                  placeholder="Amount"
                />
                <button
                  onClick={() =>
                    handleDonate(
                      "The Against Malaria Foundation",
                      USDCard,
                      firstFundUSD
                    )
                  }
                >
                  Donate with USD card
                </button>
              </div>
            ) : (
              <span>To donate with USD get a card</span>
            )}
            {state.context.cards.findIndex((item) => item.type === "eur") !==
            -1 ? (
              <div className="flex gap-4 ">
                <input
                  value={firstFundEUR}
                  onChange={(e) => setFirstFundEUR(Number(e.target.value))}
                  className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                  type="number"
                  placeholder="Amount"
                />
                <button
                  onClick={() =>
                    handleDonate(
                      "The Against Malaria Foundation",
                      EURCard,
                      firstFundEUR
                    )
                  }
                >
                  Donate with EUR card
                </button>
              </div>
            ) : (
              <span>To donate with EUR get a card</span>
            )}
          </div>
        </div>
        <div className="group w-[393px] h-[408px] rounded-2xl bg-white relative px-3 py-2 flex flex-col justify-between">
          <h2 className="font-bold text-xl">GiveDirectly</h2>
          <img
            className="group-hover:scale-125 transition absolute top-20 left-1/2 -translate-x-1/2 "
            width={150}
            src={heart}
            alt="heart"
          />
          <div className="flex flex-col gap-3">
            {state.context.cards.findIndex((item) => item.type === "usd") !==
            -1 ? (
              <div className="flex gap-4 ">
                <input
                  value={secondFundUSD}
                  onChange={(e) => setSecondFundUSD(Number(e.target.value))}
                  className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                  type="number"
                  placeholder="Amount"
                />
                <button
                  onClick={() =>
                    handleDonate("GiveDirectly", USDCard, secondFundUSD)
                  }
                >
                  Donate with USD card
                </button>
              </div>
            ) : (
              <span>To donate with USD get a card</span>
            )}
            {state.context.cards.findIndex((item) => item.type === "eur") !==
            -1 ? (
              <div className="flex gap-4 ">
                <input
                  value={secondFundEUR}
                  onChange={(e) => setSecondFundEUR(Number(e.target.value))}
                  className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                  type="number"
                  placeholder="Amount"
                />
                <button
                  onClick={() =>
                    handleDonate("GiveDirectly", EURCard, secondFundEUR)
                  }
                >
                  Donate with EUR card
                </button>
              </div>
            ) : (
              <span>To donate with EUR get a card</span>
            )}
          </div>
        </div>
        <div className="group w-[393px] h-[408px] rounded-2xl bg-white relative px-3 py-2 flex flex-col justify-between">
          <h2 className="font-bold text-xl">
            The Against Animal Cruelty Society
          </h2>
          <img
            className="group-hover:scale-125 transition absolute top-20 left-1/2 -translate-x-1/2 "
            width={150}
            src={heart}
            alt="heart"
          />
          <div className="flex flex-col gap-3">
            {state.context.cards.findIndex((item) => item.type === "usd") !==
            -1 ? (
              <div className="flex gap-4 ">
                <input
                  value={thirdFundUSD}
                  onChange={(e) => setThirdFundUSD(Number(e.target.value))}
                  className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                  type="number"
                  placeholder="Amount"
                />
                <button
                  onClick={() =>
                    handleDonate(
                      "The Against Animal Cruelty Society",
                      USDCard,
                      thirdFundUSD
                    )
                  }
                >
                  Donate with USD card
                </button>
              </div>
            ) : (
              <span>To donate with USD get a card</span>
            )}
            {state.context.cards.findIndex((item) => item.type === "eur") !==
            -1 ? (
              <div className="flex gap-4 ">
                <input
                  value={thirdFundEUR}
                  onChange={(e) => setThirdFundEUR(Number(e.target.value))}
                  className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                  type="number"
                  placeholder="Amount"
                />
                <button
                  onClick={() =>
                    handleDonate(
                      "The Against Animal Cruelty Society",
                      EURCard,
                      thirdFundEUR
                    )
                  }
                >
                  Donate with EUR card
                </button>
              </div>
            ) : (
              <span>To donate with EUR get a card</span>
            )}
          </div>
        </div>
        <p
          className={`${
            isMessageVisible ? "opacity-100" : "opacity-0"
          } transition text-center mt-20 text-xl font-bold absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-none`}
        >
          Donation completed
        </p>
      </div>
    </div>
  );
};

export default Donate;
