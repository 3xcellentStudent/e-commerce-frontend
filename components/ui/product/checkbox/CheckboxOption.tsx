'use client'

import { Root, Indicator } from "radix-ui/checkbox"


interface Props {
  styles?: {
    root?: string;
    indicator?: string;
  }
  value: string;
  defaultChecked: boolean;
}

export default function CheckboxOption({styles, value, defaultChecked}: Props){

  return(
    <>
      <Root className={styles?.root} defaultChecked={defaultChecked} id="c1">
        <Indicator className={styles?.indicator}>
          {value}
        </Indicator>
      </Root>
      {/* <label className="Label" htmlFor="c1">
        Accept terms and conditions.
      </label> */}
    </>
  )
}