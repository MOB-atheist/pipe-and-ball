import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

let app = express();

app.use(express.json({}))
app.use(express.urlencoded({
    extended: true    
}));
app.use(express.json())

app.use(cors())

routes(app)

app.get('/', (req, res) => {
  res.send('Welcome to the api');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});