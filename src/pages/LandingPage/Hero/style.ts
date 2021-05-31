import styled from "styled-components";
import ButtonComponent from "../../../Components/Button"
export const Container = styled.div`
    background: url("https://cannonball-cdn.bamgrid.com/assets/originals/5BrandsNew_Mobile_LAS_(1)-1.jpg") #040814;
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    color: white;
   /*  display: grid;
    grid-template-rows:  repeat(2,auto);
    justify-items: center; */
     display: flex;
     flex-direction: column;
     align-items: center;
     @media (min-width: 769px) {
        background-image:url('https://cannonball-cdn.bamgrid.com/assets/originals/5BrandsNew_Desktop_LAS_(1)-1.jpg');
        align-items: flex-start;
        background-color: #050817;
        padding: 0 2em;
        padding-bottom:8em ;
    }
     @media (min-width: 1024px) {
       font-size: 18px;

    }
     @media (min-width: 1280px) {
       font-size: 20px;

    }
`;
export const LogoContainer = styled.div`
    width: 9em;
    height: fit-content;
    margin-top: 11.5em;
    margin-bottom: 1em;
`;
export const Logo = styled.img`
    width: 100%;
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 1.3em;
    padding: 0 0.7em;
    margin:0;
    @media (min-width: 500px) {
        font-size: 1.5em;
    }
    @media (min-width: 769px) {
        width: 35%;
        text-align: left;
        padding: 0  ;
    }
    @media (min-width: 1448px) {
        font-size: 2em;
    }
`;

export const Plans = styled.div`
    width: 100%;
    padding: 0 0.7em;
    @media (min-width: 769px) {
       display: flex;
       width: 70%;
       padding:0;
       max-width: 600px;
    }
`;
export const Plan = styled.div`
    max-width: 21em;
    margin: 0 auto;
    padding: 1em 0;
    box-sizing: border-box;
    :first-child{
       border-bottom: 2px solid hsla(0,0%,100%,.2);
    }
    @media (min-width: 769px) {
      :first-child{
        border-bottom: none;
       }
       flex-grow: 1;
       max-width: initial;
       :last-child{
        margin-left: 2em;
       }
    }

`;

export const Price = styled.div`
    text-align: center;
    font-weight: 800;
    font-size: 1.6em;
    span {
        color: #f9f9f9;
        font-weight: 400;
        font-size: 0.7em;
    }
`;

export const Button = styled(ButtonComponent)`
    color: #f9f9f9;
    background-color: #0063e5;
    border: 1px solid transparent;
    width: 100%;
    padding: 0.4em;
    font-size: 1.2em;
    border-radius: 0.2em;
`;


export const DescriptionSmall = styled.p`
    font-size: 0.6em;
    color: hsla(0,0%,75.3%,.8);
    text-align: center;
    margin: 1em 3em;
    @media (min-width: 769px) {
      margin: 1em 0;
    }
`;


