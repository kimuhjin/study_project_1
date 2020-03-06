import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CartContainer from "../Containers/CartContainer";
import LandingContainer from "../Containers/LandingContainer";

function NavBar({ uniqueNum }) {
  let num = false;
  if (uniqueNum !== 0) {
    num = uniqueNum;
  } else {
    num = false;
  }

  return (
    <>
      <Router>
        <div
          style={{
            backgroundColor: "#d3d3d3",
            textAlign: "center",
            padding: "15px 15px"
          }}
        >
          <header>
            <span>
              <Link to="/">
                <button type="button" className="btn btn-primary">
                  제품목록
                </button>
              </Link>
            </span>
            <span style={{ padding: "10px" }}></span>
            <span>
              <Link to="/cart">
                <button type="button" className="btn btn-primary">
                  장바구니 <span className="badge badge-light">{num}</span>
                </button>
              </Link>
            </span>
          </header>
        </div>

        <main>
          <Switch>
            <Route exact path="/" component={LandingContainer} />
            <Route path="/cart" component={CartContainer} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default NavBar;
