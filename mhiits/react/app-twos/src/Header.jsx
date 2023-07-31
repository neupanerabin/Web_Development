import React from 'react'
import propTypes from 'prop-types'

const Header = (props) => {
    return (
        <div>
            <hr />
            <h2>
                Name: {props.name}
            </h2>
            <h2>
                Age: {props.age}
            </h2>

            <h2>Address: {props.address} </h2>
        </div>

    )
};
Header.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    address: propTypes.string,
}
Header.defaultProps = {
    name: "Default name",
    age: "age leho",
    address: "ktm"
}



export default Header