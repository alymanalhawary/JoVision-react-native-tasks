const { useState, useEffect } = require("react")

const useCurrentTime =() =>{
    const [currentDate,setCurrentDate] =useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCurrentDate(new Date());
        },1000);
        return () =>{
            clearInterval(intervalId);
        };
    },[]);
    return currentDate;
};
export default useCurrentTime;