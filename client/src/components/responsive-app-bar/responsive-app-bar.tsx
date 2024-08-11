import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { FC, useState } from "react";
import Iconify from "../common/iconify/iconify";
import menus from "/src/data/menus.json";

export const ResponsiveAppBar: FC = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "text.primary",
        boxShadow: "none",
      }}
    >
      <Toolbar disableGutters>
        <FeatureMenu />
      </Toolbar>
    </AppBar>
  );
};

export const FeatureMenu = () => {
  const [anchorELNav, setAnchorELNav] = useState<null | HTMLElement>(null);
  const openMenuItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorELNav(event.currentTarget);
  };

  const closeMenuItem = () => {
    setAnchorELNav(null);
  };
  return (
    <>
      <Iconify
        icon="cil:hamburger-menu"
        onClick={openMenuItem}
        color="text.black"
        sx={{ "&:hover": { cursor: "pointer" } }}
      />
      <Menu
        anchorEl={anchorELNav}
        open={Boolean(anchorELNav)}
        onClose={closeMenuItem}
      >
        {menus.menus.map((menu: { name: string }, index: number) => (
          <MenuItem
            key={index}
            sx={{
              p: "1rem",
              backgroundColor: "#000000",
            }}
          >
            <Typography variant="body2" paragraph>
              {menu.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
