import styled, { css } from "styled-components";
import { IContent, IFeature } from "./"
export interface IImageContainer {
    width?: string;
}

export interface ImageWrapper {
    isOneImage: boolean;
}


export const Container = styled.div`
    padding: 2em 1em;
     @media (min-width: 769px) {
        display:${({ list }: IFeature) => list ? "block" : "flex"};
        align-items: center;
        max-width: 1440px;
        margin: 4em auto;
    }
`;


export const ImageWrapper = styled.div`
    ${({ isOneImage }: ImageWrapper) => !isOneImage && css`
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 1.8em;
        margin 2em 0;
         @media (min-width: 769px) {
            grid-template-columns: repeat(3,1fr);
        }
    `}

`;

export const ImageContainer = styled.div`
    width: ${({ width }: IImageContainer) => width};
   
`;

export const Image = styled.img`
    width: 100%;
     border-radius: 0.4em;
`;

export const Title = styled.h2`
    color: white;
    text-align: center;
    font-size: 1.6em;
    
`;

export const Description = styled.p`
    color:hsla(0,0%,75.3%,.8);
    text-align: center;
    font-size: 1em;
`;
export const Content = styled.div`
    @media (min-width: 1024px) {
        font-size: 18px;
        ${({ left, right, list }: IContent) => css`
             max-width: ${list ? "initial" : "600px"};
            margin-left: ${left ? "5em" : 0};
            margin-right: ${right ? "5em" : 0};
             @media (min-width: 1024px) {
               ${Title},${Description}{
                   text-align: ${list ? "center" : "left"};
               }
            }
            
    `}
    }
     @media (min-width: 1280px) {
        font-size: 20px;
    }
`;

