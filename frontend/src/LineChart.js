import React, { Component } from 'react'
import * as d3 from 'd3'
import './static/Linechart.css'
class LineChart extends Component {

componentDidMount(){
      this.drawchart();
}

drawchart = () =>{
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 460 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var parse = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    xAxis = d3.axisBottom(x).tickSize(-height),
    yAxis = d3.axisLeft(y).tickArguments(4);
    // let data = this.props.chartData 

    let data = [
      {Timestamp:"2020-01-04",sentiment:"Happy",percent:80},
      {Timestamp:"2020-01-05",sentiment:"Happy",percent:8},
      {Timestamp:"2020-01-06",sentiment:"Happy",percent:180},
      {Timestamp:"2020-01-07",sentiment:"Happy",percent:280},
      {Timestamp:"2020-01-08",sentiment:"Happy",percent:30},
      {Timestamp:"2020-01-09",sentiment:"Sad",percent:180},
      {Timestamp:"2020-01-01",sentiment:"Sad",percent:80},
      {Timestamp:"2020-01-02",sentiment:"Sad",percent:50},
      {Timestamp:"2020-01-03",sentiment:"Sad",percent:20},
      {Timestamp:"2020-01-04",sentiment:"Sad",percent:40},
      {Timestamp:"2020-01-05",sentiment:"Neutral",percent:20},
      {Timestamp:"2020-01-04",sentiment:"Neutral",percent:30},
      {Timestamp:"2020-01-06",sentiment:"Neutral",percent:40},
      {Timestamp:"2020-01-07",sentiment:"Neutral",percent:50},
      {Timestamp:"2020-01-12",sentiment:"Neutral",percent:180},
      {Timestamp:"2020-01-13",sentiment:"Neutral",percent:220},
      {Timestamp:"2020-01-04",sentiment:"Angry",percent:40},
      {Timestamp:"2020-01-06",sentiment:"Angry",percent:50},
      {Timestamp:"2020-01-07",sentiment:"Angry",percent:10},
      {Timestamp:"2020-01-08",sentiment:"Angry",percent:120},
      {Timestamp:"2020-01-10",sentiment:"Angry",percent:230}
    ]
var area = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { return x(d.Timestamp); })
    .y0(height)
    .y1(function(d) { return y(d.percent); });

var line = d3.line()
    .curve(d3.curveMonotoneX)
    .x(function(d) { return x(d.Timestamp); })
    .y(function(d) { return y(d.percent); });

  data.forEach(function(d) {
      d = type(d);
  });

  console.log(data);
  console.log(parse(data[0].Timestamp));

  var values = data.filter(function(d) {
    return d.sentiment === "Happy";
  });

  var sad = data.filter(function(d) {
    return d.sentiment === "Sad";
  });

  var neu = data.filter(function(d) {
    return d.sentiment === "Neutral";
  });

  var angry = data.filter(function(d) {
    return d.sentiment === "Angry";
  });


  
  x.domain([values[0].Timestamp, values[values.length - 1].Timestamp]);
  y.domain([0, d3.max(values, function(d) { return d.percent; })]).nice();

  console.log(values[0].Timestamp);
  console.log(x.domain());
  console.log(y.domain());

  
  var svg = d3.select("#linechart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Add the clip path.
  svg.append("clipPath")
      .attr("id", "clip")
    .append("rect")
      .attr("width", width)
      .attr("height", height);

  // Add the x-axis.
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);


  var colors = d3.scaleOrdinal(d3.schemeCategory10);
  svg.selectAll('.line')
    .data([values, sad, neu,angry])
    .enter()
      .append('path')
        .attr('class', 'line')
        .style('stroke', function(d) {
          return colors(Math.random() * 50);
        })
        .attr('clip-path', 'url(#clip)')
        .attr('d', function(d) {
          return line(d);
        })
        
  var curtain = svg.append('rect')
    .attr('x', -1 * width)
    .attr('y', -1 * height)
    .attr('height', height)
    .attr('width', width)
    .attr('class', 'curtain')
    .attr('transform', 'rotate(180)')
    .style('fill', '#ffffff');
    
  var guideline = svg.append('line')
    .attr('stroke', '#333')
    .attr('stroke-width', 0)
    .attr('class', 'guide')
    .attr('x1', 1)
    .attr('y1', 1)
    .attr('x2', 1)
    .attr('y2', height)
  
    var t = svg.transition()
    .delay(750)
    .duration(6000)
    .ease(d3.easeLinear)
    .on('end', function() {
      d3.select('line.guide')
        .transition()
        .style('opacity', 0)
        .remove()
    });
    var keys = ["Happy","Sad","Neutral","Angry"]

    // Usually you have a color scale in your chart already
    var color = d3.scaleOrdinal(d3.schemeCategory10)
    
    // Add one dot in the legend for each name.
    var size = 20
    svg.selectAll("mydots")
      .data(keys)
      .enter()
      .append("rect")
        .attr("x", 50)
        .attr("y", function(d,i){ return 30 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return color(d)})
    
    // Add one dot in the legend for each name.
    svg.selectAll("mylabels")
      .data(keys)
      .enter()
      .append("text")
        .attr("x", 50 + size*1.2)
        .attr("y", function(d,i){ return 30 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return color(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
  

  t.select('rect.curtain')
    .attr('width', 0);
  t.select('line.guide')
    .attr('transform', 'translate(' + width + ', 0)')


function type(d) {
  d.Timestamp = parse(d.Timestamp);
  d.percent = +d.percent;
  return d;
}
}
    render() {
        return (
            <div id="linechart">
            </div>
        )
    }
}

export default LineChart