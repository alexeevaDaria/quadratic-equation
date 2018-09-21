module.exports = function solveEquation(equation) {
  var a,b,c,D=0;

  var arguments=equation.replace(/\s/g, "" );
  arguments= arguments.match(/\-?[0-9]+/gi);
  a=Number(arguments[0]);
  b=Number(arguments[2]);
  c=Number(arguments[3]);

  D=Math.pow(b,2)-4*a*c;

  var x1,x2;
  x1=Math.round((-b-Math.sqrt(D))/(2*a));
  x2=Math.round((-b+Math.sqrt(D))/(2*a));

  return x1 > x2 ? [x2, x1] : [x1, x2];
}
