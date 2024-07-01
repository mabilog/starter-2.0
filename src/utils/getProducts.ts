import hygraphClient from "./hygraph-client";
import { stringToLocale } from "@/config";
import { Product } from "./interfaces";
import { PRODUCTS, PRODUCT } from "./queries";

export async function getProducts(locale: string) {
  const lang = stringToLocale(locale);

  try {
    const { products }: { products: Product[] } = await hygraphClient.request(
      PRODUCTS,
      { locale: lang }
    );

    return products;
  } catch (error) {
    console.log("Error fetching products", error);
  }
}

export async function getProduct(slug: string, locale: string) {
  const lang = stringToLocale(locale);

  try {
    const { product }: { product: Product } = await hygraphClient.request(
      PRODUCT,
      { slug, locale: lang }
    );

    return product;
  } catch (error) {
    console.log("Error fetching products", error);
  }
}
