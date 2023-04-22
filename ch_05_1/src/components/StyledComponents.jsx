// 교재 p.145의 내용 직접 작성
// 파일 작성 후 npm 패키지 설치
// npm install styled-components

import styled, { css } from "styled-components";

// tagged 템플릿 리터럴 방법
/*
 console.log(`hello ${{foo: 'bar'}} ${()=>'test'}`);
 일반 템플릿 리터럴에 함수나 객체를 넣으면 형태를 잃어버린다.

 function taggedFn(...args) {
  console.log(args);
 }

 taggedFn`hello ${{foo: 'bar'}} ${()=>'test'}`

 이렇게 하면 원본값을 제대로 읽는다. 아래의 css`border-radius: 20px;` 의 css가 함수이다.
*/
const SContainer = styled.div`
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: #aaa;
`;
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }

  ${(props) =>
    props.isActiveButton &&
    css`
      border-radius: 20px;
    `};
`;

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>styled components입니다</STitle>
      <SButton isActiveButton={true}>버튼</SButton>
    </SContainer>
  );
};
