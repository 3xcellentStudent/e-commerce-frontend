import CartList from "@/components/pages/purchase/cart/CartList/CartList";
import styles from "./styles.module.scss"
import StripePayment from "@/components/common/StripePayment/StripePayment";

export default function PurchasePage(){

  return(
    <>
      <section className="mt-section-top">
        <h2 className={`${styles.title} uppercase`}>Your Cart</h2>
      </section>
      <div className={`${styles.container}`}>
        <section className={`${styles.section_cart}`}>
          <CartList/>
        </section>
        <section className={`${styles.section_checkout}`}>
          <StripePayment/>
        </section>
      </div>
    </>
  )
}