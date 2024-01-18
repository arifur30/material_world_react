import axios from 'axios'
const url="https://mw-server.vercel.app"

export const getDatabyCat=async(cat)=>{
    
    try{
        console.log(cat)
        const result=await axios.get(`${url}/api/blogs?category=${cat}`);
        return result.data;


    }
    catch(error){
        console.log(error)
    }


}
export const getDetails=async(id)=>{
    try{
       
        const result=await axios.get(`${url}/api/blogs/${id}`);
        return result.data;


    }
    catch(error){
        console.log(error)
    }

}

