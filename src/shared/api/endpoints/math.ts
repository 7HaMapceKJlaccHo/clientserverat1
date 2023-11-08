import axios from "../axios";

const endpoint = {
  add: (number1: number, number2: number) =>
    axios.put("/math/add", { number1, number2 }),
  subtract: (number1: number, number2: number) =>
    axios.put("/math/subtract", { number1, number2 }),
  multiply: (number1: number, number2: number) =>
    axios.put("/math/multiply", { number1, number2 }),
  divide: (number1: number, number2: number) =>
    axios.put("/math/divide", { number1, number2 }),
  pow: (number1: number, number2: number) =>
    axios.put("/math/pow", { number1, number2 }),
};

export default endpoint;
