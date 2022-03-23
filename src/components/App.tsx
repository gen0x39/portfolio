import React, { Component } from 'react'
import Contact from './Contact'
import Background from './Background'
import Navbar from './Navbar'
import Skills from './Skills'
import Works from './Works'

class App extends Component {
    render() {
        return (
          <>
            <Navbar />
            <Background />
            <Skills />
            <Works />
            <Contact />
          </>
        )
    }
}

export default App;