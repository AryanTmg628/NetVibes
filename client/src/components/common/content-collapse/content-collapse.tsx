import FlexBox from "../../../utils/box/styled-box";
import { Box, Collapse, Stack, Typography } from "@mui/material";
import Iconify from "../iconify/iconify";
import { FC, useState } from "react";
import { ContentCollapseInterface } from "../../../interfaces";

export const ContentCollapse: FC<ContentCollapseInterface> = ({
  title,
  subContent,
}) => {
  const [isCollpase, setIsCollapse] = useState(false);

  const toggleCollapse = () => {
    setIsCollapse(!isCollpase);
  };
  return (
    <Box>
      <FlexBox
        justifyContent="space-between"
        onClick={toggleCollapse}
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        <Typography variant="h6" color="text.black" sx={{ fontSize: "1rem" }}>
          {title}
        </Typography>
        <Stack>
          <Collapse in={!isCollpase} onClick={toggleCollapse}>
            <Iconify icon="ic-round-add" />
          </Collapse>
          <Collapse in={isCollpase} onClick={toggleCollapse}>
            <Iconify icon="ph:minus-bold" />
          </Collapse>
        </Stack>
      </FlexBox>
      <Collapse in={isCollpase}>
        <Typography variant="body1" color="custom.grey.200" padding={1}>
          {subContent}{" "}
        </Typography>
      </Collapse>
    </Box>
  );
};
