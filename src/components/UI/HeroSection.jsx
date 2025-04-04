import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const HeroSection = () => {
  return (
    <main className="hero-section main lg:min-h-[80vh]">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            SwiftCountries – Explore the World at Lightning Speed
          </h1>
          <p className="paragraph">
            Discover countries faster than ever with SwiftCountries – a
            blazing-fast web app that delivers essential country data in a
            clean, intuitive interface.
          </p>
        <NavLink to="/country">
        <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="./images/logo.webp"
            alt="hero image"
            onError={(e) => {
              e.target.src = "./images/favicon.png";
            }}
          />
        </div>
      </div>
    </main>
  );
};
