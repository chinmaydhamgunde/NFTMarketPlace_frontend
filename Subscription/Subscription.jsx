import React from "react";
import { TiTick } from "react-icons/ti";

import Style from "./Subscription.module.css";
import { Button } from "../components/componentIndex";

const Subscription = ({ eL, i }) => {
  return (
    <div className={Style.SubscriptionBox}>
      <div className={Style.SubscriptionBox_box}>
        <span className={Style.SubscriptionBox_box_span}>{eL.plan}</span>
        <small className={Style.SubscriptionBox_box_small}>
          {eL.popular || ""}
        </small>
        <p className={Style.SubscriptionBox_box_price}>{eL.price}</p>

        <div className={Style.SubscriptionBox_box_info}>
          {eL.service.map((eL, i) => (
            <p className={Style.SubscriptionBox_box_info_para} key={i + 1}>
              <span>
                <TiTick />
              </span>
              {eL}
            </p>
          ))}
        </div>

        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle={Style.button}
        />
      </div>
    </div>
  );
};

export default Subscription;
