export enum Weight {
  ligth = "200",
  normal = "normal",
  ligthBold = "500",
  bold = "bold",
  extraBold = "800",
}

export type SizesType = {
  base: number;
  text: number;
  label: number;
  radius: number;
  padding: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
};

export enum Sizes {
  base = "base",
  text = "text",
  label = "label",
  radius = "radius",
  padding = "padding",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
}

export type SpacingsType = {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
};

export enum Spacings {
  xs = "xs",
  s = "s",
  sm = "sm",
  m = "m",
  md = "md",
  l = "l",
  xl = "xl",
  xxl = "xxl",
}

export type ColorsType = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  white: string;
};

export enum Colors {
  primary = "primary",
  secondary = "secondary",
  background = "background",
  text = "text",
  error = "error",
  white = "white",
}

export type ThemeType = {
  colors: ColorsType;
  spacings: SpacingsType;
  sizes: SizesType;
};
