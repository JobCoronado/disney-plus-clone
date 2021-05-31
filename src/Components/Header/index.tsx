import { useViewportScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';
import * as SC from "./style";
export interface IHeaderProps {
    showAll: boolean;
}
const Header = ({ showAll }: IHeaderProps) => {
    /*  const { scrollYProgress } = useViewportScroll();
     const $Container = useRef<HTMLDivElement>(null)
     scrollYProgress.onChange(x => {
         console.log(x)
         if (x > 0.07) {
             if ($Container && $Container.current)
                 $Container.current.style.background = "red";
         } else {
             if ($Container && $Container.current)
                 $Container.current.style.background = "blue";
         }
     }) */
    return (
        <SC.Container showAll={showAll} /* ref={$Container} */ >
            <SC.LogoContainer>
                <SC.Logo src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg" />
            </SC.LogoContainer>
            <SC.Button>LOG IN</SC.Button>
        </SC.Container>
    )
}

export default Header
