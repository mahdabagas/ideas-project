// import Assets
import { useEffect, useRef } from "react";

const Banner = () => {
  const parallaxRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${offset * 0.5}px) `;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[32rem] mx-auto relative ">
        <div className="text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-white">
          <h1 className="font-medium text-5xl">Ideas</h1>
          <h2>Where All Our great things begin</h2>
        </div>
        <div
          className="w-full h-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)" }}
        >
          <img
            src="./src/assets/banner-image.jpg"
            alt="banner"
            className="w-full h-full object-cover object-center brightness-50"
            ref={parallaxRef}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
