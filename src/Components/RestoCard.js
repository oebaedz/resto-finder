import { getRestos } from "../api";
import { useEffect, useState } from "react";
import BasicRating from "./StarRate";

const ListRestosCard = () => {

    const [listRestos, setListRestos] = useState([])

    useEffect(() => {
        getRestos().then((res) => {
        setListRestos(res)
        })
    }, [])

    return listRestos.map((resto,i) => {
        return (
            <div key={i}>
                <div className="resto-card">
                    <img className="resto-img" src={resto.mainPhotoSrc} width='300px'/>
                    <div className="resto-title">{resto.name}</div>
                    <BasicRating className="rating" rate={`${resto.aggregateRatings.thefork.ratingValue}`/2}/>
                    <div className="resto-category">{resto.servesCuisine}</div>
                    <div className="resto-price">${resto.priceRange}</div>
                    <div className="resto-open">{resto.isInsider ? "Open" : "Closed"}</div>
                </div>
                <button className="more-btn" variant="contained">Learn More</button>
            </div>
        )
    })
  }

export default ListRestosCard