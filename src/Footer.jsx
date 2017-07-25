import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <div className="text-right">
                <div className="credits">
                {/* 
                        All the links in the footer should remain intact. 
                        You can delete the links only if you purchased the pro version.
                        Licensing information: https://bootstrapmade.com/license/
                        Purchase the pro version form: https://bootstrapmade.com/buy/?theme=NiceAdmin
                    */}
                <a href="https://bootstrapmade.com/free-business-bootstrap-themes-website-templates/">Business Bootstrap Themes</a> by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        );
    }
}

export default Footer;
