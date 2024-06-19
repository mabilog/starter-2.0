import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "fr"] as const;
export const defaultLocale = "en" as const;
export const localePrefix = "as-needed" satisfies LocalePrefix;

export enum Locale {
  EN = "en",
  FR = "fr",
}
export const stringToLocale = (locale: string): Locale | null => {
  switch (locale.toLowerCase()) {
    case "en":
      return Locale.EN;
    case "fr":
      return Locale.FR;
    default:
      return null;
  }
};

export const pathnames = {
  "/": "/",

  "/about": {
    en: "about",
    fr: "a-propos",
  },

  "/projects": "/projects",
  "projects/[projectSlug]": "/projects/[projectSlug]",
} satisfies Pathnames<typeof locales>;
