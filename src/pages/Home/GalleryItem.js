import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import RedHex from "./RedHex";

const GalleryItemContainer = styled.div`
  display: flex;
  padding: 115px 128px;
  position: relative;
`;

const GalleryItemImageBg = styled(motion.div)`
  position: absolute;
  width: 95%;
  height: 131%;
  left: -42px;
  top: -68px;
  background: #f2f2f2;
  box-shadow: 0px 4px 53px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  z-index: -1;
`;

const GalleryItemImage = ({ img }) => {
  return (
    <div style={{ position: "relative" }}>
      <GalleryItemImageBg layout />

      <motion.img
        key={img}
        src={img}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
      />
    </div>
  );
};

const GalleryItemTextContainer = styled.div`
  margin-left: 40px;
  max-width: 400px;
`;

const GalleryItemHeader = styled(motion.h1)`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  color: #333333;
  margin-bottom: 19px;
`;

const GalleryItemText = styled(motion.h1)`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #333333;
`;

const GalleryItem = ({ img, text, title }) => (
  <GalleryItemContainer>
    <AnimatePresence>
      <GalleryItemImage img={img} />
    </AnimatePresence>
    <GalleryItemTextContainer>
      <RedHex />
      <AnimatePresence>
        <GalleryItemHeader layoutId="header" layout>
          {title}
        </GalleryItemHeader>
        <GalleryItemText layoutId="text" layout>
          {text}
        </GalleryItemText>
      </AnimatePresence>
    </GalleryItemTextContainer>
  </GalleryItemContainer>
);

const MobileGalleryItem = () => {};


export { MobileGalleryItem };

export default GalleryItem;
