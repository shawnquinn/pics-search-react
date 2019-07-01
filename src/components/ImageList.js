import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  //console.log(props.images);

  const imagesall = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imagesall}</div>;
};

export default ImageList;
