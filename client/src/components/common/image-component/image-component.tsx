import { Box } from "@mui/material";
import { FC } from "react";
import { ImageComponentInterface } from "../../../interfaces";

export const ImageComponent: FC<ImageComponentInterface> = ({
  src,
  alt,
  width = "100%",
  height = "auto",
}) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ width: width, height: height }}
    />
  );
};
