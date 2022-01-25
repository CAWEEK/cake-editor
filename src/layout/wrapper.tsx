import styled from "@emotion/styled";
import { useState } from "react";
import Editable from "../block/Editable";

type Content = {
  type: string;
  data: string;
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
`;

function Editor() {
  const [contentsArray, setContentsArray] = useState([
    {
      type: "text",
      data: "어쩌구 저쩌구",
    },
  ]);

  return (
    <Wrapper>
      {contentsArray.map((content: Content) => (
        <Editable type={content.type}>{content.data}</Editable>
      ))}
      <div
        onClick={() =>
          setContentsArray([
            ...contentsArray,
            { type: "image", data: "이미지 데이터" },
          ])
        }
      >
        +
      </div>
    </Wrapper>
  );
}

export default Editor;
