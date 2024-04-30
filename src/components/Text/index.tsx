import React from "react";
import { Text as RNText } from "react-native";
import { TextProps } from "./type";
import { TextStyle } from "./style";

export const Text = ({ color, size, weight, children }: TextProps) => {
  const styles = TextStyle({ size, color, weight });

  return <RNText style={styles.text}>{children}</RNText>;
};
