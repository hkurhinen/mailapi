var mailer = require('../services/mailer/mailer');

module.exports = function (app) {

  app.post('/', function (req, res) {
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    mailer.sendMail(email, subject, message, function (err) {
      if (err) {
        res.send({error: err});
      } else {
        res.send('mail sent');
      }
    });
  });
};