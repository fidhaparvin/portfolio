import { Divider } from 'antd'
import React from 'react'

function Footer() {
  return (
    <div>
        <div className="footer text-center" style={{backgroundColor:'#fff',paddingBottom:'0.5rem'}}>
        <Divider/>
        
  <h5 style={{fontFamily:'Snell Roundhand, cursive',fontSize:'1rem'}}>Designed by<span style={{color:'#E8B42E'}}>&nbsp;Fidha</span></h5>
<p>Copyright © 2022. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer