import {Container, Quote} from './styles';
import me from '../../assets/img/me.jpg'

const AboutBody = () => {
    return (
        <>
            <Container>
                <img src={me} alt="" />
                <div>
                    <p>
                        Tu última reencarnación debe ser esta, me dijo el sol naciente, cuando vi la luz primera
                        en el hospital de Tunuyán, y mi carita nueva me dibujó una vida en ese pueblo del sur de
                        Mendoza llamado "La Consulta", recuerdos que llegan presurosos a mi encuentro. Tierra de miel y grados
                        bajo cero, de rosas rojas floreciendo entre pálidas escarchas en mi camino de goma y lana.
                        Ocupé una silla vacía, que marcó mis primeros pasos o quizás el resto de la vida. Me deslicé 
                        campos amigos, apresé colores, acaricié sonidos. Jugué muñecas, comiditas y pelota con mis hermanos,
                        pero lo que más me gustaba era ser equilibrista sobre una soga entre dos pinos, que por supuesto me 
                        dejaba las rodillas peladas. Fui llamada Helena con hache. "Como la de Troya", también acompañó mi sendero,
                        tanto que un querido docente de la Facultad de Artes, el Profesor Federico Blanco recitaba los versos
                        de La Ilíada cuando yo llegaba. Renací mariposa a los nueve, en un nuevo mundo, tierra de salitre y sol hecho
                        fuego, de zondas asfixiantes, de temblores con destinos de fortaleza, de lamentos áridos y de uva. Tierra mía,
                        médano y llano donde florecieron el amor, los sueños y los retoños. Tierra de júbilo, arte, amistad y llagas.
                        El dragón rojo chamuscó hondamente mi pelaje, quemaduras que aminoraron con tiempo y constelaciones familiares,
                        las que a veces pongo en papel para que no me dañen y para que los vidrios rotos del alma (como dice Galeano) 
                        lastimen un poco menos cada día. Amanecí precipicios, me perdí por campos desolados, me puse un traje de alegría y 
                        seguí caminando. Convoqué todas las sangres, le hablé al aire como hermano, fui Cordobazo y Malvinas, jarilla, tonada
                        y eco de horizontes. Otras llagas me asolaron y fui resiliencia y cambio. Caminé palabras y colores en bellos parajes
                        de poemas en papeles plasmados, de poetas queridos y míos. Jugué en el "expresArte" con compañeros de las artes, 
                        y mi boca se llenó de versos que a borbotones expulsaba. Reinventé historias con los pimpollos nuevos y meditando
                        un día, recordé que era un alma añeja reencarnada, con un oasis joven amalgamada. Hoy, soy libélula estrenando
                        alas sobre aguas mansas.
                    </p>
                    <Quote>
                        <p>
                        <cite>Historias Recetadas</cite><br/>
                        Escales Lonné, H.(2016). Café de los escritores.
                        </p>
                    </Quote>
                </div>
            </Container>
        </>
    );
};

export default AboutBody;