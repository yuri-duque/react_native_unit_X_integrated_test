import React from "react";
import { Colors, Sizes, Weight } from "../../theme/types";

export type TextStyleProps = {
  color?: Colors;
  size?: Sizes;
  weight?: Weight;
};

export type TextProps = TextStyleProps & {
  children: React.ReactNode;
};
