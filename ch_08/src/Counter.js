import React, { useReducer } from "react";

/*
useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른값으로 업데이트해 주고 싶을 때 사용하는 Hook

리듀서는 현재 상태. 그리고 업데이트를 위해 필요한 정보를 담은 action(액션) 값을 전달받아 새로운 상태를 반환하는 함수이다.
새로운 상태를 만들 때는 반드시 불변성을 지켜줘야 한다. (spread 연산자나 분할 대입 방법 등등을 사용)

리듀서에서는 useState의 setNum처럼 상태값을 변경하는 함수가 있는게 아니라 상태값을 변경하는 부분을 직접 구현한다. 이를 action에서 정의한다.

리듀서의 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥쪽으로 분리시킬 수 있는점이다.
*/
function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  // 꼭 type을 지닐 필요는 없다.
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 }; // 불변성을 지키면서 업데이트한 새로운 상태값을 반환
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  // useReducer 함수 첫 파라미터에는 reducer 함수, 두번째는 해당 리듀서의 기본값
  // return값 중 state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수이다.
  /// dispatch(action) 형태로 호출하면 reducer 함수가 호출되는 구조이다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
