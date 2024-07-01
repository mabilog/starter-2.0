import { gql } from "./hygraph-client";

export const PAGE_BY_SLUG_QUERY = gql`
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
            productSlug
            productDescription {
              html
            }
            productCategories {
              categoryName
            }
            productImage {
              url
              height
              width
              altText
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

export const NAVIGATION_BY_ID = gql`
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

export const PRODUCTS = gql`
  query Products($locale: Locale!) {
    products(locales: [$locale]) {
      id
      productName
      productSlug
      productPrice
      productDescription {
        html
      }
      productImage {
        url
        width
        height
      }
    }
  }
`;

export const PRODUCT = gql`
  query Product($slug: String!, $locale: Locale!) {
    product(where: { productSlug: $slug }, locales: [$locale]) {
      id
      productCategories {
        categoryName
      }
      productDescription {
        html
      }
      productImage {
        altText
        height
        id
        url
        width
      }
      productName
      productPrice
      productSlug
    }
  }
`;
