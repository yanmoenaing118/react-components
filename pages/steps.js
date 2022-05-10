import { useEffect, useState } from "react";
import Button from "../components/Button";
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
  const { activeIndex, goBack, goNext } = useSteps(steps);

  return (
    <main>
      <div className="stepper">
        {steps.map((item, idx) => (
          <div
            className="step"
            key={idx}
            data-active={activeIndex === idx}
            data-done={activeIndex > idx}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div>
        <Button text="Cancel" fill={false} onClick={goBack} />
        <Button text="Next" onClick={goNext} />
      </div>

      <style jsx>{`
        .stepper {
          display: inline-flex;
          gap: 16px;
        }

        .step {
          border: 1px solid transparent;
          padding: 8px 16px;
          background-color: lightgray;
          color: #fff;
        }

        .step[data-active="true"] {
          background-color: #fff;
          color: green;
          border-color: green;
        }

        .step[data-done="true"] {
          background-color: green;
          color: #fff;
        }
      `}</style>
    </main>
  );
}
