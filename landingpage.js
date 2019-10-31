import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Logo01 from '../assets/profile-img.jpg';


class Landing extends Component {
    render(){
        return(
          
            
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src={Logo01}
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>HTML | CSS | React | Angular</p>

                            <div className="social-links">
                                {/*LinkedIn*/} 
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/*Github*/} 
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                                {/*youtube*/} 
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square"  aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                        
                    </Cell>
                    
                </Grid>
                
                
            </div>

        )
    }
}


export default Landing;