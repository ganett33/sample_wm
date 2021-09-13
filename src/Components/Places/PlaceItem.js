import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './places.css';

function PlaceItem ({id,category,name,des,street,town,state,hours,pop, phone, geo} ) {
    return (
        <Link to={{
            pathname: `/place/${id}`,
            state: {
                category,
                name,
                des,
                street,
                town,
                state,
                hours,
                pop,
                phone,
                geo
            }
        }}
        >
            <div className="card" key={id} >
            <div className="card-top">
                <h4 className="card-title" id={id}>{name}</h4>
            </div>
                <div className="card__body">
                    <h6 className="card__body_title">Category: </h6>
                    <p className="card__body_text">{category}</p> 
                    <h6 className="card__body_title">Opening hours: </h6>
                    <p className="card__body_text">{hours}</p>
                    <h6 className="card__body_title">Popular Menu: </h6>
                    <p className="card__body_text">{pop}</p>
                    <h6 className="card__body_title">Description: </h6>
                    <p className="card__body_text">{des.slice(0,60)}...</p>
                </div>
            </div>
        </Link>
    )
}


PlaceItem.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string,
  name: PropTypes.string.isRequired,
  des: PropTypes.string,
  street: PropTypes.string,
  town: PropTypes.string,
  state: PropTypes.string,
  pop: PropTypes.string,
  phone: PropTypes.string,  
  hours: PropTypes.string,
  geo: PropTypes.arrayOf(PropTypes.number)
};


export default PlaceItem;

