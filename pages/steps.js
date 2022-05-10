import { useEffect, useState } from "react";
import Button from "../components/Button";
import Steps from "../components/steps";
import useSteps from "../lib/steps";

const steps = [
  {
    id: 1,
    label: "Shopping Cart",
  },
  {
    id: 2,
    label: "Checkout",
  },
  {
    id: 3,
    label: "Confirm Order",
  },
];
export default function StepsPage() {
  const { activeIndex, goBack, goNext } = useSteps(steps.length);

  return (
    <main>
      <Steps steps={steps} activeIndex={activeIndex}  />

      <div>
        <Button text="Cancel" fill={false} onClick={goBack} />
        <Button text="Next" onClick={goNext} />
      </div>

      <style jsx>{`
        
      `}</style>
    </main>
  );
}
