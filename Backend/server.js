// Config file setup
const dotenv = require('dotenv');
dotenv.config({ path: 'Backend/config/config.env' });

const expressApp = require("./app");

const connectToDatabase = require('./config/database');

connectToDatabase();

expressApp.listen(process.env.PORT, () => {
    console.log(`Server initiated on port: ${process.env.PORT} from ${process.env.NODE_ENV}`)
});