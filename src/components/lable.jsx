function Lable({ focus, input, lable, htmlFor, num }) {
  return (
    <label
      htmlFor={htmlFor}
      className={` text-sm absolute  transition-all duration-200 bg-white  ${
        focus || input
          ? "-top-3 right-4 text-sm text-blue-500 "
          : `top-2.5 right-4 text-gray-700 `
      }`}
    >
      {lable}
    </label>
  );
}

export default Lable;
