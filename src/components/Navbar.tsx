import { Link } from "@/navigation";
import { Navigation, getNavigationById } from "@/utils/getNavigation";
import { locales, stringToLocale } from "@/config";

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
        {nav.navLink.map((link) => {
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
        {locales.map((locale) => (
          <LocaleLink key={locale} locale={locale} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
