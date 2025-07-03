export const light = {
  brand: "#3795FF",
  lightBrand: "#c3dfff",
  bg: "#e3e3e3",
  fg: "#242424",
  border: "#a1a1a1",
};

export type Theme = typeof light;

export const dark: Theme = {
  ...light,
  bg: "#242424",
  fg: "#e3e3e3",
  border: "#818181",
};

export const theme = { light, dark };
