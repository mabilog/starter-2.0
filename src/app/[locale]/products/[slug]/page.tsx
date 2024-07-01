import { getProduct } from "@/utils/getProducts";
import { Product as ProductProps } from "@/utils/interfaces";
import Product from "@/components/Product";

const page = async ({
  params,
}: {
  params: { locale: string; slug: string };
}) => {
  const product = (await getProduct(
    params.slug,
    params.locale
  )) as ProductProps;

  return <Product key={product.id} product={product} />;
};

export default page;
