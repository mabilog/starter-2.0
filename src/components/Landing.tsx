import React from "react";
import Hero from "./Hero";
import { LandingPage } from "@/utils/getPages";

const Landing = ({ landingPage }: { landingPage: LandingPage }) => {
  const { stripes } = landingPage;
  return (
    <>
      {stripes &&
        stripes.map((stripe) => {
          if (stripe.__typename === "CallToAction") {
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
        })}
    </>
  );
};

export default Landing;
