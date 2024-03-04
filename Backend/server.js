// Config file setup
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });

const app = require("./app");

const connectToDatabase = require('./config/database');

connectToDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server initiated on port: ${process.env.PORT} from ${process.env.NODE_ENV}`)
});