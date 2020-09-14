import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  ArrowUp as DefaultArrowUp,
  ArrowDown as DefaultArrowDown,
} from "../../components/Arrow";
import GalleryItem from "./GalleryItem";
import { DesktopOnly, MobileOnly } from "../../breakpoints";

const ArrowUp = styled(DefaultArrowUp)`
  fill: #5b5b5b;
  margin: 0 auto;
  display: block;
`;

const ArrowDown = styled(DefaultArrowDown)`
  fill: #5b5b5b;
  margin: 0 auto;
  display: block;
`;

const Gallery = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((index + 1) % items.length);
    }, 20_000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, items]);

  return (
    <div>
      <MobileOnly>
        {items.map((item) => (
          <GalleryItem title={item.title} img={item.img} text={item.text} />
        ))}
      </MobileOnly>
      
      <DesktopOnly>
        <ArrowUp
          layout
          onClick={() => {
            setIndex((index - 1 + items.length) % items.length);
          }}
        />
        <GalleryItem
          title={items[index].title}
          img={items[index].img}
          text={items[index].text}
        />
        <ArrowDown
          layout
          onClick={() => {
            setIndex((index + 1) % items.length);
          }}
        />
      </DesktopOnly>
    </div>
  );
};

export default Gallery;
