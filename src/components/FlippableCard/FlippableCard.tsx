import "./FlippableCard.css";
import Card from "../Card/Card";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const FlippableCard = ({
  gradient,
  data,
}: {
  gradient: string;
  data: { type: string; cardNumber: string; ownerName: string; cvv: number };
}) => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          data={data}
          gradient={gradient}
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
