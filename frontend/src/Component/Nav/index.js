import React from 'react'
import {Link} from 'react-router-dom'

const index = () => {
  return (
    <div>
         <nav>
    <div class="nav-wrapper blue darken-3">
      <Link to='/' className='brand-logo right'>Logo</Link>
      
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to='/Data1'> Data1</Link></li>
        <li><Link to='/Data2'> Data2</Link></li>
        <li><Link to='/Data3'> Data3</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default index