"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const BlueberryMilk = dynamic(
  () =>
    import("@/components/models/BlueberryMilk").then(
      (mod) => mod.BlueberryMilk
    ),
  { ssr: false }
);
const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);
// const Common = dynamic(
//   () => import("@/components/canvas/View").then((mod) => mod.Common),
//   { ssr: false }
// );

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="w-44 h-9 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"></div>
      </div>
      <View className="relative h-full sm:h-48 sm:w-full" orbit>
        <Suspense fallback={null}>
          <BlueberryMilk scale={2} />
          {/* <Common color={"lightblue"} /> */}
        </Suspense>
      </View>
    </main>
  );
}
