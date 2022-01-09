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
import {useSpring, animated, config} from 'react-spring'
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
      function Scrolling() {
        const [flip, set] = useState(false)
      
        const words = ['design', 'art', 'color', 'music', 'poem', 'NFT', 'anima', 'Let\'s do it.']
      
        const { scroll } = useSpring({
          scroll: (words.length - 1) * 50,
          from: { scroll: 0 },
          reset: true,
          reverse: flip,
          delay: 200,
          config: config.molasses,
          onRest: () => set(!flip),
        })
      
        return (
          <animated.div
            style={{
              position: 'relative',
              width: '100%',
              height: 60,
              overflow: 'auto',
              fontSize: '0.5em',
            }}
            scrollTop={scroll}>
            {words.map((word, i) => (
              <div
                key={`${word}_${i}`}
                style={{ width: '100%', height: 100, textAlign: 'center' }}>
                    <p
                    style={{
                        fontSize:32,
                        color:'white'
                    }}
                    >
                    {word}

                    </p>
              </div>
            ))}
          </animated.div>
        )
      }
    return (
        <div
        style={bColor ? 
            {backgroundColor: bColor }
            
        : {backgroundColor: 'RGB(25, 25, 25)' }}
        >
            <NavBox/>
            <div
            style={{
                height: 500,
                width: '100%',
                backgroundColor: 'black'
            }}
            >
            {/* <Scrolling/> */}
            <iframe src='https://my.spline.design/untitled-d9151713e8248c16b12378b777280610/' frameborder='0' width='100%' height='100%'></iframe>
            </div>
            <h3
            style={{
                fontSize: 45,
                textAlign: 'center',
                marginTop: 25,
                marginBottom: 25,
                fontFamily:'Aleo',
                color:'grey'
            }}
            >For Theming</h3>
            <div
            style={{
                textAlign: 'center',
                marginTop:15,
                marginBottom:60
            }}
            >
            <Button
            style={{
                backgroundColor:'#544612'
            }}
            onClick={() => setgenerateColorsStatus(!generateColorsStatus)}
            >
                Shuffle
            </Button>
            </div>
               
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
                        fontFamily:'Aleo',
                        color:'grey'
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
           


        
        </div>
    )
}
