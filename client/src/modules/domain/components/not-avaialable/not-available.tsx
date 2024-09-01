import { useTheme } from "@emotion/react";
import { alpha, Card, Typography } from "@mui/material";
import Iconify from "../../../../components/common/iconify/iconify";
import FlexBox from "../../../../utils/box/styled-box";
import { FC } from "react";

export const NotAvailable: FC<{ content: string }> = ({ content }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        color: alpha(theme?.palette?.text?.black, 0.6),
        p: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: alpha(theme?.palette?.error?.main, 0.5),
      }}
    >
      <FlexBox gap={1} alignItems="center" color="error.main">
        <Iconify icon="icon-park-outline:link-cloud-faild" />
        <Typography variant="h6" color="error.main">
          {content}
        </Typography>
      </FlexBox>
    </Card>
  );
};
