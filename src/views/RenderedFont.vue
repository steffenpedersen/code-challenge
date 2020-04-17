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

    <div>
      <span id="result-rendered-font"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RenderedFont",
  methods: {
    renderedResultPrototype() {
      const renderedResult = document.getElementById("result-rendered-font");
      const renderedText = document.getElementById("rendered-font-text").value;
      const renderedWidth = document.getElementById("rendered-font-width")
        .value;
      // const renderedHeight = document.getElementById("rendered-font-height").value;
      // const renderedFonts = document.getElementById("rendered-font-fonts").value;

      renderedResult.innerHTML = renderedText;
      renderedResult.style.width = renderedWidth + "px";
    }
  }
};
</script>

<style lang="scss">
</style>