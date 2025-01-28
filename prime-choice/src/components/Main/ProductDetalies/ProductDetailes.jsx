import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetalies = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detailes">
      <div className="">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};
export default ProductDetalies;
