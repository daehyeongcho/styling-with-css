import React, { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Dialog from "./components/Dialog";
import styled, { css, ThemeProvider } from "styled-components";
import StyledButton from "./components/StyledButton";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  const [dialog, setDialog] = useState(false);
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <>
        {/* styling with sass */}
        <div className="App">
          <div className="buttons">
            <Button size="large" onClick={() => console.log("클릭됐다!")}>
              BUTTON
            </Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </div>
          <div className="buttons">
            <Button size="large" color="pink">
              BUTTON
            </Button>
            <Button color="gray">BUTTON</Button>
            <Button size="small" color="gray">
              BUTTON
            </Button>
          </div>
          <div className="buttons">
            <Button size="large" outline>
              BUTTON
            </Button>
            <Button color="gray" outline>
              BUTTON
            </Button>
            <Button size="small" color="pink" outline>
              BUTTON
            </Button>
          </div>
          <div className="buttons">
            <Button size="large" fullWidth>
              BUTTON
            </Button>
            <Button fullWidth color="gray">
              BUTTON
            </Button>
            <Button size="small" fullWidth color="pink">
              BUTTON
            </Button>
          </div>
        </div>
        {/* styling with css module */}
        <div className="App">
          <CheckBox onChange={onChange} checked={check}>
            다음 약관에 모두 동의
          </CheckBox>
          <p>
            <b>check: </b>
            {check ? "true" : "false"}
          </p>
        </div>
        {/* styling with styled component */}
        <div className="App">
          <Circle color="red" huge />

          <ButtonGroup>
            <StyledButton size="large">BUTTON</StyledButton>
            <StyledButton color="gray">BUTTON</StyledButton>
            <StyledButton color="pink" size="small" outline>
              BUTTON
            </StyledButton>
          </ButtonGroup>
          <ButtonGroup>
            <StyledButton
              size="large"
              fullWidth
              onClick={() => setDialog(true)}
            >
              BUTTON
            </StyledButton>
          </ButtonGroup>
        </div>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={() => setDialog(false)}
          onCancel={() => setDialog(false)}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export default App;
