/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

export const InputBox = ({
  onInsertToDo,
}: {
  onInsertToDo: (text: string) => void;
}) => {
  const [value, setValue] = useState("");
  const onSaveValue = (e: React.FormEvent) => {
    e.preventDefault();
    onInsertToDo(value);
    setValue("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form
      onSubmit={onSaveValue}
      css={css`
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 5px 0;
      `}
    >
      <input
        onChange={onChange}
        css={css`
          width: 70%;
          height: 40px;
          padding: 0 40px 0 15px;
          background-color: transparent;
          border: 2px solid #000000;
          border-radius: 10px;
          font-size: 16px;
          :focus {
            outline: none;
          }
        `}
        type="text"
        value={value}
      />
      <button
        css={css`
          position: absolute;
          right: 20px;
          width: 25px;
          height: 25px;
          border: none;
          background-color: transparent;
          cursor: pointer;
        `}
      >
        <img
          css={css`
            width: 25px;
            height: 25px;
            margin: -1px 0 0 -7px;
          `}
          src="images/add.png"
          alt=""
        />
      </button>
    </form>
  );
};
