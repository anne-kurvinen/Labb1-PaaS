"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv'), express = require('express'), { Client } = require('pg');
const path = require('path');
const app = express();
dotenv.config();
app.use(express.static(path.join(path.resolve(), 'dist')));
const client = new Client({
    connectionString: process.env.PGURI
});
client.connect().catch((err) => console.error('Connection error', err.stack));
app.get('/api/movies', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield client.query('SELECT * FROM movies WHERE productionyear > $1', [1960]);
        response.json(rows);
    }
    catch (err) {
        console.error(err);
        response.status(500).send('Server Error');
    }
}));
app.get('/api/actors', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield client.query('SELECT * FROM actors');
        response.json(rows);
    }
    catch (err) {
        console.error(err);
        response.status(500).send('Server Error');
    }
}));
app.post('/api/movies', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, productionYear } = _request.body;
    try {
        const result = yield client.query('INSERT INTO movies (title, productionYear) VALUES ($1, $2) RETURNING *', [title, productionYear]);
        response.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        response.status(500).send('Server Error');
    }
}));
app.delete('/api/movies/:id', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = _request.params;
    try {
        yield client.query('DELETE FROM movies WHERE id = $1', [id]);
        response.status(204).send();
    }
    catch (err) {
        console.error(err);
        response.status(500).send('Server Error');
    }
}));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Redo på http://localhost:${port}`);
});
