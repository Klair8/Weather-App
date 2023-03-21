import React from 'react'
import NavBar from './NavBar'
import SearchForm from './SearchForm'
import Container from './Container'

const landing =()=>{
    return(
        <div>
            <NavBar/>
            <SearchForm/>
            <Container/>
        </div>
    )
}

export default landing