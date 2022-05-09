import { useState } from "react";
import { ICON_EYE_CLOSE, ICON_EYE_OPEN } from "../../icons";

export default function PasswordInput({
  defaultValue,
  label,
  name,
  validateOptions = { required: true },
  register,
  errorMessage,
}) {
  const [type, setType] = useState("password");
  return (
    <div>
      <label>{label}</label>
      <div className="password-input">
        <input
          type={type}
          defaultValue={defaultValue}
          {...register(name, { ...validateOptions })}
        />
        <button
          type="button"
          onClick={() => setType(type === "password" ? "text" : "password")}
          dangerouslySetInnerHTML={{
            __html: type === "password" ? ICON_EYE_OPEN : ICON_EYE_CLOSE,
          }}
        ></button>
      </div>
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

        div.password-input {
          gap: 0;
          display: flex;
          flex-direction: row;
          margin: 0;
        }

        .password-input button {
          display: block;
          width: 46px;
          min-height: 46px;
          border: none;
          background: none;
          cursor: pointer;
          margin-left: -46px;
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
