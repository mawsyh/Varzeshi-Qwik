import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { WatchIcon } from "./watch";

// Qwik components can be asynchronous
export const Intro = component$(() => {
  // Returns JSX
  return (
    <div class=" flex flex-col justify-center items-center text-white mt-48 gap-28">
      <div class="flex flex-col gap-6 items-center font-bold text-2xl sm:text-4xl lg:text-6xl">
        <p>شبکه های ورزشی رو آنلاین</p>
        <p>و بدون محدودیت تماشا کنید</p>
      </div>
      <Link
        href="/live"
        class="ripple-bg-blue-600 py-4 px-16 rounded-[16px] font-medium bg-[#5A6DED] flex flex-row gap-2 items-center text-base lg:text-xl w-full lg:w-auto justify-center"
      >
        <WatchIcon />
        <span>تماشا کنید</span>
      </Link>
      <div class="flex flex-col lg:flex-row gap-4 items-center">
        <span>تماشای شبکه های ورزشی به صورت 24 ساعته</span>
        <img src="/png/tvLogos.png" alt="" class="h-[43px]" />
      </div>
    </div>
  );
});
