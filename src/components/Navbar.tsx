import { getNavigationById } from "@/utils/getNavigation";
import React from "react";

const Navbar = async ({ params }: { params: { locale: string } }) => {
  const nav = await getNavigationById("main", params.locale);
  console.log(nav);
  return <div>Navbar</div>;
};

export default Navbar;
