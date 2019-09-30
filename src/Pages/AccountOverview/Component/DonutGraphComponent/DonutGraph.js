import React, { Component } from 'react'
import Chart from "react-apexcharts";
export default class DonutGraph extends Component {
    state = {
        options: {
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [44, 55, 41, 17, 15]
      }
    render() {
        return (
            <div style={{padding: "30px"}}id="chart">
          <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        </div>
        )
    }
}

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(DonutChart), domContainer);

