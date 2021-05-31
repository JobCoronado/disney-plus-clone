import React, { forwardRef } from 'react'
import * as SC from "./style"
export interface IHeroProps {
}
export type IRefType = HTMLDivElement
const Hero = forwardRef<IRefType, IHeroProps>((_props, ref) => {
    return (
        <SC.Container>
            <SC.LogoContainer ref={ref}>
                <SC.Logo src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg" />
            </SC.LogoContainer>
            <SC.Title>
                The greatest stories,
                all in one place.
            </SC.Title>
            <SC.Plans>
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
            <SC.DescriptionSmall >*Price may vary on other platforms. Third-party fees not related to Disney may apply.</SC.DescriptionSmall>
        </SC.Container>
    )
})

export default Hero
