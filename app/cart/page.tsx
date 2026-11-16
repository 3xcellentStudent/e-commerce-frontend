import CartList from "@/components/features/cart/list/CartList";
import NavigationLink from "@/components/ui/icon/icon-nav-link/NavigationLink";
import { ProductVariationModel } from "@/types/schema/product/variation/product.variation.type";
import {ChevronLeft} from "@animateicons/react/lucide"

export default async function Cart(){

  const serverData = await fetch("http://localhost:5000/api/mongodb/product/variation/get?page=0&size=4");
  const data = await serverData.json();

  return(
    <main>
      <div className="flex flex-row items-center">
        <NavigationLink Icon={ChevronLeft} route="/" size={36} />
        <h1 className="font-semibold text-3xl">Cart</h1>
      </div>

      <div>
        <div className="w-full relative">
          <CartList data={data.content as ProductVariationModel[]} />
        </div>
      </div>
    </main>
  )
}