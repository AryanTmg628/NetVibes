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
      <FlexBox
        justifyContent="center"
        alignItems="center"
        gap={3}
        maxWidth="650px"
        width="90%"
        display={{ md: "flex", sm: "flex", xs: "block" }}
      >
        <Stack spacing={1} mb={{ md: "0", sm: "0", xs: "1rem" }} width={1}>
          <Typography variant="h6">Need some help?</Typography>
          <Typography variant="body1" color="custom.grey.300">
            Whenever you are stuck on where to start, hit up our experts
            anytime.{" "}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          gap={1}
          width={1}
          justifyContent={{ xs: "center" }}
        >
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
    </FlexBox>
  );
};
