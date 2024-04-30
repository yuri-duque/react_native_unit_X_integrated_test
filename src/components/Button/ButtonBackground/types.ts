import React from "react";
import { Colors } from "../../../theme/types";

export enum ButtonVariants {
  text = "text",
  contained = "contained",
  outlined = "outlined",
}

export type ButtonBackgroundStyleProps = {
  color?: Colors;
};

export type ButtonBackgroundProps = ButtonBackgroundStyleProps & {
  variant?: ButtonVariants;
  children: React.ReactNode;
};
