import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import orderServices from "../../../services/order/order-services";
import FlexBox from "../../../utils/box/styled-box";
import Iconify from "../../../components/common/iconify/iconify";

export const Home = () => {
  const [allDomains, setAllDomains] = useState([]);
  const getAllDomains = async () => {
    try {
      const res = await orderServices.fetchAllOrderDomains();
      if (res.success) setAllDomains(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDomains();
  }, []);
  return (
    <Stack>
      <FlexBox flexDirection="column" gap={3}>
        <Typography variant="h5" color="text.black">
          Domains
        </Typography>
        {allDomains.length > 0 ? (
          <DomainDetails details={allDomains} />
        ) : (
          <NoDetails />
        )}
      </FlexBox>
    </Stack>
  );
};

const DomainDetails = ({ details }) => {
  return (
    <FlexBox flexDirection="column" gap={3}>
      {details.map((detail) => {
        return (
          <FlexBox
            flexDirection="column"
            sx={{
              width: "50%",
              padding: "2rem",
              boxShadow: "5px 5px 10px #e5e5e5, -5px -5px 10px #e5e5e5",
              borderRadius: "1rem",
            }}
          >
            <FlexBox width="100%" alignItems="center">
              <FlexBox alignItems="center" gap="1rem">
                <Typography variant="h6" color="text.black">
                  Primary Name Server
                </Typography>
                <Iconify icon="tabler:arrow-ramp-right-3" />
              </FlexBox>
              <Typography variant="body2" color="custom.grey.500">
                {detail.primary_ns}
              </Typography>
            </FlexBox>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{ color: "text.black" }}>
                      Domain name
                    </TableCell>
                    <TableCell align="left" sx={{ color: "text.black" }}>
                      Status
                    </TableCell>
                    <TableCell align="left" sx={{ color: "text.black" }}>
                      Secondary Name Server
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.black" }}>
                      Provider
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "text.black" }}
                    >
                      {detail.domain_name}
                    </TableCell>
                    <TableCell sx={{ color: "#FFC107" }}>Pending</TableCell>
                    <TableCell align="left" sx={{ color: "text.black" }}>
                      {detail.secondary_ns}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "text.black" }}>
                      {detail.user_id.email}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </FlexBox>
        );
      })}
    </FlexBox>
  );
};

const NoDetails = () => {
  return (
    <FlexBox
      flexDirection="column"
      sx={{
        width: "50%",
        padding: "2rem",
        boxShadow: "5px 5px 10px #e5e5e5, -5px -5px 10px #e5e5e5",
        borderRadius: "1rem",
      }}
    >
      <Typography variant="body2" color="text.black">
        No domains has been ordered or active
      </Typography>
    </FlexBox>
  );
};
