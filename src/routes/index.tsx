import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Faqs } from "~/components/homepage/Faqs/Faqs";
import { Intro } from "~/components/homepage/Intro/intro";
import { MiddleCards } from "~/components/homepage/MiddleCards/MiddleCards";
import { SubscriptionPrices } from "~/components/homepage/SubscriptionPrices/SubscriptionPrices";

export default component$(() => {
  return (
    <div class="flex flex-col gap-24">
      <Intro />
      <MiddleCards />
      <SubscriptionPrices />
      <Faqs />
    </div>
  );
});

export const head: DocumentHead = {
  title: "ورزشی",
  meta: [
    {
      name: "description",
      content: "مشاهده شبکه های آنلاین با ورزشی",
    },
  ],
};
