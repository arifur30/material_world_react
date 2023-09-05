import axios from 'axios'
const url="http://localhost:8001"

export const getDatabyCat=async(cat)=>{
    
    try{
        console.log(cat)
        const result=await axios.get(`${url}/get/news/${cat}`);
        return result.data;


    }
    catch(error){
        console.log(error)
    }


}

