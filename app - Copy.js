function func(){
	const express = require('express')
	const app = express()

	app.get('/', (req, res) => res.send('Hello World!'))

	app.listen(3000, () => console.log('Example app listening on port 3000!'))
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

<button onclick=
    "show_image('http://google.com/images/logo.gif', 
                 276, 
                 110, 
                 'Google Logo');">Add Google Logo</button> 