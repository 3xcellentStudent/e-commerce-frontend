
export default async function getProductParentById({id}: {id: string}){
  const request = fetch(`${process.env.NEXT_PUBLIC_GET_PARENT_ID_CASCADE}?id=${id}`)

  const response = await request;

  return response.json()
}