$(document).ready(function () {
  document.body.onkeydown = e => {
    var buttons = document.querySelectorAll(".drum-pad");
    buttons.forEach(f => {if (f.id[0] == e.key.toUpperCase()) f.click();});
  };
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Despacito" };

  }
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "keys" },
      React.createElement("div", { id: "row" },
      React.createElement("button", { id: "Qb", className: "drum-pad", onClick: () => {document.querySelector("#Q").currentTime = 0;document.querySelector("#Q").play();this.setState({ text: "HEATER#1" });} }, "Q", React.createElement("audio", { id: "Q", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),
      React.createElement("button", { id: "Wb", className: "drum-pad", onClick: () => {document.querySelector("#W").currentTime = 0;document.querySelector("#W").play();this.setState({ text: "HEATER#2" });} }, "W", React.createElement("audio", { id: "W", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" })),
      React.createElement("button", { id: "Eb", className: "drum-pad", onClick: () => {document.querySelector("#E").currentTime = 0;document.querySelector("#E").play();this.setState({ text: "HEATER#3" });} }, "E", React.createElement("audio", { id: "E", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" }))),

      React.createElement("div", { id: "row" },
      React.createElement("button", { id: "Ab", className: "drum-pad", onClick: () => {document.querySelector("#A").currentTime = 0;document.querySelector("#A").play();this.setState({ text: "HEATER#4" });} }, "A", React.createElement("audio", { id: "A", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" })),
      React.createElement("button", { id: "Sb", className: "drum-pad", onClick: () => {document.querySelector("#S").currentTime = 0;document.querySelector("#S").play();this.setState({ text: "CLAP" });} }, "S", React.createElement("audio", { id: "S", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" })),
      React.createElement("button", { id: "Db", className: "drum-pad", onClick: () => {document.querySelector("#D").currentTime = 0;document.querySelector("#D").play();this.setState({ text: "OPEN HH" });} }, "D", React.createElement("audio", { id: "D", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" }))),

      React.createElement("div", { id: "row" },
      React.createElement("button", { id: "Zb", className: "drum-pad", onClick: () => {document.querySelector("#Z").currentTime = 0;document.querySelector("#Z").play();this.setState({ text: "KICK N' HAT" });} }, "Z", React.createElement("audio", { id: "Z", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" })),
      React.createElement("button", { id: "Xb", className: "drum-pad", onClick: () => {document.querySelector("#X").currentTime = 0;document.querySelector("#X").play();this.setState({ text: "KICK" });} }, "X", React.createElement("audio", { id: "X", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" })),
      React.createElement("button", { id: "Cb", className: "drum-pad", onClick: () => {document.querySelector("#C").currentTime = 0;document.querySelector("#C").play();this.setState({ text: "CLOSED HH" });} }, "C", React.createElement("audio", { id: "C", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" })))),


      React.createElement("div", { id: "display" },
      this.state.text)));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));