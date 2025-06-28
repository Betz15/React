import styles from "./stylesPages/owner-style.module.css";
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Owner() {
    const [movies] = useState([
        { title: 'Un don excepcional', image: '/cine/don.jpg' },
        { title: 'Valiente', image: '/cine/Valiente.jpg' },
        { title: 'Cómo entrenar a tu dragón', image: '/cine/dragon.jpg' },
        { title: 'El castillo vagabundo', image: '/cine/vagabundo.jpg' },
        { title: 'El castillo en el cielo', image: '/cine/cielo.jpg' },
        { title: 'Young Sheldon', image: '/cine/sheldon.jpg' },
        { title: 'The Big Bang Theory', image: '/cine/bingBan.jpg' },
        { title: 'Gossip', image: '/cine/gossip.jpg' },
        { title: 'Flow', image: '/cine/flow.jpg' },
    ]);


    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.header}>
                <h1 className={styles.title}>Conoce al Dueño</h1>
            </div>

            <div className={styles.profileContainer}>
                <img
                    src="/cine/ImagenOwner.jpg"
                    alt="Dueño de la pizzería"
                    className={styles.profileImage}
                />

                <div className={styles.socialIconsOverlay}>
                    <a href="https://github.com/Betz15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/betzabetmera/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/betzabet-del-carmen-mera-espinoza-210889359/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className={styles.icon} />
                    </a>
                </div>

            </div>

            <div className={styles.profileInfo}>
                <h2 className={styles.subtitle}>Información Personal</h2>

                <p className={styles.infoItem}>
                    <span className={styles.infoLabel}>Nombre:</span> Betzabet del Carmen Mera Espinoza
                </p>

                <p className={styles.infoItem}>
                    <span className={styles.infoLabel}>Correo:</span> betzabetmerat@gmail.com
                </p>
            </div>

            <h2 className={styles.subtitle}>Mis Películas y Series Favoritas</h2>

            <div className={styles.moviesList}>
                {movies.map((movie, index) => (
                    <div key={index} className={styles.movieItem}>
                        <img src={movie.image} alt={movie.title} className={styles.movieImage} />
                        <h3 className={styles.movieTitle}>{movie.title}</h3>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}