import FlexBox from "../../../utils/box/styled-box";
import { Box, Collapse, Stack, Typography } from "@mui/material";
import Iconify from "../iconify/iconify";
import { FC, useState } from "react";
import {
  ContentCollapseInterface,
  MenuSubContentInterface,
} from "../../../interfaces";

export const ContentCollapse: FC<ContentCollapseInterface> = ({
  title,
  subContent = null,
  plus = "ic-round-add",
  minus = "ph-minus-bold",
  handleClick,
}) => {
  const [isCollpase, setIsCollapse] = useState(false);

  const toggleCollapse = () => {
    setIsCollapse(!isCollpase);
  };
  return (
    <Box
      borderBottom="1px solid"
      borderColor="custom.grey.500"
      paddingBottom={1}
    >
      <FlexBox
        justifyContent="space-between"
        onClick={toggleCollapse}
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        <Typography variant="h6" color="text.black" sx={{ fontSize: "1rem" }}>
          {title}
        </Typography>
        {subContent && (
          <Stack>
            <Collapse in={!isCollpase} onClick={toggleCollapse}>
              <Iconify icon={plus} color="text.black" />
            </Collapse>
            <Collapse in={isCollpase} onClick={toggleCollapse}>
              <Iconify icon={minus} color="text.black" />
            </Collapse>
          </Stack>
        )}
      </FlexBox>
      <Collapse in={isCollpase}>
        {Array.isArray(subContent) ? (
          subContent?.map((sub: MenuSubContentInterface, index: number) => (
            <Typography
              key={index}
              variant="body1"
              color="custom.grey.200"
              padding={1}
              onClick={() => {
                if (handleClick) handleClick(sub?.redirect);
              }}
            >
              {sub?.name}
            </Typography>
          ))
        ) : (
          <Typography variant="body1" color="custom.grey.200" padding={1}>
            {subContent}
          </Typography>
        )}
      </Collapse>
    </Box>
  );
};
