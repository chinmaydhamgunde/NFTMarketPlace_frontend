import React from "react";
import Image from "next/image";

import Style from "./Video.module.css";
import images from "../../img";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>Check out our new videos</p>
        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <Image
              src={images.creatorbackground5}
              alt="Video Image"
              className={Style.Video_box_frame_left_img}
              width={1100}
              height={600}
              objectFit="cover"
            />
          </div>
          <div className={Style.Video_box_frame_right}>
          {/* Hey */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
