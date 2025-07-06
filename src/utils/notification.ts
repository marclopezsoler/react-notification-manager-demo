import type { NotifyArgs } from "../types/notification";

export const snippetTemplate = (props: NotifyArgs): string => {
  const lines = Object.entries(props)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `  ${k}: ${typeof v === "string" ? `"${v}"` : v},`)
    .join("\n");

  return `notify({\n${lines}\n})`;
};

export type SnippetItem = {
  code: string;
  params: NotifyArgs;
};

export type DemoSnippet = SnippetItem & { descKey: string };

export const makeSnippet = (p: NotifyArgs): SnippetItem => ({
  code: snippetTemplate(p),
  params: p,
});
