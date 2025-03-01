
const btn = document.getElementById("theme-btn");
btn.addEventListener('click', function () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const alpha = 0.2;
    const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    console.log(rgba);
    document.getElementById("body").style.backgroundColor = rgba;
});