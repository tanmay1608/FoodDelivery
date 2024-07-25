import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemCards, dummy }) => {
  console.log(dummy);


  return (
    //     <div className=" w-4 h-4 rounded-sm border-2 border-red-500 flex justify-center items-center">
    //     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
    // </div>
    <div>
      {itemCards.map((item) => {
        const {
          name,
          price,
          ratings,
          description,
          imageId,
          isVeg,
          id,
          defaultPrice,
        } = item?.card?.info;

        console.log(ratings.aggregatedRating);

        const { rating, ratingCountV2 } = ratings?.aggregatedRating;

        return (
          <div
            className="flex  justify-between  border-b py-10 px-1 border-black m-2"
            key={id}
          >
            <div className="flex flex-col w-9/12">
              <div
                className={`w-4 h-4 rounded-sm border-2  ${
                  isVeg ? `border-green-600` : `border-red-500`
                } flex justify-center items-center`}
              >
                <div
                  className={`w-2 h-2  ${
                    isVeg ? `bg-green-600` : `bg-red-500`
                  } rounded-full`}
                ></div>
              </div>
              <span className="font-bold">{name}</span>
              <span className="font-semibold ">
                ₹ {price ? price / 100 : defaultPrice / 100}
              </span>
              {rating && (
                <span
                  className={`font-semibold  ${
                    rating < 2
                      ? `text-red-600`
                      : rating < 3
                      ? `text-orange-400`
                      : rating < 4
                      ? `text-green-600`
                      : rating < 5
                      ? `text-green-800`
                      : `text-green-900`
                  } `}
                >
                  ⭐ {rating} ({ratingCountV2})
                </span>
              )}

              <p className="text-gray-500">{description}</p>
            </div>
            <div className="relative bg-sky-200 rounded-[12px] w-[156px] h-[144px]">
              <img
                className="object-center object-conver rounded-[12px] w-[156px] h-[144px] "
                src={CDN_URL + imageId}
                alt="No image"
              ></img>
              <button className="bg-white px-10 py-2 absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rounded-md uppercase font-bold text-green-600 border-2 border-gray-100 shadow-lg">
                Add
              </button>
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
