'use client'

import { UseDispatchActionsType } from "@/types/redux/actions/dispatch.actions.type";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

interface Props {
  action: (payload: UseDispatchActionsType) => AnyAction;
  payload: UseDispatchActionsType;
}

export default function UseDispatch({action, payload}: Props){

  const dispatcher = useDispatch();

  dispatcher(action(payload))

  return;

}