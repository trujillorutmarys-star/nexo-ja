import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userService";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    console.log("Entró al login");

    try {

      console.log("Intentando login");

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      console.log("Login firebase OK");

      const user = userCredential.user;

      console.log("Guardando usuario");

      await createUser({

        uid: user.uid,

        email: user.email,

        role: "director"

      });

      console.log("Usuario guardado");

      alert("Login exitoso");

      navigate("/dashboard");

    } catch (error) {

      console.log("ERROR:");

      console.log(error);

      alert(error.message);

    }

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Login Nexo JA</h1>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Iniciar sesión
      </button>

    </div>

  );

}

export default Login;