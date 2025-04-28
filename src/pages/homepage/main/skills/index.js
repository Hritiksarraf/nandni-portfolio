import React, { forwardRef } from "react";
import { Box, Text, VStack, Grid } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import { Body, Heading2 } from "../../../../components/typography";

const Skills = forwardRef(({ ...props }, ref) => {
  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props}>
      <Box mb="128px">
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>skills</Heading2>
        </SectionHeader>
      </Box>

      <Text
        pb="1em"
        fontSize={{ base: "1em", sm: "1.25em", md: "1.5em", xl: "2em" }}
        textAlign="center"
      >
        My Skills & Tools:
      </Text>

      <Grid
        mx="auto"
        py="5em"
        w={{ base: "100%", lg: "80%" }}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap={{ base: 8, md: 16 }}
        placeItems="center"
      >
        <SkillCategory
          title="P Skills"
          skills={[
            "MS Excel - Amateur",
            "Power BI - Beginner",
          ]}
        />
        <SkillCategory
          title="Soft Skills"
          skills={[
            "Communication",
            "Planning & Strategy",
            "Analytical Thinking",
            "Creative Thinking",
          ]}
        />
      </Grid>
    </Box>
  );
});

const SkillCategory = ({ title, skills }) => {
  return (
    <VStack spacing={6} align="center" textAlign="center">
      <Text
        fontSize={{ base: "1.5em", md: "2em" }}
        fontWeight="bold"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <VStack spacing={4}>
        {skills.map((skill, index) => (
          <Body key={index} fontSize={{ base: "1em", md: "1.2em" }}>
            {skill}
          </Body>
        ))}
      </VStack>
    </VStack>
  );
};

export default Skills;
