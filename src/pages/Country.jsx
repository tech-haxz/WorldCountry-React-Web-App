import { useEffect, useTransition, useState } from "react";
import { getAllCountries } from "../api/postApi";
import { CountryCard } from "../components/Layout/CountryCard.jsx";
import { Loader } from "../components/UI/Loader.jsx";
import { SearchFilter } from "../components/UI/SearchFilter.jsx";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getAllCountries();
      // console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  // Function to filter countries based on search and filter criteria
  // This function checks if the country name includes the search term and if the region matches the filter

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else if (filter !== "all") {
      return country.region === filter;
    } else {
      return true;
    }
  };

  // Filter countries based on search and filter criteria
  const filterCountries = countries.filter((country) => searchCountry(country));

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </section>
  );
};
