import React, { useEffect, useState } from "react";

import _ from "lodash";
function CartPage({
  setBasket,
  rmBasket,
  initial_data,
  resetBasket,
  unique_num,
  spe_data,
  numBasket,
  resetCarts,
  rmnumBasket,
  spread
}) {
  useEffect(() => {
    let items = unique_num;
    return setItem(items);
  }, [unique_num]);

  const [item, setItem] = useState([]); //item => 원래 값

  const plus = e => {
    e.preventDefault();
    setBasket(initial_data[e.target.value]);
    numBasket(initial_data[e.target.value]);
  };

  const minus = e => {
    e.preventDefault();
    rmBasket(e.target.value);
    numBasket(initial_data[e.target.value]);
    rmnumBasket();
  };

  const Pay = () => {
    alert("결제가 완료되었습니다.");

    resetBasket();
    resetCarts();
  };
  let unique = _.uniqBy(item, "id"); //중복제거된 값

  let result = unique.map(v => {
    //console.log(spe_data[v.id]);
    if (spe_data[v.id].length === 0) {
    } else {
      return (
        <>
          <div class="col-md" style={{ padding: "10px 10px" }}>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">{v.name}</h4>
                <h6 class="card-text" style={{ color: "gray" }}>
                  {v.desc}
                </h6>
                <h6 class="card-text" style={{ color: "gray" }}></h6>
                <h5 class="card-text" style={{}}>
                  {spe_data[v.id].length}마리
                </h5>
                <div style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={minus}
                    value={v.id}
                  >
                    -
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={plus}
                    value={v.id}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px 5px", float: "left" }}></div>
        </>
      );
    }
  });
  //console.log(item);
  if (spread.length !== 0) {
    return (
      <>
        <div style={{ marginTop: "10px" }}>
          <div class="container">
            <div class="row">{result}</div>
          </div>
        </div>

        <div style={{ marginTop: "50px" }}>
          <button
            style={{ position: "fixed", bottom: "0" }}
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={Pay}
          >
            구매
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <p>장바구니가 비어있습니다.</p>
      </div>
    );
  }
}

export default CartPage;
