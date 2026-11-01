import {Checkbox} from "radix-ui"
import styles from "./styles.module.scss"
import CheckboxIcon from "@/components/ui/icon/checkbox/CheckboxIcon";

export default function CartCheckbox(){
  
  return(
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox.Root className={styles.root} defaultChecked id="c1">
          <Checkbox.Indicator className={styles.indicator}>
            <CheckboxIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={styles.label} htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
    </form>
  );
}