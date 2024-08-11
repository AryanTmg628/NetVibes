import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import theme from "../../theme";

const HoverTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.grey[200],
  fontWeight: 500,
  "&:hover": {
    color: theme.palette.primary.light,
    cursor: "pointer",
  },
}));

export default HoverTypography;
