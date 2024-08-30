import { FC } from "react";
import FlexBox from "../../../../utils/box/styled-box";
import { Box, Stack, Typography } from "@mui/material";
import { SearchDomain } from "../../../../components/search-domain/search-domain";

export const DomainSearch: FC = () => {
  return (
    <FlexBox
      width={1}
      height="70vh"
      sx={{
        backgroundImage: "url(/assets/server-box.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FlexBox
        width="inherit"
        height="inherit"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(16,41,146,0.7)"
      >
        <Stack maxWidth="700px" spacing={2} width="95%">
          <Typography variant="h3" textAlign="center" color="text.primary">
            Use Domain Checker To Find Unique Domains
          </Typography>

          <Typography variant="body2" textAlign="center" color="text.primary">
            Up to 50% off domain and hosting, free SSL certificate, 24/7/365
            support, money back gurantee, Nepali rupees accepted.
          </Typography>
          <SearchDomain />
        </Stack>
      </FlexBox>
    </FlexBox>
  );
};
