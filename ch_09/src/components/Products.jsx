import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// 제품 정보를 가져온다.
export default function Products() {
  const { productId } = useParams();

  const {
    loading,
    data: product,
    error,
  } = useFetch(`https://dummyjson.com/products/${productId}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  // product.images는 배열이다.
  return (
    <ul>
      <li>id: {product.id}</li>
      <li>title: {product.title}</li>
      <li>description: {product.description}</li>
      <li>category: {product.category}</li>
      {product.images.map((images, idx) => (
        <li key={idx}>
          <a href={images} target="_blank" rel="noopener noreferrer">
            <img src={images} alt="제품이미지" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/*
<li>
          <a href={images} target="_blank" rel="noopener noreferrer">
            {images}
          </a>
        </li>
*/
