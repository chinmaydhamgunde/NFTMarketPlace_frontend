import React, { useState, useEffect } from "react";
import Image from "next/image";

import Style from "../styles/connectWallet.module.css";
import images from "../img";

const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "Wallet Connect",
    },
    {
      provider: images.provider3,
      name: "Coinbase Wallet",
    },
  ];
  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our available wallet providers or create a wallet
        </p>

        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((eL, i) => (
            <div
              className={` ${Style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={eL.provider}
                alt={eL.name}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{eL.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connectWallet;
