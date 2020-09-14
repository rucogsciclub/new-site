import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BackToTopContainer = styled(motion.div)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  display: flex;
  align-items: center;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  background: rgba(226, 226, 226);
  border-radius: 58px;
  height: 61px;
  z-index: 999;
  text-decoration: none;
  color: inherit;
  padding: 0 35px;
  line-height: 61px;
  user-select: none;
  cursor: pointer;
`;

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <BackToTopContainer
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}
      transition={spring}
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      Back to top ↑
    </BackToTopContainer>
  );
};

export default BackToTop;
