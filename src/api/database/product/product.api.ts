import { REVIEWS_GET_RECURSIVE_DATA_ROUTE, SERVER_ROUTE } from "@/api/routes/routes"

import dotenv from "dotenv"

dotenv.config();

// export async function getProductDataRecursive(productId: string){
//   const separator = "id="
//   const url = REVIEWS_GET_RECURSIVE_DATA_ROUTE + "?id=" + reviewsId.join(separator)
//   const request = await fetch(url);
//   const response = await request.json()

//   return await response;
// }


export default class ProductApi {
  
  // public static async getOneById(id: string){
  //   try {
  //     const url = process.env.SERVER_ROUTE + process.env.PRODUCT_GET_ROUTE + "?id=" + id;
  //     const request = await fetch(url);
  //     const response = await request.json();
  
  //     return response;
  //   } catch (error){
  //     console.error(error);
  //     return error;
  //   }
  // }

  // public static async getMany(collectionName: string){
  //   try {
  //     const url = process.env.SERVER_ROUTE + process.env.PRODUCT_GET_ROUTE + "?collectionName=" + collectionName;
  //     const request = await fetch(url);
  //     const response = await request.json();
  
  //     return response;
  //   } catch (error){
  //     console.error(error);
  //     return error;
  //   }
  // }

  public static async getOneByIdRecursive(id: string, collectionName: string){
    try {
      const url = process.env.SERVER_ROUTE + process.env.PRODUCT_GET_RECURSIVE_ROUTE + "?collectionName=" + collectionName + "&id=" + id;
      const request = await fetch(url);
      const response = await request.json();
  
      return response;
    } catch (error){
      console.error(error);
      return error;
    }
  }

}