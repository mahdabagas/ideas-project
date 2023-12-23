import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";

const links = [
  {
    name: "Work",
    to: "/work",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Service",
    to: "/service",
  },
  {
    name: "Ideas",
    to: "/ideas",
  },
  {
    name: "Careers",
    to: "/careers",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(true);
  const [atTop, setAtTop] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolling(scrollTop < lastScrollTop.current);
    setAtTop(scrollTop < 240);
    lastScrollTop.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lastScrollTop = useRef(0);

  return (
    <>
      <nav
        className={`w-full flex justify-between px-24 py-4 fixed top-0 left-0 z-50 transition duration-300 ${
          scrolling
            ? atTop
              ? "bg-orange"
              : "bg-orange/40"
            : "-translate-y-24 transition"
        } `}
      >
        <img src={logo} alt="logo" className="w-28" />
        <ul className="flex gap-8 items-center text-white">
          {links.map((link, index) => (
            <li key={index} className="relative">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "block after:content-[''] after:block after:border-b-4 after:h-3 after:w-full after:absolute after:z-10"
                    : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
