import { useState } from "react";

export default function useSteps(steps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    if (activeIndex >= steps.length - 1) return;
    setActiveIndex((prev) => prev + 1);
  };

  const goBack = () => {
    if (activeIndex <= 0) return;
    setActiveIndex((prev) => prev - 1);
  };

  return {
    activeIndex,
    goNext,
    goBack,
  };
}
