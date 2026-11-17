import {Checkbox} from "radix-ui"
import styles from "./styles.module.scss"
import CheckboxIcon from "@/components/ui/icon/checkbox/CheckboxIcon";

export default function CartCheckbox({action}: {action: () => void}){
  
  return(
    <div className="flex items-center">
      <Checkbox.Root 
      onClick={action} 
      defaultChecked={true} 
      id="c1" 
      className={`
        rounded-full w-[1.15rem] h-[1.15rem] p-[.1rem] flex items-center justify-center border-[2px] border-accent
        data-[state=unchecked]:border-muted
      `}>
        <Checkbox.Indicator className={`${styles.indicator}`} >
          <div className="bg-accent rounded-full w-[.6rem] h-[.6rem] data-[state=unchecked]:bg-muted"></div>
          {/* <CheckboxIcon /> */}
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={styles.label} htmlFor="c1"></label>
    </div>
  );
}