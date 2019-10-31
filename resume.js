import React, {Component} from 'react';
import { Document } from 'react-pdf';
import MyResume from '../assets/Rijal Sanil Resume.pdf';

class Resume extends Component {
    render(){
        return(
            <div>
                <Document file="Rijal Sanil Resume.pdf">
                    
                </Document>
            </div>
        )
    }
}


export default Resume;