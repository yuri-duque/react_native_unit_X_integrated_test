import { StyleSheet } from "react-native";
import { ButtonBackgroundStyleProps } from "./types";
import { Colors } from "../../../theme/types";
import { useTheme } from "../../../hooks/themeContext";

export const ButtonBackgroundStyle = ({
  color = Colors.primary,
}: ButtonBackgroundStyleProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    base: {
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
    },

    // Variant
    text: {},
    contained: {
      borderRadius: theme.sizes.radius,
      backgroundColor: theme.colors[color],
    },
    outlined: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors[color],
      borderWidth: 2,
      borderRadius: theme.sizes.radius,
    },
  });
};
