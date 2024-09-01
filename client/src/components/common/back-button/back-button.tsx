import { Link, Typography } from "@mui/material";
import FlexBox from "../../../utils/box/styled-box";
import Iconify from "../iconify/iconify";

export const BackButton = ({ redirect, content }) => {
  const getHref = () => {
    return redirect;
  };
  return (
    <Link
      display="flex"
      alignItems="center"
      gap={0.5}
      sx={{
        textDecoration: "none",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      href={getHref()}
    >
      <Iconify icon="weui:back-outlined" color="text.black" />
      <Typography variant="h6" color="text.black">
        {content}
      </Typography>
    </Link>
  );
};
