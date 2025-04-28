import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef, useEffect } from "react";
import { ImageProfile } from "../../../../assets/images";
import SpherePulse from "../../../../assets/motion/SpherePulse";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  Body,
  BodyLink,
  Bullet,
  Heading2,
  Heading3,
} from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const About = forwardRef(({ ...props }, ref) => {
  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");
  const { secondary } = useColorSwitcher();

  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props} w="100%">
      <Box w="100%" mb={{ base: "32px", md: "64px", xl: "128px" }}>
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>about</Heading2>
        </SectionHeader>
      </Box>
      <Stack
        align="center"
        spacing={16}
        direction={{ base: "column", xl: "row" }}
        justify={{ base: "space-between", xl: "space-evenly" }}
      >
        <Box
          bg={lightGreyBg}
          rounded="full"
          display="grid"
          placeItems="center"
          p={{ base: "8px", md: "16px" }}
        >
          <Box
            bg={greyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <ImageProfile />
          </Box>
        </Box>
        <Stack spacing={12} p="8px" w={{ base: "100%", xl: "50%" }}>
          <Body mb="2em">
          I’m Nandini Upadhayay, a commerce graduate and a passionate learner, currently diving deeper into the world of finance through my PGDM at ISBR Business School, Bangalore. Over the years, I’ve explored roles in sales, marketing, and client management, while also leading teams and volunteer initiatives that strengthened my leadership and organizational skills. I believe in staying curious, thinking creatively, and working strategically to solve problems and drive success.
          This portfolio is a glimpse into my academic, professional, and personal journey — the experiences that have shaped me, the skills I’ve built, and the values I bring to every opportunity I take on. Thanks for visiting!
          </Body>
          {/* <Box>
            <Heading3>What I've been up to:</Heading3>
            <Stack as="ul">
              <Bullet as="li">Building this!</Bullet>
              <Bullet as="li">Getting deeper into React and Nodejs</Bullet>
              <Bullet as="li">Learning GraphQL</Bullet>
              <Bullet as="li">
                Live Coding on{" "}
                <Link
                  color={secondary}
                  textDecor="underline"
                  href="https://www.twitch.tv/gregogun"
                >
                  Twitch
                </Link>
              </Bullet>
              <Bullet as="li">
                Starting the{" "}
                <Link
                  color={secondary}
                  textDecor="underline"
                  href="https://chingu.io/"
                >
                  Chingu Voyage 28
                </Link>
              </Bullet>
            </Stack>
          </Box> */}
        </Stack>
      </Stack>
    </Box>
  );
});

export default About;
