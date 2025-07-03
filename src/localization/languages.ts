export type Lang = {
  code: string;
  label: string;
};

const languages: Lang[] = [
  { code: "en-US", label: "English" },
  { code: "es-ES", label: "Español" },
];

export const fallbackLng = "en-US";

export default languages;
