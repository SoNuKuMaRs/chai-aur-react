import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://github.com//user/SoNuKuMaRs')
        .then(Response => Response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.follower}
      <img src=" {data.avatar-url} " alt="Git picture" width={300} />
    </div>
  );
};

export default Github;
