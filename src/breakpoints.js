import React from "react";
import { generateMedia } from "styled-media-query";
import Media from "react-media";

const desktop = "1240px";

export const media = generateMedia({
  desktop,
});

export const MobileOnly = ({ children }) => {
  return (
    <Media query={{ maxWidth: desktop }}>
      {(matches) => matches && children}
    </Media>
  );
};

export const DesktopOnly = ({ children }) => {
  return (
    <Media query={{ minWidth: desktop }}>
      {(matches) => matches && children}
    </Media>
  );
};
