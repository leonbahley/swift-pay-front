import "./Card.css";
import "./flip-transitions.css";
import visa from "../../assets/visa.png";

const Card = ({
  onClick,
  gradient,
  data,
}: {
  onClick: () => void;
  gradient: string;
  data: { cardNumber: string; type: string; ownerName: string; cvv: number };
}) => {
  const copyCard = (num: string) => {
    navigator.clipboard.writeText(num);
  };
  return (
    <div className="card" onClick={onClick}>
      <div className={`card-back ${gradient} rounded-[20px]`}>
        <div className="absolute top-[194px] left-[60px] flex gap-3">
          CVV <span>{data.cvv}</span>
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
        <span className="absolute top-4 right-6 font-bold text-2xl">
          {data.type.toUpperCase()}
        </span>
        <div
          onClick={() => copyCard(data.cardNumber)}
          className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-10 text-2xl"
        >
          <span>{data.cardNumber.substring(0, 4)}</span>
          <span>{data.cardNumber.substring(4, 8)}</span>
          <span>{data.cardNumber.substring(8, 12)}</span>
          <span>{data.cardNumber.substring(12, 16)}</span>
        </div>
        <p className="font-bold text-lg absolute bottom-5 left-6">
          {data.ownerName.toUpperCase()}
        </p>
        <img
          width={80}
          className="absolute bottom-3 right-5"
          src={visa}
          alt="visa"
        />
      </div>
    </div>
  );
};

export default Card;
