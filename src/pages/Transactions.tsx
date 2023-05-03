const Transactions = () => {
  return (
    <div className=" bg-[#f3f5f7] h-screen">
      <div className="w-[1000px] mx-auto  pt-8 flex flex-col">
        <div className="flex items-center">
          <span className="text-7xl">$ 500.00</span>
          <button className="ml-10 font-bold bg-white px-4 py-2 rounded-xl">
            USD card
          </button>
          <button className="ml-8 font-bold">EUR card</button>
        </div>
        <ul>
          <li className="bg-white rounded-xl flex flex-col p-2">
            <span>Date: 23.23.23</span>
            <span>Beneficiary: 3434 3434 3434 4343</span>
            <span>Amount: 34$</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
