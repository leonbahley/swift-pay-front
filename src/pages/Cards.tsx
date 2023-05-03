import FlippableCard from "../components/FlippableCard/FlippableCard";

const Cards = () => {
  return (
    <div className="flex flex-col items-center bg-[#f3f5f7] h-screen">
      <div className="flex gap-8 mt-20">
        <button className="px-4 py-1 font-bold">Get USD card</button>
        <button className="px-4 py-1  font-bold">Get EUR card</button>
      </div>
      <p className="mt-10">To see CVV code click a card</p>
      <p className="mb-10">Click a card number to copy</p>
      <div className="flex gap-20 ">
        <FlippableCard
          gradient={"bg-gradient-to-r from-blue-900 to-blue-300"}
        />
        <FlippableCard
          gradient={"bg-gradient-to-r from-purple-800 to-blue-800"}
        />
      </div>
    </div>
  );
};

export default Cards;
