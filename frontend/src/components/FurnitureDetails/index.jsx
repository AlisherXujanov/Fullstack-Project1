import "./style.scss"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { authorizedAxiosCall } from "../../conf/axios";

function FurnitureDetails() {
    const { id } = useParams()
    const [furniture, setFurniture] = useState({})

    async function getItem() {
        const response = await authorizedAxiosCall(`api/furniture/${id}`)
        console.log(response)
        setFurniture(response)
    }
    useEffect(() => {
        getItem()
    }, [])
    
    return (
        <div>
            <h1>Name-{furniture.name}</h1>
            <p>Description - {furniture.description}</p>
        </div>
    );
}

export default FurnitureDetails;