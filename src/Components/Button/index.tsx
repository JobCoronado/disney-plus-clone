import React from 'react';
import * as SC from "./style";


export interface IButton {
    className?: string;
    type?: "button" | "submit";
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children, ...props }) => <SC.Button {...props}>{children}</SC.Button>


export default Button
