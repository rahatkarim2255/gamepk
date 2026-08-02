import { HomeSections } from "@/components/sections/HomeSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { faqJsonLd, webPageJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "GamePK Download Latest Version For Android 2026",
            description:
              "Official GamePK download for Pakistan — hot games, JILI slots, JazzCash & Easypaisa deposits and withdrawals.",
            path: "/",
          }),
          faqJsonLd(HOME_FAQS),
        ]}
      />
      <HomeSections />
    </>
  );
}
