import { Navigation, getNavigationById } from "@/utils/getNavigation";
import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = async ({ params }: { params: { locale: string } }) => {
  console.log("navbar params", params);

  const nav = (await getNavigationById("main", params.locale)) as Navigation;
  console.log("nav", nav.navLink);
  // console.log("nav.navLink", nav.navLink);
  return (
    <>
      <div>
        {nav.navLink.map((link) => {
          console.log(
            "params.locale + '/' + link.page?.url",
            link.externalUrl
              ? link.externalUrl
              : `/${params.locale}/${link.page?.url}`
          );
          return (
            <a
              key={link.id}
              href={
                link.externalUrl
                  ? link.externalUrl
                  : params.locale + "/" + link.page?.url
              }
            >
              {link.displayText}
            </a>
          );
        })}
      </div>
      <LocaleSwitcher />
    </>
  );
};

export default Navbar;
