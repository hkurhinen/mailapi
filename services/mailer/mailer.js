var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var conf = require('./config.js');

var transporter = nodemailer.createTransport(mg(conf.auth));

exports.sendMail = function (to, subject, text, callback) {
  transporter.sendMail({
    from: conf.sender,
    to: to,
    subject: subject,
    html: text
  }, function (err, info) {
    callback(err);
  });
};