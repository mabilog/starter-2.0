import { Product as ProductProp } from "@/utils/interfaces";
import Product from "./Product";
import Main from "./Main";

export default function ProductGrid({
  products,
  title,
}: {
  products: ProductProp[];
  title: string;
}) {
  return (
    <Main>
      <div className="">
        {title && (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
        )}
        <div className="">
          {products.map((product: ProductProp) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Main>
  );
}
