class AdvancedCalculator {
  constructor() {
    this.display = 0;
    this.previousValue = 0;
    this.operation = null;
    this.shouldResetDisplay = false;
    this.memory = 0;
    this.history = [];
  }

  // Basic Operations
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }

  modulo(a, b) {
    if (b === 0) throw new Error("Cannot perform modulo by zero");
    return a % b;
  }

  // Advanced Operations
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  squareRoot(num) {
    if (num < 0) throw new Error("Cannot calculate square root of negative number");
    return Math.sqrt(num);
  }

  percentage(num) {
    return num / 100;
  }

  factorial(num) {
    if (num < 0) throw new Error("Factorial not defined for negative numbers");
    if (!Number.isInteger(num)) throw new Error("Factorial only works for integers");
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // Trigonometric Functions (in degrees)
  sine(degrees) {
    return Math.sin((degrees * Math.PI) / 180);
  }

  cosine(degrees) {
    return Math.cos((degrees * Math.PI) / 180);
  }

  tangent(degrees) {
    return Math.tan((degrees * Math.PI) / 180);
  }

  // Logarithmic Functions
  naturalLog(num) {
    if (num <= 0) throw new Error("Logarithm undefined for non-positive numbers");
    return Math.log(num);
  }

  log10(num) {
    if (num <= 0) throw new Error("Logarithm undefined for non-positive numbers");
    return Math.log10(num);
  }

  // Utility Functions
  absolute(num) {
    return Math.abs(num);
  }

  negate(num) {
    return -num;
  }

  reciprocal(num) {
    if (num === 0) throw new Error("Cannot calculate reciprocal of zero");
    return 1 / num;
  }

  round(num, decimals = 0) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  // Memory Operations
  memoryClear() {
    this.memory = 0;
  }

  memoryStore(value) {
    this.memory = value;
  }

  memoryAdd(value) {
    this.memory += value;
  }

  memoryRecall() {
    return this.memory;
  }

  memorySubtract(value) {
    this.memory -= value;
  }

  // History Operations
  addToHistory(expression, result) {
    this.history.push({ expression, result, timestamp: new Date() });
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }

  // Main Calculation Engine
  calculate(num1, operator, num2) {
    try {
      let result;
      switch (operator) {
        case '+':
          result = this.add(num1, num2);
          break;
        case '-':
          result = this.subtract(num1, num2);
          break;
        case '*':
          result = this.multiply(num1, num2);
          break;
        case '/':
          result = this.divide(num1, num2);
          break;
        case '%':
          result = this.modulo(num1, num2);
          break;
        case '^':
          result = this.power(num1, num2);
          break;
        default:
          throw new Error(`Unknown operator: ${operator}`);
      }
      this.addToHistory(`${num1} ${operator} ${num2}`, result);
      return result;
    } catch (error) {
      throw new Error(`Calculation error: ${error.message}`);
    }
  }

  // Single operand operations
  applySingleOperation(value, operation) {
    try {
      let result;
      switch (operation) {
        case 'sqrt':
          result = this.squareRoot(value);
          break;
        case '√':
          result = this.squareRoot(value);
          break;
        case 'abs':
          result = this.absolute(value);
          break;
        case 'negate':
          result = this.negate(value);
          break;
        case '1/x':
          result = this.reciprocal(value);
          break;
        case 'factorial':
        case '!':
          result = this.factorial(value);
          break;
        case 'sin':
          result = this.sine(value);
          break;
        case 'cos':
          result = this.cosine(value);
          break;
        case 'tan':
          result = this.tangent(value);
          break;
        case 'ln':
          result = this.naturalLog(value);
          break;
        case 'log':
          result = this.log10(value);
          break;
        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
      this.addToHistory(`${operation}(${value})`, result);
      return result;
    } catch (error) {
      throw new Error(`Operation error: ${error.message}`);
    }
  }

  // Display and state management
  setDisplay(value) {
    this.display = value;
  }

  getDisplay() {
    return this.display;
  }

  clear() {
    this.display = 0;
    this.previousValue = 0;
    this.operation = null;
    this.shouldResetDisplay = false;
  }

  // Complex calculations
  calculateAverage(...numbers) {
    if (numbers.length === 0) throw new Error("No numbers provided");
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  }

  calculateSum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  calculateProduct(...numbers) {
    return numbers.reduce((a, b) => a * b, 1);
  }
}

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AdvancedCalculator;
}
