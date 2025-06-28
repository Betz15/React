export default function Card() {
    const parrafo = {
        fontSize: "2.8rem",
        color: "#C28549",
        fontWeight: 200,
        fontFamily : "Avigea",
        letterSpacing: "3px",
    };

    const parrafo2 = {
        color: "#516B24",
        fontSize: "2.9rem",
        fontWeight: 200,

    };

    const referencias = {
        color: "#9A3114",
        fontFamily: "Popins",
        fontSize: "1.0rem",
    }

    const boton = {
        backgroundColor: "#9A3114",
        color: "white"
    }

    return(
        <div>
            <img src="../public/pizzaMargarita.png" alt="Pizza" />
            <p style={parrafo}>Pizza <span style={parrafo2}> Margarita </span></p>
            <button style={boton}>Compra Ahora</button>
            <br />
            <br />
            <img src="../public/pizza2.png" alt="" />
            <br />
            <p style={parrafo}>Pizza <span style={parrafo2}> Veggie </span></p>
            <button style={boton}>Compra Ahora</button>
            <br />
            <br />
            <img src="../public/Peperoni.png" alt="" />
            <br />
            <p style={parrafo}>Pizza <span style={parrafo2}> Peperoni </span></p>
            <button style={boton}>Compra Ahora</button>
            <br />
            <br />
            <a style={referencias} href="https://github.com/Betz15" target="_blank">GitHub</a>
            <br />
            <a style={referencias} href="https://www.linkedin.com/in/betzabet-del-carmen-mera-espinoza-210889359/" target="_blank">Linkedin</a>
        </div>
    )
    
}