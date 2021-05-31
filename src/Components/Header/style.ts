import styled from "styled-components";
import { IHeaderProps } from ".";
import ButtonComponent from "../Button";

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  position: fixed;
  width: 100%;
  background: ${({ showAll }: IHeaderProps) => showAll ? "#090b13" : "transparent"};
`;
export const Button = styled(ButtonComponent)`
  font-size: 1em;
  color:white;
`;
export const LogoContainer = styled.div`
  width: 4em;
`;
export const Logo = styled.img`
  width:100%;
`;