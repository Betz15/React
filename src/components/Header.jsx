

export default function Header() {
    //creando objeto de estilos para el componente
    const headerStyle = {
        color:"#edc84b",
        textTransform: "uppercase",
        textAlign: "Center",
        fontSize: "4.2rem",
        letterSpacing: "3px",
        position : "relative",
        width: "100%",
        fontFamily: "Montserrat",
        display: "block",
        fontWeight: 540
    }
    return(
        <header>
            <h1 style={headerStyle}>Pizzeria CH55</h1>
        </header>
    )
}

