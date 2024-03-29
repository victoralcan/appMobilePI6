import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => res.json({ message: 'Dales' }));

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
