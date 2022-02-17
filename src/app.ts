import express from 'express';
// import postRouter from './routes/post';
const app: express.Application = express();

// Health-check
app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/1', (req, res) => {
  res.send('sadfadf')
})

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.listen(3010, () => {
  console.log('실행중');
});