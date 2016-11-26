function Debugger(data) {
  var stage = `
    <div class="c-debug_container">
      ${data}
    </div>
  `;

  document.body.html(stage);
}