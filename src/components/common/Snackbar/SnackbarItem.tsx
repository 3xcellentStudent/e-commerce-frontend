import SnackbarInitialState, { SeverityMap, SeverityType } from "@/lib/redux/snackbar/types";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


interface Props {
  id: string;
  message: string;
  severity: SeverityType;
  onClose: (id: string) => void;
}

const colors: SeverityMap = {
  error: "bg-severity-error",
  info: "bg-severity-info",
  warning: "bg-severity-warning",
  success: "bg-severity-success",
};

export default function SnackbarItem({id, message, severity, onClose}: Props){

  const timer = useRef<NodeJS.Timeout>(null);
  const onCloseTimer = useRef<NodeJS.Timeout>(null);
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(true);

  
  useEffect(() => {
    console.log(id)
      timer.current = setTimeout(() => {
        setShow(false);
        onCloseTimer.current = setTimeout(() => onClose(id), 200);
      }, 3000);
      console.log(timer.current)
      
      return () => {
        clearTimeout(onCloseTimer.current as NodeJS.Timeout);
        clearTimeout(timer.current as NodeJS.Timeout);
    }
  }, []);



  const handleMouseEnter = () => {
    setHover(true);
    clearTimeout(timer.current as NodeJS.Timeout);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return(
    <div className={`w-[200px] h-[70px] relative ${severity ? colors[severity] : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {message || ""}
    </div>
  )
}