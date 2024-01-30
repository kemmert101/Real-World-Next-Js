import { PropsWithChildren, ButtonHTMLAttributes, useMemo } from "react";

export enum ButtonStyleTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  WARNING = "warning",
  DANGER = "danger",
  SUCCESS = "success",
}

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: ButtonStyleTypes;
  size?: "sm" | "md" | "lg";
  backgroundColor?: string;
  fontColor?: string;
}

export default function Button(props: Readonly<ButtonProps>) {
  const {
    className,
    backgroundColor,
    fontColor,
    styleType,
    children,
    size,
    ...rest
  } = props;

  let styleTypeClassName = "";

  switch (styleType?.toLowerCase()) {
    case ButtonStyleTypes.PRIMARY:
      styleTypeClassName = "bg-blue-500 text-white";
      break;
    case ButtonStyleTypes.SECONDARY:
      styleTypeClassName = "bg-gray-500 text-white";
      break;
    case ButtonStyleTypes.WARNING:
      styleTypeClassName = "bg-yellow-500 text-white";
      break;
    case ButtonStyleTypes.DANGER:
      styleTypeClassName = "bg-red-500 text-white";
      break;
    case ButtonStyleTypes.SUCCESS:
      styleTypeClassName = "bg-green-500 text-white";
      break;
    default:
      styleTypeClassName = "bg-green-500 text-white";
      break;
  }

  const sizeClassName = useMemo(() => {
    switch (size) {
      case "sm":
        return "text-sm py-1 px-4";
      case "md":
        return "text-md py-2 px-5";
      case "lg":
        return "text-lg py-4 px-6";
      default:
        return "text-base";
    }
  }, [size]);

  return (
    <button
      className={`py-1 px-3 rounded-full ${styleTypeClassName} ${sizeClassName} ${className}`}
      style={{ backgroundColor: backgroundColor, color: fontColor }}
      {...rest}
    >
      {children}
    </button>
  );
}
