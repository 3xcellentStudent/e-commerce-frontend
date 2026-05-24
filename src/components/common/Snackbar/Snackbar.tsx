'use client'

import { useAppSelector } from "@/lib/redux/hooks"
import SnackbarInitialState, { SeverityMap, SeverityType, SnackbarMessageType } from "@/lib/redux/snackbar/types"


import { useCallback, useEffect, useState } from "react"
import SnackbarItem from "./SnackbarItem"

const colors: SeverityMap = {
  error: "bg-severity-error",
  info: "bg-severity-info",
  warning: "bg-severity-warning",
  success: "bg-severity-success",
};

export default function Snackbar(){
  const snack = useAppSelector(store => store.snackbar);

  const [state, setState] = useState<SnackbarInitialState[]>([]);

  useEffect(useCallback(() => {
    if(snack.id.length > 0){
      setState(prev =>
        prev.length >= 5
        ? [...prev.slice(1), snack]
        : [...prev, snack]
      );
    }
  }, [snack.id]), [snack.id])

  const closeSnackbar = useCallback((id: string) => {
    setState(prev => prev.filter(snack => snack.id !== id));
  }, [])

  return(
    <div className="fixed bottom-0 left-0">
      {state.length > 0 && state.map(({id, snackbar: {message, severity}}) => {
        return <SnackbarItem key={id} {...{id, message, severity: severity as SeverityType}} onClose={closeSnackbar} />;
      })}
    </div>
  )
}