import hygraphClient, { gql } from "./hygraph-client";
import { stringToLocale } from "@/config";

export type NavLinks = {
  id: string;
  displayText: string;
  externalUrl: string;
  page: {
    id: string;
    url: string;
  } | null;
};

export type Navigation = {
  navId: string;
  navLink: NavLinks[];
};

export async function getNavigationById(id: string, locale: string) {
  const lang = stringToLocale(locale);

  const query = gql`
    query Navigation($id: String!, $locale: Locale!) {
      navigation(where: { navId: $id }, locales: [$locale]) {
        navId
        navLink {
          id
          page {
            ... on BlogPost {
              id
              url: slug
              title
            }
            ... on LandingPage {
              id
              url: link
            }
            ... on Product {
              id
              productSlug
              productName
            }
          }
          externalUrl
          displayText
        }
      }
    }
  `;

  try {
    const { navigation }: { navigation: Navigation } =
      await hygraphClient.request(query, { id, locale: lang });
    return navigation;
  } catch (error) {
    console.log("Error fetching navigation:", error);
  }
}
