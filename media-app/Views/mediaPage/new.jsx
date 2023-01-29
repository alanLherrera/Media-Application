const React = require('react')
import { Fragment } from 'react'
//import   movieController   from './Controllers'



function New () {
  return(
  <Fragment>
     <h3 className=" text-center font-Helvetica  mt-5">Add Media Here</h3>
    <form className="d-flex justify-content-center mt-3 p-3">
      <input type="text" className="form-edit"/>
      <button className="btn text-light btn-dark" > Add </button>
    </form>

 </Fragment>
       
    
  )
}

module.exports = New