import { useState } from "react";

import heart from "../assets/heart.png";

const Donate = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleDonate = () => {
    setIsMessageVisible(true);
    setTimeout(() => {
      setIsMessageVisible(false);
    }, 1000);
  };

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
          <div>
            <div className="flex gap-4">
              <input
                className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                type="number"
                placeholder="Amount"
              />
              <button onClick={handleDonate}>Donate with USD card</button>
            </div>
            <div className="flex gap-4 mt-4">
              <input
                className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                type="number"
                placeholder="Amount"
              />
              <button>Donate with USD card</button>
            </div>
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
          <div>
            <div className="flex gap-4">
              <input
                className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                type="number"
                placeholder="Amount"
              />
              <button onClick={handleDonate}>Donate with USD card</button>
            </div>
            <div className="flex gap-4 mt-4">
              <input
                className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                type="number"
                placeholder="Amount"
              />
              <button>Donate with USD card</button>
            </div>
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
          <div>
            <div className="flex gap-4">
              <input
                className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                type="number"
                placeholder="Amount"
              />
              <button onClick={handleDonate}>Donate with USD card</button>
            </div>
            <div className="flex gap-4 mt-4">
              <input
                className="bg-[#f3f5f7] rounded-xl outline-none px-2 py-3"
                type="number"
                placeholder="Amount"
              />
              <button>Donate with USD card</button>
            </div>
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
