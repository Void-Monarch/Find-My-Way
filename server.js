const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

// CHECK DB TYPE
let DB;
if (process.env.DB_TYPE == 'LOCAL') {
  DB = process.env.DATABASE_LOCAL;
} else if (process.env.DB_TYPE == 'LIVE') {
  // Live server
  DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
  );
}

mongoose
  .connect(DB, {})
  .then(() =>
    console.log(
      `[+] DB connection successful! | Connected with [findmyway] database : ${process.env.DB_TYPE} \n`,
    ),
  );

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(
    `\n[+] App running on port ${port}...\n[+] Go to http://127.0.0.1:${port}`,
  );
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
