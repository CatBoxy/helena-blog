import { useFormik } from "formik";
import { Container } from './styles';
import * as Yup from 'yup';

const ContactForm = () => {

    const required = "* Campo obligatorio"

    const initialValues = {
        message: '',
        name: '',
        email: '',
      }

    const validationSchema = () => 
      Yup.object().shape({
        message: Yup.string().min(6, "La cantidad mínima de caracteres es 6").required(required),
        name: Yup.string().required(required),
        email: Yup.string().email("Debe ser un email válido").required("Debe ser un email válido"),
    })

    const onSubmit = () => {
        console.log({
            message: {
                message: values.message,
                name: values.name,
                email: values.email,
            },
        });
    };

    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik;

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h2>Formulario de contacto</h2>
                    <div>
                        <input
                            name="name" 
                            type="text"
                            placeholder="Nombre" 
                            value={values.name} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name && touched.name ? "error" : ''}
                        />
                        {errors.name && touched.name && (
                            <span className='error-message'>{errors.name}</span>
                        )}
                    </div>
                    <div>
                        <input
                            name="email" 
                            type="text"
                            placeholder="Mail" 
                            value={values.email} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? "error" : ''}
                        />
                        {errors.email && touched.email && (
                            <span className='error-message'>{errors.email}</span>
                        )}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Mensaje"  
                            value={values.message} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.message && touched.message ? "error" : ''}
                        />
                        {errors.message && touched.message && (
                            <span className='error-message'>{errors.message}</span>
                        )}
                    </div>
                    <div className="buttonContainer">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    );
};

export default ContactForm;