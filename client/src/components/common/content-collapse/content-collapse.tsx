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
  showBorder = true,
  redirect,
  handleClick,
}) => {
  const [isCollpase, setIsCollapse] = useState(false);

  const toggleCollapse = () => {
    setIsCollapse(!isCollpase);
  };
  return (
    <Box
      borderBottom={showBorder ? "1px solid" : "none"}
      borderColor="custom.grey.500"
      paddingBottom={1}
    >
      <FlexBox
        justifyContent="space-between"
        onClick={toggleCollapse}
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        <Typography
          variant="h6"
          color="text.black"
          sx={{ fontSize: "1rem" }}
          onClick={() => {
            if (redirect) handleClick(redirect);
          }}
        >
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
            <Stack
              direction="row"
              alignItems="center"
              paddingLeft={1}
              marginTop={1}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                if (handleClick) handleClick(sub?.redirect);
              }}
            >
              {sub.icon && <Iconify icon={sub.icon} color="custom.grey.500" />}
              <Typography
                key={index}
                variant="body1"
                color="custom.grey.200"
                padding={1}
              >
                {sub?.name}
              </Typography>
            </Stack>
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
