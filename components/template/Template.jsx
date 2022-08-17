import React from 'react'

import Nav from '../Nav'
import Footer from '../Footer'




export default function Template(props) {

return (
<div>
<Nav/>
<div>
{props.children}
 </div>
 <Footer/>      
</div>
    )
}