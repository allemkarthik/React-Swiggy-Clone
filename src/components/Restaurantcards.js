import { CDN_URL } from "../utils/constants";
import { restro_imges } from "../utils/constants";
const Restaurantcards = ({ props }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    locality,
    sla,
    areaName,
    cuisines,
    aggregatedDiscountInfoV3,
  } = props.info;

  return (
    <div className="m-4 p-4 border bg-gray-200 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={restro_imges + cloudinaryImageId}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = "data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'>\
      <rect width='100%' height='100%' fill='%23f3f4f6'/>\
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' \
        font-size='16' fill='%239ca3af'>🍽️ Image not available</text>\
    </svg>";
        }}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <h6>{avgRating}</h6>
      <h6>{costForTwo}</h6>
      <h5>{locality}</h5>
      <h5>{sla.slaString}</h5>
      <h5>Cuisines: {cuisines.join(",")}</h5>
      <h5>{areaName}</h5>
    </div>
  );
};

// higher order component
export const discountComponent=(Restaurantcards)=>{
  return ({props})=>{
    const discount = props.info.aggregatedDiscountInfoV3?.header;
    
    return(
      <div>
        <label className="absolute bg-black text-white px-2 mx-2 rounded-lg">{discount}</label>
        <Restaurantcards props={props}/>
      </div>
    );
  }
}

export default Restaurantcards;
