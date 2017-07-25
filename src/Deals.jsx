import React, {Component} from 'react';


class Deals extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div key= {this.props.id }>
                {this.props.street} { this.props.city }, { this.props.price } <br />
            </div>
        );
    }
}

export default Deals;
