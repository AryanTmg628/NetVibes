import { Card, Typography } from "@mui/material";
import FlexBox from "../../../../utils/box/styled-box";
import Iconify from "../../../../components/common/iconify/iconify";
import { FC } from "react";

export const Available: FC<{ content: string }> = ({ content }) => {
  return (
    <Card
      sx={{
        color: "text.primary",
        p: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "success.main",
      }}
    >
      <FlexBox gap={1} alignItems="center">
        <Iconify icon="icon-park-twotone:success" />
        <Typography variant="h6">{content}</Typography>
      </FlexBox>
    </Card>
  );
};
