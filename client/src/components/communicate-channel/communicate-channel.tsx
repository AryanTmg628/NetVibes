import { Button, Stack, Typography } from "@mui/material";
import FlexBox from "../../utils/box/styled-box";
export const CommunicateChannel = () => {
  return (
    <FlexBox
      bgcolor="primary.dark"
      justifyContent="center"
      paddingY={6}
      alignItems="center"
      gap={3}
      mb={2}
    >
      <Stack spacing={1}>
        <Typography variant="h6">Need some help?</Typography>
        <Typography variant="body1" color="custom.grey.300">
          Whenever you are stuck on where to start, hit up our experts anytime.{" "}
        </Typography>
      </Stack>

      <Stack direction="row" gap={1}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "text.primary",
            color: "custom.grey.200",

            "&:hover": {
              backgroundColor: "text.primary",
              color: "custom.grey.200",
            },
          }}
        >
          Chat us
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "text.primary",
            "&:hover": {
              borderColor: "text.primary",
            },
          }}
        >
          Send us email
        </Button>
      </Stack>
    </FlexBox>
  );
};
