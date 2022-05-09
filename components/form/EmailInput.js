export default function EmailInput({
  label,
  name,
  validateOptions = {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    required: true,
  },
  register,
  errorMessage,
}) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...register(name, { ...validateOptions })} />
      {errorMessage && <span>{errorMessage}</span>}

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        div:not(:last-child) {
          margin-bottom: 24px;
        }

        input {
          width: 100%;
          border: none;
          border-radius: 4px;
          background-color: #eeeeee;
          min-height: 46px;
          color: #222222;
          font-size: 16px;
          border: 1px solid transparent;
          padding: 0 10px;
          outline: none;
        }

        span {
          font-size: 14px;
          color: red;
        }

        input:hover,
        input:focus,
        input:active {
          border-color: ${errorMessage ? "red" : "#75B206"};
        }
      `}</style>
    </div>
  );
}
