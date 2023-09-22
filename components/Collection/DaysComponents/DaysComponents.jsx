import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ eL, i }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={eL.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={350}
            height={150}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={100}
            height={100}
            className={Style.daysComponent_box_img_1}
            objectFit="covers"
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={100}
            height={100}
            className={Style.daysComponent_box_img_2}
            objectFit="covers"
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={100}
            height={100}
            className={Style.daysComponent_box_img_3}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={eL.user}
                alt="profile"
                width={30}
                height={30}
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  Virat Kohli
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>
            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
