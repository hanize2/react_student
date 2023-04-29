// Provider 파일이며 components 폴더 아래에 providers 폴더 생성 후 복사해준다.
import { createContext, useMemo, useState } from "react";

// createContext 인수에는 디폴트값 설정가능. 여기에선 빈 객체 사용.
// Context를 참조하는 쪽에 해당 컴포넌트를 사용하기위해 export 해줘야 한다. (주의!!)
// 기본값을 state, actions로 분리해주면 다른 컴포넌트에서 사용할때 편리하다.
// 기본값은 Provider value에 넣을 값과 객체의 형태와 일치시켜주는게 좋다.
// Context 코드를 볼때 내부 구조를 파악하기가 쉽다.
export const AdminFlagContext = createContext({
  state: { isAdmin: false },
  actions: { setIsAdmin: () => {} },
});

export const AdminFlagProvider = ({ children }) => {
  // Provider 컴포넌트는 무엇이든 감쌀 수 있도록 props 로 children을 받도록한다.
  // 컴포넌트에서 속성으로 값을 넘길 수 있고 children을 이용해서 값을 넘길 수도 있기에
  // children 받도록 하면 무엇이든 감쌀 수 있게된다.

  // 관리자 플래그
  const [isAdmin, setIsAdmin] = useState(false);

  // value 속성에 객체로 명시해주면 렌더링시 계속 새로운 객체를 만들기 때문에
  // useMemo를 사용(캐싱)하여 메모이징해준다.
  const values = useMemo(() => {
    return {
      state: { isAdmin },
      actions: { setIsAdmin },
    };
  }, [isAdmin]);

  // AdminFlagContext 안에 Provider가 있으므로 각각 children을 감싼다.
  // value 안에 글로벌로 다룰 실제값을 설정
  // Context 객체로서 isAdmin과 setIsAdmin을 설정(객체 생략 표기법)
  return (
    <AdminFlagContext.Provider value={values}>
      {children}
    </AdminFlagContext.Provider>
  );
};
