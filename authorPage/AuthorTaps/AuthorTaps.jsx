import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

import Style from "./AuthorTaps.module.css";

const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Collectiables") {
      setCollectiables(true);
      setCreated(false);
      setLike(false);
      setFollowing(false);
      setFollower(false);
      setActiveBtn(1);
    } else if (btnText == "Created") {
      setCollectiables(false);
      setCreated(true);
      setLike(false);
      setFollowing(false);
      setFollower(false);
      setActiveBtn(2);
    } else if (btnText == "Like") {
      setCollectiables(false);
      setCreated(false);
      setLike(true);
      setFollowing(false);
      setFollower(false);
      setActiveBtn(3);
    } else if (btnText == "Following") {
      setCollectiables(false);
      setCreated(false);
      setLike(false);
      setFollowing(true);
      setFollower(false);
      setActiveBtn(4);
    } else if (btnText == "Followers") {
      setCollectiables(false);
      setCreated(false);
      setLike(false);
      setFollowing(false);
      setFollower(true);
      setActiveBtn(5);
    }
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Collectiables
            </button>
            <button
              className={`${activeBtn == 2 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Created
            </button>
            <button
              className={`${activeBtn == 3 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Like
            </button>
            <button
              className={`${activeBtn == 4 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Following
            </button>
            <button
              className={`${activeBtn == 5 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Followers
            </button>
          </div>
        </div>

        <div className={Style.AuthorTaps_box_right}>
          <div
            className={Style.AuthorTaps_box_right_para}
            onClick={() => openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={Style.AuthorTaps_box_right_list}>
              {listArray.map((eL, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectedMenu(eL)}
                  className={Style.AuthorTaps_box_right_list_item}
                >
                  <p>{eL}</p>
                  <span>{selectedMenu == eL && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
