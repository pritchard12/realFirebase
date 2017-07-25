import React, { Component } from 'react';
import Header from './Header.jsx';
import Side from './Side.jsx';
import Footer from './Footer.jsx';

class Layout extends Component {

    render() {
        console.log('props:', this.props);
        return (
            <section id="container">
                <Header />
                <Side />
				{/*main content start*/}
                <section id="main-content">
                    { this.props.children }
                    <Footer />
                </section>
                {/*main content end*/}
            </section>
        );
    }
}

export default Layout;
