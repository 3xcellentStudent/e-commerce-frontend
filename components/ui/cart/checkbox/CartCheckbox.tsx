import {Checkbox} from "radix-ui"
import styles from "./styles.module.scss"
import CheckboxIcon from "@/components/ui/icon/checkbox/CheckboxIcon";

export default function CartCheckbox(){
  
  return(
    <div className="flex items-center">
      <Checkbox.Root className={`${styles.root}`} defaultChecked={false} id="c1">
        <Checkbox.Indicator className={styles.indicator}>
          <CheckboxIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={styles.label} htmlFor="c1"></label>
    </div>
  );
}