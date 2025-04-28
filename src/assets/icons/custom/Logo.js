import { createIcon, defaultProps, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";

const groupVariants = {
  hidden: {
    fillOpacity: 0,
  },
  visible: {
    fillOpacity: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const LogoBase = createIcon({
  defaultProps,
  displayName: "LogoBaseCursiveBoldN",
  viewBox: "0 0 100 100",
  path: (
    <motion.g variants={groupVariants} initial="hidden" animate="visible">
      <motion.path
        d="M20,70 
           Q25,50 35,50 
           Q45,50 50,70 
           Q55,90 65,90 
           Q75,90 80,70 
           L80,40"
        variants={pathVariants}
        fill="none"
        stroke="currentColor"
        strokeWidth="15"  
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.g>
  ),
});

const Logo = ({ boxSize = "64px", ...props }) => {
  const { colorLight, colorDark } = useColorSwitcher();
  return <Icon {...props} color={colorDark} boxSize={boxSize} as={LogoBase} />;
};

export default Logo;
