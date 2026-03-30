import MinusIcon from "@/components/SVG/cart/counter/MinusIcon/MinusIcon";
import PlusIcon from "@/components/SVG/cart/counter/PlusIcon/PlusIcon";
import { useAppDispatch } from "@/lib/redux/hooks";
import {increase, decrease} from "@/lib/redux/cart/reducers"

interface Props {
  count: number;
  index: number;
}

export default function Counter({count, index}: Props){

  const dispatch = useAppDispatch();

  function minusHandler(){
    dispatch(decrease(index))
  }

  function plusHandler(){
    dispatch(increase(index))
  }

  return(
    <div className={`flex flex-row h-8 font-bold`}>
      <button onClick={minusHandler} className="w-8 text-lg"><MinusIcon/></button>
      <div className="w-8 flex items-center justify-center">{count}</div>
      <button onClick={plusHandler} className="w-8 text-xl"><PlusIcon tailwindStyles="stroke-black" /></button>
    </div>
  )
}