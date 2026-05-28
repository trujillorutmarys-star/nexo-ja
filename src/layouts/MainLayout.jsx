import { Link, useLocation } from "react-router-dom";
import { colors } from "../styles/colors";

function MainLayout({ children }) {

  const location = useLocation();

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: colors.background
      }}
    >

      <div
        style={{
          width: "220px",
          backgroundColor: colors.sidebar,
          color: colors.white,
          padding: "20px"
        }}
      >

        <h2
          style={{
            color: colors.white
          }}
        >
          Nexo JA
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "30px"
          }}
        >

          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: colors.white,
              padding: "10px",
              borderRadius: "8px",
              backgroundColor:
                location.pathname === "/dashboard"
                  ? colors.active
                  : "transparent",

              fontWeight:
                location.pathname === "/dashboard"
                  ? "bold"
                  : "normal"
            }}
          >
            Inicio
          </Link>

          <Link
            to="/users"
            style={{
              textDecoration: "none",
              color: colors.white,
              padding: "10px",
              borderRadius: "8px",
              backgroundColor:
                location.pathname === "/users"
                  ? colors.active
                  : "transparent",

              fontWeight:
                location.pathname === "/users"
                  ? "bold"
                  : "normal"
            }}
          >
            Usuarios
          </Link>

          <Link
            to="/clubs"
            style={{
              textDecoration: "none",
              color: colors.white,
              padding: "10px",
              borderRadius: "8px",
              backgroundColor:
                location.pathname === "/clubs"
                  ? colors.active
                  : "transparent",

              fontWeight:
                location.pathname === "/clubs"
                  ? "bold"
                  : "normal"
            }}
          >
            Clubes
          </Link>

          <Link
            to="/activities"
            style={{
              textDecoration: "none",
              color: colors.white,
              padding: "10px",
              borderRadius: "8px",
              backgroundColor:
                location.pathname === "/activities"
                  ? colors.active
                  : "transparent",

              fontWeight:
                location.pathname === "/activities"
                  ? "bold"
                  : "normal"
            }}
          >
            Actividades
          </Link>

          <Link
            to="/reports"
            style={{
              textDecoration: "none",
              color: colors.white,
              padding: "10px",
              borderRadius: "8px",
              backgroundColor:
                location.pathname === "/reports"
                  ? colors.active
                  : "transparent",

              fontWeight:
                location.pathname === "/reports"
                  ? "bold"
                  : "normal"
            }}
          >
            Informes
          </Link>

        </div>

      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          color: colors.text
        }}
      >

        {children}

      </div>

    </div>

  );

}

export default MainLayout;