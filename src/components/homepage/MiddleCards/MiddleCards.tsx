import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { WatchIcon } from "../Intro/watch";

export const MiddleCards = component$(() => {
  return (
    <div class="flex lg:flex-row flex-col gap-4 lg:gap-12 text-white">
      <div class="bg-[#22242F] border border-[#333647] p-8 rounded-[40px] flex flex-row items-center xl:gap-40 gap-12 lg:w-8/12">
        <div class="flex flex-col justify-center gap-8">
          <p class="font-bold lg:text-start text-center text-xl lg:text-2xl xl:text-3xl xl:leading-[48px]">
            پخش آنلاین بدون محدودیت و 24 ساعته به برترین شبکه های ورزشی دنیا
          </p>
          <p class="lg:text-start text-center">
            یه سری متن چرت و پرت برای پر کردن دیزاین یه سری متن چرت و پرت برای
            پر کردن دیزاینیه سری متن چرت و پرت برای پر کردن دیزاین یه سری متن
            چرت و پرت برای پر کردن دیزاین
          </p>
          <Link
            href="/live"
            class="h-11 justify-center rounded-[16px] font-medium bg-[#5A6DED] flex flex-row gap-2 text-sm items-center w-full lg:w-[164px] ripple-bg-blue-600"
          >
            <WatchIcon />
            <span>تماشا کنید</span>
          </Link>
        </div>
        <img
          src="/png/ronaldo.webp"
          class="hidden md:block h-[388px] w-[188px]"
          loading="lazy"
        />
      </div>
      <div class="bg-[#22242F] border border-[#333647] p-8 rounded-[40px] flex flex-col justify-center gap-8 items-center lg:w-4/12">
        <p class="font-bold text-3xl">روزی 30 دقیقه رایگان</p>
        <p>
          یه سری متن چرت و پرت برای پر کردن دیزاین یه سری متن چرت و پرت برای پر
          کردن دیزاینیه سری متن چرت و پرت برای پر کردن دیزاین یه سری متن چرت و
          پرت برای پر کردن دیزاین
        </p>
        <Link
          href="/live"
          class="h-11 justify-center rounded-[16px] font-medium bg-[#5A6DED] flex flex-row gap-2 text-sm items-center w-full lg:w-[164px] ripple-bg-blue-600"
        >
          تماشا کنید رایگان
        </Link>
      </div>
    </div>
  );
});
