<template>
  <div class="price-calculation">
    <form name="costing">
      <div class="label">
        <label for="items">iPapers needed:</label>
        <span id="ipapers-needed"></span>
      </div>

      <input
        class="input"
        id="ipapers"
        type="range"
        name="items"
        price
        min="0"
        max="10"
        :change="calculateResult()"
      />

      <div class="label">
        <label for="price">Expected visitors pr. month:</label>
        <span id="expected-visitors"></span>
      </div>

      <input
        class="input"
        id="visitors"
        type="range"
        name="price"
        min="0"
        max="10"
        :change="calculateResult(this)"
      />
    </form>
    <div class="result">
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

      getResults.innerHTML =
        document.costing.items.value * document.costing.price.value;
    }
  }
};
</script>

<style lang="scss">
.price-calculation {
  width: 16em;
  margin: 0 auto;
}

.label {
  display: flex;
  justify-content: space-between;
}

.input {
  width: 100%;
  margin-bottom: 1em;
}

.result {
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
}
</style>