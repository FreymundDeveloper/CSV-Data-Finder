import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, this is your backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
