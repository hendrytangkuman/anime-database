import React from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

function About() {
    return (
        <>
          <Navigation/>
          <div className="container my-5">
            <h1>About this Application</h1>
            <p>Hendry Tangkuman, 105011910104, Sistem Informasi</p>
          </div>
          <Footer/>  
        </>
    )
}

export default About
