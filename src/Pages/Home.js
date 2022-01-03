import React from 'react'
import {useState,useEffect} from 'react'
import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import NavBox from './SharedComponents/components/navbar'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./SharedComponents/Styles/Home.css"


export default function Home() {
    
    const [bColor, setbColor] = useState(null)
    
    function colorGe(){
        var letters = '0123456789ABCDEF';
        var color = '#';
         for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 11)];
        }
        return color
    } 
    const generateColors = () => {
       
        var color_18_list = []
        for (var j = 0; j < 18; j++)    {
            color_18_list.push(colorGe())
        }
        return color_18_list
    }

    const [themingList, setthemingList] = useState([])
    const [colorCopyStatus, setcolorCopyStatus] = useState(false)
    const [vertical, setvertical] = useState('bottom')
    const [horizontal, sethorizontal] = useState('right')
    const [generateColorsStatus, setgenerateColorsStatus] = useState(false)
    useEffect(() => {
        var temp_color_list = generateColors()
        setthemingList(temp_color_list)
    }, [generateColorsStatus])

    function numberRange (start, end) {
        return new Array(end - start).fill().map((d, i) => i + start);
      }

    function handleClose(){
        setcolorCopyStatus(false)   
    }

    const setcolorCopyStatusHandler = (newState) => {
        setvertical(newState.vertical)
        sethorizontal(newState.horizontal)
        setcolorCopyStatus(true)
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
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
            {themingList && themingList.map((p) => {
                return(
                    <div
                    style={{
                        flexDirection: 'column'
                    }}
                    >
                    <Card className="style_prevu_kit" sx={{ width:180, height: 250, borderRadius:5, backgroundColor: p, margin:1.50 }} onClick={() => {navigator.clipboard.writeText(p); setcolorCopyStatusHandler({
          vertical: 'bottom',
          horizontal: 'right',
        })}}>

                    </Card>
                    <p
                    style={{
                        textAlign: 'center',
                        fontFamily:'Aleo'
                    }}
                    >
                        {p}
                    </p>
                    </div>
                )
            })

            }
            </Grid>
            <Snackbar open={colorCopyStatus} autoHideDuration={6000} onClose={handleClose}>
            <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={{ width: '100%' }}
            anchorOrigin={{ vertical, horizontal }}>
            This is a success message!
            </Alert>
      </Snackbar>
            </Container>
           


            <Button
            onClick={() => setgenerateColorsStatus(!generateColorsStatus)}
            >
                Change
            </Button>
        </div>
    )
}
