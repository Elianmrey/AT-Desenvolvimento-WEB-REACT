import { list } from "../Services/Supabase";



const dataBase = await list("items") 

console.log("routines", dataBase);


export {
    dataBase
}