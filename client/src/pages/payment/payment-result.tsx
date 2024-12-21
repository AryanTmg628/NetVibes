import { useNavigate, useSearchParams } from "react-router-dom";
import FlexBox from "../../utils/box/styled-box";
import { Stack, Tooltip, Typography } from "@mui/material";
import Iconify from "../../components/common/iconify/iconify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDomainDetails } from "../../store/selectors";
import orderServices from "../../services/order/order-services";
import { showSuccessToast } from "../../utils/toastify/toastify";

export const PaymentResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Iterate through all query parameters
  const allParams: Array<{ key: string; value: string }> = [];
  searchParams.forEach((value, key) => {
    allParams.push({ key, value });
  });
  const { registerDomainDetails } = useSelector(getDomainDetails);

  const getPaymentStatus = () => {
    if (searchParams.get("status") !== "User canceled") {
      return (
        <Stack>
          <Iconify
            icon="icon-park-solid:success"
            width="100px"
            color="rgb(35,215,95)"
          />
          <Typography variant="h4" color="text.black" textAlign="center">
            Payment Success
          </Typography>
        </Stack>
      );
    } else {
      return (
        <Stack>
          <Iconify icon="ix:namur-failure" width="100px" color="red" />
          <Typography variant="h4" color="text.black" textAlign="center">
            Payment Failed{" "}
          </Typography>
        </Stack>
      );
    }
  };

  const getBack = () => {
    navigate("/");
  };

  const placeAnOrder = async () => {
    console.log(registerDomainDetails);
    const data = {
      domain_name: registerDomainDetails.domain_name,
      amount: searchParams.get("amount") / 100, // converting paisa to rupees
      payment_status: "success",
      user_id: registerDomainDetails.personalInfo.id,
      primary_ns: registerDomainDetails.dnsConfig.primary_name_server,
      secondary_ns: registerDomainDetails.dnsConfig.secondary_name_server,
      first_name: registerDomainDetails.personalInfo.first_name,
      last_name: registerDomainDetails.personalInfo.last_name,
      phone_number: registerDomainDetails.personalInfo.phone_number,
      state: registerDomainDetails.personalInfo.state,
      street_address: registerDomainDetails.personalInfo.street_address,
      city: registerDomainDetails.personalInfo.city,
      country: registerDomainDetails.personalInfo.country,
    };
    const res = await orderServices.createOrder(data);
    if (res.success) {
      showSuccessToast(res.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  useEffect(() => {
    if (searchParams.get("status")?.toLowerCase() === "completed") {
      placeAnOrder();
    }
  });

  return (
    <FlexBox
      sx={{ width: "100vw", height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <FlexBox
        flexDirection="column"
        gap={1}
        sx={{
          borderRadius: "1rem",
          boxShadow: "2px 2px 10px #e5e5e5",
          padding: "2rem",
          width: "600px",
        }}
      >
        <Stack sx={{ marginBottom: "1rem" }}>{getPaymentStatus()}</Stack>
        {allParams.map((param, index) => (
          <Typography key={index}>
            <Typography
              fontSize="1.1rem"
              component="span"
              sx={{ textTransform: "capitalize" }}
              fontWeight={500}
            >
              {param.key}
            </Typography>
            : {param.value}
          </Typography>
        ))}

        <FlexBox justifyContent="end">
          <Tooltip title="Get back">
            <Iconify icon="icon-park-twotone:back" onClick={getBack} />
          </Tooltip>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
