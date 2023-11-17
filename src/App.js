import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import Zoommap from './zoommap';
import { Colorized } from './bar.js';
import BarChart from './barplot.js';
import BarChartNoText from './barnotext.js';
import ReactPlayer from 'react-player';

const App = () => {

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleCloseNote = () => setOpen(false);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <><div className='logo'></div>

      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{}}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <FullpageSection className="sentencetitleback" style={{
            height: '100vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentencetitle" sx={{ mt: 10 }}>THE FIRST LANGUAGE OF THE WOMEN WRITING AFRICA</Typography>
              <BarChartNoText />
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '40vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="colorized" sx={{ mt: 10 }}>"My mouth is a battlefield!<br />A clash of unyielding cultures warring for dominance.<br />See, my tongue is a traumatized survivor…"<br /><br /><br />✎ HAFSAT ABDULLAHI
               </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '70vh',
          }}>
            <ReactPlayer width='100%' height='100%' controls url="https://www.alessandromusetta.com/geo/tiles/first-language/Hafsat_Abdullahi.mp4" />
          </FullpageSection>

          <FullpageSection style={{
            height: '70vh',
          }}>
            <Colorized />
          </FullpageSection>

          <FullpageSection style={{
            height: '20vh',
          }}>
            <BarChart />
          </FullpageSection>

          <FullpageSection style={{
            height: '100vh',
            padding: '1em',
          }}>
            <Zoommap />
          </FullpageSection>

          <FullpageSection style={{
            height: '20vh',
            padding: '1em',
          }}>
          </FullpageSection>


        </FullPageSections>

      </Fullpage></>
  )
}


export default App;
