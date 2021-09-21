import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dbService } from '../../fbase';
import { onSnapshot, collection } from "firebase/firestore";
import './places.css';


export default function PlacesContent() {
    const [shops, setShops] = useState([ ]);


    useEffect(
        () =>
          onSnapshot(collection(dbService, "shops"), (snapshot) =>
          setShops(snapshot.docs.map((doc) => ({ ...doc.data() })))
          ),
        []
      );
      console.log(shops.id);
        return (
        <div className="section">
            {shops.map( shop => {
                    return (
                <Link to={`/place/${shop.id}`}>
                    <div className="card" key={shop.id} >
                    <div className="card-top">
                        <h4 className="card-title" id={shop.id}>{shop.name}</h4>
                    </div>
                        <div className="card-body">
                            <h6 className="card-text">Category:</h6>
                            <p className="card-text">{shop.category}</p> 
                            <h6 className="card-text">Opening hours: </h6>
                            <p className="card-text">{shop.hours}...</p>
                            <h6 className="card-text">Description: </h6>
                            <p className="card-text">{shop.des}...</p>
                        </div>
                    </div>
                </Link>
                )}) 
            }
            </div> 
        );
}



