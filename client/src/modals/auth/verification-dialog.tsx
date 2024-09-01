import { Dialog, DialogContent, Typography } from "@mui/material";
import FlexBox from "../../utils/box/styled-box";
import Iconify from "../../components/common/iconify/iconify";

export const VerficationDialog = () => {
  return (
    <Dialog open={true} fullScreen>
      <DialogContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <FlexBox flexDirection="column" alignItems="center">
          <Iconify
            icon="fluent:mail-alert-32-filled"
            width="5rem"
            color="success.main"
          />
          <Typography variant="h3">We can do this</Typography>
        </FlexBox>
      </DialogContent>
    </Dialog>
  );
};
