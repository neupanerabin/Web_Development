import React from 'react'
import Profile from './Profile'

const StudentList = (props) => {
    return (
        <div>
            <h2>StudentList</h2>
            <p><b>Student name :</b> {props.name}</p>
            <p><b>Student Address :</b> {props.address}</p>
            <p><b>Student Course :</b>{props.course}</p>
            <hr/>
            <Profile name={props.name}/>
            
        </div>
    )
}

export default StudentList