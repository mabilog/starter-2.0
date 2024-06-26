import Landing from "@/components/Landing";
import { LandingPage, getPageBySlug } from "@/utils/getPages";

const Page = async ({
  params,
}: {
  params: { locale: string; slug: string };
}) => {
  console.log("params", params);

  const landingPage = (await getPageBySlug("/", params.locale)) as LandingPage;
  console.log("landingPage in Page", landingPage);

  return <Landing landingPage={landingPage} />;
};

export default Page;
