import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="z-10 border-b border-b-1 border-[#dfe3e7] backdrop-blur-lg bg-[#eaedf0cc]  sticky top-0 left-0 w-screen">
      <div className="max-w-[1000px] flex justify-between mx-auto items-center py-4">
        <span className="text-3xl font-bold">SwiftPay</span>
        <div className="flex gap-4">
          <Link to={"login"} className="px-4 py-1 bg-white rounded-lg ">
            Log in
          </Link>
          <Link
            to={"register"}
            className="px-4 py-1 bg-black rounded-lg text-white hover:bg-black/80"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
