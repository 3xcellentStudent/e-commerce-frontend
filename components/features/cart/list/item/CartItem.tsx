import CartCheckbox from "@/components/ui/cart/checkbox/CartCheckbox";
import { useAppDispatch } from "@/lib/hooks";
import { StoreProductVariationModel } from "@/lib/slices/cartSlice";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import {increase, decrease, remove, isChecked} from '@/lib/slices/cartSlice'
import { X as DeleteIcon, Plus as PlusIcon, Minus as MinusIcon } from "@animateicons/react/lucide";
import {Separator} from "radix-ui"
import InteractiveButtonIcon from "@/components/ui/icon/interactive/button/InteractiveButtonIcon";
import AlertDialog from "@/components/features/alert-dialog/AlertDialog";

function CartItem({
  id, customerQuantity, image, variationName, variationOptions, isChecked: checked, stockInfo: {priceInCents, currency}
}: StoreProductVariationModel){

  const dispatch = useAppDispatch();
  
  function handleDecrease(){
    if(customerQuantity === 1){
      setAlertState(prev => !prev)
    } else {
      dispatch(decrease(id));
    }
  }
  function handleIncrease(){
    dispatch(increase(id))
  }

  function handleIsChecked(){
    dispatch(isChecked(id))
  }

  function handleRemove(){
    setAlertState(prev => !prev)
  }

  const imageSizeRef = useRef<number>(18 * 4).current;

  const [alertState, setAlertState] = useState<boolean>(false)

  return(
    <li className={`w-full mb-4 bg-surface p-3 rounded-xl ${!checked && "brightness-85"} duration-100`}>
      <article className="flex items-center h-18 w-full gap-1">
        <div className="mr-2">
          <CartCheckbox action={handleIsChecked} />
        </div>
        {/* <Separator.Root decorative orientation="vertical" className="bg-muted h-full w-[1px] mx-1" /> */}
        <figure>
          <Image src={image[0]?.src || ""} alt={variationName} width={imageSizeRef} height={imageSizeRef} loading="eager" />
        </figure>
        {/* <Separator.Root decorative orientation="vertical" className="bg-muted h-full w-[1px] mx-1" /> */}
        <div className="flex flex-col flex-1 gap-2 ml-2">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
              <h3 id={`product-title-${variationName}`} className="font-bold text-sm">
                <a href="/products/cuticle-elixir">{variationName}</a>
              </h3>
              <div>
                <p className="text-xs text-muted">{variationOptions.value}</p>
              </div>
            </div>
              {/* <DeleteIcon className="text-red-600" /> */}
              <InteractiveButtonIcon Icon={DeleteIcon} size={20} action={handleRemove} metadata="Delete from cart"
              styles={{icon: "text-red-600", button: "bg-red-600/5 h-min rounded-full p-1"}} />
          </div>
          <div className="flex flex-row items-center justify-between text-sm">
            <fieldset className="flex flex-row border border-muted rounded-xl p-1">
              {/* <legend className="visually-hidden" >Change product quantity</legend> */}
              <InteractiveButtonIcon Icon={MinusIcon} size={18} action={handleDecrease} metadata="Decrease quantity"
              styles={{}} />
              <Separator.Root decorative orientation="vertical" className="bg-muted h-[18px] w-[1px] mx-1" />
              <span className="w-[1rem] text-center">{customerQuantity}</span>
              <Separator.Root decorative orientation="vertical" className="bg-muted h-[18px] w-[1px] mx-1" />
              <InteractiveButtonIcon Icon={PlusIcon} size={18} action={handleIncrease} metadata="Increase quantity"
              styles={{}} />
            </fieldset>

            <div className="text-center">
              <span>
                <data className="whitespace-nowrap font-bold text-base" value={priceInCents / 100}>{priceInCents / 100} {currency}</data>
              </span>
            </div>
          </div>
        </div>
      </article>
      {alertState && <AlertDialog 
        customerQuantity={customerQuantity}
        image={image[0].src}
        variationName={variationName}
        state={alertState} 
        setState={setAlertState} 
        action={() => dispatch(remove(id))} 
        imageSize={imageSizeRef}
      />}
    </li>
  )
}

export default memo(CartItem)