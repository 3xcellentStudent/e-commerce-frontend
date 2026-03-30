import CartTrashIconSVG from "@/components/SVG/cart/TrashIcon/TrashIcon";
import { useAppDispatch } from "@/lib/redux/hooks";
import {remove} from "@/lib/redux/cart/reducers"

interface Props {
  styles: string;
  id: string;
}

export default function CartTrash({styles, id}: Props){

  const dispatch = useAppDispatch();

  function clickHandler(){
    dispatch(remove(id));
  }

  return(
    <button onClick={clickHandler} className={`${styles} relative`}>
      <CartTrashIconSVG tailwindStyle="absolute right-0 w-full h-full stroke-aux-accent" />
    </button>
  )
}