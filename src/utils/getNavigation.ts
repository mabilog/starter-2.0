import hygraphClient from "./hygraph-client";
import { stringToLocale } from "@/config";
import { Navigation } from "./interfaces";
import { NAVIGATION_BY_ID } from "./queries";

export async function getNavigationById(id: string, locale: string) {
  const lang = stringToLocale(locale);

  try {
    const { navigation }: { navigation: Navigation } =
      await hygraphClient.request(NAVIGATION_BY_ID, { id, locale: lang });
    return navigation;
  } catch (error) {
    console.log("Error fetching navigation:", error);
  }
}
