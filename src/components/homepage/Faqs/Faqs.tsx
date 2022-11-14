import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Faqs.css?inline";


export const Faqs = component$(() => {
  useStylesScoped$(styles);


  return (
    <div class="text-white flex flex-col items-center min-h-[400px] gap-4 ">
      <p class="font-bold sm:text-[48px] text-[36px]">سوالات متداول</p>
        <div class="w-full max-w-2xl px-10 py-8 mx-auto  rounded-lg">
          <details open class="w-full cursor-pointer mb-3">
            <summary class="w-full text-sm sm:text-xl text-dark flex justify-between px-4 py-3  after:content-['+']">
            هزینه اشتراک چقدر است؟  
            </summary>
            <p class="text-sm px-4 py-3">
              Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt
              diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut
              blandit eget, auctor vel eros. In ut dolor ante
            </p>
          </details>

          <details class="w-full cursor-pointer mb-3">
            <summary class="w-full text-sm sm:text-xl text-dark flex justify-between px-4 py-3 after:content-['+']">
            هزینه اشتراک چقدر است؟  
            </summary>
            <p class="text-sm px-4 py-3">
              Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend
              sit amet, imperdiet id libero. Suspendisse et tempus leo, et
              lacinia arcu. Etiam at ante in est efficitur fringilla eleifend
              nec tellus. Integer sed auctor lectus, nec ullamcorper arcu.
              Nullam nec eros elit. Nulla tempor massa ut quam elementum
              dignissim. Sed eu pulvinar est, vel vehicula dolor. Pellentesque
              in ante vel elit facilisis consectetur eu id felis
            </p>
          </details>

          <details class="w-full cursor-pointer mb-3">
            <summary class="w-full text-sm sm:text-xl text-dark flex justify-between px-4 py-3  after:content-['+']">
            هزینه اشتراک چقدر است؟  
            </summary>
            <p class="text-sm px-4 py-3">
              Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
              tincidunt dignissim, magna tortor mollis augue, at maximus ante
              lacus vel tellus. Vestibulum vestibulum consectetur tortor id
              sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
              condimentum arcu
            </p>
          </details>
      </div>
    </div>
  );
});
