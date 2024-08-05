import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function First() {
  return (
    <div className="w-2/5 bg-white p-8 mx-auto flex flex-col  items-center  content-around my-48 rounded-lg gap-10">
      <h2 className="text-3xl text-center p-3 ">Wellcome to first Task</h2>
      <h3 className="text-lg text-red-600  ">Matin Amiri</h3>
      <Link to="/login">
        {" "}
        <button className="border-1 bg-blue-600 p-3 text-center   text-white rounded-md  hover:opacity-50  ">
          Go to Log In /Sign Up Page
        </button>
      </Link>
    </div>
  );
}

export default First;
