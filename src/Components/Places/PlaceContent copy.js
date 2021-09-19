import React from 'react';
import { Link } from 'react-router-dom';
import { dbService } from '../../fbase';
import './places.css';



class PlacesContent extends React.Component {
    state = {
        shops: null
    }

    componentDidMount() {
        dbService.collection('shops')
        .get()
        .then( snapshot => {
            const shops = []
            snapshot.forEach( doc => {
                const data = doc.data()
                shops.push(data)
            })
            this.setState({ shops : shops })
        })
        .catch( error => console.log(error))
    }
    render() {
        return (
        <div className="section">
            {   
                this.state.shops &&
                this.state.shops.map( shop => {
                    return (
                <Link to={`/places/${shop.id}`}>
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
                            <p className="card-text">{shop.des.slice(0, 100)}...</p>
                        </div>
                    </div>
                </Link>
                )}) 
            }
            </div> 
        )
    }
}  


export default PlacesContent;
