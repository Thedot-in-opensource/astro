import React from 'react'
import {useState} from 'react'
import { Navbar, Container, Nav, Button, Row} from 'react-bootstrap'
import NavBox from './SharedComponents/components/navbar'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./SharedComponents/Styles/Home.css"


export default function Home() {
    
    const [bColor, setbColor] = useState(null)
    const generateColors = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color
    }
    function numberRange (start, end) {
        return new Array(end - start).fill().map((d, i) => i + start);
      }

    const [CopyStatus, setCopyStatus] = useState(false)
    const [colorHex, setcolorHex] = useState('')

    

    return (
        <div
        style={bColor ? 
            {backgroundColor: bColor }
            
        : {backgroundColor: '#fff' }}
        >
            <NavBox/>
            <h3
            style={{
                fontSize: 45,
                textAlign: 'center',
                marginTop: 25,
                marginBottom: 25,
                fontFamily:'Aleo'
            }}
            >For Theming</h3>
            <Container maxWidth="sm">
            <Grid container spacing={2}>
            {numberRange(0, 18).map((p) => {
                return(
                    <>
                    <CopyToClipboard text={colorHex}
                        onCopy={() => setCopyStatus(true)}>
                        <div
                        style={{
                            flexDirection: 'column'
                        }}
                        >
                        <Card sx={{ width:180, height: 250, borderRadius:5, backgroundColor: generateColors(), margin:1.50 }} onClick={() => {navigator.clipboard.writeText("#"+this.state.textToCopy)}}>
                      
                        </Card>
                      
                        <Typography style={{
                            textAlign: 'center',
                            marginTop: 8,
                            marginBottom: 12
                            }} 
                        variant="h6" 
                        component="h2"
                       
                        >
                        Tap to Copy
                        </Typography>
                        </div>
                    </CopyToClipboard>
                   {/* {CopyStatus ? <span style={{color: 'red'}}>Copied.</span> : null} */}
                   </>
                )
            })

            }
            </Grid>
            </Container>
           


            <Button
            onClick={() => generateColors()}
            >
                Change
            </Button>
        </div>
    )
}
