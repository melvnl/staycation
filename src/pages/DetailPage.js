import React, { Component } from 'react'
import Header from 'components/Header'
import PageDetailTitle from 'components/PageDetailTitle'
import itemDetails from 'json/itemDetails.json'
import FeaturedImage from 'components/FeaturedImage'
import PageDetailDescription from 'components/PageDetailDescription'
import BookingForm from 'components/BookingForm'
import Categories from 'components/Categories'
import Testimony from 'components/Testimony'
import Footer from 'components/Footer'

export default class DetailPage extends Component {

    componentDidMount() {
        window.tittle = "Details Page"
        window.scrollTo(0, 0)
    }


    render() {

        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" },
        ];

        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
                <FeaturedImage data={itemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={itemDetails} />
                        </div>
                        <div className="col-5">
                            <BookingForm
                                itemDetails={itemDetails}
                                startBooking={this.props.checkoutBooking}
                            />
                        </div>
                    </div>
                </section>
                <Categories data={itemDetails.categories} />
                <Testimony data={itemDetails.testimonial} />
                <Footer />
            </>
        );
    }
}


