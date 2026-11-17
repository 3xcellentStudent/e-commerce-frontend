import getProductParentById from "@/api/products/products.api.id";


interface Props {
  params: {
    id: string
  }
}


export default async function ProductPage(props: Props){

  // const params = await props.params
  
  const dataJson = await getProductParentById({id: props.params.id});

  console.log(dataJson)

  return (
    <>
      <main className="p-4">

      </main>
    </>
  );
}
