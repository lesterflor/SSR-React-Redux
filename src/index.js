import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// tell express this directory is available to the browser
app.use(express.static('public'));

app.get('/', (req, res) => {
	const content = renderToString(<Home />);

	const html = `
        <html>
            <head></head>
            <body>
                <div>${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

	res.send(html);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
