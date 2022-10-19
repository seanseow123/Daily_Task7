import React from "react";
import PropTypes from 'prop-types';

const GroceryArr = (props) =>{
    const {groceries}  = props;

    return (
        <React.Fragment>
            <h3><u>Array of Groceries</u></h3>
            <p>{groceries.map(info => {
                return (
                    <div key={info.id} >
                        {info.id}<br></br>
                        {info.name}<br></br>
                        {info.price}<br></br>
                        {info.brand}<br></br>
                        <hr></hr>
                    </div>
                )
            }
            )
            }</p>
            
        </React.Fragment>
    )
}

GroceryArr.propTypes = {
    
    groceries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired
    })),
}
export default GroceryArr;


