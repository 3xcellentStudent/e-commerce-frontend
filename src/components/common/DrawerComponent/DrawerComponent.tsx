'use client'

// import { CartObjectType } from '@/types/cartTypes/cartObject.types';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode
  anchor: "right"
}

export default function DrawerComponent({anchor, children}: Props){

  // const dispatch = useDispatch()
  // const isOpenCart = useSelector(({cartObject: {isOpenCart}}: {cartObject: CartObjectType}) => isOpenCart)

  const [isOpenCart, setIsOpenCart] = useState(false);

  // function handleClose(){
  //   setIsOpenCart(!isOpenCart)
  // }

  return (
    // <SwipeableDrawer anchor={anchor} onOpen={() => true} open={isOpenCart} 
    // onClose={() => setIsOpenCart(!isOpenCart)}>
    //   {children}
    // </SwipeableDrawer>
    <div></div>
  );
}