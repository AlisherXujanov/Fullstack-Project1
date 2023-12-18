import "./style.scss"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosCall } from "../../conf/axios";

function FurnitureDetails() {
    const { id } = useParams()
    const [furniture, setFurniture] = useState({})

    async function getItem() {
        const response = await axiosCall(`api/furniture/${id}`, null, 
        {
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
        })
        console.log(response)
        setFurniture(response)
    }
    useEffect(() => {
        getItem()
    }, [])

    // category: "Lux test"
    // color: "#333"
    // description: "Very cozy black test updated"
    // image: "/media/furniture/sofa2_WY0GhyG.jpg"
    // name: "Test updated"
    // price: 2
    // quantity: 5

    return (
        <div>
            <h1>Name-{furniture.name}</h1>
            <p>Description - {furniture.description}</p>
        </div>
    );
}

export default FurnitureDetails;