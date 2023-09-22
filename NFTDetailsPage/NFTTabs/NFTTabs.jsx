import React from "react";
import Image from "next/image";

import Style from "./NFTTabs.module.css";

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((eL, i) => (
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image
            src={eL}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $2023 by <span>Rohit Bhai</span>
              &nbsp; {icon}
            </span>

            <small>Oct 11 - 10:10 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
