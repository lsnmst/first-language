import * as React from "react"

import CountUp from 'react-countup';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export const COLORS = ["#ccdfec", "#f9ab47", "#d96242", "#a13a34", "#f8a205", "#d24d55", "#fe9c37", "#da6026", "#8fb8d9", "#f56727", "#7c241b", "#5a838f", "#3b97b6", "#825a8f"];

export const Colorized = ({   }) => {
  return (
    <>
      <CardContent sx={{ maxWidth: 800 }}>
        <Typography component='div' className="colorized" sx={{ mt: 2 }}>
          <div
            style={{}}
          >
            <span style={{}}>
             We have collected <CountUp
                start={1}
                end={112}
                duration={8} /> texts, from the 18th century to the year 2007, covering {" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[0] }}>
                abolishment of slavery
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[1] }}>
                anti-colonialism
              </span>{" "}
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[2] }}>
                belief, spirituality, religion, cosmogony, ancestrality
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[3] }}>
                caring and loving
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[4] }}>
                education
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[5] }}>
                gender biases and traditional cultural norms
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[6] }}>
                gender justice
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[7] }}>
                gender-based violence
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[8] }}>
                inter-communal violence
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[9] }}>
                motherhood, sisterhood
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[10] }}>
                political participation
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[11] }}>
                reproductive right
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[12] }}>
                sex work
              </span>
              ,{" "}
              <span style={{ textShadow:"2px 2px rgba(39, 38, 38, .7)" , color: COLORS[13] }}>
                traditional knowledge and customs
              </span>
            </span>
          </div>
        </Typography>
      </CardContent>
    </>
  );
};
