var fs = require('fs');

module.exports = {
  get: function(req, res) {
      var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
      res.setHeader('Content-Type', 'application/json');
      res.send(event);
  },

  post: function(req, res) {
      var event = req.body;
      fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
      res.status(200).send();
  }
}
