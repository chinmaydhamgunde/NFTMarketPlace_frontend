import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

import Style from "./UploadNFT.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button } from "../components/componentIndex";
import { DropZone } from "./upoadNFTIndex";

const UploadNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [roaylties, setRoaylties] = useState("");
  const [properties, setProperties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");

  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photography",
    },
  ];

  return (
    <div className={Style.uplaod}>
      <DropZone
        title="JPG , PNG, WEBM, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        roaylties={roaylties}
        fileSize={fileSize}
        category={category}
        image={images.upload}
        properties={properties}
      />

      <div className={Style.uplaod_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            htmlFor="text"
            placeholder="Virat Kohli"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <p className={Style.uplaod_box_input_para}>
            Will include a link to this URL on this item's detail page , so that
            users can click to learn more about it .You are welcome to link to
            your webpage with more details
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description : &nbsp;</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="about yourself"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p className={Style.uplaod_box_input_para}>
            The de will be included on the item's detail page underneath it's
            image.Markdown syntax is supported.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={Style.uplaod_box_input_para}>
            Choose an existing collection or create new
          </p>

          <div className={Style.uplaod_box_slider_box}>
            {categoryArray.map((eL, i) => (
              <div
                className={`${Style.uplaod_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(eL.category))}
              >
                <div className={Style.uplaod_box_slider_box}>
                  <div className={Style.uplaod_box_slider_box_img}>
                    <Image
                      src={eL.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className={Style.uplaod_box_slider_box_img_img}
                    />
                  </div>

                  <div className={Style.uplaod_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>

                <p>Crypto Legend - {eL.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Roaylties">Roaylties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoaylties(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165 MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="Properties">Properties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Properties"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.uplaod_box_btn}>
          <Button
            btnName="Upload"
            handleClick={() => {}}
            classStyle={Style.uplaod_box_btn_style}
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={Style.uplaod_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
