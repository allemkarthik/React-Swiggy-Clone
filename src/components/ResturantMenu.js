import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const resinfo = useRestroMenu(resid);
  const [showIndex, setShowIndex] = useState(null);

  if (!resinfo) return <Shimmer />;

  const info = resinfo?.data?.cards?.[2]?.card?.card?.info;
  if (!info) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = info;

  const regularcard = resinfo?.data?.cards?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = regularcard
    ?.filter((c) => c?.card?.card?.itemCards)
    ?.map((c) => ({
      title: c.card.card.title,
      items: c.card.card.itemCards,
    }));

  if (!categories) return <Shimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      {categories.map((cat, index) => (
        <RestaurantCategory
          key={cat.title}
          props={cat}
          showMenu={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index == showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
