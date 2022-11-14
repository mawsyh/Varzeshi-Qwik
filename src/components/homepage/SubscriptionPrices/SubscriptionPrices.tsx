import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BlueMark } from "./blueMark";
import { CircleMark } from "./CircleMark";

export const SubscriptionPrices = component$(() => {
  return (
    <div class="text-white flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
      <div class="flex flex-col xl:items-start items-center gap-4 mt-16">
        <p class="font-bold text-[36px] md:text-[48px]">اشتراک ورزشی</p>
        <p class="text-sm md:text-base">
          با خرید اشتراک ورزشی، بی وقفه از شبکه های ورزشی لذت ببرید
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-4 lg:gap-12">
        <div class="bg-[#22242F] border border-[#333647] p-8 rounded-[40px] h-[512px] w-full xl:w-[400px] relative overflow-hidden">
          <div class="absolute top-0 -left-8">
            <BlueMark />
          </div>
          <div class="absolute top-0 left-10">
            <BlueMark />
          </div>
          <div class="flex flex-col gap-12 mt-24 items-center">
            <div class="flex flex-row items-center font-bold gap-2">
              <span class="line-through text-[36px] decoration-red-600">
                59
              </span>
              <span class="text-[48px]">49</span>
            </div>
            <p class="font-extralight -mt-12 text-xl sm:text-[32px]">
              هزارتومان ماهانه
            </p>
            <div class="flex text-sm lg:text-base text-center flex-col items-center font-light gap-3">
              <p>تماشای نامحدود شبکه های ورزشی</p>
              <p class="flex items-center gap-1">
                <span class="hidden sm:flex">دسترسی به</span> شبکه های ESPN,
                Bein Sport, DAZN
              </p>
              <p>شرکت در قرعه کشی PS5</p>
            </div>
            <Link
              href="/subscription"
              class="h-11 justify-center rounded-[16px] font-medium bg-[#5A6DED] flex flex-row gap-2 text-sm items-center w-full md:w-[164px] ripple-bg-blue-600"
            >
              خرید اشتراک
            </Link>
          </div>
        </div>

        <div class="border border-[#333647] p-8 rounded-[40px] h-[512px] w-full xl:w-[400px] relative overflow-hidden">
          <div class="absolute top-0 right-0">
            <CircleMark />
          </div>
          <div class="flex flex-col gap-16 mt-32 items-center">
            <p class="font-bold text-[48px]">رایگان</p>
            <div class="flex text-sm lg:text-base text-center flex-col items-center font-light gap-3">
              <p>روزانه 30 دقیقه تماشای آنلاین رایگان</p>
              <p class="flex items-center gap-1">
                <span class="hidden sm:flex">دسترسی به</span> شبکه های ESPN,
                Bein Sport, DAZN
              </p>
            </div>
            <Link
              href="/free"
              class="h-11 justify-center rounded-[16px] font-medium bg-[#5A6DED] flex flex-row gap-2 text-sm items-center w-full md:w-[164px] ripple-bg-blue-600"
            >
              رایگان تماشا کنید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
