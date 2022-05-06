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
}) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {text}
      {icon && (
        <span className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
      )}
      <style jsx>{`
        button {
          min-width: 64px;
          cursor: pointer;
          width: ${full ? "100%" : "auto"};
          background-color: ${fill ? "#75B206" : "#ffffff"};
          color: ${fill ? "#ffffff" : "#75B206"};
          border: ${!fill && border ? "1px solid #75B206" : "none"};
          border-radius: ${rounded ? "50px" : "2px"};
          font-size: 14px;
          padding: 0.55em 1.25em;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .icon {
          --size: 20px;
          width: var(--size);
          height: var(--size);
        }


      `}</style>
    </button>
  );
}
