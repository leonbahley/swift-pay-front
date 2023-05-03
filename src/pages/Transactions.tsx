const Transactions = () => {
  return (
    <div className=" bg-[#f3f5f7] h-screen">
      <div className="flex pt-8 justify-center gap-20">
        <div className="w-[550px]  flex flex-col">
          <div className="flex items-center">
            <span className="text-7xl">$ 500.00</span>
            <button className="ml-10 font-bold bg-white px-4 py-2 rounded-xl">
              USD card
            </button>
            <button className="ml-8 font-bold">EUR card</button>
          </div>
          <ul className="mt-4">
            <li className="bg-white rounded-xl flex flex-col p-2">
              <span>
                <span className="font-bold">Date:</span> 23.23.23{" "}
              </span>
              <span>
                <span className="font-bold">Beneficiary:</span> 3434 3434 3434
                4343{" "}
              </span>
              <span>
                <span className="font-bold">Amount: </span> 34${" "}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl">Send money</h2>
          <form className="bg-white rounded-xl w-[271px] h-[211px] py-3 px-2 mt-5 flex flex-col">
            <input
              className="bg-[#f3f5f7] w-full px-2 py-2 rounded-xl outline-none"
              type="number"
              placeholder="Benificiary card number"
            />
            <input
              placeholder="Amount"
              className="bg-[#f3f5f7] w-full px-2 py-2 rounded-xl mt-3 outline-none"
              type="number"
            />
            <button
              disabled
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
