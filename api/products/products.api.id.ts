import { ProductParentModel } from "@/types/schema/product/parent/product.parent.type";

export default async function getProductParentById({id}: {id: string}): Promise<ProductParentModel>{
  console.log(id)
  const request = fetch(`${process.env.NEXT_PUBLIC_GET_PARENT_ID_CASCADE}?id=${id}`)

  const response = await request;

  const data = await response.json();

  console.log(data)

  return data;
}