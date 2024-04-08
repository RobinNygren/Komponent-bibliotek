import "./Toast.scss";
import Button from "../Button/Button";
import { useState } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
};

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className={`toast ${type}`}>
          <Button clickEvent={handleClick} />
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Toast;
