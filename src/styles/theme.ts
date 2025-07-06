export const light = {
  brand: "#3795FF",
  brandHover: "#124d87",
  lightBrand: "#dfedfd",
  bg: "#ffffff",
  fg: "#000000",
  border: "#EBEBEB",
  lightBg: "#FAFAFA",
};

export type Theme = typeof light;

export const dark: Theme = {
  ...light,
  bg: "#000000",
  fg: "#ffffff",
  border: "#2E2E2E",
  lightBrand: "#36393D",
  brandHover: "#87B1DA",
  lightBg: "#0A0A0A",
};

export const theme = { light, dark };
