import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "../layouts/MainLayout";

function Dashboard() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {

  const unsubscribe = onAuthStateChanged(
  auth,
  (user) => {

    if (!user) {

      navigate("/");

    }

    setLoading(false);

  }
);

  return () => unsubscribe();

}, [navigate]);

  const handleLogout = async () => {

    try {

      await signOut(auth);

      alert("Sesión cerrada");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Error al cerrar sesión");

    }

  };
  if (loading) {

  return <h1>Cargando...</h1>;

}
  return (

  <MainLayout>

    <div
      style={{
        padding: "20px",
        fontFamily: "Arial"
      }}
    >

      <h1>Inicio</h1>
      <p>Bienvenida {user?.email}</p>
      
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "200px"
          }}
        >
          Usuarios
        </div>

        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "200px"
          }}
        >
          Actividades
        </div>

      </div>

      <br />

      <button onClick={handleLogout}>
        Cerrar sesión
      </button>

    </div>

  </MainLayout>
  
  );
}

export default Dashboard;