import hygraphClient, { gql } from "./hygraph-client";

export type NavLinks = {
  navLink: {
    id: string;
    displayText: string;
    externalUrl: string;
    page: {
      id: string;
      url: string;
    } | null;
  }[];
};

export type Navigation = {
  navId: string;
  navLinks: NavLinks;
};

export async function getNavigationById(id: string, locale: string) {
  const query = gql`
    query Navigation($id: String) {
      navigation(where: { navId: $id }, locales: $locale) {
        navLink {
          id
          displayText
          externalUrl
          page {
            ... on BlogPost {
              id
              url: slug
            }
            ... on LandingPage {
              id
              url: link
            }
            ... on Product {
              id
              productSlug
            }
          }
        }
      }
    }
  `;

  try {
    const { navigation }: { navigation: NavLinks } =
      await hygraphClient.request(query, { id, locale });
  } catch (error) {
    console.log(error);
  }
}
