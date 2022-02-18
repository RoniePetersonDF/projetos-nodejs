const app = require('./config');

require('dotenv').config();


const router = require('./routes');
app.use('/', router);


app.listen(process.env.PORT, ()=>{
  console.warn(`Server is running in: http://localhost:3000`);
});