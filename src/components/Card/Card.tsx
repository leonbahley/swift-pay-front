import "./Card.css";
import "./flip-transitions.css";
import visa from "../../assets/visa.png";

function Card({
  onClick,
  gradient,
}: {
  onClick: () => void;
  gradient: string;
}) {
  // function generateRandomNumber() {
  //   const firstFour = Math.floor(1000 + Math.random() * 9000).toString();
  //   const secondFour = Math.floor(1000 + Math.random() * 9000).toString();
  //   const thirdFour = Math.floor(1000 + Math.random() * 9000).toString();
  //   const fourthFour = Math.floor(1000 + Math.random() * 9000).toString();
  //   return `${firstFour}-${secondFour}-${thirdFour}-${fourthFour}`;
  // }
  // console.log("first", generateRandomNumber());
  return (
    <div className="card" onClick={onClick}>
      <div className={`card-back ${gradient} rounded-[20px]`}>
        <div className="absolute top-[194px] left-[60px] flex gap-3">
          CVV <span>453</span>
        </div>
        <div className="w-full h-10 bg-black top-1/2 -translate-y-1/2 absolute"></div>
        <img
          width={80}
          className="absolute bottom-3 right-5"
          src={visa}
          alt="visa"
        />
      </div>
      <div className={`card-front ${gradient} rounded-[20px]`}>
        <span className="absolute top-4 right-6 font-bold text-2xl">USD</span>
        <div
          onClick={() => {
            navigator.clipboard.writeText("dkdkdkdkdkd");
          }}
          className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-10 text-2xl"
        >
          <span>2342</span>
          <span>2342</span>
          <span>2342</span>
          <span>2342</span>
        </div>
        <p className="font-bold text-lg absolute bottom-5 left-6">JOF SLDKSD</p>
        <img
          width={80}
          className="absolute bottom-3 right-5"
          src={visa}
          alt="visa"
        />
      </div>
    </div>
  );
}

export default Card;
