import { useState } from "react";

function InputForm({ type, placeholder, setFocuse, setDate, id }) {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className=" w-full  p-2 border border-black rounded-md focus:outline-blue-700 "
        onChange={(e) => setDate(e.target.value)}
        onFocus={() => setFocuse(true)}
        onBlur={() => setFocuse(false)}
      />
    </>
  );
}

export default InputForm;
