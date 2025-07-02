export const light = {
  brand: "#3795FF",
  bg: "#e3e3e3",
  fg: "#242424",
};

export type Theme = typeof light;

export const dark: Theme = {
  ...light,
  bg: "#242424",
  fg: "#e3e3e3",
};

export const theme = { light, dark };
