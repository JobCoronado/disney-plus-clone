import styled from "styled-components";
//Types
import { IHeaderProps } from ".";
//Components
import ButtonComponent from "../../../Components/Button";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
  position: fixed;
  width: 100%;
  background: ${({ showAll }: IHeaderProps) =>
    showAll ? "#090b13" : "transparent"};
  transition: background 0.5s;
`;

export const LogoContainer = styled.div`
  width: 4em;
  @media (min-width: 769px) {
    width: 6em;
  }
`;
export const Logo = styled.img`
  width: 100%;
`;
export const Buttons = styled.div`
  display: flex;
`;
export const ButtonOutline = styled(ButtonComponent)`
  font-size: 1em;
  color: white;
`;
export const Button = styled(ButtonComponent)`
  color: #f9f9f9;
  background-color: #0063e5;
  border: 1px solid transparent;
  padding: 0 0.6em;
  font-size: 1.2em;
  border-radius: 0.2em;
  margin-right: 2em;
`;
