import { StyledForm } from "./styles";
import Spinner from "../Spinner";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useState } from "react";

const FormLogin = ({ setValidation }) => {
  let [loading, setLoading] = useState(false);

  const feedback = () => {
    setLoading(false);
    setValidation(true);
  };

  const email = yup
    .string()
    .email("Email inválido")
    .required("Campo requerido");

  const password = yup.string().required("Campo requerido");

  const schema = yup.object().shape({
    email,
    password,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginTeste = async (data) => {
    try {
      const response = await api.post("/auth/sign-in", data);
      localStorage.setItem("authToken", response.headers.authorization);
      localStorage.setItem("refreshToken", response.headers["refresh-token"]);
      localStorage.setItem("name", response.data.name);
      window.location.reload();
    } catch {
      feedback();
    }
  };

  const handleForm = (data) => {
    setLoading(true);
    loginTeste(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" {...register("email")}></input>
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
        {!loading && <button type="submit">Entrar</button>}
        <Spinner loading={loading} />
      </div>
      <p>{errors.password?.message}</p>
    </StyledForm>
  );
};

export default FormLogin;
