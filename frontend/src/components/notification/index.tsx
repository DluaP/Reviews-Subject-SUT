import { notification } from "antd";

type NotificationTypes = "success" | "info" | "warning" | "error";

interface NotificationProps {
  type: NotificationTypes;
  message?: string;
  description?: string;
}

export const fireNotification = ({
  type,
  message,
  description,
}: NotificationProps) => {
  const messages: { [K in NotificationTypes]: string } = {
    success: "สำเร็จ",
    info: "warning",
    warning: "warning",
    error: "error",
  };
  const msg = message || messages[type];

  notification[type]({
    message: msg,
    duration: 3.5,
    style: { borderRadius: "4px" },
    description: description,
    // closeIcon: <></>,
  });
};
