const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful'));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('ST-BLOG-API running on port ${port}.... ');
});
