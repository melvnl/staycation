import React, { Component } from 'react'
import Header from 'components/Header'
import Hero from 'components/Hero'
import MostPicked from 'components/MostPicked'
import Categories from 'components/Categories'

import HomepageData from 'json/homepage.json'


export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    
    
    render() { 
        return (
            <>
             <Header {...this.props}></Header>
             <Hero refMostPicked={this.refMostPicked} data={HomepageData.hero} />  
             <MostPicked refMostPicked={this.refMostPicked} data={HomepageData.mostPicked} />   
             <Categories data={HomepageData.categories} />
            </>
        )
    }
}
