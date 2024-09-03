import Box from "@mui/material/Box";
import { useTheme, CircularProgress } from "@mui/material";
import { alpha } from "@mui/material";

export default function BlurLoader() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: 1,
        width: 1,
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        ...bgBlur({
          opacity: 0.1,
          color: theme.palette.grey[100],
        }),
      }}
    >
      <CircularProgress sx={{ m: 10 }} color="primary" />
    </Box>
  );
}

export function bgBlur(props) {
  const color = props?.color || "#000000";
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  const imgUrl = props?.imgUrl;

  if (imgUrl) {
    return {
      position: "relative",
      backgroundImage: `url(${imgUrl})`,
      "&:before": {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: "100%",
        height: "100%",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      },
    };
  }

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
}
