// app.js (or index.js)

const express = require('express');
const app = express();
const pool = require('./db'); 
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json());
app.use(bodyParser.json())
app.use(cors());

app.get('/',(req,res)=>{
  const q = "SELECT * FROM SIGNUP";
  const data = pool.query(q);
  res.send(data)
})

app.post('/users', (req, res) => {
  const { name, email, password, balance } = req.body; 

  console.log(req.body.name)
  const query = 'INSERT INTO SIGNUP (name, email,password,balance) VALUES (?, ?, ?, ?)';
  const values = [name, email, password, balance];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }

    res.status(201).json({ message: 'Data inserted successfully!', insertedId: result.insertId });
  });
});


app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }

    res.json(results);
  });
});


const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});