let isOn = false;
function colorHandler(color) {
  if (isOn) {
    bulb.style.backgroundColor = 'gray';
    isOn = false;
  } else {
    bulb.style.backgroundColor = color;
    isOn = true;
  }
}