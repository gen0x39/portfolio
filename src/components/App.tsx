import React, { Component } from 'react'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import Skills from './Skills'
import Works from './Works'
import Outputs from './Outputs'

class App extends Component {
    render() {
        return (
          <>
            <Navbar />
            <About />
            <Skills />
            <Works />
            <Outputs />
            <Contact />
          </>
        )
    }
}

export default App;