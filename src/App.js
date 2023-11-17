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
            <CardContent sx={{ maxWidth: 600 }}>
              <Typography component='div' className="sentencesans" sx={{ mt: 10 }}>This collection takes its title from the Women Writing Africa series, published by the Feminist Press of the City University of New York between the years 2003 and 2007, and described as a "cultural reconstruction project". Through the publication of a series of regional anthologies, each collecting oral and written narratives and a variety of historical and literary texts, the project has made visible the oral and written literary expression of African women. The definition of "writing" has been broadened to include songs, praise poems and significant oral texts, as well as fiction, poetry, letters, diaries, books and historical and legal documents. Through this online collection, we reaffirm, as in the aforementioned book series, the goal of amplifying the works of women and their stories.
              </Typography>
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

        </FullPageSections>

      </Fullpage></>
  )
}


export default App;
