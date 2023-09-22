import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

import Style from "../styles/contactUs.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentIndex";

const contactUs = () => {
  return (
    <div className={Style.contactUs}>
      <div className={Style.contactUs_box}>
        <h1>Contact Us</h1>
        <div className={Style.contactUs_box_box}>
          <div className={Style.contactUs_box_box_left}>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>📍 Address</h3>
              <p>Panama Island , There is no place</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>📧 EMAIL</h3>
              <p>satoshi.nakamoto@bit.org</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>☎️ PHONE</h3>
              <p>923-434-4343</p>
            </div>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>🌏 SOCIALS</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
            </div>
          </div>
          <div className={Style.contactUs_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Username</label>
                <input
                  htmlFor="text"
                  placeholder="Virat Kohli"
                  className={formStyle.Form_box_input_userName}
                />
              </div>

              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Email" />
                </div>
              </div>

              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="about yourself"
                ></textarea>
              </div>

              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
