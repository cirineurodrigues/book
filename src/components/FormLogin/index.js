import {StyledForm} from './styles'
import Spinner from '../Spinner'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

const FormLogin = ({loading, setButton}) => {
    const email = yup
    .string()
    .email("Email inválido")
    .required("Campo requerido");

    const password = yup.string().required("Campo requerido");

    const schema = yup.object().shape({
        email,
        password,
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
      });
    
    const handleForm = (data) => {
        setButton()
        console.log(data)
    };

    return (
        <StyledForm onSubmit={handleSubmit(handleForm)}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    {...register("email")}
                ></input>
            </div>
            <p>{errors.email?.message}</p>
            <div>
                <label htmlFor="senha">Senha</label>
                <input
                    name="senha"
                    id="senha"
                    type="password"
                    {...register("password")}
                ></input>
                {loading 
                    ?
                    <Spinner />
                    :
                    <button type="submit">Entrar</button>
                }
            </div>
            <p>{errors.password?.message}</p>
        </StyledForm>
    )
}

export default FormLogin