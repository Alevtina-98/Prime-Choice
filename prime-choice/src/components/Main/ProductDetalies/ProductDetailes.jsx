import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetalies.scss";

// const rating = "/assets/icons-rating-32.svg";

const ProductDetalies = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  // const [isBlack, setIsBlack] = useState(false);
  const [rating, setRating] = useState([false, false, false, false, false]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        // Прив'язуємо рейтинг з API до масиву зірок
        const rate = response.data.rating.rate; // Оскільки поле rate містить число, використаємо його
        const newRating = [...rating]; // Копіюємо масив рейтингів
        for (let i = 0; i < 5; i++) {
          newRating[i] = i < Math.round(rate); // Заповнюємо зірки відповідно до значення рейтингу
        }
        setRating(newRating);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleStarClick = (index) => {
    setRating((prevRating) => {
      const newRating = [...prevRating];
      for (let i = 0; i <= index; i++) {
        newRating[i] = true;
      }
      setRating(newRating);
    });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detailes">
      <div className="img-product-details">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="discribe-product-details">
        <h3 className="details-title">{product.title}</h3>
        <p className="details-price">{product.price}$</p>

        <div className="rating">
          <div className="rating-item">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill={rating[index] ? "#000000" : "gray"} // Колір залежить від рейтингу
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleStarClick(index)} // Оновлюємо рейтинг при кліку
              >
                <path d="M16 1L20 10H30L22 16L25 25L16 20L7 25L10 16L2 10H12L16 1Z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="details-desc">{product.description}</p>
      </div>
    </div>
  );
};
export default ProductDetalies;
