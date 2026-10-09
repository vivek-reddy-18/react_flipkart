import axios from 'axios';
import React, { useState } from 'react'

function AddProduct() {
    const[id,setid]=useState("");
    const[name,setname]=useState("");
    const[price,setprice]=useState("");
    const[rating,setrating]=useState("");

    async function handleSubmit(event){
        event.preventDefault();
        // validation
        let obj={
            id,
            name,
            price,
            rating
        }
        console.log(obj)

        let res=await axios.post("http://localhost:3000/",obj)
        console.log(res);
    }

    
  return (
     <div >

            <h1 >Add New Product</h1>

            <form className="form" onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>

                <input
                    type="text"
                    placeholder="Enter Product Name"
                    className="text-box"
                    onChange={function(event){
                        setname(event.target.value)
                    }}
                /> <br/>

                <label htmlFor="number">ID</label>
                <input
                    type="number"
                    placeholder="Enter id"
                    className="text-box"
                     onChange={(event)=>setid(event.target.value)}

                /><br/>


                <label htmlFor="number">price</label>
                <input
                    type="number"
                    placeholder="Enter id"
                    className="text-box"
                     onChange={(event)=>setprice(event.target.value)}

                /><br/>
                 


                <label htmlFor="number">rating</label>
                <input
                    type="number"
                    placeholder="Enter id"
                    className="text-box"
                    onChange={(event)=>setrating(event.target.value)}
                /><br/>
                <button className="btn-2" style={{ backgroundColor: "#1D51EC", color: "white" }} >
                    Add Data
                </button>

            </form>

        </div>
  )
}

export default AddProduct