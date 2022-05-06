export default function Button({
  text,
  type,
  disabled,
  full,
  rounded = true,
  fill = true,
  border = true,
  onClick,
  icon,
  size = "sm",
}) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {text}
      {icon && (
        <span className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
      )}
      <style jsx>{`
        button {
          --font-size: ${size === "sm" ? "12px" : "14px"};
          min-width: 64px;
          cursor: pointer;
          width: ${full ? "100%" : "auto"};
          background-color: ${fill ? "#75B206" : "#ffffff"};
          color: ${fill ? "#ffffff" : "#75B206"};
          border: ${!fill && border ? "1px solid #75B206" : "none"};
          border-radius: ${rounded ? "50px" : "2px"};
          padding: 0.55em 1.25em;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
          font-size: var(--font-size);
          font-weight: 500;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        button[disabled] {
          opacity: .4;
          cursor: not-allowed;
        }

        .icon {
          --size: 20px;
          width: var(--size);
          height: var(--size);
        }

        @media screen and (min-width: 768px) {
          button {
          --font-size: ${size === "sm" ? "14px" : "16px"};
          }
        }
      `}</style>
    </button>
  );
}
