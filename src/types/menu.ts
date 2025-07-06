import { z } from "zod";

import { routeKeys } from "../navigation/routes";

export const MenuItemSchema = z.object({
  id: z.number(),
  key: z.enum(routeKeys),
  label: z.string(),
});

export type MenuItemType = z.infer<typeof MenuItemSchema>;
