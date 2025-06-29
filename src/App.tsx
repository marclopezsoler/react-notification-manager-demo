import { useEffect } from "react";

import { useNotifications } from "marc-react-notification-manager";

import "./App.css";
import Icon from "./components/icon";

function App() {
  const { notify, setMode, mode } = useNotifications();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.classList.toggle("light", mode === "light");
  }, [mode]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        gap: 16,
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 600 }}>
        DEMO FOR{" "}
        <a
          href="https://www.npmjs.com/package/marc-react-notification-manager"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          REACT NOTIFICATION MANAGER
        </a>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          Switch to {mode === "light" ? "Dark" : "Light"} Mode
        </button>

        {/* SUCCESS */}
        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Success!",
              subMessage: "Operation completed successfully.",
              type: "success",
              align: ["top", "left"],
              hasIcon: true,
              canClose: true,
              colored: "full",
            })
          }
        >
          Success Full
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Success Border",
              type: "success",
              align: ["bottom", "middle"],
              hasIcon: true,
              canClose: true,
              colored: "border",
            })
          }
        >
          Success Border
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Success Plain",
              type: "success",
              align: ["top", "right"],
              hasIcon: false,
              colored: "plain",
            })
          }
        >
          Success Plain
        </button>

        {/* ERROR */}
        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Error!",
              type: "error",
              align: ["bottom", "left"],
              hasIcon: true,
              canClose: true,
              colored: "full",
            })
          }
        >
          Error Full
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Error Border",
              type: "error",
              align: ["top", "middle"],
              hasIcon: true,
              colored: "border",
            })
          }
        >
          Error Border
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Error Plain",
              type: "error",
              align: ["bottom", "right"],
              hasIcon: false,
              colored: "plain",
            })
          }
        >
          Error Plain
        </button>

        {/* INFO */}
        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Info Full",
              type: "info",
              align: ["top", "left"],
              hasIcon: true,
              canClose: true,
              colored: "full",
            })
          }
        >
          Info Full
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Info Border",
              type: "info",
              align: ["bottom", "middle"],
              hasIcon: true,
              colored: "border",
            })
          }
        >
          Info Border
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Info Plain",
              type: "info",
              align: ["top", "right"],
              hasIcon: false,
              colored: "plain",
            })
          }
        >
          Info Plain
        </button>

        {/* ALERT */}
        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Alert!",
              type: "alert",
              align: ["bottom", "left"],
              hasIcon: true,
              canClose: true,
              colored: "full",
            })
          }
        >
          Alert Full
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Alert Border",
              type: "alert",
              align: ["top", "middle"],
              hasIcon: true,
              colored: "border",
            })
          }
        >
          Alert Border
        </button>

        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Alert Plain",
              type: "alert",
              align: ["bottom", "right"],
              hasIcon: true,
              colored: "plain",
            })
          }
        >
          Alert Plain
        </button>

        {/* NONE */}
        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "No Type",
              subMessage: "Just a message without styling.",
              type: "none",
              align: ["top", "middle"],
              canClose: true,
            })
          }
        >
          None Type
        </button>

        {/* NO DURATION */}

        <button
          onClick={() =>
            notify({
              message: "No duration",
              subMessage: "Just a message that won't close automatically.",
              type: "none",
              align: ["top", "middle"],
              canClose: true,
            })
          }
        >
          No duration
        </button>

        {/* CUSTOM ICON */}
        <button
          onClick={() =>
            notify({
              duration: 5000,
              message: "Custom Icon",
              type: "info",
              align: ["top", "middle"],
              hasIcon: true,
              canClose: true,
              colored: "plain",
              customIcon: <Icon />,
            })
          }
        >
          Custom Icon
        </button>
      </div>
      <p style={{ fontSize: 16, fontWeight: 400 }}>
        Made by{" "}
        <a
          href="https://marclopez.xyz"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Marc López
        </a>
      </p>
    </div>
  );
}

export default App;
