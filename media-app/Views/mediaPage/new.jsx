const React = require('react')
import { Fragment } from 'react'
//import   movieController   from './Controllers'



function New () {
  return(
  <Fragment>
     <h3 className=" mt-5">Add Media Here</h3>
    <form className=" d-flex mt-3">
      <input type="text" className="form-edit"/>
      <button className="btn btn-success" > Add </button>
    </form>

 </Fragment>
       
    
  )
}

module.exports = New