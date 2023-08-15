/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ToDoInterFace } from "../App";

export const CheckList = ({
  v,
  onCheck,
  onDelete,
}: {
  v: ToDoInterFace;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}) => {
  console.log(v);

  return (
    <div
      css={css`
        width: 80%;
        margin: 5px 0;
      `}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          height: 30px;
          padding: 2px 0px;
          border-bottom: 2px solid #000000;
        `}
      >
        <div
          onClick={() => {
            onCheck(v.id);
          }}
          css={css`
            width: 20px;
            height: 20px;
            margin-right: 10px;
            background: center/contain no-repeat
              url(images/${v.check ? "check.png" : "uncheck.png"});
            cursor: pointer;
          `}
        />
        <span
          css={css`
            text-decoration-line: ${v.check ? "line-through" : "none"};
          `}
        >
          {v.text}
        </span>
        <div
          onClick={() => {
            onDelete(v.id);
          }}
          css={css`
            position: absolute;
            right: 0;
            width: 15px;
            height: 15px;
            background: center/contain no-repeat url(images/delete.png);
            cursor: pointer;
          `}
        />
      </div>
    </div>
  );
};
