import Landing from "@/components/Landing";
import { getPageBySlug } from "@/utils/getPages";
import { LandingPage } from "@/utils/interfaces";

const Page = async ({
  params,
}: {
  params: { locale: string; slug: string };
}) => {
  const landingPage = (await getPageBySlug(
    params.slug,
    params.locale
  )) as LandingPage;

  console.log("landing on slug", landingPage);
  return (
    <>
      {landingPage ? <Landing landingPage={landingPage} /> : <div>loading</div>}
    </>
  );
};

export default Page;
