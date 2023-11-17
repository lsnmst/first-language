import React from "react";
import HSBar from "react-horizontal-stacked-bar-chart";


export default class BarChartNoText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div className="appbar">
        <HSBar
          id="hsbar"
          height={60}
          fontColor="rgb(50,20,100)"
          data={[
            { value: 2, color: "#ccdfec" },
            { value: 9, color: "#f9ab47" },
            { value: 16, color: "#d96242" },
            { value: 7, color: "#a13a34" },
            { value: 7, color: "#f8a205" },
            { value: 28, color: "#d24d55" },
            { value: 7, color: "#fe9c37" },
            { value: 6, color: "#da6026" },
            { value: 1, color: "#aecfd1" },
            { value: 8, color: "#f56727" },
            { value: 7, color: "#7c241b" },
            { value: 2, color: "#5a838f" },
            { value: 2, color: "#3b97b6" },
            { value: 10, color: "#825a8f" },
          ]}
          onClick={(e) =>
            this.setState((state) => ({
              ...state,
              value: e.bar.value
            }))
          }
        />
      </div>
    );
  }
}