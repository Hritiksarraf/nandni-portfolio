import React, { forwardRef, useState } from "react";
import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import { PrimaryButton } from "../../../../components/button";
import { Body, Heading2, TextLarge } from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";
import { FiMail } from "react-icons/fi";

const Contact = forwardRef(({ ...props }, ref) => {
  const { secondary } = useColorSwitcher();

  return (
    <Box outline="0" ref={ref} tabIndex={-1} {...props} as="section">
      <Box mb="128px">
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>contact</Heading2>
        </SectionHeader>
      </Box>
      <Box
        mx="auto"
        w={{ base: "90%", xl: "60%" }}
        display="grid"
        placeItems="center"
      >
        <TextLarge mb="32px" align="center">
        I’m currently seeking exciting internship and entry-level opportunities in finance, business strategy, or client management. If my journey and skills resonate with your organization, I would love to connect!

        </TextLarge>
        <TextLarge mb="64px" align="center">
        If you have any questions, opportunities, or would just like to say hello, my inbox is always open — and I’ll get back to you as soon as possible.
        </TextLarge>
        <ContactButton secondary={secondary} />
      </Box>
    </Box>
  );
});

const ContactButton = ({ secondary }) => {
  const [icon, setIcon] = useState(false);
  return (
    <PrimaryButton as="a" href="mailto:nandiniupadhayay6@gmail.com" theme={secondary}>
      GET IN TOUCH
    </PrimaryButton>
  );
};

export default Contact;
