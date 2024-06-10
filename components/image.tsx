"use client";

import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary";

const Image = (props: CldImageProps) => {
  return <CldImageDefault {...props} />;
};

export default Image;
