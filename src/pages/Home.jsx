import { useNavigate } from 'react-router-dom';
import style from "./stylesPages/home-style.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <Header/>
      
      <div className={style.mainContent}>
        <h1 className={style.title}>Empieza tu pedido</h1>
        <img className={style.imagen} src="/pizzas/Fondo.jpg" alt="Pizzas" />
        
        <div className={style.buttonsContainer}>
          <button 
            className={`${style.button} ${style.deliveryButton}`}
            onClick={() => navigate('/productos')} // Redirige a /productos
          >
            Entrega a domicilio
          </button>
          
          <button 
            className={`${style.button} ${style.pickupButton}`}
            onClick={() => navigate('/productos')} // Redirige a /productos
          >
            Recoger en tienda
          </button>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}