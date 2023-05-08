import usePost from "../hooks/usePost";

// 사용자 정보를 가져온다.
export default function UserAdd() {
  usePost("https://dummyjson.com/users/add", {
    firstName: "Muhammad",
    lastName: "Ovi",
    age: 250,
    /* other user data */
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}
