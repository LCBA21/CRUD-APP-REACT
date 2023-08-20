import React from 'react'
import  {useState,useEffect} from 'react'
import Employees from './Employees'
import {v4 as uuid} from "uuid"
import {Link,useNavigate}  from 'react-router-dom'
import {FaArrow} from 'react-icons/fa'



const Edit = () => {
    const [name,setName] = useState('')
    const [job,setJob] = useState('')
    const [id,setId] = useState('')

    let histroy= useNavigate();

    var index =Employees.map(function(e){
        return e.id         

 }).indexOf(id);

 const handleSubmit =(e) =>{
    e.preventDefault();

    let a=Employees[index];
    a.Name=name
    a.Job=job


    histroy("/")
}

useEffect(() =>{
    setName(localStorage.getItem('Name'))
    setJob(localStorage.getItem('Job'))
    setId(localStorage.getItem('Id'))



},[])

  return (
    <div className='container'>

                    <div>
                        
                    </div>
                 <form>
                  <input 
                  type='text'
                  placeholder='Full Name:'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='input-field1-edit'
                  />

                  <input 
                  type="text" 
                  placeholder="Job Title:" 
                  required 
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  className='input-field2-edit'
                  />
            <button className='edit-member' onClick={(e) => handleSubmit(e)} type='submit'>Edit Member</button>
            </form>
      
    </div>
  )
}

export default Edit
