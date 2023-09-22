import React from "react";
import Image from "next/image";

import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentIndex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Rakesh Gupta",
      position: "Co-founder and Cheif Executive",
      image: images.user10,
    },
    {
      name: "Arjit Taneja",
      position: "Co-founder and Cheif Executive",
      image: images.user5,
    },
    {
      name: "Shreya Ojha",
      position: "Co-founder ,Chairman",
      image: images.user9,
    },
    {
      name: "Komal Patil",
      position: "Co-founder , Chief Strategy Officer",
      image: images.user7,
    },
  ];

  const factsArray = [
    {
      title: "10,000",
      info: "Articles have been public around the world",
    },
    {
      title: "100,000",
      info: "Registered users account",
    },
    {
      title: "10 million+",
      info: "Transaction Volume",
    },
  ];

  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us</h1>
            <p>
              We're impartial and dependent and every day we create distinctive,
              world class programmes and content which inform educated certain
              millions of people in the around world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            {/* <Image src={images.hero} /> */}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱️ Founder</h2>
          <p>
            We're impartial and dependent and every day we create distinctive,
            world class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((eL, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={eL.image}
                  alt={eL.name}
                  width={250}
                  height={250}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{eL.name}</h3>
                <p>{eL.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We're impartial and dependent and every day we create distinctive,
            world class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((eL, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{eL.title}</h3>
                <p>{eL.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Brand />
    </div>
  );
};

export default aboutus;
