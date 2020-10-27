import React ,{Component} from 'react';
import { Button } from '../components/Button';
//import {Search} from '../components/Search';
import Navbar from '../components/Navbar/Navbar';
import './Dashboard.css'


 export default class Dashboard extends Component {
    render(){
        return(
            <div className="main-dashboard">
                <Navbar />
                
            <div className="Header">
                <h1> Hire The Best Freelncers <br></br>
                 online for Any Local Job</h1>
                 <p className="para">Kierkou experts connects 4local professionals <br/>
                    and agencies to business seeking <br/>
                    specialized telent </p>
                    
                <Button className="btn1">I Want To Hire</Button>
                <Button className="btn2">I want To Get Hired</Button>
                
            </div>
            <div className="Header2">
                <h1> Hire expert Freelncer for<br/>
                         Any Job, Any Time
                </h1>
                <p style={{fontSize:12}, {fontWeight:"bold"}, {marginTop:15}}>millions of small businesses use kierkou to turn their ideas to reality</p>
            </div>
            <div className="main-dashboard">
                 <input></input>
            </div>

             
            
            

            </div>
        );
    }
}
 
