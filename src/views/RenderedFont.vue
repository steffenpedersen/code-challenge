<template>
  <div class="rendered-font">
    <div class="rendered-font-inputs">
      <input id="rendered-font-text" type="text" placeholder="Text" />
      <input id="rendered-font-width" type="text" placeholder="Width" />
      <input id="rendered-font-height" type="text" placeholder="Height" />
    </div>

    <div>
      <select id="rendered-font-fonts">
        <option value>Font Options</option>
        <option value="Verdana">Verdana</option>
        <option value="Ariel">Ariel</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>

      <button v-on:click="renderedResultPrototype(this)">Render Text</button>
    </div>

    <div id="result-rendered-font">
      <span id="result-rendered-text"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RenderedFont",
  methods: {
    renderedResultPrototype() {
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
  }
};
</script>

<style lang="scss">
.result-rendered-font {
  margin: 0 auto;
}
</style>