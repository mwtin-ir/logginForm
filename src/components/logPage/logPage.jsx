import { useEffect, useState } from "react";
import InputForm from "../inputForm/inputForm";
import ErrorInput from "../../erorInput";
import Lable from "../lable";
import FormOption from "../../formOptions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function LogPage() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPasFocus] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPasInput] = useState("");
  const [clickSubmit, setClickSbmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailApi, setEmailApi] = useState("");
  const [passApi, setPassApi] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setEmailApi(user?.email);
    setPassApi(user?.password);
  }, []);

  function setPassword(pass) {
    setPasInput(pass);
  }

  function setEmail(pass) {
    setEmailInput(pass);
  }
  function submitHandler(e) {
    e.preventDefault();
    setClickSbmit(true);
    if (clickSubmit && emailInput?.length > 6  && passInput?.length > 8) {
      if (emailApi === emailInput && passApi === passInput) {
        window.location.assign("http://localhost:3000");
      } else {
        alert("شما ثبت نام نکرده اید");
      }
    }
  }

  return (
    <>
      <div className="w-80 bg-white rounded-md flex flex-col items-center content-center p-10 mx-auto my-40 gap-4">
        <h1 className="text-blue-700 text-lg ">ورود با ایمیل</h1>
        <div className="relative mb-4">
          <Lable
            htmlFor={"text-input-1"}
            focus={emailFocus}
            input={emailInput}
            lable={
              emailFocus || emailInput ? " ایمیل" : "ایمیل خود را وارد کنید"
            }
          />
          <InputForm
            id="text-input-1"
            type={"text"}
            value={emailInput}
            setDate={setEmail}
            setFocuse={setEmailFocus}
          />
          {emailInput.length < 5 && clickSubmit && (
            <ErrorInput text={"لطفا ایمیل خود را به درستی وارد کنید"} />
          )}
        </div>
        <div className="relative mb-4">
          <Lable
            htmlFor={"text-input-2"}
            focus={passFocus}
            input={passInput}
            lable={passFocus || passInput ? "رمز" : "رمز خود را وارد کنید"}
          />
          <InputForm
            id="text-input-2"
            type={showPassword ? "text" : "password"}
            value={passInput}
            setDate={setPassword}
            setFocuse={setPasFocus}
          />
          <span
            onClick={() => setShowPassword(!showPassword) && setPasFocus(true)}
            className="absolute left-3 top-2 cursor-pointer text-gray-700"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
          {passInput?.length < 5 && clickSubmit && (
            <ErrorInput text={"لطفا رمز خود را به درستی وارد کنید"} />
          )}
        </div>
        <div className="flex flex-col gap-2 items-start right-0">
          <Link to="/singup">
            <FormOption text={"ایا حساب کاربری ندارید؟؟"} />
          </Link>
          <FormOption text={"رمز عبور خود را فراموش کرده اید؟؟"} />
        </div>
        <button
          onClick={submitHandler}
          type="submit"
          className="border bg-blue-500 p-3 rounded-md text-white text-md"
        >
          ورورد
        </button>
      </div>
    </>
  );
}

export default LogPage;
