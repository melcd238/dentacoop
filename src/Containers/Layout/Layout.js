import React from 'react'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


function Layout (props) {
    return(
        <>
         <Header/>
          <div className="container">
            {props.children} 
          </div>
         <Footer/>
        </>
    )
    
}

export default Layout 