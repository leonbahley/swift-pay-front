import countries from "./Login/countries.json";
import { CiSearch } from "react-icons/ci";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [isPhoneInputSelected, setIsPhoneInputSelected] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneNumber, setNum] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [countryCode, setCountryCode] = useState({ code: "34", iso: "ES" });
  const [countryQuery, setCountryQuery] = useState("");
  const closeDropdown = (e: MouseEvent) => {
    const targetElement = e.target as HTMLDivElement;
    if (targetElement.id !== "dropdown") {
      setIsDropdownVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let apiUrl;
    let body;
    if (isPhoneInputSelected) {
      body = {
        name,
        phoneNumber: `${countryCode.code}${phoneNumber}`,
        password,
      };
      apiUrl = `${process.env.REACT_APP_API_URL}auth/sign-up/phone`;
    } else {
      body = { name, email, password };
      apiUrl = `${process.env.REACT_APP_API_URL}auth/sign-up/email`;
    }
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", JSON.stringify(data.token));
        navigate("/cards");
      } else if (res.statusText === "Conflict") {
        setErrorMessage("Credentials are taken");
      }
    } catch (error) {
      setErrorMessage("Something went wrong, try again");
    }
  };

  useEffect(() => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email && re.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);

  const isDisabledButton = () => {
    if (!isPhoneInputSelected) {
      if (emailValid && password && name) {
        return false;
      }
    } else {
      if (phoneNumber && password && name) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="relative bg-[#f7f7f7] h-screen">
      <span className="font-bold text-xl absolute left-7 top-7">SwiftPay</span>
      <div className="top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[352px] absolute">
        {errorMessage && (
          <p className="text-red-500 text-center mb-2">{errorMessage}</p>
        )}
        <h1 className="font-bold text-4xl">Sign up to SwiftPay</h1>
        <div className="flex bg-[#edeff2] rounded-lg h-[32px] mt-7 mb-4 p-[2px] gap-1">
          <button
            onClick={() => setIsPhoneInputSelected(true)}
            className={`flex-1 rounded-lg ${
              isPhoneInputSelected
                ? "bg-white hover:bg-white/50"
                : "text-black/50 hover:text-black"
            } text-sm transition`}
          >
            Phone number
          </button>
          <button
            onClick={() => setIsPhoneInputSelected(false)}
            className={` flex-1 rounded-lg ${
              !isPhoneInputSelected
                ? "bg-white hover:bg-white/50"
                : "text-black/50 hover:text-black"
            } text-sm transition  `}
          >
            Email
          </button>
        </div>
        <form onSubmit={handleSubmit} className="relative">
          {isPhoneInputSelected ? (
            <div className="flex gap-2">
              <div
                id="dropdown"
                onClick={() => setIsDropdownVisible(true)}
                className="w-[120px] h-[56px] rounded-xl bg-[#edeff2] hover:bg-[#dfe3e7] flex items-center justify-center transition cursor-pointer "
              >
                <div className="w-[24px] h-[24px] rounded-full overflow-hidden flex items-center justify-center mr-3">
                  <img
                    className="max-w-none "
                    src={`https://flagsapi.com/${countryCode.iso}/flat/48.png`}
                    alt="ES"
                  />
                </div>
                +{countryCode.code}
              </div>
              <input
                value={phoneNumber}
                onChange={(e) => setNum(e.target.value)}
                className="rounded-xl bg-[#edeff2] px-4 w-[224px] focus:bg-[#dfe3e7] hover:bg-[#dfe3e7] transition outline-none"
                placeholder="Phone number"
                type="number"
              />
            </div>
          ) : (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[56px] rounded-xl bg-[#edeff2] px-4 w-full focus:bg-[#dfe3e7] hover:bg-[#dfe3e7] transition outline-none"
              placeholder="Email"
              type="email"
            />
          )}

          <div
            className={`${
              isDropdownVisible
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } absolute top-14 left-0 w-[352px] h-[344px] rounded-xl bg-white mt-2 overflow-x-hidden transition duration-300  z-50`}
          >
            <div className="sticky top-0 left-0 z-10">
              <input
                value={countryQuery}
                onChange={(e) => setCountryQuery(e.target.value)}
                id="dropdown"
                placeholder="Search"
                className="w-full outline-none px-4 py-5 border-b border-b-1 border-[#dfe3e7]"
                type="text"
              />
              <CiSearch
                id="dropdown"
                size={25}
                className="absolute top-[18px] right-[14px] opacity-30"
              />
            </div>

            <ul className=" flex flex-col gap-2 px-1 py-1 ">
              {countries
                .filter(
                  ({ country, code }) =>
                    country
                      .toLowerCase()
                      .includes(countryQuery.toLowerCase()) ||
                    code.includes(countryQuery) ||
                    `+${code}`.includes(countryQuery)
                )
                .map(({ country, code, iso }) => (
                  <li
                    onClick={() => setCountryCode({ code, iso })}
                    key={iso}
                    className="flex items-center hover:bg-[#f7f7f7] transition px-2 py-2 rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center w-[133px]">
                      <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center mr-3">
                        <img
                          className="max-w-none "
                          loading="lazy"
                          src={`https://flagsapi.com/${iso}/flat/64.png`}
                          alt={iso}
                        />
                      </div>

                      <span className="opacity-50">+{code}</span>
                    </div>
                    {country}
                  </li>
                ))}
            </ul>
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 h-[56px] w-full rounded-xl bg-[#edeff2] px-4  focus:bg-[#dfe3e7] hover:bg-[#dfe3e7] transition outline-none"
            placeholder="Password"
            type="text"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 h-[56px] rounded-xl bg-[#edeff2] px-4 w-full focus:bg-[#dfe3e7] hover:bg-[#dfe3e7] transition outline-none"
            placeholder="First and last name"
            type="text"
          />

          <button
            disabled={isDisabledButton()}
            className="disabled:opacity-50 mt-7 bg-[#0666eb] transition text-white w-full h-[48px] rounded-2xl drop-shadow-xl enabled:hover:bg-blue-700 "
          >
            Continue
          </button>
          <p className="text-sm opacity-50 text-center mt-7">
            Have an account?
          </p>
          <Link
            to={"/login"}
            className="flex items-center justify-center mt-4 bg-[#e6f0fd] transition text-blue-700 w-full h-[48px] rounded-2xl hover:bg-[#dfe9f6]"
            type="button"
          >
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
