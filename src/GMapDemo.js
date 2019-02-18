import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {GMap} from 'primereact/gmap';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {Growl} from 'primereact/growl';

class GMapDemo extends Component {
    render() {
        const options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };
        
        return (
            <GMap options={options} style={{width: '100%', minHeight: '320px'}} />
        )
    }    
}
export default GMapDemo;