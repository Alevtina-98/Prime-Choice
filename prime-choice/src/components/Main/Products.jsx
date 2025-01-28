import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.scss";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCard = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="products">
      <div className="product-card">
        {products.map((product) => (
          <div
            className="product-item"
            key={product.id}
            onClick={() => handleCard(product.id)}
          >
            <div className="img-card">
              <img src={product.image} alt={product.image} />
            </div>

            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
