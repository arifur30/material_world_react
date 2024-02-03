import React from 'react';
import Profile from './Profile';

const Developers = () => {
    return (
        <div className='flex justify-center items-center py-5'>
            <div className='grid grid-col gap-4 w-[500px] '>
              
                <Profile></Profile>
                <Profile></Profile>
                <Profile></Profile>
                <Profile></Profile>
                <Profile></Profile>
               
              

            </div>
            
        </div>
    );
};

export default Developers;