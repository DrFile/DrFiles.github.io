function removeBackground() {
    const input = document.getElementById('imageInput');
    const resultCanvas = document.getElementById('resultCanvas');
    const ctx = resultCanvas.getContext('2d');

    if (!input.files.length) {
        alert('Please select an image.');
        return;
    }

    const img = new Image();
    img.onload = function() {
        resultCanvas.width = img.width;
        resultCanvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        // Replace the background color (white in this example) with transparency
        const imageData = ctx.getImageData(0, 0, resultCanvas.width, resultCanvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];

            // Assuming white background (you may need to adjust the values based on your image)
            if (red > 200 && green > 200 && blue > 200) {
                data[i + 3] = 0; // Set alpha channel to 0 (transparent)
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };

    img.src = URL.createObjectURL(input.files[0]);
}
