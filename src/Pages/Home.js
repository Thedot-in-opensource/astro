import React from 'react'
import {useState} from 'react'
import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import NavBox from './SharedComponents/components/navbar'



export default function Home() {
    
    const [bColor, setbColor] = useState(null)
    const generateColors = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setbColor(color)
    }
    return (
        <div
        style={bColor ? 
            {backgroundColor: bColor }
            
        : {backgroundColor: '#fff' }}
        >
            <NavBox/>
            <h3>Home Page</h3>
            <Button
            onClick={() => generateColors()}
            >
                Change
            </Button>
        </div>
    )
}
