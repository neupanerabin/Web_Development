import React from 'react'
import StudentList from './StudentList'

const Student = () => {
  return (
    <div>
        <StudentList name="Rabin" address="Kathmandu" course="Java"/>
        <StudentList name="Sundar " address="Bhakatpur" course="Python"/>
        <StudentList name="Sagar" address="Lalitpur" course="Django"/>
    </div>
  )
}

export default Student