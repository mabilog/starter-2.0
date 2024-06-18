import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "fr"] as const;
export const defaultLocale = "en" as const;
export const localePrefix = "as-needed" satisfies LocalePrefix;

export const pathnames = {
  "/": "/",

  "/about": {
    en: "about",
    fr: "a-propos",
  },

  "/projects": "/projects",
  "projects/[projectSlug]": "/projects/[projectSlug]",
} satisfies Pathnames<typeof locales>;
