import { useParams } from "react-router-dom";

const Main = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>URL 경로에서 넘어온 값 : {id}</h1>
    </div>
  );
};

export default Main;
