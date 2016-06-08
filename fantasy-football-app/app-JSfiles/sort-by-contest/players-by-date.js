var oneDayLineups = {
  thursdayNightPlayers: function(array) {
    var thursdayNightOnly = [];
    for (i = 0; i < array.length; i++) {
      if(array[i].gameTime === 1) {
        thursdayNightOnly.push(array[i]);
      }
    };
    return thursdayNightOnly;
  },

  sundayEarlyPlayers: function(array) {
    var sundayEarlyOnly = [];
    for (i = 0; i < array.length; i++) {
      if(array[i].gameTime === 2) {
        sundayEarlyOnly.push(array[i]);
      }
    };
    return sundayEarlyOnly;
  },

  sundayLatePlayers: function(array) {
    var sundayLateOnly = [];
    for (i = 0; i < array.length; i++) {
      if(array[i].gameTime === 3) {
        sundayLateOnly.push(array[i]);
      }
    };
    return sundayLateOnly;
  },

  sundayNightPlayers: function(array) {
    var sundayNightOnly = [];
    for (i = 0; i < array.length; i++) {
      if(array[i].gameTime === 4) {
        sundayNightOnly.push(array[i]);
      }
    };
    return sundayNightOnly;
  },

  mondayNightPlayers: function(array) {
    var mondayNightOnly = [];
    for (i = 0; i < array.length; i++) {
      if(array[i].gameTime === 5) {
        mondayNightOnly.push(array[i]);
      }
    };
    return mondayNightOnly;
  }
};
