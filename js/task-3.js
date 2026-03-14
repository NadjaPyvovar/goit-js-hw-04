const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername: function (newName) {
    this.username = newName;
  },

  updatePlayTime: function (hours) {
    this.playTime += hours;
  },

  getInfo: function () {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo());

profile.changeUsername('Marco');
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
