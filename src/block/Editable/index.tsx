import styled from "@emotion/styled";
import { ReactNode } from "react";

type EditableProps = {
  type: string;
  children?: ReactNode;
};
const Wrapper = styled.div`
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

function Editable({ type, children }: EditableProps) {
  return (
    <Wrapper>
      {type === "text" && <p>text {children}</p>}
      {type === "image" && <p>image {children}</p>}
    </Wrapper>
  );
}

export default Editable;
