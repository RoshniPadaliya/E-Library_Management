const express = require('express');
const dotenv = require('dotenv');
const connect_Database = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

dotenv.config();
connect_Database();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());


// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 100,
});

app.use(limiter);

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.use(errorHandler);

// Root route
app.get('/', (req, res) => {
    res.send(`
        <center>
            <h1>Welcome to the E-Library Management API!</h1>
            <br>
            <p>
                Get E-Library API: 
            <a href="https://github.com/RonakPatel2468/E-LIBRARY_MANAGEMENT.git" target="_blank">Repository: e-library Management</a>
            </p>
        </center>
    `);
});


// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
