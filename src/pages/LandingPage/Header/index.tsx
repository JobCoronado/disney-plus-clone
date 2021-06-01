import React, { useRef, useState } from "react";
//Styles
import * as SC from "./style";

export interface IHeaderProps {
  showAll: boolean;
}

const Header = ({ showAll }: IHeaderProps) => {
  return (
    <SC.Container showAll={showAll}>
      <SC.LogoContainer>
        <SC.Logo src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg" />
      </SC.LogoContainer>
      <SC.Buttons>
        {showAll && <SC.Button>Sign Up Now</SC.Button>}
        <SC.ButtonOutline>LOG IN</SC.ButtonOutline>
      </SC.Buttons>
    </SC.Container>
  );
};

export default Header;
