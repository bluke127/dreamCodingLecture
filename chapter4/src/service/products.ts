import path from "path";
import {promises as fs } from 'fs'
export type Product = {
  id: string;
  name : string
  price:number
}
export async function getProducts():Promise<Product[]>{
  const filePath = path.join(process.cwd(), 'data', 'products.json')
  for (let i = 0; i < 1000000000; i++) {}

  const data = await fs.readFile(filePath,'utf-8')
  return JSON.parse(data);
  // return ['shirt', 'pants', 'skirt', 'shoes'];
}
export async function getProduct(id:string):Promise<Product| undefined>{
  const products = await getProducts();
  return products.find(item => item.id ===id)
}