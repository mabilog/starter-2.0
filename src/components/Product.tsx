import { Product as ProductProps } from "@/utils/interfaces";
import Image from "next/image";

const Product = function ({
  product,
  key,
}: {
  product: ProductProps;
  key: string;
}) {
  const thumbnail = product.productImage[0];

  return (
    <div className="" key={key}>
      {thumbnail && (
        <Image
          src={thumbnail.url}
          alt={thumbnail.altText}
          width="100"
          height="100"
        />
      )}
      <h3 className="">
        <a href={"/products/" + product.productSlug}>
          <span aria-hidden="true" className="absolute inset-0" />
          {product.productName}
        </a>
      </h3>
      <p className="">${product.productPrice}</p>
    </div>
  );
};

export default Product;
