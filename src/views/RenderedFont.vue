<template>
  <div class="rendered-font">
    <div class="rendered-font-inputs">
      <label for="rendered-font-text">Text</label>
      <input id="rendered-font-text" type="text" />
    </div>

    <div class="rendered-font-inputs">
      <label for="rendered-font-width">Width</label>
      <input id="rendered-font-width" type="text" />
    </div>

    <div class="rendered-font-inputs">
      <label for="rendered-font-height">Height</label>
      <input id="rendered-font-height" type="text" />
    </div>

    <div class="rendered-font-inputs">
      <label for="rendered-font-fonts">Font Options</label>
      <select id="rendered-font-fonts">
        <option value="Verdana">Verdana</option>
        <option value="Ariel">Ariel</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    </div>

    <button
      class="rendered-font-inputs rendered-font-inputs--center"
      v-on:click="renderedResult(this)"
    >Render Text</button>

    <div id="result-rendered-font">
      <p id="result-rendered-text"></p>
    </div>
  </div>
</template>

<script>
import fitty from "fitty";

export default {
  name: "RenderedFont",
  methods: {
    renderedResult() {
      const renderedFont = document.getElementById("result-rendered-font");
      const renderedResult = document.getElementById("result-rendered-text");
      const renderedText = document.getElementById("rendered-font-text").value;
      const renderedWidth = document.getElementById("rendered-font-width").value;
      const renderedHeight = document.getElementById("rendered-font-height").value;
      const renderedFonts = document.getElementById("rendered-font-fonts").value;

      renderedFont.style.width = renderedWidth + "px";
      renderedFont.style.height = renderedHeight + "px";
      renderedFont.style.fontFamily = renderedFonts;
      renderedResult.innerHTML = renderedText;
    }
  },
  mounted() {
    fitty("#result-rendered-text");
  }
};
</script>

<style lang="scss">
.rendered-font {
  width: 16em;
  margin: 0 auto;
}

#result-rendered-font {
  margin: 0 auto;
}

.rendered-font-inputs {
  display: block;
  margin-bottom: 1em;

  &--center {
    margin-left: auto;
    margin-right: auto;
  }

  label {
    margin-right: 0.5em;
  }
}

p {
  margin: 0;
}
</style>