// import { useEffect } from "react";

// import { useNotifications } from "marc-react-notification-manager";

// import Icon from "./components/icon";

// import logoLight from "./assets/notiflow-large-logo-light.svg";
// import logoDark from "./assets/notiflow-large-logo-dark.svg";

// import "./App.css";

// function App() {
//   const { notify, setMode, mode } = useNotifications();

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", mode === "dark");
//     document.documentElement.classList.toggle("light", mode === "light");
//   }, [mode]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "space-between",
//         height: "100%",
//         gap: 32,
//         padding: 24,
//       }}
//     >
//       <img src={mode === "light" ? logoLight : logoDark} width={180} />

//       {/* Switch Mode */}
//       <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
//         Switch to {mode === "light" ? "Dark" : "Light"} Mode
//       </button>

//       {/* SUCCESS */}
//       <div className="row">
//         <h2>Success Notifications</h2>
//         <div className="row-buttons">
//           <button
//             onClick={() =>
//               notify({
//                 message: "Success!",
//                 subMessage: "Operation completed successfully.",
//                 type: "success",
//                 duration: -1,
//                 canClose: true,
//               })
//             }
//           >
//             Success Custom
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Success Border",
//                 type: "success",
//                 align: ["bottom", "middle"],
//                 hasIcon: true,
//                 canClose: true,
//                 colored: "border",
//               })
//             }
//           >
//             Success Border
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Success None",
//                 type: "success",
//                 align: ["top", "right"],
//                 hasIcon: false,
//                 colored: "none",
//               })
//             }
//           >
//             Success None
//           </button>
//         </div>
//       </div>

//       {/* ERROR */}
//       <div className="row">
//         <h2>Error Notifications</h2>
//         <div className="row-buttons">
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Error!",
//                 type: "error",
//                 align: ["bottom", "left"],
//                 hasIcon: true,
//                 canClose: true,
//                 colored: "full",
//               })
//             }
//           >
//             Error Full
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Error Border",
//                 type: "error",
//                 align: ["top", "middle"],
//                 hasIcon: true,
//                 colored: "border",
//               })
//             }
//           >
//             Error Border
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Error None",
//                 type: "error",
//                 align: ["bottom", "right"],
//                 hasIcon: false,
//                 colored: "none",
//               })
//             }
//           >
//             Error None
//           </button>
//         </div>
//       </div>

//       {/* INFO */}
//       <div className="row">
//         <h2>Info Notifications</h2>
//         <div className="row-buttons">
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Info Full",
//                 type: "info",
//                 align: ["top", "left"],
//                 hasIcon: true,
//                 canClose: true,
//                 colored: "full",
//               })
//             }
//           >
//             Info Full
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Info Border",
//                 type: "info",
//                 align: ["bottom", "middle"],
//                 hasIcon: true,
//                 colored: "border",
//               })
//             }
//           >
//             Info Border
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Info None",
//                 type: "info",
//                 align: ["top", "right"],
//                 hasIcon: false,
//                 colored: "none",
//               })
//             }
//           >
//             Info None
//           </button>
//         </div>
//       </div>

//       {/* ALERT */}
//       <div className="row">
//         <h2>
//           Alert Notifications <br />
//           <i>(customized on package config)</i>
//         </h2>
//         <div className="row-buttons">
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Alert!",
//                 type: "alert",
//                 align: ["bottom", "left"],
//                 hasIcon: true,
//                 canClose: true,
//                 colored: "full",
//               })
//             }
//           >
//             Alert Custmized
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Alert Border",
//                 type: "alert",
//                 align: ["top", "middle"],
//                 hasIcon: true,
//                 colored: "border",
//               })
//             }
//           >
//             Alert Border
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Alert None",
//                 type: "alert",
//                 align: ["bottom", "right"],
//                 hasIcon: true,
//                 colored: "none",
//               })
//             }
//           >
//             Alert None
//           </button>
//         </div>
//       </div>

//       {/* NONE */}
//       <div className="row">
//         <h2>No Type Notifications</h2>
//         <div className="row-buttons">
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "No Type",
//                 subMessage: "Just a message without styling.",
//                 type: "none",
//                 align: ["top", "middle"],
//                 canClose: true,
//               })
//             }
//           >
//             No Type
//           </button>
//           <button
//             onClick={() =>
//               notify({
//                 message: "No duration",
//                 subMessage: "Just a message that won't close automatically.",
//                 type: "none",
//                 align: ["top", "middle"],
//                 canClose: true,
//                 duration: -1,
//               })
//             }
//           >
//             No duration
//           </button>
//         </div>
//       </div>

//       {/* CUSTOM ICON */}
//       <div className="row">
//         <h2>Custom Icon Notifications</h2>
//         <div className="row-buttons">
//           <button
//             onClick={() =>
//               notify({
//                 duration: 5000,
//                 message: "Custom Icon",
//                 type: "info",
//                 align: ["top", "middle"],
//                 hasIcon: true,
//                 canClose: true,
//                 colored: "none",
//                 customIcon: <Icon />,
//               })
//             }
//           >
//             Custom Icon
//           </button>
//         </div>
//       </div>

//       <p style={{ fontSize: 16, fontWeight: 400 }}>
//         Made by{" "}
//         <a
//           href="https://marclopez.xyz"
//           target="_blank"
//           style={{ textDecoration: "underline" }}
//         >
//           Marc López
//         </a>
//       </p>
//     </div>
//   );
// }

// export default App;
