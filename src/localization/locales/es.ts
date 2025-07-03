import type { LangSchema } from "./en";

export const esEs: LangSchema = {
  components: {},
  data: {
    content: {
      v1: {
        title: "Bienvenido a",
        subtitle: "Esta es la página de documentación del paquete.",
        introduction: {
          title: "¿Qué es notiflow?",
          text: "<p>Es un sistema ligero de <strong>notificaciones</strong> y <strong>toasts</strong> para React construido con Context y Hooks, que te permite mostrar notificaciones personalizables fácilmente en cualquier parte de tu aplicación.<br/><br/>Soporta tematización global con <strong>modos claro y oscuro</strong>, colores personalizables, iconos JSX predeterminados o personalizados, y posicionamiento flexible en cualquier esquina de la pantalla.<br/><br/>La librería proporciona una API sencilla mediante el hook <strong>useNotifications</strong> para lanzar toasts con mensajes, submensajes y duraciones, y su configuración global te permite establecer valores predeterminados para tema, posición, duración y visualización de iconos para integrarse perfectamente con el diseño de tu aplicación.</p>",
        },
        button: "Empieza ya",
      },
      v2: {
        title: "Pronto nueva versión",
        subtitle: "",
        introduction: {
          title: "",
          subtitle: "",
        },
      },
    },
    menu: {
      installation: "Instalación",
      examples: "Ejemplos",
      theme: "Tema",
    },
  },
};
