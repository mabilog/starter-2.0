import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix, pathnames } from "./config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  match: ["/", "/(fr|en)/:path", "/((?!_next|_vercel|.*\\..*).*)"],
};
