import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Places ({id,category,name,des,state,street,town,hours,pop, phone, geo} ) {
    return (
        <Link to={`/place/${ id}`}>
                    <div className="card" key={ id} >
                    <div className="card-top">
                        <h4 className="card-title" id={ id}>{ name}</h4>
                    </div>
                        <div className="card-body">
                            <h6 className="card-text">Category:</h6>
                            <p className="card-text">{ category}</p> 
                            <h6 className="card-text">Opening hours: </h6>
                            <p className="card-text">{ hours}...</p>
                            <h6 className="card-text">Description: </h6>
                            <p className="card-text">{ des.slice(0, 100)}...</p>
                        </div>
                    </div>
                </Link>

    )
}


Places.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  town: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  pop: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  geo: PropTypes.arrayOf(PropTypes.number).isRequired
};


export default Places;

