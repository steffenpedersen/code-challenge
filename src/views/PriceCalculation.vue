<template>
  <div class="price-calculation">
    <form name="costing">
      <div class="price-calculation-label">
        <label for="items">iPapers needed:</label>
        <span id="ipapers-needed"></span>
      </div>

      <input
        class="price-calculation-input"
        id="ipapers"
        type="range"
        name="items"
        price
        min="1"
        max="100"
        v-on:change="calculateResult()"
      />

      <div class="price-calculation-label">
        <label for="price">Expected visitors pr. month:</label>
        <span id="expected-visitors"></span>
      </div>

      <input
        class="price-calculation-input"
        id="visitors"
        type="range"
        name="price"
        min="1"
        max="20000"
        v-on:change="calculateResult(this)"
      />
    </form>
    <div class="price-calculation-result">
      <span>Your price:</span>
      <strong>
        <span id="result-price"></span>/month
      </strong>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "PriceCalculation",
  methods: {
    calculateResult() {
      const getIpapers = document.getElementById("ipapers-needed");
      const getVisitors = document.getElementById("expected-visitors");
      const getResults = document.getElementById("result-price");

      const inputIpapers = document.getElementById("ipapers");
      const inputVisitors = document.getElementById("visitors");

      getIpapers.innerHTML = inputIpapers.value;
      getVisitors.innerHTML = inputVisitors.value;

      if (inputIpapers.value <= 5) {
        let price = 5;
        inputVisitors.setAttribute("min", "2000");

        getResults.innerHTML = document.costing.items.value * price;
      }

      if (inputIpapers.value > 5 && inputIpapers.value <= 10) {
        let price = 2;
        inputVisitors.setAttribute("min", "1000");

        getResults.innerHTML = document.costing.items.value * price;
      }

      // If 1-5
      // iPaper = €5
      // Visitors = min. 2000

      // If 6-10
      // iPaper = €2
      // Visitors = min. 1000

      // If 11-25
      // iPaper = €1
      // Visitors = min. 250

      // If 1-5
      // iPaper = €5
      // Visitors = min. 2000

      // If extra visitors

      // 1-10k: €1.5 pr. 1000
      // 11k-50k: €1 pr. 1000
      // 51k-100k: €0.75 pr. 1000
    }
  },
  mounted() {
    this.calculateResult();
  }
};
</script>

<style lang="scss">
.price-calculation {
  width: 16em;
  margin: 0 auto;
}

.price-calculation-label {
  display: flex;
  justify-content: space-between;
}

.price-calculation-input {
  width: 100%;
  margin-bottom: 1em;
}

.price-calculation-result {
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
}
</style>