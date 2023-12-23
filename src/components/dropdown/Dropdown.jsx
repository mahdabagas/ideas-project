import { useState } from "react";

const Dropdown = ({ items, activeItem, changePage, shortBy }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="py-1 px-4 rounded-full border flex gap-2 justify-between items-center text-black">
        {!shortBy ? (
          <p>{activeItem}</p>
        ) : activeItem === "published_at" ? (
          "newest"
        ) : (
          "latest"
        )}
        <svg
          className="w-2.5 h-2.5 ms-3 stroke-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      {show ? (
        <div className="z-10 absolute bg-white rounded-lg shadow-lg w-36 left-0">
          <ul className="py-2 text-sm text-gray-700">
            {items.map((item, index) => (
              <li
                key={index}
                className="block px-4 py-2 hover:bg-black/10"
                onClick={() => changePage(item)}
              >
                {!shortBy ? (
                  <p>{item}</p>
                ) : item === "published_at" ? (
                  "newest"
                ) : (
                  "latest"
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
