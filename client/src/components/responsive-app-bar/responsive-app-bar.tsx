import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import { FC, useState } from "react";
import Iconify from "../common/iconify/iconify";
import menus from "/src/data/menus.json";
import FlexBox from "../../utils/box/styled-box";
import HoverTypography from "../../utils/typography/styled-typography";
import { Logo } from "../common/logo/logo";
import { MenuSubContentInterface, SingleMenuInterface } from "../../interfaces";

export const ResponsiveAppBar: FC = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "text.primary",
        boxShadow: "none",
        px: "20rem",
      }}
    >
      <Toolbar disableGutters>
        <FlexBox
          gap="1rem"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Logo sx={{ flex: 1 }} />
          {menus.menus.map((menu: SingleMenuInterface, index: number) => (
            <SingleMenu
              name={menu.name}
              key={index}
              subcontent={menu?.subcontent}
            />
          ))}
        </FlexBox>
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

const SingleMenu: FC<SingleMenuInterface> = ({ name, subcontent }) => {
  const [anchorELNav, setAnchorELNav] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenuItem = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    setAnchorELNav(event.currentTarget);
    setIsMenuOpen(true);
  };

  const closeMenuItem = () => {
    setAnchorELNav(null);
    setIsMenuOpen(false);
  };
  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };
  return (
    <FlexBox
      alignItems="center"
      onClick={openMenuItem}
      aria-controls="single-menu"
    >
      <HoverTypography variant="body2" color="text.black">
        {name}
      </HoverTypography>
      <Iconify
        icon="mdi-light:chevron-down"
        color="text.black"
        sx={{ "&:hover": { cursor: "pointer" } }}
      />
      <Menu
        id="single-menu"
        anchorEl={anchorELNav}
        open={isMenuOpen}
        onClose={closeMenuItem}
        onMouseLeave={handleMouseLeave}
        keepMounted
      >
        {subcontent?.map((menu: MenuSubContentInterface, index: number) => (
          <MenuItem
            key={index}
            sx={{
              color: "text.black",
              p: "0.5rem 2rem",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              "&:hover": { cursor: "pointer" },
            }}
          >
            {menu.icon && (
              <Iconify
                width={20}
                icon={menu.icon}
                color="primary.light"
                sx={{ "&:hover": { cursor: "pointer" } }}
              />
            )}
            <Stack spacing={0.3}>
              <Typography variant="body2">{menu.name}</Typography>
              <Typography variant="body1" color="custom.grey.200">
                {menu?.description}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </FlexBox>
  );
};
