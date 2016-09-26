'user strict';

app.factory('eventData', ["$http", function($http) {
  return {
    getEvent: function (id) {
      return $http({method: "GET", url: "/data/events/" + id});
      //   {
      //   name: 'New idea discussion',
      //   date: '01/01/2016',
      //   time: '11:25 am',
      //   location: {
      //     city: 'Birningem',
      //     address: 'Jowanish St 8'
      //   },
      //   imageUrl: '/img/angularjs-logo.png',
      //   sessions: [
      //     {
      //       name: 'Nuclear energy',
      //       start: '13:15',
      //       end: '14:30',
      //       level: 'Advance',
      //       description: 'Nuclear energy can be used to create electricity, but it must first be released from the atom. In nuclear fission, atoms are split to release the energy. A nuclear reactor, or power plant, is a series of machines that can control nuclear fission to produce electricity.',
      //       like: 5
      //     },
      //     {
      //       name: 'Medicine',
      //       start: '14:45',
      //       end: '16:15',
      //       level: 'Advance',
      //       description: 'Medicine is the science and practice of the diagnosis, treatment, and prevention of disease. The word medicine is derived from Latin medicus, meaning "a physician". Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.',
      //       like: 7
      //     },
      //     {
      //       name: 'Electricity',
      //       start: '11:45',
      //       end: '12:45',
      //       level: 'Advance',
      //       description: 'Electricity is the presence and flow of electric charge. Its best-known form is the flow of electrons through conductors such as copper wires. Electricity is a form of energy that comes in positive and negative forms, that occur naturally (as in lightning), or is produced (as in a generator).',
      //       like: 7
      //     }
      //   ]
      // }
  }}
}]);
