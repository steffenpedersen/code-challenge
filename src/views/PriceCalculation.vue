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
        value="1"
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
        step="1000"
        value="2000"
        min="2000"
        max="100000"
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

      let iPaperPrice = 0;
      let visitorPrice = 0;
      let resultPrice = 0;

      // iPaper value
      if (inputIpapers.value <= 5) {
        iPaperPrice = 5;
        inputVisitors.setAttribute("min", "2000");
        inputVisitors.setAttribute("value", "2000");

        resultPrice = document.costing.items.value * iPaperPrice;
        getResults.innerHTML = resultPrice;
      }

      if (inputIpapers.value > 5 && inputIpapers.value <= 10) {
        iPaperPrice = 2;
        inputVisitors.setAttribute("min", "1000");
        inputVisitors.setAttribute("value", "1000");

        resultPrice = document.costing.items.value * iPaperPrice;
        getResults.innerHTML = resultPrice;
      }

      if (inputIpapers.value > 10 && inputIpapers.value <= 25) {
        iPaperPrice = 1;
        inputVisitors.setAttribute("min", "250");
        inputVisitors.setAttribute("value", "250");

        resultPrice = document.costing.items.value * iPaperPrice;
        getResults.innerHTML = resultPrice;
      }

      // Visitor value
      if (inputVisitors.value >= 1000 && inputVisitors.value <= 10000) {
        visitorPrice = 1.5;
        getResults.innerHTML =
          resultPrice + (inputVisitors.value / 1000) * visitorPrice;
      }

      if (inputVisitors.value >= 11000 && inputVisitors.value <= 50000) {
        visitorPrice = 1;
        getResults.innerHTML =
          resultPrice + (inputVisitors.value / 1000) * visitorPrice;
      }

      if (inputVisitors.value >= 51000 && inputVisitors.value <= 100000) {
        visitorPrice = 0.75;
        getResults.innerHTML =
          resultPrice + (inputVisitors.value / 1000) * visitorPrice;
      }
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