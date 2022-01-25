import Editor from "./layout/wrapper";
import styled from "@emotion/styled";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Box>
      <Editor />
    </Box>
  );
}

export default App;
