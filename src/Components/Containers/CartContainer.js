import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartPage from "../Items/CartPage";
import { addCart, resetCart, rmCart } from "../modules/items";
import { numCart, reset_Cart, rmnumCart } from "../modules/items_num";

function CartContainer() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const setBasket = useCallback(id => dispatch(addCart(id)), [dispatch]);
  const rmBasket = useCallback(id => dispatch(rmCart(id)), [dispatch]);

  const resetBasket = useCallback(id => dispatch(resetCart(id)), [dispatch]);
  const numBasket = useCallback(id => dispatch(numCart(id)), [dispatch]);
  const rmnumBasket = useCallback(() => dispatch(rmnumCart()), [dispatch]);
  const resetCarts = useCallback(id => dispatch(reset_Cart(id)), [dispatch]);

  const initial_data = data.items_data;
  const unique_num = data.items_num;
  const spe_data = data.items;
  //   const spec = spe_data;
  //   let abc = [];
  //   for (var i = 1; i < spe_data.length; ++i) {
  //     let abc = spec[0].concat(spec[i]);
  //   }

  let spread = spe_data[0].concat(spe_data[1], spe_data[2], spe_data[3]);

  //console.log(spread);
  return (
    <div>
      <CartPage
        data={data}
        setBasket={setBasket}
        rmBasket={rmBasket}
        initial_data={initial_data}
        resetBasket={resetBasket}
        unique_num={unique_num}
        spe_data={spe_data}
        numBasket={numBasket}
        resetCarts={resetCarts}
        rmnumBasket={rmnumBasket}
        spread={spread}
      />
    </div>
  );
}

export default CartContainer;
