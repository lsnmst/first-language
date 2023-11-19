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
import CountUp from 'react-countup';
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
            height: '100vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="colorized" sx={{ mt: 10 }}>The First language serves African women to unfold their unique relationship to the primary sources of knowledge, meaning their own bodies, and the land and water they connect with</Typography>
              <Typography component='div' className="sentencesans" sx={{ mt: 5 }}>Language is the best repository of knowledge of its ecology. This is especially true for African women, as in their role of knowledge transmission, they demonstrate that no language can replace another in understanding and giving vocabulary to an ecology, understood as the entire interaction and relationship of all species in a given area.</Typography>
              <Typography component='div' className="colorized" sx={{ mt: 10 }}>Any forced or voluntary interruption with the use of the First language means erasing the storage of knowledge of the African people</Typography>
            </CardContent>
          </FullpageSection>

          {/* <FullpageSection className="sentencetitleback" style={{
            height: '100vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentencetitle" sx={{ mt: 10 }}>STOP VIOLENCE IN THE CLASSROOMS</Typography>
              <BarChartNoText />
            </CardContent>
          </FullpageSection> */}

          <FullpageSection style={{
            height: '100vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="colorized" sx={{ mt: 10 }}>"Berlin of 1884 was effected through the sword and the bullet. But the night of the sword and the .bullet was followed by the morning of the chalk and 'the blackboard. The physical violence of the battlefield was followed by the psychological violence of the' classroom"<br /><br /><br />✎ NGŨGĨ WA THIONG'O <sup>ꖁ</sup> </Typography>
              <Typography component='div' className="sentencesans" sx={{ mt: 8 }}><sup>ꖁ</sup> Decolonising the Mind. The Politics of Language in African Literature (1981)</Typography>
              <Typography component='div' className="sentencesans" sx={{ mt: 1 }}>Upper Middle-Class was gradually conscientised to give up their First languages and adopt foreign languages because of the benefits they expect to derive from them, power and economics. Made to believe their languages in public lack same functional load.</Typography>
              {/* <Typography component='div' className="sentencesans" sx={{ mt: 1 }}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </Typography> */}
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '70vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="colorized" sx={{ mt: 10 }}>The tongue of African women is a traumatised survivor</Typography>
              <Typography component='div' className="colorized" sx={{ mt: 5 }}>"My mouth is a battlefield!<br />A clash of unyielding cultures warring for dominance"<br /><br />✎ HAFSAT ABDULLAHI</Typography>
              <Typography component='div' className="sentencesans" sx={{ mt: 10 }}>Video from Hafsat Abdullahi</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '70vh',
          }}>
            <ReactPlayer width='100%' height='100%' controls url="https://www.alessandromusetta.com/geo/tiles/first-language/Hafsat_Abdullahi.mp4" />
          </FullpageSection>

          {/* <FullpageSection className="sentencetitleback" style={{
            height: '100vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentencetitle" sx={{ mt: 10 }}>MAKING AUDIBLE WOMEN INAUDIBILITY</Typography>
              <BarChartNoText />
            </CardContent>
          </FullpageSection> */}

          <FullpageSection style={{
            height: '70vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="colorized" sx={{ mt: 10 }}>The written literary expressions by African women have been invisibilized, underrepresented, undocumented, and unhistoricized for long, particularly those in the First language</Typography>
              <Typography component='div' className="sentencesans" sx={{ mt: 20 }}>Dra. Abena Busia, who together with Dra. Tuzyline Allan conceptualised the anthology Women Writing Africa</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className="abena" style={{
            height: '70vh',
          }}>
          </FullpageSection>

          <FullpageSection style={{
            height: '45vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="colorized" sx={{ mt: 10 }}>So, who are they and what is the legacy of women writing Africa in their First languages?<br />Help us give an answer and increase the collection of THE FIRST LANGUAGE OF WOMEN WRITING AFRICA </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className="sentencetitleback" style={{
            height: '100vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentencetitle" sx={{ mt: 10 }}>THE COLLECTION. MAKING AUDIBLE WOMEN INAUDIBILITY</Typography>
              <BarChartNoText />
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            height: '45vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentencesans" sx={{ mt: 10 }}>The THE FIRST LANGUAGE OF WOMEN WRITING AFRICA collection takes its title and original source from the Women Writing Africa series, published by the Feminist Press of the City University of New York between the years 2003 and 2007, and described as a "cultural reconstruction project". Through the publication of a series of regional anthologies, each collecting oral and written narratives and a variety of historical and literary texts, the project has made visible the oral and written literary expression of African women. The definition of "writing" has been broadened to include songs, praise poems and significant oral texts, as well as fiction, poetry, letters, diaries, books and historical and legal documents. Through this online collection, we reaffirm, as in the aforementioned book series, the goal of amplifying the works of women and their stories.
              </Typography>
            </CardContent>
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

          <FullpageSection className="africalang" style={{
            height: '100vh',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="colorized" sx={{ mt: 6 }}>A total of <CountUp
                start={1}
                end={64}
                duration={8}
                style={{ color: "#da6026" }} /> languages distributed in the eastern, western and southern regions of the African continent can be identified in the collection
              </Typography>
            </CardContent>
          </FullpageSection>

          {/* <FullpageSection className="africalang" style={{
            height: '90vh',
            padding: '1em',
          }}>
          </FullpageSection> */}

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
