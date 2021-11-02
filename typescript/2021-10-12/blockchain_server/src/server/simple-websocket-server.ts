import * as express from 'express';
import * as path from 'path';
import { Server } from 'ws';

// HTTP Server
const app = express();
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/simple-websocket-client.html')));

const httpServer = app.listen(8000, 'localhost', () => {
	console.log('HTTP server is listening on localhost:8000');
});

// WebSocket Server
const wsServer = new Server({ port: 8085 });
console.log('WebSocket server is listening on localhost:8085');

wsServer.on('connection', wsClient => {
	wsClient.send('This message was pushed by the WebSocket server');
	wsClient.onerror = (error) => console.log(`The server received: ${error['code']}`);
});