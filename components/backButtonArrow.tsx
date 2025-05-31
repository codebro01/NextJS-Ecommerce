"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButtonArrow = () => {
  const router = useRouter();

  const handleClick = () => {
    // !check if there is history, goes back to prev history else go to home page
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
    
  };

  return (
    <button
      onClick={handleClick}
      className="back-to-previous-page cursor-pointer"
    >
      <ArrowLeft />
    </button>
  );
};
