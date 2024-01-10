import React, { useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState([
    "Play Cricket",
    "Play Video Game",
    "Read Book",
  ]);
  return (
    <div>
      <ul className="mx-20 mt-10 flex flex-col gap-3">
        {state.map((data, index) => (
          <li key={index} className="flex justify-between">
            <div className="flex gap-2">
              <span>{index + 1}</span>
              <span>{data}</span>
            </div>

            <button
              onClick={() =>
                setState((prev) => prev.filter((ele) => ele !== data))
              }
              className="border px-3 rounded-xl bg-black text-white hover:text-black hover:bg-white duration-200 border-black">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactForm;
