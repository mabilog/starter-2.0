import { stringToLocale } from "@/config";
import hygraphClient from "./hygraph-client";
import { LandingPage } from "./interfaces";
import { PAGE_BY_SLUG_QUERY } from "./queries";

export async function getPageBySlug(link: string, locale: string) {
  const lang = stringToLocale(locale);
  try {
    const { landingPage }: { landingPage: LandingPage } =
      await hygraphClient.request(PAGE_BY_SLUG_QUERY, {
        link,
        locale: lang,
      });

    if (!landingPage) {
      console.warn("No landing page found for the given locale: ", locale);
      return null;
    }

    console.log("landingPage", landingPage);

    return landingPage;
  } catch (error) {
    console.error("Error fetching Page by slug: ", error);
  }
}
