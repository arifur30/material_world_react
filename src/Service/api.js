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
export const getAllData=async()=>{
    try{
        const result=await axios.get(`${url}/api/blogs`);

        return result.data;

    }
    catch(error){
        return error;
    }

}
export const getInternationalOne=async()=>{
    try{
        const result=await axios.get(`${url}/api/blogs/one/international`);

        return result.data;

    }
    catch(error){
        return error;
    }

}
export const getNationalOne=async()=>{
    try{
        const result=await axios.get(`${url}/api/blogs/one/national`);

        return result.data;

    }
    catch(error){
        return error;
    }

}
export const getPoliticalOne=async()=>{
    try{
        const result=await axios.get(`${url}/api/blogs/one/politics`);

        return result.data;

    }
    catch(error){
        return error;
    }

}
