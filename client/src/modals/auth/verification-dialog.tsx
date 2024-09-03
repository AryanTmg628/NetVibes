import { Dialog, DialogContent, Typography, Stack } from "@mui/material";
import FlexBox from "../../utils/box/styled-box";
import { ImageComponent } from "../../components/common/image-component/image-component";
import ManSittingOnComputer from "../../assets/icons/man-sitting-on-computer.jpg";
import { CustomCodeField } from "../../components/hook-form/custom-code-field";
import { FormProvider, useForm } from "react-hook-form";
import { CustomButton } from "../../components/common/custom-button/custom-button";
import { BackButton } from "../../components/common/back-button/back-button";
import { FC } from "react";

export const VerficationDialog: FC<{ email: string; username: string }> = ({
  email,
  username,
}) => {
  const defaultValues = {
    v_code: "",
  };

  const methods = useForm({
    defaultValues,
  });

  const maskEmail = () => {
    if (!email) {
      return "";
    }
    if (email.length <= 2) {
      // If the email length is 2 or less, just return the original string
      return email;
    }

    const firstChar = email.charAt(0); // Get the first character
    const lastWord = email.split("@")[1];
    const maskLength = email.length - lastWord.length; // Length of the mask
    const mask = "*".repeat(maskLength); // Create the mask string

    return firstChar + mask + lastWord;
  };
  return (
    <Dialog open={true} fullScreen>
      <DialogContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <FormProvider {...methods}>
          <FlexBox flexDirection="column" alignItems="center" gap={1}>
            <ImageComponent
              src={ManSittingOnComputer}
              alt="man"
              width="20rem"
            />
            <Typography variant="h5" color="text.black">
              Verification Code
            </Typography>
            <Typography variant="body2" color="text.black" textAlign="center">
              We have sent a verification code to your email address
            </Typography>
            <Typography variant="body2" color="text.black" textAlign="center">
              {maskEmail()}
            </Typography>
            <Typography variant="body2" color="text.black" textAlign="center">
              Enter the OTP Code below to verify
            </Typography>
            <Stack maxWidth="600px" marginTop={3} spacing={4}>
              <CustomCodeField name="v_code" />
              <FlexBox alignItems="center" flexDirection="column" gap={3}>
                <CustomButton value="Verify" sx={{ width: "200px" }} />
                <BackButton redirect="/auth/login" content="Back to Login" />
              </FlexBox>
            </Stack>
          </FlexBox>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
