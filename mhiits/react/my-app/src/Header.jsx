import React from 'react'   // Files are import

// Function call

function Header() { // Header is function name

    //inter css
    const myStyle = {
        fontSize: '20px',
        color: "Red",
        textAlign: "center",
        fontWeight: "bolder"
    }

    return (
        // Files are html on here 
        <div className='header'>
            <h2 style={myStyle}>
                Header Files
            </h2>
            <p>Hello this is from the index page</p>
        </div>
    )
}

// // function two
// function HeaderTwo(){
//     return(
//         <div>
//             This is header two

//         </div>
//     )
// }
// For use of two functions
// export {Header, HeaderTwo}       // Files are export to the function

export default Header