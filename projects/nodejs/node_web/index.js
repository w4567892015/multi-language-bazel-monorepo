const express = require('express');
const Calculator = require('../node_calculator/calculator');

const app = new express();
const calculator = new Calculator();

app.listen(8080, () => {
  console.log('listening on port 8080');
});

app.get('/', (_req, res) => {
  res.send(`did you know that 1 + 2 = ${calculator.add(1, 2)}`);
});
