import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import React, { useEffect, useState } from 'react';
import { FaTimesCircle } from "react-icons/fa";

const Main = () => {
    const db = getDatabase();
    let [insertValue,  setInsertValue] = useState()
    let [insertValueShow,  setInsertValueShow] = useState([])
    let handleChangeValue = (e) =>{
        setInsertValue(e.target.value)
    }

    const hangleSubmitData = () =>{
        set(push(ref(db, 'listData/')), {
            data: insertValue,
        });
    }

    useEffect(()=>{
        const starCountRef = ref(db, 'listData/' );
        onValue(starCountRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item)=>{
                arr.push({...item.val(), id:item.key})
            })
            setInsertValueShow(arr)
        });
    },[])


    const handleDelete = (item) => {
        remove(ref(db, 'listData/' + item.id))
    }
  return (
    <div className='bg-[#DFE6E9] h-screen w-full '>
        <div className="container mx-auto">
           <div className='py-14'>
                <input onChange={handleChangeValue} type="text" placeholder='What do you to buy ?' className='border-2 border-solid border-[#ccc] w-4/5 py-4 px-4' />
                <button onClick={hangleSubmitData} className='w-1/5 bg-[#0984E3] py-3 text-[20px] text-white uppercase' type='button'>add</button>
           </div>
           <div className="item">
            <h1 className="text-4xl">Items To buy :-</h1>
            {insertValueShow.map((itemValue, index)=>(
                <div key={index} className='flex items-center justify-between my-5 border-l-8 border-[#E67E22] group hover:bg-[#b2bec3] transition '>
                    <div className='ml-2'>
                        <p className='text-lg'>{itemValue.data}</p>
                    </div>
                    <div>
                        <button className='bg-[#FDCB6E] py-3 px-8 text-xl rounded-md mr-2'>Edit</button>
                        <button onClick={()=>handleDelete(itemValue)} className='bg-[#E17055] py-3 px-8 text-xl rounded-md hover:bg-red-700'>delete</button>
                    </div>
                </div>
            ))}
           
           </div>
        </div>
         <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className="bg-[#DFE6E9] p-8 w-1/3 rounded-lg font-bold capitalize relative">
                <h2 className="text-3xl ">the edit and update data</h2>
                <input type="text" className="w-full p-3 border border-solid border-blue-300 rounded-lg my-5" />
                <button className="bg-[#0984E3] py-3 px-8 text-2xl text-white capitalize font-semibold rounded-md">update</button>
                <div className="absolute top-[-9px] right-[-9px]">
                    <FaTimesCircle className="text-4xl text-red-700" />
                </div>
            </div>

        </div>       
    </div>
  )
}

export default Main