import React from "react";
import Image from "next/image";

import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        {/* 1 */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover , buy NFTs , sell your NFTs and earn
            money
          </p>
        </div>
        {/* 2 */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover , buy NFTs , sell your NFTs and earn
            money
          </p>
        </div>
        {/* 3*/}
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Start trading"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with wallet, discover , buy NFTs , sell your NFTs and earn
            money
          </p>
        </div>
        {/* 4 */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Earn Money"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Earn Money</h3>
          <p>
            Connect with wallet, discover , buy NFTs , sell your NFTs and earn
            money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;