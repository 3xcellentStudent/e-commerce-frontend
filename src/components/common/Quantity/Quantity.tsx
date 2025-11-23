import { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { useSelector } from 'react-redux';
import { GlobalDataType } from '@/types/main/globalData.type';
import styled from 'styled-components';

interface Props {
  quantity: number
  action: any
  text?: string
  btnSize: number
  inputProps?: {}
  elemIndex: number
}

export default function Quantity(
  {btnSize, quantity, action, text, inputProps, elemIndex}: Props
){

    // const {quantityMax, elementsSecondaryBg, elementsPrimaryBg, primaryText} = useSelector(({
    //   productData: {stockInfo},
    //   globalData: {colors: {backgrounds, text}}
    // }: {productData: ProductDataType, globalData: GlobalDataType}) => ({...stockInfo, ...backgrounds, ...text}))

  const btnCls = `relative duration-200 rounded-md disabled:opacity-50 
  disabled:pointer-events-none flex items-center justify-center`

  const CustomInput = styled("input")({
    fontSize: btnSize,
    width: btnSize,
    height: btnSize,
    
  })

  const [value, setQuantity] = useState<string>(`${quantity}`)

  useEffect(() => setQuantity(`${quantity}`), [quantity])

  // function checkValue(value: string){
  //   const result = +value > quantityMax ? quantityMax : +value > 0 ? value : 1
  //   setQuantity(`${result}`)
  //   action(result, elemIndex)
  // }

  return (
    <div className='flex flex-row items-end w-[80px]'>
      {/* <div className='flex w-min pb-0.5 flex-row items-center'>
        <Button sx={{backgroundColor: elementsPrimaryBg.hex, "&:hover": {backgroundColor: elementsSecondaryBg.hex}, width: btnSize, height: btnSize}} 
        className={btnCls} disabled={+value > 1 ? false : true} handleClick={() => checkValue(`${+value - 1}`)}>
          <RemoveIcon htmlColor={`rgb(${elementsSecondaryBg.rgb})`} className='pointer-events-none' 
          sx={{fontSize: btnSize * 1}} />
        </Button>
        <CustomInput sx={{color: primaryText.hex}} type="number" onBlur={e => checkValue(e.target.value)} 
        onChange={e => setQuantity(e.target.value)} value={value} 
        className="bg-transparent	text-center text-lg mx-1" {...inputProps} />
        <Button sx={{backgroundColor: elementsPrimaryBg.hex, "&:hover": {backgroundColor: elementsSecondaryBg.hex}, width: btnSize, height: btnSize}} 
        handleClick={() => checkValue(`${+value + 1}`)} className={btnCls} disabled={+value === quantityMax ? true : false} >
          <AddIcon htmlColor={`rgb(${elementsSecondaryBg.rgb})`} className='pointer-events-none' sx={{fontSize: btnSize * 1}} />
        </Button>
      </div> */}
      <span className='ml-2 text-sm w-min'>{text}</span>
    </div>
  );
}