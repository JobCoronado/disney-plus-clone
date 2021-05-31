import React, { useRef } from 'react'
import * as SC from "./style"
import Header from '../../Components/Header'
import Hero from "./Hero"
import Feature from "./Feature"
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
const LandingPage = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, { rootMargin: "0px", threshold: 0.80 });
    const isVisible = !!entry?.isIntersecting;
    console.log({ entry, isVisible })
    return (
        <SC.Container>
            <Header showAll={!isVisible} />
            <Hero ref={ref} />
            <Feature>
                <Feature.Content right>
                    <Feature.Title>Watch the way you want</Feature.Title>
                    <Feature.Description>
                        Enjoy the big screen experience on your TV, or watch on
                        your tablet, laptop, phone and more. You can watch an
                        ever-growing selection of titles in 4K. Plus, you can stream
                        on 4 screens at once, so everyone’s happy.
                </Feature.Description>
                </Feature.Content>
                <Feature.ImageWrapper>
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/MLP_DevicesLockup_LATAM_EN_desktop.png" />
                </Feature.ImageWrapper>
            </Feature>
            <Feature list>
                <Feature.Content list >
                    <Feature.Title>Exclusive Disney+ Originals</Feature.Title>
                    <Feature.Description>
                        Watch never-before-seen movies, series, shorts and more from the world’s greatest storytellers – only available on Disney+
                </Feature.Description>
                </Feature.Content>
                <Feature.ImageWrapper>
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/FAWS_(1)-3.png" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Mighty_Ducks.png" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/LATT_UKI_EN.png" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Mandalorian_S2_(1)-1.png" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/WandaVision_EN.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Soul_EN.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/EN-US_forkyQuestion@1.5X.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/RogueTrip_EN.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/EN-US_phinFerb@1.5X.jpg" />
                </Feature.ImageWrapper>
            </Feature>
            <Feature>

                <Feature.ImageWrapper>
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Module_Lionking_En_712_V2.png" srcset={""} />
                </Feature.ImageWrapper>
                <Feature.Content left>
                    <Feature.Title>Download any series or movie</Feature.Title>
                    <Feature.Description>
                        Download whatever you want and watch whenever you want. Your favorites will always stay with you, even if your Wi-Fi won’t.
                </Feature.Description>
                </Feature.Content>
            </Feature>
            <Feature list>
                <Feature.Content list >
                    <Feature.Title>Endless entertainment</Feature.Title>
                    <Feature.Description>
                        Discover the best stories from Disney, Pixar, Marvel, Star Wars and National Geographic in one place. From hit movies to timeless classics and new originals – there's something for everyone.
                </Feature.Description>
                </Feature.Content>
                <Feature.ImageWrapper>
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/AvengersEndgame@2x-2.png" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Mulan_EN-US.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Violetta_en-US.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/XMenWolverine_EN.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_Frozen2_AUNZ.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Poster_8@2x.png" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Star_Wars_TROS_EN.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Toy_Story_4_Grid_Item-1.jpg" />
                    <Feature.Image width="100%" src="https://cannonball-cdn.bamgrid.com/assets/originals/Onward_en-US.jpg" />
                </Feature.ImageWrapper>
            </Feature>
        </SC.Container>
    )
}

export default LandingPage
