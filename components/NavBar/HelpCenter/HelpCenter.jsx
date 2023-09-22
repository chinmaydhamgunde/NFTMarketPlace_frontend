import React from "react";
import Link from "next/link";

import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactUs",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "LogIn",
      link: "signin",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((eL, i) => (
        <div className={Style.helpCenter}>
          <Link href={{ pathname: `${eL.link}` }}>{eL.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
