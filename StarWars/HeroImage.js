import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import LazyImage from "./LazyImage";

export default function HeroImage(props) {
  const [source, setSource] = useState(null);

  const win = Dimensions.get("window");
  const { width, height } = Image.resolveAssetSource(props.imageSrc);
  const ratio = win.width / width;

  if (source != props.imageSrc) {
    setSource(props.imageSrc);
  }

  return (
    <LazyImage
      style={{ width: win.width, height: height * ratio }}
      resizeMode="contain"
      source={source}
    />
  );
}
