// Config file setup
const dotenv = require('dotenv');
dotenv.config({ path: 'Backend/config/config.env' });


const connectToDatabase = require('./config/database');
connectToDatabase();


const app = require("./app");
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server initiated on port: ${process.env.PORT} from ${process.env.NODE_ENV}`);
});