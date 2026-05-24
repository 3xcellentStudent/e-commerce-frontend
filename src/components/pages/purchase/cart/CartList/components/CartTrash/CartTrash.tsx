import CartTrashIconSVG from "@/components/SVG/cart/TrashIcon/TrashIcon";
import { useAppDispatch } from "@/lib/redux/hooks";
import {remove} from "@/lib/redux/cart/reducers"
import { enqueueSnackbar } from "@/lib/redux/snackbar/reducers";

interface Props {
  styles: string;
  id: string;
  variationName: string;
}

export default function CartTrash({styles, id, variationName}: Props){

  const dispatch = useAppDispatch();

  function clickHandler(){
    dispatch(remove(id));
    dispatch(enqueueSnackbar({message: `${variationName} has been removed from the cart !`, severity: "warning"}))
  }

  return(
    <button onClick={clickHandler} className={`${styles} relative`}>
      <CartTrashIconSVG tailwindStyle="absolute right-0 w-full h-full stroke-aux-accent" />
    </button>
  )
}