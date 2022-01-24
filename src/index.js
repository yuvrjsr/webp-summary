//importing modules
const randomNumber = require("./random-number");
const sayMyName = require("./say-my-name");
const getInfo = require("./get-info")
// import "./style.css";
import './scss/main.scss'

const rn = randomNumber(10);
const name = sayMyName('Sachin');

const sachin = getInfo(rn,name)
console.log(sachin);