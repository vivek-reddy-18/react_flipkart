import { useEffect, useState } from "react";
import axios from "axios";
import "./demo.css";

function Demo() {
    const [data, setData] = useState([]);

    async function getData() {
        let api = "https://fakestoreapi.com/products";
        let res = await axios.get(api);
        setData(res.data);
    }

    let newArr = data.map((item) => {
        return (
            <div className="col-4 mb-4" key={item.id}>
                <div className="card h-100 p-3">

                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "contain"
                        }}
                    />

                    <h1>${item.price}</h1>
                    <h4>{item.title}</h4>

                </div>
            </div>
        );
    });
    useEffect(()=>{getData()},[])
    return (
        <div className="container">
            

            <div className="row">
                {newArr}
            </div>
        </div>
    );
}

export default Demo;