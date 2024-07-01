import Product from "@/components/Product";
import { getProducts } from "@/utils/getProducts";

const Products = async ({ params }: { params: { locale: string } }) => {
  const products = await getProducts(params.locale);

  return (
    <div>
      {products ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Products;
