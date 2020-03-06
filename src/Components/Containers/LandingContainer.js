import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import LandingPage from "../Items/LandingPage";

import { addCart } from "../modules/items";
import { numCart } from "../modules/items_num";

function LadingContainer() {
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const setBasket = useCallback(id => dispatch(addCart(id)), [dispatch]);
  const numBasket = useCallback(id => dispatch(numCart(id)), [dispatch]);
  const initial_data = items.items_data;
  //   console.log(initial_data);
  return (
    <div>
      <LandingPage
        data={initial_data}
        setBasket={setBasket}
        numBasket={numBasket}
      />
    </div>
  );
}

export default LadingContainer;
