import { useParams } from "react-router-dom";
import { getAllCountriesIndData } from "../../api/postApi";
import { useTransition, useState, useEffect } from "react";
import { Loader } from "../UI/Loader.jsx";
import { NavLink } from "react-router-dom";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(); // Initialize as null for an object
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getAllCountriesIndData(params.name);
        if (res.status === 200) {
          setCountry(res.data[0]);
        } else {
          throw new Error("Failed to fetch country data");
        }
      } catch (err) {
        setError(err.message);
      }
    });
  }, [params.name]); // Add params.name to the dependency array

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!country) {
    return <h1>No country data available</h1>;
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{country.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
