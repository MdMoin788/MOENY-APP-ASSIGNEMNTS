
import { products } from "../../constants/data"
import { getData, setData } from "../../utils/functions"
import { CREATE_PRODUCT, DELETE_PRODUCT } from "../actionTypes/product"
const initProducts = getData('products') || products
console.log('initProducts', initProducts);

export const productReducer = (state = initProducts, action)=> {
  switch(action.type) {
    case CREATE_PRODUCT:
      setData('products', [...state, action.payload])
      return getData('products')
 
    case DELETE_PRODUCT:
      setData('products',state.filter(product=> product.id !== action.payload))
      return getData('products')
    default:
      return state
  }
}