import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';

function Home() {
    const[Product,setProduct]=useState([]);

    async function getData(){
        let res=await axios.get("http://localhost:3000/");
        console.log(res.data);
        getData(res.data);
    }

    let newArr=Product.map((item)=>{
        return (
            <Card name={item.name} price={item.price} rating={item.rating}/>
        )
    }); 

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        {newArr}
    </div>
  )
}

export default Home