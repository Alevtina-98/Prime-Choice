import { useEffect, useState } from "react";
import "./Sidebar.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCategories = (category) => {
    navigate(`/sidebar/category/${category}`);
  };

  return (
    <div className="sidebar">
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleCategories(category)}>
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
