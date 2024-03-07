import data from "../data/users.json"
import { ref } from 'vue';

export interface Root {
    id: number
    firstName: string
    lastName: string
    age: number
    email: string
    phone: string
    password: string
    birthDate: string
    image: string

   
  }
  
  
  
  export interface Address {
    address: string
    city: string
    postalCode: string
    state: string
  }

  
  export interface Crypto {
    coin: string
    wallet: string
    network: string
  
    
  postalCode: string
  state: string
}

export function getitems(): Root[] {
    return data.items;
  }