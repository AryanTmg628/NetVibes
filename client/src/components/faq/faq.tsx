import { Stack, Typography } from "@mui/material";
import { ContentCollapse } from "../common/content-collapse/content-collapse";
import FlexBox from "../../utils/box/styled-box";
import faq from "../../data/faq.json";

export const FAQ = () => {
  return (
    <FlexBox flexDirection="column" alignItems="center" paddingY={3}>
      <Stack spacing={1} width="90%" maxWidth="1000px">
        <Typography variant="h5" color="primary.dark">
          Frequently Asked Questions{" "}
        </Typography>
        <Typography variant="body1" color="custom.grey.200">
          Here are some of the frequently asked questions and their answers.{" "}
        </Typography>
        <Stack spacing={4} paddingTop={3}>
          {faq?.questions?.map((question, index) => (
            <ContentCollapse
              key={index}
              title={question.title}
              subContent={question.subContent}
              plus="ic-round-add"
            />
          ))}
        </Stack>
      </Stack>
    </FlexBox>
  );
};
