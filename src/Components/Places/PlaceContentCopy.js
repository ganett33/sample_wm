import React from 'react';
import PlaceItem from './PlaceItem';
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
                shops(data)
            })
            this.setState({ shops })
        })
        .catch( error => console.log(error))
    }
    render() {
        const { shops } = this.state;
        return (
        <div className="section">
            {   
                shops &&
                shops.map( shop => (
                    <PlaceItem 
                    key={shop.id}
                    id={shop.id}
                    name={shop.name}
                    category={shop.category}
                    des={shop.des}
                    street={shop.street}
                    town={shop.town}
                    state={shop.state}
                    hours={shop.hours}
                    pop={shop.pop}
                    phone={shop.phone}
                    geo={shop.geo}
                    
                    />
                )) 
            }
            </div> 
        )
    }
}  


export default PlacesContent;
