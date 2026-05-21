import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <hr />

      <h2>Módulos del sistema</h2>

      <ul>
        <li>Usuarios</li>
        <li>Clubes</li>
        <li>Actividades</li>
        <li>Pedidos</li>
        <li>Informes</li>
      </ul>

      <Link to="/">
        <button>Cerrar sesión</button>
      </Link>
    </div>
  );
}

export default Dashboard;