import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// 사용자 정보를 가져온다.
export default function User() {
  const { userId } = useParams();

  const {
    loading,
    data: user,
    error,
  } = useFetch(`https://dummyjson.com/users/${userId}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      <li>id: {user.id}</li>
      <li>email: {user.email}</li>
      <li>firstName: {user.firstName}</li>
      <li>lastName: {user.lastName}</li>
      <li>phone: {user.phone}</li>
      <li>
        image:
        <a href={user.image} target="_blank" rel="noopener noreferrer">
          {user.image}
        </a>
      </li>
      <li>height: {user.height}</li>
      <li>weight: {user.weight}</li>
      <li>hair color: {user.hair.color}</li>
      <li>hair type: {user.hair.type}</li>
    </ul>
  );
}
