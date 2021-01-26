import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Indicators from 'components/molecules/Slider/Indicators';
import Slide from 'components/molecules/Slider/Slide';
import bgDesktop from 'assets/image/bg-desktop.png';
import bgDesktop1 from 'assets/image/gallery/imageGalleryDesktop@2_1x.png';
import mobileBg from 'assets/image/slider1@2x.png';
import HeaderContent from 'components/molecules/Header/HeaderContent';

const items = [
  { content: bgDesktop, id: 1 },
  { content: bgDesktop1, id: 2 },
  { content: bgDesktop, id: 3 },
];
const mobileSlide = [
  { content: mobileBg, id: 1 },
  { content: mobileBg, id: 2 },
  { content: mobileBg, id: 3 },
];

const StyledWrapper = styled.section`
  position: relative;
  z-index: 0;
  height: 100vh;
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
`;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateWidth = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const changeSlide = (index) => {
    setCurrent(index);
  };

  return (
    <StyledWrapper>
      <StyledContentWrapper />
      <HeaderContent />
      {isDesktop &&
        items.map((item, index) => (
          <Slide item={item.content} current={current} index={index} key={item.id} />
        ))}
      {!isDesktop &&
        mobileSlide.map((item, index) => (
          <Slide item={item.content} current={current} index={index} key={item.id} />
        ))}
      <Indicators slides={items} handleChange={changeSlide} current={current} />
    </StyledWrapper>
  );
};

export default Slider;
