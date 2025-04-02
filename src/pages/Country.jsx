import { useEffect, useState, useTransition } from "react";
import Loading from "../components/UI/Loading";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  const searchCountry = (country) =>
    search &&
    country.name.common &&
    country.name.common.toLowerCase().includes(search.toLowerCase());

  const filterRegion = (country) =>
    filter !== "All" ? country.region === filter : true;

  const filteredCountries = countries.filter((country) => {
    if (search === "" && filter === "All") {
      return true;
    }
    if (search || filter !== "All") {
      return searchCountry(country) && filterRegion(country);
    }
    return true;
  });

  if (isPending) return <Loading />;
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
      <ul className="grid lg:grid-cols-4 sm:grid-cols-2">
        {filteredCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
