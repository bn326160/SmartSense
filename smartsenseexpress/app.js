var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coolRouter = require('./routes/cool');
var dashboardRouter = require('./routes/dashboard');
var dashboard2Router = require('./routes/dashboard2');
var statusRouter = require('./routes/status');
var leadRouter = require('./routes/lead');
var supportRouter = require('./routes/support');
var teamRouter = require('./routes/team');
var loginRouter = require('./routes/login');
var clientRouter = require('./routes/client');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/cool', coolRouter);
app.use('/dashboard', dashboardRouter);
app.use('/customerdashboard', dashboard2Router);
app.use('/status', statusRouter);
app.use('/lead', leadRouter);
app.use('/support', supportRouter);
app.use('/team', teamRouter);
app.use('/login', loginRouter);
app.use('/client', clientRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
