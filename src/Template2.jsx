import React, { Component } from 'react';

class Template extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
                <section className="wrapper">         
                    {/*overview start*/}
                    <div className="row">
                    <div className="col-lg-12">
                        <h3 className="page-header"><i className="fa fa-laptop" /> Dashboard</h3>
                        <ol className="breadcrumb">
                        <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
                        <li><i className="fa fa-laptop" />Dashboard</li>						  	
                        </ol>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info-box blue-bg">
                        <i className="fa fa-cloud-download" />
                        <div className="count">6.674</div>
                        <div className="title">Download</div>						
                        </div>{/*/.info-box*/}			
                    </div>{/*/.col*/}
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info-box brown-bg">
                        <i className="fa fa-shopping-cart" />
                        <div className="count">7.538</div>
                        <div className="title">Purchased</div>						
                        </div>{/*/.info-box*/}			
                    </div>{/*/.col*/}	
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info-box dark-bg">
                        <i className="fa fa-thumbs-o-up" />
                        <div className="count">4.362</div>
                        <div className="title">Order</div>						
                        </div>{/*/.info-box*/}			
                    </div>{/*/.col*/}
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div className="info-box green-bg">
                        <i className="fa fa-cubes" />
                        <div className="count">1.426</div>
                        <div className="title">Stock</div>						
                        </div>{/*/.info-box*/}			
                    </div>{/*/.col*/}
                    </div>{/*/.row*/}
                </section>
        );
    }
}

export default Template;
