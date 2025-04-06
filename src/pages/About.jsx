import countryData from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting facts about the countries
        <br />
        We're prouf of our work
      </h2>

      <div className="gradient-cards">
        {countryData.map((country) => {
            const {id, name, capital, population, interestingFact} = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{name}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Interesting Facts:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
