import { FC, useEffect, useState } from "react";
import FlexBox from "../../../../utils/box/styled-box";
import { Stack, Typography, Box } from "@mui/material";
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
import { useTheme } from "@emotion/react";
import { TLDDetailInterface } from "../../../../interfaces";

export const DomainSearch: FC = () => {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(false);

  const { domainDetails, error, loading, queryDomain, tldsList } =
    useSelector(getDomainDetails);

  const isDomainAvailable = () => {
    if (!domainDetails) return false;

    return !domainDetails?.data?.registered; // since if domain is already registered i:e value is true then it should not be available
  };

  useEffect(() => {
    if (queryDomain) dispatch(domainActions.fetchDomainDetails(queryDomain));

    if (tldsList.length === 0) dispatch(domainActions.fetchTLDLists());
  }, [queryDomain, tldsList]);
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
              <>
                <Available content={`Domain(${queryDomain}) is available.`} />
                <MoreDomainOptions
                  queryDomain={queryDomain}
                  tldsList={tldsList}
                />
              </>
            )}

            {!isDomainAvailable() && queryDomain && (
              <>
                <NotAvailable
                  content={`Domain(${queryDomain}) is not available.`}
                />
                <MoreDomainOptions
                  queryDomain={queryDomain}
                  tldsList={tldsList}
                />
              </>
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
    <Stack
      spacing={2}
      sx={{
        display: { sm: "none", xs: "none", md: "block" },
      }}
    >
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

const MoreDomainOptions: FC<{
  queryDomain: string;
  tldsList: Array<TLDDetailInterface>;
}> = ({ queryDomain, tldsList }) => {
  console.log("tlds list", tldsList);
  return (
    <Stack spacing={2} my={3}>
      <Typography variant="h6" color="text.black" textAlign="center">
        More Domain Options{" "}
      </Typography>
      <Stack>
        {tldsList.map((detail) => (
          <TLDDetail
            queryDomain={queryDomain}
            tldDetail={detail}
            key={detail.id}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const TLDDetail: FC<{ queryDomain: string; tldDetail: TLDDetailInterface }> = ({
  queryDomain,
  tldDetail,
}) => {
  const getDomainName = () => {
    return queryDomain.split(".")[0];
  };

  const getCurrency = () => import.meta.env.VITE_CURRENCY;
  return (
    <FlexBox
      justifyContent="space-between"
      p={2}
      sx={{
        flexDirection: { xs: "column", sm: "row", md: "row" },
        alignItems: {
          xs: "flex-start",
          sm: "space-between",
          md: "space-between",
        },
      }}
    >
      <Box>
        <Typography variant="body2">
          {getDomainName()}.
          <Typography component="span" color="primary.main">
            {tldDetail.name}
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" color="primary.light">
          {getCurrency() + " " + tldDetail.price_pm}
          <Typography component="span" color="custom.grey.500">
            /month
          </Typography>
        </Typography>
      </Box>
      <CustomButton
        bgColor="primary.light"
        color="text.primary"
        value="Add to Cart"
      />
    </FlexBox>
  );
};
