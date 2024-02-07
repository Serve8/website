import React from 'react'
import Nav from './Nav'
import Home  from '../../utils/Home'
import Section2 from '../../utils/section2'
import Section3 from '../../utils/Section3'
import Section4 from '../../utils/Section4'
import Footer from '../../utils/footer'

const Main = () => {
  return (
    <>
       <Nav/>
       <Home/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Footer/>
    </>
  )
}

export default Main