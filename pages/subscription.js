import React from "react";

import Style from "../styles/subscription.module.css";
import Subscription from "../Subscription/Subscription";

const subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popualar: "",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
      info: "Literally you haven't heard of them jean shorts,",
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popualar: "POPULAR",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],
      info: "Literally you haven't heard of them jean shorts,",
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popualar: "",
      service: [
        "Everything in BASIC",
        "Unlimited Builds",
        "Advanced Analytics",
      ],
      info: "Literally you haven't heard of them jean shorts,",
    },
  ];

  return (
    <div className={Style.subscription}>
      <div className={Style.subscription_box}>
        <div className={Style.subscription_box_info}>
          <h1>💎 Subscription</h1>
          <p>Pricing to fit the needs of any company size.</p>
        </div>

        <div className={Style.subscription_box_box}>
          {subscriptionArray.map((eL, i) => (
            <Subscription key={i + 1} i={i} eL={eL} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;
