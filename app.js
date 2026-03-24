const input = document.getElementById("inputt");
const btnn = document.getElementById("enter");
const valueee = document.getElementById("value");

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btnn.click();
  }
}
)

btnn.addEventListener("click", async () => {
  if (input.value == "") {
    valueee.innerHTML =
      "<h2>Enter City Name</h2>";
  }
  const city = input.value;
  const url = `http://api.weatherapi.com/v1/current.json?key=b2396eeb8e6b45aa84475659261003&q=${city}&aqi=yes`;
  const response = await fetch(url);

  const data = await response.json();

  valueee.innerHTML = `
  <h2>${data.location.name}</h2>
  <p>Temperature: ${data.current.temp_c} °C</p>
  <p>Condition: ${data.current.condition.text}</p>`;

  const icon = data.current.condition.icon;

  valueee.innerHTML = `
<h2>${data.location.name}</h2>
<img src="${icon}">
<p>${data.current.temp_c}°C</p>
`;


  console.log(data);

});