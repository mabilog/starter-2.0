import React from "react";

const CategoriesSlug = ({
  params,
}: {
  params: { locale: string; slug: string };
}) => {
  return <div>{params.slug}</div>;
};

export default CategoriesSlug;
