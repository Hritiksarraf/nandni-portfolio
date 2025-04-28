import React from "react";
import {
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";
import {
  IconDev,
  IconLinkedin,
  IconTwitch,
  IconTwitter,
  IconYoutube,
  IconGithubAlt,
} from "../../../assets/icons/imported/IconSocials";
import { IconGithub } from "../../../assets/icons";

const SocialLink = ({ name, href, icon, ...props }) => {
  const { colorLight, colorDark } = useColorSwitcher();
  return (
    <Box as="li" listStyleType="none">
      <Link
        listStyleType="none"
        p=".5em"
        aria-label={name}
        {...props}
        href={href}
        // target="_blank"
        // rel="noopener"
        // rel="noreferrer"
      >
        <Icon as={icon} />
      </Link>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" mb="16px" display="grid" placeItems="center">
      <Stack as="ul" mb="16px" direction="row" spacing={4}>
        <SocialLink
          name="LinkedIn"
          href="https://www.linkedin.com/in/nandini-upadhayay-851799247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          icon={IconLinkedin}
        />
        <SocialLink
          name="Mail"
          href="mailto:nandiniupadhayay6@gmail.com"
          icon={IconGithubAlt}
        />
        <SocialLink
          name="Twitter"
          href="https://www.instagram.com/nandini.u_/"
          icon={IconTwitter}
        />
        
      </Stack>
      {/* <Box display="grid" placeItems="center">
        <Link href="https://github.com/gregogun">
          Designed & Coded by Greg Ogun
        </Link>
      </Box> */}
    </Box>
  );
};

export default Footer;
