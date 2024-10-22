import { GoInfo, GoLightBulb, GoAlert, GoStop, GoReport } from "react-icons/go";

type AlertType = "note" | "tip" | "important" | "warning" | "caution";

interface AlertProps {
  type: AlertType;
  children: React.ReactNode;
}

export default function Alert({ type, children }: AlertProps) {
  const alertTypes = {
    note: {
      borderColor: "#2050c0",
      icon: GoInfo,
    },
    tip: {
      borderColor: "#40a02b",
      icon: GoLightBulb,
    },
    important: {
      borderColor: "#8250df",
      icon: GoReport,
    },
    warning: {
      borderColor: "#d4a72c",
      icon: GoAlert,
    },
    caution: {
      borderColor: "#cf222e",
      icon: GoStop,
    },
  };

  const alertType: (typeof alertTypes)["note"] =
    alertTypes[type.toLowerCase()] || alertTypes.note;

  return (
    <div
      className="mb-4 flex flex-col border-l-4 pl-4 pt-2"
      style={{ borderColor: alertType.borderColor }}
    >
      <div className="flex items-center gap-2">
        <alertType.icon color={alertType.borderColor} size="1.2rem" />
        <p
          className="!my-0 !font-semibold"
          style={{ color: alertType.borderColor }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
      </div>
      {children}
    </div>
  );
}
