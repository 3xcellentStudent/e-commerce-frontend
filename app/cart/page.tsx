import CartItem from "@/components/features/cart/item/CartItem";
import CartList from "@/components/features/cart/list/CartList";
import CheckboxIcon from "@/components/ui/icon/checkbox/CheckboxIcon";
import NavigationLink from "@/components/ui/icon/icon-nav-link/NavigationLink";
import {ChevronLeft} from "@animateicons/react/lucide"

export default function Cart(){

  return(
    <main>
      <div className="flex flex-row items-center">
        <NavigationLink Icon={ChevronLeft} route="/" size={36} />
        <h1 className="font-semibold text-3xl">Cart</h1>
      </div>

      <div>
        <div className="w-full h-[2px] relative bg-muted">
          <CartList/>
        </div>
      </div>
    </main>
  )
}