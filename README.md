# TimeKeeper for Google Snake
This mod for Google Snake keeps track of your fastest times for every mode. To see your personal bests on the current settings, just click on the timer.
## Enable Timekeeper (option 1)
Go to releases and download TimeKeeper.html. Go to your browser and import this file as a new bookmark. Simply press the bookmark to enable the mod.
## Enable Timekeeper (option 2)
Copy and paste all the code inside TimeKeeper.js into the console.
## Set time manual
Copy and paste the following into the console
```
window.snake.saveTime(time,score,mode,count,speed,size);
```
* Change *time* to the time in milliseconds
* Change *score* to 25, 50, 100 or 'ALL'
* Change *mode* to the index of the gamemode in the menu, where 0 = Classic, 1 = Wall, etc...
* Change *count* to the index of the count in the menu, where 0 = 1 Apple, 1 = 3 Apples, etc...
* Change *speed* and *size* in the same way.
### Example
```
window.snake.saveTime(130456,50,5,2,1,1);
```
Changes the 50 Apple pbs on Twin 5 Apples Fast Small to 02:10:456
## Remove all pbs
```
localStorage.removeItem('snake_pbs');
```
## Export/backup pbs
Run this and save the response somewhere.
```
localStorage.getItem('snake_pbs');
```
## Restore pbs
```
localStorage.setItem('snake_pbs', 'your_PBS_string');

