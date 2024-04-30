import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";
import { ButtonBackground } from "./ButtonBackground";
import { Text } from "../Text";
import { ButtonVariants } from "./ButtonBackground/types";

export const Button = ({
  variant = ButtonVariants.contained,
  color,
  text,
  textColor,
  textSize,
  textWigth,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonBackground variant={variant} color={color}>
        <Text color={textColor} size={textSize} weight={textWigth}>
          {text}
        </Text>
      </ButtonBackground>
    </TouchableOpacity>
  );
};
