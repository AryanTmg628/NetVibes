import { FC, forwardRef } from "react"; //
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";

// ----------------------------------------------------------------------
interface IconifyPropsInterface {
  icon: string;
  width?: number;
  height?: number;
  color?: string;
  sx?: object;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Iconify: FC<IconifyPropsInterface> = forwardRef(
  ({ icon, width = 20, sx, height, color, onClick }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      color={color}
      onClick={onClick}
      height={height}
      sx={{ width: width, ...sx }}
    />
  ),
);

export default Iconify;
