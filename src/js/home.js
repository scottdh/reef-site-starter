(function () {
  var home = new Reef("#home", {
    data: {},
    template: function (props) {
      return `
      <h1>Hello World!</h1>
      <a href="./designsystem.html">Design System</a>
    `;
    },
  });

  home.render();
})();
