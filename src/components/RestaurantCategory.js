import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ props ,showMenu,setShowIndex}) => {
    
    const handleclick=()=>{
        setShowIndex()

    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-lg">
            {props.title} ({props.items.length})
          </span>
          <span>🔽</span>
        </div>
        { showMenu && <MenuItemList key={props.items?.card?.info?.id} data={props.items} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
