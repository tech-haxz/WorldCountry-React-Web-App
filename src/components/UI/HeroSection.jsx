import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world with us, One country at a time.
          </h1>
          <p className="paragraph">
            We provide the most comprehensive information on countries around
            the world. From their population, to their languages, to their
            currencies, we have it all.
          </p>
          <NavLink to={"/country"} className="btn btn-primary">
            <button>
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="World is beautiful"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
