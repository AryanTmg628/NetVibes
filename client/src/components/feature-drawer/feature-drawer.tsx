import { Stack, Tooltip, IconButton } from "@mui/material";
import { Logo } from "../common/logo/logo";
import FlexBox from "../../utils/box/styled-box";
import features from "../../data/drawer.json";
import Iconify from "../common/iconify/iconify";
import { ContentCollapse } from "../common/content-collapse/content-collapse";
import company from "/src/data/company.json";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  marginTop: "7vh",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function FeatureDrawer() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const goToLandingPage = () => {
    navigate("/");
  };

  const changePath = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "text.primary" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" gap={2}>
            {!open && (
              <Iconify
                icon="quill:hamburger"
                color="text.black"
                onClick={handleDrawerOpen}
              />
            )}
            <Tooltip title="Go to landing page">
              <Iconify
                icon="ci:main-component"
                color="text.black"
                onClick={goToLandingPage}
              />
            </Tooltip>
          </Stack>
          <Stack direction="row" gap="0.5rem" alignItems="center">
            <Iconify
              icon="material-symbols-light:call"
              color="custom.grey.200"
            />
            <Typography variant="body1" color="text.black">
              24x7 Technical Support {company.phone}
            </Typography>
            <Iconify icon="solar:logout-outline" color="custom.grey.200" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <FlexBox alignItems="center" p={1} justifyContent="space-between">
          <Logo />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </FlexBox>
        <Stack padding={2} height={1}>
          <Stack spacing={4} height={1} mt={2}>
            {features.features.map((feat, index) => (
              <ContentCollapse
                title={<Feature details={feat} />}
                subContent={feat?.subcontent}
                showBorder={false}
                plus="pajamas:chevron-down"
                minus="pajamas:chevron-up"
                key={index}
                redirect={feat?.redirect}
                handleClick={changePath}
              />
            ))}
          </Stack>
        </Stack>
      </Drawer>
      <Main open={open}>
        <Outlet />
      </Main>
    </Box>
  );
}

const Feature: React.FC<{ details: { icon: string; name: string } }> = ({
  details,
}) => {
  return (
    <FlexBox gap={1} alignItems="center">
      <Iconify icon={details.icon} color="text.black" />
      <Typography color="text.black">{details.name} </Typography>
    </FlexBox>
  );
};
