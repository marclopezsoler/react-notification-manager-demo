export const light = {
  brand: "#3795FF",
  brandHover: "#124d87",
  lightBrand: "#dfedfd",
  bg: "#ffffff",
  fg: "#000000",
  border: "#a1a1a1",
};

export type Theme = typeof light;

export const dark: Theme = {
  ...light,
  bg: "#000000",
  fg: "#ffffff",
  border: "#818181",
};

export const theme = { light, dark };
