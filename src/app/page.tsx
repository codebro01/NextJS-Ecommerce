import Image from "next/image";
import { Header } from "sections/header";
import {FeaturedProducts} from "sections/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full pt-[90px] md:pt-[150px] font-noto min-h-[100vh] bg-gray-100 dark:bg-neutral-950">
          <Header/>
          <FeaturedProducts/>
    </div>
  );
}
