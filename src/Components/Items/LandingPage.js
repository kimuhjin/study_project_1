import React from "react";

function LandingPage({ setBasket, data, numBasket }) {
  const onClick = e => {
    e.preventDefault();
    setBasket(data[e.target.value]);
    numBasket(data[e.target.value]);
  };

  let result = data.map(function(v) {
    return (
      <>
        <div class="col-md" style={{ padding: "10px 10px" }}>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{v.name}</h4>
              <h6 class="card-text" style={{ color: "gray" }}>
                {v.desc}
              </h6>
              <div style={{ textAlign: "right" }}>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={onClick}
                  value={v.id}
                >
                  장바구니에 추가
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px 5px", float: "left" }}></div>
      </>
    );
  });

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <div class="container">
          <div class="row">{result}</div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
