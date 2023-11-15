import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import Zoommap from './zoommap';

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

          <FullpageSection style={{
            backgroundColor: 'rgba(192,117,111,1)',
            height: '100vh',
          }}>
          </FullpageSection>

          <FullpageSection className="trecentocinque" style={{
            height: '85vh',
          }}>
            <CardContent  sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>⦿ Nilce</Typography><Typography component='div' className="sentenceh2" sx={{ mt: 2 }}>“The language of the women writing Africa ”<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(192,117,111,1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Zoommap />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(192,117,111,1)',
            height: '20vh',
            padding: '1em',
          }}>
          </FullpageSection>


        </FullPageSections>

      </Fullpage></>
  )
}


export default App;
