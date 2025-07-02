export const routes = {
  main: "/",
  installation: "/installation",
  examples: "/examples",
  theme: "/theme",
} as const;

export type RouteKey = keyof typeof routes;

export const routeKeys = ["main", "installation", "examples", "theme"] as const;
