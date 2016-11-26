class Debbger {
  constructor(data) {
    console.log(data);
  }

  render() {
    var stage = `
      <div class="c-debug_container">
        ${data}
      </div>
    `;

    document.body.html(stage);
  }
}

module.exports = data => new Debbger(data);