import { Link } from "@/navigation";
import { getNavigationById } from "@/utils/getNavigation";
import { locales, stringToLocale } from "@/config";
import { Navigation, NavLink } from "@/utils/interfaces";

type Props = {
  locale: (typeof locales)[number];
};

const LocaleLink = ({ locale }: Props) => {
  return (
    <Link href="/" locale={locale}>
      {locale.toUpperCase()}
    </Link>
  );
};

const Navbar = async ({ params }: { params: { locale: string } }) => {
  const nav = (await getNavigationById("main", params.locale)) as Navigation;
  const locale = stringToLocale(params.locale);

  if (!locale) {
    return <div>Invalid locale</div>;
  }

  return (
    <>
      <div>
        <a href="/">Home</a>
        {nav.navLink.map((link: NavLink) => {
          const isCategory = link.page?.url.startsWith("/categories/");

          return (
            <a
              key={link.id}
              href={
                link.externalUrl
                  ? link.externalUrl
                  : isCategory
                  ? link.page?.url
                  : `/${link.page?.url}`
              }
            >
              {link.displayText}
            </a>
          );
        })}
        {locales.map((locale) => (
          <LocaleLink key={locale} locale={locale} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
