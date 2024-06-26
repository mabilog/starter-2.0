import { localePrefix } from "./../config";
import { stringToLocale } from "@/config";
import hygraphClient, { gql } from "./hygraph-client";

export interface HtmlContent {
  html: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  body: HtmlContent;
}

export interface ProductCategory {
  categoryName: string;
  description: HtmlContent;
  slug: string;
  id: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface SellerInformation {
  businessName: string;
  businessDescription: string;
  businessLogo: Image;
}

export interface ProductCategoryForGrid {
  categoryName: string;
}

export interface Product {
  productName: string;
  productSlug: string;
  productPrice: number;
  productDescription: HtmlContent;
  productImage: Image;
  ProductCategories: ProductCategoryForGrid[];
}

export interface ProductGrid {
  __typename: "ProductGrid";
  id: string;
  headline: string;
  description: HtmlContent;
  products: Product[];
}

export interface Button {
  text: string;
  url: string;
}

export interface CallToAction {
  __typename: "CallToAction";
  id: string;
  body: HtmlContent;
  button: Button;
  heading: string;
  image: Image;
}

export type Stripe = ProductGrid | CallToAction;

export interface LandingPage {
  landingPageTitle: string;
  link: string;
  locale: string;
  blogPosts: BlogPost[];
  productCategories: ProductCategory[];
  sellerInformation: SellerInformation[];
  stripes: Stripe[];
}

export interface PageBySlugResponse {
  id: string;
  landingPage: LandingPage;
}

export async function getPageBySlug(id: string, locale: string) {
  const lang = stringToLocale(locale);
  console.log("id", id);

  const query = gql`
    query PageBySlug($link: String!, $locale: Locale!) {
      landingPage(where: { link: $link }, locales: [$locale]) {
        id
        landingPageTitle
        link
        locale
        blogPosts {
          title
          slug
          body {
            html
          }
        }
        productCategories {
          categoryName
          description {
            html
          }
          slug
          id
        }
        sellerInformation {
          businessName
          businessDescription
          businessLogo {
            url
            width
            height
          }
        }
        stripes {
          ... on ProductGrid {
            __typename
            id
            headline
            description {
              html
            }
            products {
              productName
              productPrice
              productDescription {
                html
              }
              productCategories {
                categoryName
              }
            }
          }
          ... on CallToAction {
            __typename
            id
            body {
              html
            }
            button {
              text
              url
            }
            heading
            image {
              url
              height
              width
            }
          }
        }
      }
    }
  `;

  try {
    const { landingPage }: { landingPage: LandingPage } =
      await hygraphClient.request(query, {
        link: id,
        locale: lang,
      });

    if (!landingPage) {
      console.warn("No landing page found for the given locale: ", locale);
      return null;
    }

    return landingPage;
  } catch (error) {
    console.error("Error fetching Page by slug: ", error);
  }
}
