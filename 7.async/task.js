class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  
  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('Ошибка! Параметр id не передан.');
    }

    if (this.alarmCollection.some(clock => clock.id === id)) {
      return console.error('Будильник с таким id уже существует!');
    }

    return this.alarmCollection.push({id, time, callback});
  }

  removeClock(id) {
    let idIndex = this.alarmCollection.findIndex(clock => clock.id === id);
    if (idIndex === -1) {
      return false;
    }

    this.alarmCollection.splice(idIndex, 1);

    return true;
  }
  
  getCurrentFormattedTime() {
    let currentDate = new Date(); 
    this.currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    return this.currentTime;
  }

  start() {
    if (this.timerId) {
      return;
    }
    this.timerId = setInterval(() => this.alarmCollection.forEach(element => {
      if (element.time === this.getCurrentFormattedTime()) {
        element.callback();
      }
    }), 1000);
  }
    
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      return this.timerId = null;
    }
  
    return console.log('Выключен');
  }

  printAlarms() {
    this.alarmCollection.forEach(alarm => console.log(alarm.id + ' - ' + alarm.time))
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}