// Config file setup
const dotenv = require('dotenv');
dotenv.config({ path: 'Backend/config/config.env' });


const connectToDatabase = require('./config/database');
connectToDatabase();


const app = require("./app");
const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log(`Server initiated on port: ${port} from ${process.env.NODE_ENV}`);
});


// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err}`);
    console.log('Shutting down the server due to unhandled promise rejection.');
    server.close(() => {
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err}`);
    console.log('Shutting down the server due to uncaught exception.');
    server.close(() => {
        process.exit(1);
    });
});