import { useState } from "react";
import Lable from "../lable";
import InputForm from "../inputForm/inputForm";
import ErrorInput from "../../erorInput";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  json,
} from "react-router-dom";
import FormOption from "../../formOptions";
import Account from "../Account/Account";
function SignUp() {
  const [userNameInput, setUserNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmail] = useState("");
  const [passInput, setPssInput] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [clickSignUp, setClickSignUp] = useState(false);
  const [logged, setLogged] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function clickHandle(e) {
    e.preventDefault();
    setClickSignUp(true);
    if (
      userNameInput.length > 6 &&
      phoneInput.length > 10 &&
      emailInput.length > 8 &&
      passInput.length > 8
    ) {
      const newUser = {
        id: crypto.randomUUID(),
        packLevel: "matinAmiri",
        userName: userNameInput,
        phoneNumber: phoneInput,
        email: emailInput,
        password: passInput,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      setLogged(true);
      window.location.assign("http://localhost:3000");
    }
  }
  return (
    <>
      <div className="bg-white rounded-lg mx-auto w-96 p-10 flex flex-col gap-5 my-20 ">
        <h1 className="text-center text-blue-600 text-2xl my-4">عضویت</h1>
        <div className="relative mb-4">
          <Lable
            htmlFor={"signup-input-1"}
            focus={nameFocus}
            input={userNameInput}
            lable={
              nameFocus || userNameInput
                ? " نام "
                : "نام کاربری خود را وارد کنید"
            }
          />
          <InputForm
            id="signup-input-1"
            type={"text"}
            value={userNameInput}
            setDate={setUserNameInput}
            setFocuse={setNameFocus}
          />
          {userNameInput.length < 6 && clickSignUp && (
            <ErrorInput text={"لطفا نام کاربری خود را به درستی وارد کنید"} />
          )}
        </div>
        <div className="relative mb-4">
          <Lable
            htmlFor={"signup-input-2"}
            focus={phoneFocus}
            input={phoneInput}
            lable={
              phoneFocus || phoneInput
                ? " شماره تلفن "
                : "شماره تلفن خود را وارد کنید"
            }
          />
          <InputForm
            id="signup-input-2"
            type={"text"}
            value={phoneInput}
            setDate={setPhoneInput}
            setFocuse={setPhoneFocus}
          />
          {phoneInput.length < 10 && clickSignUp && (
            <ErrorInput text={"لطفا شماره تلفن خود را به درستی وارد کنید"} />
          )}
        </div>
        <div className="relative mb-4">
          <Lable
            htmlFor={"signup-input-3"}
            focus={emailFocus}
            input={emailInput}
            lable={
              emailFocus || emailInput ? " ایمیل " : "ایمیل خود را وارد کنید"
            }
          />
          <InputForm
            id="signup-input-3"
            type={"email"}
            value={emailInput}
            setDate={setEmail}
            setFocuse={setEmailFocus}
          />
          {emailInput.length < 5 && clickSignUp && (
            <ErrorInput text={"لطفا ایمیل خود را به درستی وارد کنید"} />
          )}
        </div>
        <div className="relative mb-4 ">
          <Lable
            htmlFor={"signup-input-4"}
            focus={passFocus}
            input={passInput}
            lable={
              passFocus || passInput ? " رمز عبور " : " رمز عبور را وارد کنید"
            }
            num={60}
          />
          <InputForm
            id="signup-input-4"
            type={showPass ? "text" : "password"}
            value={passInput}
            setDate={setPssInput}
            setFocuse={setPassFocus}
          />
          <span
            onClick={() => setShowPass(!showPass) && setPassFocus(true)}
            className="absolute left-3 top-2 cursor-pointer text-gray-700"
          >
            {showPass ? "🙈" : "👁️"}
          </span>
          {passInput.length < 8 && clickSignUp && (
            <ErrorInput text={"لطفا رمز عبور خود را به درستی وارد کنید"} />
          )}
        </div>
        <Link to="/login">
          <FormOption text={"ایا قبلا ثبت نام کرده اید؟  "} />
        </Link>
        <button
          onClick={clickHandle}
          className="border bg-blue-500 p-3 rounded-md text-white text-md"
        >
          ثبت نام
        </button>
      </div>
    </>
  );
}

export default SignUp;
