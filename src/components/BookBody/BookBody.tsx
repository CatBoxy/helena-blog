import { Container } from "./styles";
import camino from '../../assets/img/camino.png';
import { Link } from "react-router-dom";


const BookBody = () => {
    return (
        <>
            <Container>
                <h2>Libro</h2>
                <div>
                    <img src={camino} alt="camino" />
                </div>
                <article>
                   Lorem ipsum dolor sit amet 
                   consectetur adipisicing elit. 
                   Totam, ratione corporis sequi 
                   dicta culpa voluptatem aspernatur
                    incidunt deleniti mollitia,
                    eius magni alias voluptate 
                    enim id, facilis sed dolorem! 
                    Nulla, asperiores. 
                </article>
                <div>
                    <button>
                        <Link to={'/libros'}>Volver</Link>
                    </button>
                </div>
            </Container>
        </>
    );
};

export default BookBody;