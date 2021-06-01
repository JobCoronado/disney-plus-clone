import React from "react";
//Styles
import * as SC from "./style";

//Types
export interface IFeature {
  list?: boolean;
}

export interface IFeatureComposition {
  Title: React.FC;
  ImageWrapper: React.FC;
  Content: React.FC<IContent>;
  Image: React.FC<IImageProps>;
  Description: React.FC;
}

export interface IImageProps {
  src: string;
  width?: string;
  srcset?: string;
}

export interface IContent {
  left?: boolean;
  right?: boolean;
  list?: boolean;
}

const Feature: React.FC<IFeature> & IFeatureComposition = ({
  children,
  ...props
}) => {
  return <SC.Container {...props}>{children}</SC.Container>;
};

Feature.ImageWrapper = ({ children }) => {
  const numberImage = React.Children.toArray(children).length;
  const isOneImage = numberImage === 1;

  return <SC.ImageWrapper isOneImage={isOneImage}>{children}</SC.ImageWrapper>;
};

Feature.Image = ({ children, width, ...props }) => {
  return (
    <SC.ImageContainer {...props}>
      <SC.Image {...props} />
    </SC.ImageContainer>
  );
};

Feature.Content = ({ children, ...props }) => {
  return <SC.Content {...props}>{children}</SC.Content>;
};

Feature.Title = ({ children }) => {
  return <SC.Title>{children}</SC.Title>;
};

Feature.Description = ({ children }) => {
  return <SC.Description>{children}</SC.Description>;
};
export default Feature;
