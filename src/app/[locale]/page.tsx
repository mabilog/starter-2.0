import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { LandingPage, getPageBySlug } from "@/utils/getPages";

export default async function Home({ params }: { params: { locale: string } }) {
  const landingPage = (await getPageBySlug("/", params.locale)) as LandingPage;

  console.log("landingPage", landingPage);

  return (
    <main className="">
      hi
      {/* {stripes &&
        stripes.map((stripe) => {
          if (stripe.__typename === "CallToAction") {
            console.log("stripe", stripe);
            return (
              <Hero
                key={stripe.id}
                button={{
                  text: stripe?.button?.text,
                  url: stripe?.button?.url,
                }}
                description={stripe?.body.html}
                title={stripe?.heading}
                image={{
                  url: stripe?.image?.url,
                  width: stripe?.image?.width,
                  height: stripe?.image?.height,
                }}
              />
            );
          }
          if (stripe.__typename === "ProductGrid") {
            // console.log(stripe);
            return <>hello</>;
          }
        })} */}
    </main>
  );
}
