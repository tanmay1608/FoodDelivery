import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Store/cartSlice";

const Cart = () => {
  //subscribing to store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center m-3 ">
      <div className="flex flex-col items-center bg-gray-100 w-7/12">
        <h1 className="font-bold text-2xl">Cart</h1>
        {cartItems.length === 0 ? (
          <diV className={"w-full h-40 flex flex-col justify-center items-center "}>
            <h1 className="font-bold text-xl">
                Cart is empty!!!!
            </h1>
            <h1>Please add some items.</h1>
          </diV>
        ) : (
          <>
            <button
              className=" font-bold cursor-pointer bg-sky-500 hover:bg-sky-700 hover:text-white rounded-md p-2 m-2"
              onClick={handleClick}
            >
              Clear Cart
            </button>
            <div className="bg-red-30 p-4 w-full">
              <ItemList
                itemCards={cartItems}
                dummy={""}
                className={""}
              ></ItemList>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
