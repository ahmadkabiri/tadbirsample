<template>
  <div class="calculator">
    <div class="display">{{ display || 0 }}</div>
    <div class="btn" @click="clear">C</div>
    <div class="btn">+/-</div>
    <div class="btn">%</div>
    <div class="btn operator" @click="devide">÷</div>
    <div class="btn" @click="append('7')">7</div>
    <div class="btn" @click="append('8')">8</div>
    <div class="btn" @click="append('9')">9</div>
    <div class="btn operator" @click="times">×</div>
    <div class="btn" @click="append('4')">4</div>
    <div class="btn" @click="append('5')">5</div>
    <div class="btn" @click="append('6')">6</div>
    <div class="btn operator" @click="minus">-</div>
    <div class="btn" @click="append('1')">1</div>
    <div class="btn" @click="append('2')">2</div>
    <div class="btn" @click="append('3')">3</div>
    <div class="btn operator" @click="add">+</div>
    <div class="btn zero" @click="append('0')">0</div>
    <div class="btn" @click="dot">.</div>
    <div class="btn operator" @click="equal">=</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      display: "",
      operator: null,
      prev: null,
      operatorClick: false,
    };
  },
  methods: {
    append(number) {
      // this.display = this.display + number
      if (this.operatorClick) {
        this.display = "";
        this.operatorClick = false;
      }
      this.display += number;
    },
    clear() {
      this.display = "";
    },
    dot() {
      if (this.display.indexOf(".") == "-1") {
        this.append(".");
      }
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    devide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    equal() {
      this.display = `${this.operator(parseFloat(this.prev),parseFloat(this.display))}`
    },
    setPrevious() {
      this.prev = this.display;
      this.operatorClick = true;
    },
  },
};
</script>

<style scoped>
.calculator {
  text-align: center;
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}

.zero {
  grid-column: 1 / 3;
}

.btn {
  background-color: #f2f2f2;
  border: 1px solid #999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
