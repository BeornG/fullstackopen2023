import countryService from "./services/countries";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Countrylist from "./components/Countrylist";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countryService
      .getAll("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.log("Error retrieving countries:", error);
      });
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />{/* this is the filter input field */}
      <br />
      <Countrylist
        countries={countries}
        filter={filter}
        setFilter={setFilter}
      />{/* this is the list of countries */}
    </div>
  );
}

export default App;
