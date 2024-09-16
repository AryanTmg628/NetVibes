import { FC, useEffect, useState } from "react";
import FlexBox from "../../../../utils/box/styled-box";
import { Stack, Typography } from "@mui/material";
import { SearchDomain } from "../../../../components/search-domain/search-domain";
import { useDispatch, useSelector } from "react-redux";
import { domainActions } from "../../../../store/actions/domain/domainActions";
import { NotAvailable } from "../not-avaialable/not-available";
import { CustomMultipleCheckBox } from "../../../../components/hook-form/custom-check-box";
import { FormProvider, useForm } from "react-hook-form";
import { CustomButton } from "../../../../components/common/custom-button/custom-button";
import { Available } from "../available/available";
import { getDomainDetails } from "../../../../store/selectors";
import BlurLoader from "../../../../components/common/blur-loader/blur-loader";

export const DomainSearch: FC = () => {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(false);

  const { domainDetails, error, loading, queryDomain } =
    useSelector(getDomainDetails);

  const isDomainAvailable = () => {
    if (!domainDetails) return false;

    return !domainDetails?.data?.registered; // since if domain is already registered i:e value is true then it should not be available
  };

  useEffect(() => {
    if (queryDomain) dispatch(domainActions.fetchDomainDetails(queryDomain));
  }, [queryDomain]);
  return (
    <FlexBox gap={2} flexDirection="column" alignItems="center">
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
      <Stack width="95%" direction="row" gap={10} p={3} maxWidth="1100px">
        <FilterSection />
        {!loading && (
          <Stack flex={1}>
            {isDomainAvailable() && queryDomain && (
              <Available content={`Domain(${queryDomain}) is available.`} />
            )}

            {!isDomainAvailable() && queryDomain && (
              <NotAvailable
                content={`Domain(${queryDomain}) is not available.`}
              />
            )}
          </Stack>
        )}
      </Stack>
      {/* {showLoader && <BlurLoader />} */}
    </FlexBox>
  );
};

export const FilterSection = () => {
  const methods = useForm({
    defaultValues: {
      filter: "",
    },
  });

  const options = [
    {
      name: "show-all",
      label: "Show All",
    },
    {
      name: ".com",
      label: ".com",
    },
    {
      name: ".net",
      label: ".net",
    },
    {
      name: ".org",
      label: ".org",
    },
    {
      name: ".online",
      label: ".online",
    },
    {
      name: ".store",
      label: ".store",
    },
    {
      name: ".website",
      label: ".website",
    },
  ];
  return (
    <Stack spacing={2}>
      <Typography variant="h6" color="text.black">
        Filter Results{" "}
      </Typography>
      <FormProvider {...methods}>
        <CustomMultipleCheckBox options={options} />
      </FormProvider>
      <CustomButton value="Apply" bgColor="primary.light" />
    </Stack>
  );
};
