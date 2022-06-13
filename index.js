function saveCookie(name, value) {
    const date = new Date();
    date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

  
  function getCookie(cookieName) {
    let name = cookieName + "=";
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }





  let score = 0
  let range = 2
  let lives  = 4
  const saveScoreandRange = () => {
    saveCookie("range", range)
    saveCookie("score", score)
  }
  const start = () => {
    
    let range =  Number(getCookie("range"))
   score =  Number(getCookie("score"))

    let guess = (Math.random() * (range - 1) + 1).toFixed(1)

    let ask = prompt(`Enter a number from range of 1 to ${range}, Your present score is ${score}, enter q to pause the game`)
    if (ask == "q")  {
      saveCookie("range", range)
      saveCookie("score", score)
      return 
    }
    while (lives > 0 && ask !== null) {
       if(guess > ask) {
         ask = prompt('Number is higher, Try again')
         lives--
       } 
       else if (guess < ask) {
        ask = prompt('Number is lower, Try again')
         lives--
       } else  {
         break
       }
    }
lives = 4
    if (ask == guess) {
      score++
      range++
      saveCookie("range", range)
    saveCookie("score", score)

      start()
    } else {
   
      alert('game over')
      score = 0
      range = 2
      saveCookie("range", range)
    saveCookie("score", score)
      let tryAgain = prompt('Try again? enter yes or no')

        if(tryAgain != null && tryAgain[0] === "y") {
          start()
      }
      
      else {
        stop
      }

    }
  }
  
  
  
  




  
  const save = () => {
    document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    const user = getCookie("name")
    const score = getCookie("score")
    const range = getCookie('range')

    console.log(user)
    if (user === null || !user) {
      var nme = prompt('Enter a username: ')
      if(nme !== null) {
        saveCookie("name", nme)
      }
    }
    const a = (!user) ? (nme == null) ? "" : nme : user
    
      alert("Welcome to the guessing game " + a)
      alert(`Your previous score is ${score}`)
      if(!range) {
        range = 2
        saveCookie("range", range)
      }
      start()
  }
  
  save()
  
  