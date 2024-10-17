import { FC, forwardRef } from "react"; //
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

// ----------------------------------------------------------------------
interface IconifyPropsInterface {
  icon: string;
  width?: number | string;
  color?: string;
  sx?: object;
  onClick?: () => void;
}

const Iconify: FC<IconifyPropsInterface> = forwardRef(
  ({ icon, width = 20, sx, color, onClick, ...other }, ref) => (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={onClick}
    >
      <Box
        ref={ref}
        component={Icon}
        className="component-iconify"
        icon={icon}
        color={color}
        sx={{
          width,
          height: width,
          ...sx,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        {...other}
      />
    </IconButton>
  ),
);

export default Iconify;
