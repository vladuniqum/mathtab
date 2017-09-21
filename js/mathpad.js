 var fntext = "1";
 function draw (){
    functionPlot({
        target: '#mathPlot',
		width: 420,
        height: 400,
        xAxis: {
          label: 'real'
        }, 
        yAxis: {
          label: 'imaginary' 
        },
        grid: true,
        data: [
          { fn: fntext }
        ]
	})
}

draw();
function updateFormula(){
  $("#eq").val(fntext);
}
draw();

$("#btnConst").on("click", function(){
  fntext = "1";
  updateFormula();
  draw();
});
$("#btn3x").on("click", function(){
  fntext = "3x";
  updateFormula();
  draw();
});
$("#btnAbs").on("click", function(){
  fntext = "abs (x)";
  updateFormula();
  draw();
});
$("#btnSqr").on("click", function(){
  fntext = "sqrt (x)";
  updateFormula();
  draw();
});
$("#btnX2").on("click", function(){
  fntext = "x^2";
  updateFormula();
  draw();
});
$("#btnX3").on("click", function(){
  fntext = "x^3";
  updateFormula();
  draw();
});
$("#btnOneByX").on("click", function(){
  fntext = "1/x";
  updateFormula();
  draw();
});
$("#btnSin").on("click", function(){
  fntext = "sin(x)";
  updateFormula();
  draw();
});
$("#btnGo").on("click", function(){
  fntext = $("#eq").val();
  draw();
});

