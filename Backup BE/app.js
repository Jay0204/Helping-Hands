var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const mongoose = require('mongoose')
const session = require('express-session')
var passport = require('passport');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var customerRouter = require('./routes/customers');
var serviceProviderRouter = require('./routes/serviceProviders');
var bookingRouter = require('./routes/bookings');
var formfeedbackRouter = require('./routes/formfeedback');
var config = require('./config');
const url = config.mongoUrl;
var http = require('http');

var port = (process.env.PORT || '3001');
//app.set('port', port);
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });
connect.then((db) => {
  console.log('Connected correctly to server');
}, (err) => { console.log(err) });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users',userRouter);
app.use('/customers',customerRouter);
app.use('/serviceProviders',serviceProviderRouter);
app.use('/formfeedback',formfeedbackRouter);
app.use('/booking',bookingRouter);
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
module.exports = app;
