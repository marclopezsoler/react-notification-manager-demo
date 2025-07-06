export const routes = {
  main: "/",
  installation: "/installation",
  examples: "/examples",
  customization: "/customization",
} as const;

export type RouteKey = keyof typeof routes;

export const routeKeys = [
  "main",
  "installation",
  "customization",
  "examples",
] as const;
