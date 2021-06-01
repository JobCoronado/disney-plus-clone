import React, { forwardRef } from "react";
//Styles
import * as SC from "./style";
//Hooks
import useScreen from "../../../hooks/useScreen";

export interface IHeroProps {}

export type IRefType = HTMLDivElement;
const Hero = forwardRef<IRefType, IHeroProps>((_props, ref) => {
  const screen = useScreen();
  const width = screen?.width ?? 0;
  const isMobile = width < 769;
  return (
    <SC.Container>
      <SC.LogoContainer ref={isMobile ? ref : null}>
        <SC.Logo src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg" />
      </SC.LogoContainer>
      <SC.Title>The greatest stories, all in one place.</SC.Title>
      <SC.Plans ref={!isMobile ? ref : null}>
        <SC.Plan>
          <SC.Price>
            COP 23.900 <span>/month</span>
          </SC.Price>
          <SC.Button>Sign Up Now</SC.Button>
        </SC.Plan>
        <SC.Plan>
          <SC.Price>
            COP 239.900 <span>/year</span>
          </SC.Price>
          <SC.Button>Sign Up Now</SC.Button>
        </SC.Plan>
      </SC.Plans>
      <SC.DescriptionSmall>
        *Price may vary on other platforms. Third-party fees not related to
        Disney may apply.
      </SC.DescriptionSmall>
    </SC.Container>
  );
});

export default Hero;
