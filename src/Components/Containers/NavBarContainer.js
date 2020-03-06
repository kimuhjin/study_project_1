import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../Items/NavBar";
import _ from "lodash";

function NavBarContainer() {
  const items = useSelector(state => state);
  //console.log(items.items_num);

  let getnum = items.items;
  let spread = getnum[0].concat(getnum[1], getnum[2], getnum[3]);
  //console.log(spread);
  let unique = _.uniqBy(spread, "id");
  let uniqueNum = unique.length;

  //console.log(uniqueNum);
  return (
    <div>
      <NavBar uniqueNum={uniqueNum} />
    </div>
  );
}

export default NavBarContainer;
