export const routes = {
  main: "/",
  installation: "/installation",
  examples: "/examples",
  configuration: "/configuration",
} as const;

export type RouteKey = keyof typeof routes;

export const routeKeys = [
  "main",
  "installation",
  "configuration",
  "examples",
] as const;
