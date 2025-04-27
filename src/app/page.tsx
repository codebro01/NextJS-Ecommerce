import { Header } from "sections/header";
import {FeaturedProducts} from "sections/FeaturedProducts";
import { PickedForU } from "sections/pickedForU";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-full  font-noto min-h-[100vh] bg-gray-100 dark:bg-neutral-950">
          <Header/>
          <FeaturedProducts/>
          <PickedForU/>
    </div>
  );
}
