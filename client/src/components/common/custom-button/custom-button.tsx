import { Button } from "@mui/material";
import { FC } from "react";
import { CustomButtonInterface } from "../../../interfaces";

export const CustomButton: FC<CustomButtonInterface> = ({
  bgColor,
  value,
  color,
}) => {
  return (
    <Button
      sx={{
        backgroundColor: `${bgColor}`,
        color,

        p: "0.3rem 1rem",
        "&:hover": {
          backgroundColor: `${bgColor}`,
          color,
        },
      }}
    >
      {value}
    </Button>
  );
};
