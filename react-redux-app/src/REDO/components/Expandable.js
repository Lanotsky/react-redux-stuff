import React from 'react';
import PropTypes from 'prop-types';

// They describe the look but don't know where the data comes from, or how to change it. 
// They only render what's given to them
class Show extends React.Component {
    render(){
        const containerStyle = {
            margin: '1em',
            width: '50em',
            height: '5em',
            backgroundColor: '#f0d4d1',
            borderRadius: '10px 10px 0px 0px',
            textAlign: 'center',
        }
        
        const spanStyle ={
            margin: '1.5em',
            display: 'Inline-block',
            fontFamily: 'Franklin Gothic Medium Arial Narrow Arial sans-serif',
            fontSize: 'large',
        }
        return(
            <div style={containerStyle}>
                <span style={spanStyle}>SHOWING</span>
            </div>
        )
    }
}

class Expandable extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
    const containerStyle = {
        margin: '1em',
        width: '50em',
        height: '5em',
        backgroundColor: '#90e7ff',
        borderRadius: '10px 10px 0px 0px',
        textAlign: 'center',
    }
    const spanStyle ={
        margin: '1.5em',
        display: 'Inline-block',
        fontFamily: 'Franklin Gothic Medium Arial Narrow Arial sans-serif',
        fontSize: 'large',
    }
    if(this.props.onCompleted){
        return(
            <div>
                <div style={containerStyle} onCompleted={this.props.onCompleted} onClick={this.props.onclick}>
                    <span style={spanStyle}>CONTAINER</span>
                </div>

                <hr/>
                <Show />
            </div>  
        )
    } else {
        return (
            <div>
                <div style={containerStyle} onCompleted={this.props.onCompleted} onClick={this.props.onclick} >
                    <span style={spanStyle}>CONTAINER</span>
                </div>

                <hr/>
                
            </div>
                
        ) 
    }

    }
}

Expandable.PropTypes = {
    onClick: PropTypes.func.isRequired,
    onCompleted: PropTypes.bool.isRequired,
}

export default Expandable;