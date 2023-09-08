// function that draws a row of the matrix
function drawBinaryMatrixRow(container, context, drop_locations, font_size) {
    // fill container
    context.fillStyle = "rgba(30, 30, 48, 0.3)";
    context.fillRect(0, 0, container.width, container.height);

    // fill container with matrix elements
    for (let i = 0; i < drop_locations.length; ++i) {
        let char = Math.round(Math.random());
        context.fillStyle = "rgb(229, 229, 229)";
        context.fillText(char, i * font_size, drop_locations[i] * font_size);
        drop_locations[i]++;
        if (drop_locations[i] * font_size > container.height && Math.random() > 0.9) {
            drop_locations[i] = 0;
        }
    }
}

// draw the matrix rain
function drawBinaryMatrixRain() {
    // get matrix canvas
    const container = document.querySelector("#matrix canvas");
    const context = container.getContext("2d");
    // set width and height of canvas
    container.width = window.innerWidth;
    container.height = window.innerHeight * 4;
    // set matrix attributes
    let font_size = 30;
    let num_cols = container.width/font_size;
    // store current location of raining elements
    let drop_positions = [];
    for (let i = 0; i < num_cols; ++i) {
        drop_positions[i] = 0;
    }
    // draw matrix rain of elements
    let drop_interval = 120;
    setInterval(() => {drawBinaryMatrixRow(container, context, drop_positions, font_size);}, drop_interval);
}

drawBinaryMatrixRain();