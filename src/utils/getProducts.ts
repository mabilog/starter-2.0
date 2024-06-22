import hygraphClient, { gql } from "./hygraph-client";
import { stringToLocale } from "@/config";

export type Products = {
  id: string;
  productName: string;
  productSlug: string;
  productPrice: number;
  productDescription: {
    html: string;
  };
  productImage: {
    url: string;
    width: number;
    height: number;
  };
};

export async function getProducts(locale: string) {
  const lang = stringToLocale(locale);

  const query = gql`
    query Products($locale: String!) {
      products (locales, [$locale]) {
        id
        productName
        productSlug
        productPrice
        productDescription {
          html
        }
        productImage(first: 1) {
          url
          width
          height
        }
      }
    }
  `;

  try {
    const { products }: { products: Products } = await hygraphClient.request(
      query,
      { locale: lang }
    );

    console.log("products", products);
    return "hello from the other side";
  } catch (error) {
    console.log("Error fetching products", error);
  }
}
