import cur1 from "../assets/1.png";
import cur2 from "../assets/2.png";
import cur6 from "../assets/6.png";
import cur3 from "../assets/3.png";
import cur4 from "../assets/4.png";
import cur5 from "../assets/5.png";
import earth from "../assets/earth.png";
import heart from "../assets/heart.png";
import lock from "../assets/lock.png";
import card from "../assets/card.png";
import coin from "../assets/coin.png";
import { BsArrowRight } from "react-icons/bs";

import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <main className="bg-[#f3f5f7] overflow-hidden pb-20">
        <div className="pt-20 pb-36 relative">
          <motion.div
            className="absolute top-0 left-0  w-1/4 h-full"
            style={{ scale, transformOrigin: "bottom right", x: leftX }}
          >
            <img
              className="absolute bottom-[14px] right-[14px]"
              width={100}
              src={cur1}
              alt="currency"
            />
            <img
              className="absolute bottom-[155px] right-[94px]"
              width={170}
              src={cur2}
              alt="currency"
            />

            <img
              className="absolute top-[15px] right-[4px]"
              width={200}
              src={cur6}
              alt="currency"
            />
            <img
              className="absolute top-[107px] right-[224px]"
              width={100}
              src={cur3}
              alt="currency"
            />
            <img
              className="absolute bottom-[77px] right-[224px]"
              width={150}
              src={cur4}
              alt="currency"
            />
            <img
              className="absolute bottom-[245px] right-[10px]"
              width={60}
              src={cur5}
              alt="currency"
            />
          </motion.div>

          <div className="w-[613px] flex flex-col items-center gap-6 mx-auto">
            <h1 className="font-bold text-7xl text-center">
              Send money made easy - SwiftPay got you covered
            </h1>
            <p className="text-center text-lg ">
              Your money, your way. SwiftPay lets you transfer funds with
              convenience and confidence. Open an account today
            </p>
            <Link
              to={"register"}
              className="px-4 py-2 bg-black rounded-lg text-white hover:bg-black/80"
            >
              Get an account
            </Link>
          </div>

          <motion.div
            style={{ scale, transformOrigin: "bottom left", x: rightX }}
            className="absolute right-0 top-0  w-1/4 h-full"
          >
            <img
              className="absolute bottom-[14px] left-[14px]"
              width={100}
              src={cur1}
              alt="currency"
            />
            <img
              className="absolute bottom-[155px] left-[94px]"
              width={170}
              src={cur2}
              alt="currency"
            />

            <img
              className="absolute top-[15px] left-[4px]"
              width={200}
              src={cur6}
              alt="currency"
            />
            <img
              className="absolute top-[107px] left-[224px]"
              width={100}
              src={cur3}
              alt="currency"
            />
            <img
              className="absolute bottom-[77px] left-[224px]"
              width={150}
              src={cur4}
              alt="currency"
            />
            <img
              className="absolute bottom-[245px] left-[10px]"
              width={60}
              src={cur5}
              alt="currency"
            />
          </motion.div>
        </div>
        <h2 className="mt-16 mb-20 font-bold text-5xl max-w-[846px] text-center mx-auto">
          Send money instantly with our app - easy, fast, and secure
        </h2>
        <div
          onClick={() => navigate("register")}
          className="bg-[#007efc] h-[524px] w-[1000px] mx-auto rounded-3xl relative overflow-hidden group cursor-pointer "
        >
          <h3 className="font-bold text-white text-2xl top-1/2 -translate-y-1/2 left-7 absolute max-w-[500px]">
            Effortlessly send money anywhere in the world with our trusted money
            transfer app
          </h3>

          <img
            width={500}
            className="absolute top-1/2 -right-20 -translate-y-1/2 group-hover:scale-110 transition duration-700"
            src={earth}
            alt="earth"
          />
          <span className="group-hover:bg-blue-800/50 transition duration-700 px-4 py-1 rounded-full flex gap-3 items-center absolute left-7 bottom-8 font-bold text-white text-lg">
            Get an account
            <BsArrowRight size={20} />
          </span>
        </div>
        <div
          onClick={() => navigate("register")}
          className="bg-[#eb5a79] h-[524px] w-[1000px] mx-auto rounded-3xl relative overflow-hidden group cursor-pointer mt-8"
        >
          <h3 className="font-bold text-white text-2xl top-1/2 -translate-y-1/2 left-7 absolute max-w-[500px]">
            Congratulations! You've earned 500 credits just by creating an
            account with us
          </h3>

          <img
            width={500}
            className="absolute top-1/2 -right-20 -translate-y-1/2 group-hover:scale-110 transition duration-700"
            src={coin}
            alt="coin"
          />
          <span className="group-hover:bg-[#007efc] transition duration-700 px-4 py-1 rounded-full flex gap-3 items-center absolute left-7 bottom-8 font-bold text-white text-lg">
            Get an account
            <BsArrowRight size={20} />
          </span>
        </div>
        <div className="w-[1000px] mx-auto flex justify-between mt-8">
          <div
            onClick={() => navigate("register")}
            className="rounded-3xl bg-white w-[490px] h-[580px] relative group cursor-pointer"
          >
            <h3 className="font-bold text-4xl absolute top-10 left-1/2 -translate-x-1/2 w-[400px]">
              Make a difference today - donate with just a few clicks
            </h3>
            <img
              width={250}
              className="group-hover:scale-110 transition duration-700 absolute left-1/2 -translate-x-1/2 bottom-24"
              src={heart}
              alt="heart"
            />
            <span className="group-hover:bg-[#007efc] transition duration-700 px-4 py-1 rounded-full flex gap-3 items-center absolute left-7 bottom-8 font-bold text-white text-lg">
              Donate now
              <BsArrowRight size={20} />
            </span>
          </div>
          <div className="rounded-3xl bg-[#323c46] w-[490px] h-[580px] relative group">
            <h3 className="text-white font-bold text-4xl absolute top-10 left-1/2 -translate-x-1/2 w-[400px]">
              Your security is our top priority - trust us to keep your money
              safe
            </h3>
            <img
              width={250}
              className="group-hover:scale-110 transition duration-700 absolute left-1/2 -translate-x-1/2 bottom-24"
              src={lock}
              alt="lock"
            />
          </div>
        </div>

        <div
          onClick={() => navigate("register")}
          className="mt-8 w-[1000px] mx-auto rounded-3xl h-[524px] bg-[#323c46] relative group cursor-pointer"
        >
          <h3 className="text-white font-bold text-2xl absolute top-1/2 left-7 -translate-y-1/2 w-[400px]">
            Experience financial cool with our stylish credit cards - your
            perfect companion for every transaction
          </h3>
          <img
            width={500}
            className="absolute top-1/2 -translate-y-1/2 right-6 group-hover:scale-110 transition duration-700"
            src={card}
            alt="card"
          />
          <span className="group-hover:bg-[#007efc] transition duration-700 px-4 py-1 rounded-full flex gap-3 items-center absolute left-7 bottom-8 font-bold text-white text-lg">
            Get your card
            <BsArrowRight size={20} />
          </span>
        </div>
        <h2 className="font-bold text-center text-6xl w-[1000px] mx-auto mt-14">
          Join millions of people who trust us with their money every day
        </h2>
        <div className="text-center mt-9">
          <Link
            to={"register"}
            className="px-4 py-2 bg-black rounded-lg text-white hover:bg-black/80"
          >
            Get an account
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
