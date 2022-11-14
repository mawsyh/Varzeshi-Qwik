import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { VarzeshiLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="relative">
      <div class="custom-lighting" />
      <div class="w-full bg-[#040316] text-sm sm:text-base flex flex-row items-center justify-between text-white z-50">
        <div class="flex flex-row gap-4">
          <Link href="/login">ورود</Link>
          <Link href="/subscription" class="flex flex-shrink-0">
            خرید اشتراک
          </Link>
        </div>
        <VarzeshiLogo />
        <Link href="/faq" class="flex-shrink-0 hidden sm:flex">
          سوالات متداول
        </Link>
      </div>
    </header>
  );
});
