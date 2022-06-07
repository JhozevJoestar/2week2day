const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    ill: 0,
    getStatus: function(){
      if (this.meal === 0){
        console.log(`${this.name} мертв`)
      } else if  (this.energy === 0){
        console.log(`${this.name} мертв`)
      }
      else if  (this.mood === 0){
        console.log(`${this.name} мертв`)
      } else {
    if (this.meal < 3){
      mealFull = `Я голоден`
    } else {
      mealFull = `Я не голоден`
    };
    if (this.energy < 3){
      energyFull = `Я хочу спать`
    } else {
      energyFull = `Я не хочу спать`
    };
    if (this.mood < 3){
      moodFull = `Мне скучно`
    } else {
      moodFull = `Мне не скучно`
    };
    return `Имя: ${this.name}, Еда: ${mealFull} (${this.meal}), Энергия: ${energyFull} (${this.energy}), Настроение: ${moodFull} (${this.mood})`
      }
    },
    getSick: function () {
      if (this.ill = 1){
        return 'Я заболел'
      }
    },

      sleep: function(){
        if(this.energy < 5){
            this.energy++
            this.meal--
        }
      },

      eat: function(){
        if(this.meal < 5){
            this.meal++
            this.mood--
      }
    },

      play: function(){
        if(this.mood < 5){
            this.mood++
            this.energy--
      }
    }
  }