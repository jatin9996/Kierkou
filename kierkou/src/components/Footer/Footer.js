import React from 'react';
import './Footer.css'


export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footerbody">
                <div className="section1">
                    <h4 style={{ fontSize: 10 }, { fontWeight: "bold" }, { color: "#ff4500" }} >Company</h4>
                    <div style={{fontSize:15}} >
                        <a style={{color:"#fff"}}  href="#">About</a>
                    </div>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Career</a>
                    </div>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Terms & Conditions</a>
                    </div>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Do Not Sell My Informations</a>
                    </div>

                </div>
                <div className="section2">
                    <h4 style={{ fontSize: 10 }, { fontWeight: "bold" }, { color: "#ff4500" }} >Company</h4>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}} href="#">Accessibility</a>
                    </div>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}} href="#">Payrole Services</a>
                    </div>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Customer Support</a>
                    </div>

                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Help Center & FAQs</a>
                    </div>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Trust, Safety & Security </a>
                    </div>
                    
                </div>
                <div className="section3">
                    <h4 style={{ fontSize: 10 }, { color: "#ff4500" }} >Company</h4>
                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">How It Works</a>
                    </div>

                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Get Verified</a>
                    </div>

                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Investor Relation</a>
                    </div>

                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}}  href="#">Code Of Conduct</a>
                    </div>

                    <div style={{fontSize:15}}>
                        <a style={{color:"#fff"}} href="#">Our Current Contries</a>
                    </div>

                </div>
            </div>
        )
    }
}