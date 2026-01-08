import { useEffect, useState } from "react";
import Restaurantcards, { discountComponent } from "./Restaurantcards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestroCards from "../utils/useRestroCards";

const Body = () => {
  const listofrestro = useRestroCards();

  const [searchtext, setsearchtext] = useState("");
  const [filteredrestro, setfilteredrestro] = useState([]);
  const DiscountComponent = discountComponent(Restaurantcards);

  useEffect(() => {
    setfilteredrestro(listofrestro);
  }, [listofrestro]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>
        looks like you're offline !! please check your internet connection.
      </h1>
    );

  return listofrestro.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search_container flex items-center">
        <div className="p-2 m-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredlist = listofrestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredrestro(filteredlist);
            }}
          >
            search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredlist = listofrestro.filter(
                (res) => res.info.avgRating > 4.5
              );
              setfilteredrestro(filteredlist);
            }}
          >
            Top rated resturants
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 px-16 mx-16">
        {filteredrestro.map((res, index) => (
          <Link
            key={`${res.info.id}-${index}`}
            to={"/resturants/" + res.info.id}
          >
            {res.info.aggregatedDiscountInfoV3.header>="30%" ? (
              <DiscountComponent props={res} />
            ) : (
              <Restaurantcards props={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
