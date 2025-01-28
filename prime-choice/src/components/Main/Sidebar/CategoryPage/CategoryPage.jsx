import "./CategoryPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="category">
      <h3 className="category-title">{id}</h3>
      <div className="category-card">
        {products.map((product) => (
          <div key={product.id} className="category-item">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
