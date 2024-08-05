import React, { useEffect, useState } from "react";

export default function Account() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const user = JSON.parse(data);
      setUserName(user.userName);
    }
  }, []);
  function logOutHandler(e) {
    localStorage.removeItem("user");

    window.location.reload();
  }
  return (
    <div className="w-3/5 bg-white mx-auto flex flex-col items-center  content-center rounde-md my-40 p-10 gap-10">
      <h2 className=" text-center text-xl text-blue-600 ">
        سلام {userName} به صفحه خودتان خوش آمدید
      </h2>
      <button
        onClick={logOutHandler}
        className="border p-3 bg-red-700 text-center text-white  rounded"
      >
        خارج شدن از حساب
      </button>
    </div>
  );
}
