import { ButtonBackgroundProps } from "./ButtonBackground/types";
import { TextProps } from "../Text/type";

export type ButtonProps = {
  variant?: ButtonBackgroundProps["variant"];
  color?: ButtonBackgroundProps["color"];
  text?: string;
  textColor?: TextProps["color"];
  textSize?: TextProps["size"];
  textWigth?: TextProps["weight"];

  onPress: () => void;
};
