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
    footer: {
      credits: "Un proyecto de",
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
            text: "<p>Es un sistema ligero de <strong>notificaciones</strong> y <strong>notificaciones</strong> para React construido con Context y Hooks, que te permite mostrar notificaciones personalizables fácilmente en cualquier parte de tu aplicación.<br/><br/>Soporta tematización global con <strong>modos claro y oscuro</strong>, colores personalizables, iconos JSX predeterminados o personalizados, y posicionamiento flexible en cualquier esquina de la pantalla.<br/><br/>La librería proporciona una API sencilla mediante el hook <strong>useNotifications</strong> para lanzar toasts con mensajes, submensajes y duraciones, y su configuración global te permite establecer valores predeterminados para tema, posición, duración y visualización de iconos para integrarse perfectamente con el diseño de tu aplicación.</p>",
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
        configuration: {
          title: "Cómo utilizar y personalizar",
          description:
            "En esta sección se especifican la configuración y las personalizaciones adicionales necesarias para un uso correcto del paquete.",
          sections: [
            {
              title: "Uso básico",
              description:
                "Envuelve tu aplicación con el proveedor y añade NotificationManager en el nivel raíz de tu proyecto",
              commandTitle: "Configuración del paquete",
            },
            {
              description:
                "En cualquier parte de tu árbol de componentes, llama al hook useNotifications() para enviar notificaciones",
              commandTitle: "Cómo notificar",
            },
            {
              title: "Configuración global",
              description:
                "Para establecer valores predeterminados globales, crea un archivo de configuración (nombre recomendado: notiflow.config.ts)",
              commandTitle: "notiflow.config.ts",
            },
            {
              description:
                "Luego, importa este archivo de configuración al principio de tu archivo de entrada (donde agregas el proveedor) para asegurarte de que se ejecute antes de que tu aplicación use las notificaciones",
              commandTitle: "Raíz del proyecto",
              note: "Nota: Si la duración se establece en -1, las notificaciones permanecerán visibles hasta que se cierren manualmente mediante el botón de cierre o de forma programática.",
            },
            {
              title: "Personalización",
              description:
                "Valores predeterminados globales: usa setupNotificationConfig() para definir el modo, el tema, la duración y otros valores predeterminados.",
            },
            {
              description:
                "Temas: pasa theme a notify para sobrescribir los colores de borde, fondo y texto.",
            },
            {
              description:
                "Posición: controla la esquina de la pantalla mediante align (p. ej., ['bottom', 'right']).",
            },
            {
              title: "Iconos",
              description:
                "Usa hasIcon para mostrar los iconos predeterminados.",
            },
            {
              description:
                "Pasa un customIcon o un componente para renderizar tu propio icono o elemento JSX dentro de la notificación.",
            },
          ],
          button: "Ve ejemplos",
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
      configuration: "Configuración",
      examples: "Ejemplos",
    },
  },
};
