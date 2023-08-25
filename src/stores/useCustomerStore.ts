import { defineStore } from 'pinia'
import axios from "axios";

interface UserInfo {
    id: number;
    title: string ;
    amount: number;
    value: number;
    img: string ;
    is_special: boolean;
  }

export const useCustomerStore = defineStore('counter', {
  state: () => {
    return { 
        listDatas: [] as UserInfo[],    
     }
  },
  getters: {
    getUsers(state) {
        return state.listDatas
      }
  },
  actions: {
    async fetchAPI() {
        try {      
          axios.get("/public/data.json").then((res) => (this.listDatas = res.data));    
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      } 
  },
})