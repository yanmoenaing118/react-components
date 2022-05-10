export default function Steps({ steps, activeIndex }) {
  return (
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
    </div>
  );
}
