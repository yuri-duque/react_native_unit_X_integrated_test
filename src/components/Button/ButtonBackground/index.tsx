import React from "react";
import { ButtonBackgroundProps, ButtonVariants } from "./types";
import { StyleSheet, View } from "react-native";
import { ButtonBackgroundStyle } from "./styles";

export const ButtonBackground = ({
  variant = ButtonVariants.contained,
  color,
  children,
}: ButtonBackgroundProps) => {
  const styles = ButtonBackgroundStyle({ color });

  let style = StyleSheet.compose(styles.base, styles[variant]);

  return <View style={style}>{children}</View>;
};
