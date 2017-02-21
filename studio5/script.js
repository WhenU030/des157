var svg_donut = d3.select("#donutarc"),
    width = +svg_donut.attr("width"),
    height = +svg_donut.attr("height"),
    radius = Math.min(width, height) / 2,
    graph = svg_donut.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var d_tips = d3.tip()
      .attr("class", "d3-tip")
      .offset([0, 0])
      .html(function(d) { return "<span style='text-decoration:underline'>"+ d.data.agency +"</span>: <br>Total: <span style='color:#ED6A5A'>" + "$" +d.data.total + "</span>" + "<br> Average: <span style='color:#FFB627'>" + "$" +d.data.average + "</span>";
  });
    svg_donut.call(d_tips);

var d_colors = d3.scaleOrdinal().range(["#05668D","#1C77C3", "#FFC971", "#028090", "#CC5803", "#00A896", "#1A659E", "#FF9505","#70C1B3", "#A9E5BB","#E2711D","#BC3908", "#98C1D9","#1D4E89", "#E3B505", "#5DD39E", "#348AA7", "#D62828", "#525174","#513B56", "#457B9D","#ED6A5A", "#FFB627", "#DB504A"]);

var pie = d3.pie()
    .value(function(d) { return d.total; })
    .sort(null);

var arc = d3.arc()
    .innerRadius(radius - 120)
    .outerRadius(radius - 20);

d3.csv("data/donut.csv", type, function(error, data) {
  if (error) throw error;

  var path = graph.datum(data).selectAll("path")
      .data(pie)
    .enter().append("path")
      .attr("fill", function(d, i) { return d_colors(i); })
      .attr("d", arc)
      .each(function(d) { this._current = d; })
      .on("mouseover", d_tips.show)
      .on("mouseout", d_tips.hide); // store the initial angles

  d3.selectAll("input")
      .on("change", change);

  var timeout = setTimeout(function() {
    d3.select("input[value=\"average\"]").property("checked", true).each(change);
  }, 2500);

  function change() {
    var value = this.value;
    clearTimeout(timeout);
    pie.value(function(d) { return d[value]; }); // change the value function
    path = path.data(pie); // compute the new angles
    path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
  }
});

function type(d) {
  d.total = +d.total;
  d.average = +d.average;
  return d;
}

// Store the displayed angles in _current.
// Then, interpolate from _current to the new angles.
// During the transition, _current is updated in-place by d3.interpolate.
function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}
