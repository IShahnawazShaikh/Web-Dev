import React from 'react'
import background from '../images/back.jpg';
import '../style/background.css';
export default function Background() {
    return (
       <img className="background" src={background} alt="background img"/>
    )
}
