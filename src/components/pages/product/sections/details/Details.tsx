import './style.scss'
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import VerticalTabsList from './parts/Tabs/VerticalTabsList';
import { ProductFullModel } from '@/types/api/product/product.full.model';

interface Props {
  specifications: ProductFullModel["specifications"]
}

export default function Details({specifications}: Props){

  // const {titles, properties} = useSelector(({productData: {specifications}}: {productData: ProductDataType}) => specifications)

  const listWrapCls = 'w-full flex justify-center items-start flex-wrap tablet:flex-col tablet:justify-center tablet:items-center'

  function handleClick(e: SyntheticEvent){
    const parent: Element | null = (e.target as HTMLElement).parentElement
    parent?.classList.toggle('active')
  }

  return(
    <section className='mt-24 px-5'>
      <div className={listWrapCls}>
        <VerticalTabsList specifications={specifications} />
      </div>
    </section>
  )
}