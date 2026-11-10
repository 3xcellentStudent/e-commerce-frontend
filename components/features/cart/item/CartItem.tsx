import CartCheckbox from "@/components/ui/cart/checkbox/CartCheckbox";
import { StoreProductVariationModel } from "@/lib/slices/cartSlice";
import Image from "next/image";

interface Props {
  id: string;
  product: StoreProductVariationModel;
}

export default function CartItem({
  id,
  product,
}: Props){
                    // IT MUST BE VARIATION INSTEAD OF PARENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return(
    <li>
      <article>
        <CartCheckbox/>
        <figure className={``}>
          <Image src={product.} alt={imageAlt} />
        </figure>
        <div className="cart-product__details">
          <h3 id={`product-title-${productName}`} className="cart-product__title">
            <a href="/products/cuticle-elixir">{productName}</a>
          </h3>
          
          <p className="cart-product__meta">{productMeta}</p>
        </div>
        <fieldset className="cart-product__quantity">
          <legend className="visually-hidden">Change product quantity</legend>
          
          <button type="button" className="quantity-btn" aria-label="Decrease quntity">
            &minus;
          </button>
          <input type="number" name="quantity" value="1" min="1" max="99" aria-label="Количество товара" className="quantity-input"/>
          <button type="button" className="quantity-btn" aria-label="Increase quntity">
            &plus;
          </button>
        </fieldset>

        <div className="cart-product__price-block">
          <span className="cart-product__price">
            <data value="24.00">{productPrice}</data>
          </span>
        </div>

        <div className="cart-product__actions">
          <button type="button" className="cart-product__remove-btn" aria-label="Удалить товар из корзины">
            <svg aria-hidden="true" width="18" height="18"></svg>
          </button>
        </div>
      </article>
    </li>
  )
}