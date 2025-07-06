import type { LangSchema } from "./en";

export const esEs: LangSchema = {
  components: {
    codeSnippet: {
      copy: "Copiar",
      shortCopy: "Copiado",
      shortError: "Error",
      copied: "Copiado al portapapeles",
      error: "Error al copiar al portapapeles",
    },
  },
  data: {
    content: {
      v1: {
        home: {
          title: "Bienvenido a",
          subtitle: "Esta es la página de documentación del paquete.",
          introduction: {
            title: "¿Qué es notiflow?",
            text: "<p>Es un sistema ligero de <strong>notificaciones</strong> y <strong>toasts</strong> para React construido con Context y Hooks, que te permite mostrar notificaciones personalizables fácilmente en cualquier parte de tu aplicación.<br/><br/>Soporta tematización global con <strong>modos claro y oscuro</strong>, colores personalizables, iconos JSX predeterminados o personalizados, y posicionamiento flexible en cualquier esquina de la pantalla.<br/><br/>La librería proporciona una API sencilla mediante el hook <strong>useNotifications</strong> para lanzar toasts con mensajes, submensajes y duraciones, y su configuración global te permite establecer valores predeterminados para tema, posición, duración y visualización de iconos para integrarse perfectamente con el diseño de tu aplicación.</p>",
          },
          button: "Empieza ya",
        },
        installation: {
          title: "Descargar e instalar",
          command: "npm install notiflow",
          commandTitle: "Comando de instalación",
          npm: "https://www.npmjs.com/package/notiflow",
          npmDescription:
            "Para obtener otros detalles acerca de la libería, haz clic <a href={{url}} target='_blank'>aquí</a>",
          button: "Continuar con la personalización",
        },
        customization: {
          title: "Muy pronto",
          description: "Sección en construción",
        },
        examples: {
          title: "Ejemplos de uso",
          description:
            "A continuación hay ejemplos del código necesario para mostrar algunas variantes de las notificaciones de la librería.",
          button: "Notificar",
          successCustom:
            "Notificación de éxito con sub-mensaje y sin cierre automático.",
          successBorder: "Éxito con borde coloreado e icono.",
          successNone: "Notificación de éxito sin borde ni icono.",
          errorFull:
            "Notificación de error con fondo completo y botón de cierre.",
          errorBorder: "Error con borde coloreado.",
          errorNone: "Texto de error sin estilo.",
          infoFull: "Mensaje informativo con fondo completo.",
          infoBorder: "Información con borde.",
          infoNone: "Información mínima - solo texto.",
          alertCustom: "Alerta (paleta personalizada en la configuración).",
          alertBorder: "Alerta con borde.",
          alertNone: "Alerta sin color.",
          noneType: 'Mensaje genérico usando `type: "none"`.',
          noneNoDuration: "Mensaje con `duration: -1` (permanece abierto).",
          customIcon: "Notificación con un icono SVG personalizado.",
        },
      },
    },
    menu: {
      installation: "Instalación",
      customization: "Personalización",
      examples: "Ejemplos",
    },
  },
};
