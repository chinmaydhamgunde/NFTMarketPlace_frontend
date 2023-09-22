import React from "react";
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "../components/componentIndex";

const Home = () => {
  return (
    <div className={Style.heropage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="Explore the Audio NFTs with us"
      />
      <AudioLive />
      <Title
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <FollowerTab />
      {/* <Title
        heading="Explore NFT Videos"
        paragraph="Click on play icon and enjoy NFTs video"
      /> */}
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in most featured categories"
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
