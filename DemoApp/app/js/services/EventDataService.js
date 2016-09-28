'user strict';

app.factory("eventData", ["$resource", function($resource) {
  var eventResource = $resource("/data/events/:id", {id: "@id"});
  return {
    get: function (eventId) {
      return eventResource.get({id: eventId});
    },
    save: function (event) {
      event.id = 6;
      return eventResource.save(event);
    }
  }
}]);
