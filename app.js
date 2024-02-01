const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
// const hpp = require('hpp');
const path = require('path');
const authController = require('./controllers/authController');

// const AppError = require('./utils/appError');
// const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/API/userRoute');
const viewRouter = require('./routes/View/authViewRoute');
const articleViewRouter = require('./routes/View/articleViewRoute');
const articleRouter = require('./routes/API/articleRoute');

const globalErrorHandler = require('./controllers/errorController');

const app = express();

// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

// cookie parser
app.use(cookieParser());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       "*"
//     ],
//   }),
// );

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// 3.1 API Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/article', articleRouter);

// 3.2 View Routes
app.use('/',authController.isLoggedIn)
app.use('/', viewRouter);
app.use('/article', articleViewRouter);

// app.use(globalErrorHandler);
app.use(globalErrorHandler);

module.exports = app;
