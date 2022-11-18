// Styles:
import { Container, Arrow, Wrapper, Slide, ImageContainer, Image, InfoContainer, Title, Description, Button } from "./Slider.styles";
// Icons:
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
// Hook:
import { useState } from "react";
// Data:
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const clickHandler = direction => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <section id="slider">
      <Container>
        <Arrow direction="left" onClick={() => clickHandler("left")}>
          <RiArrowLeftSFill />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          { sliderItems.map(item => (
            <Slide key={item.id} bg={item.bg}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>  
          )) }
          
        </Wrapper>
        <Arrow direction="right" onClick={() => clickHandler("left")}>
          <RiArrowRightSFill />
        </Arrow>
      </Container>
    </section>
  );
};

export default Slider;