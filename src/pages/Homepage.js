import React, { Component } from 'react'
import Header from 'components/Header'
import Hero from 'components/Hero'
import HomepageData from 'json/homepage.json'

export default class Homepage extends Component {
    render() { 
        return (
            <>
             <Header {...this.props}></Header>
             <Hero data={HomepageData.hero} />   
            </>
        )
    }
}
