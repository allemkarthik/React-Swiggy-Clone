import { useEffect, useState } from "react";
import { Hyd_api } from "./constants";

const useRestroCards = () => {
  const [listofrestro, setlistofrestro] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(Hyd_api);
    const json = await response.json();

    // Get all restaurant arrays from all cards
    const allRestros = json.data.data.cards
      .map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      .filter(Boolean) // remove undefined
      .flat(); // flatten to single array

    setlistofrestro(allRestros);
    //   setfilteredrestro(allRestros);
  };

  return listofrestro;
};

export default useRestroCards;
