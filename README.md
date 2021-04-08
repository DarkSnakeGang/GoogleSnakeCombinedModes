# CombinedModes for Google Snake
This mod for Google Snake allows you to play with combined gamemodes.

## Enable CombinedModes (option 1)
Go to releases and download CombinedModes.html. Go to your browser and import this file as a new bookmark. Simply press the bookmark to enable the mod.
## Enable CombinedModes (option 2)
Copy and paste all the code inside CombinedModes.js into the console.
## Set modes
Copy and paste the following into the console
```
window.snake.modes=[1,2];
```
Replace '1' and '2' with the corresponding numbers of the modes you want, you can add more numbers together to combine more modes. Not all modes work together..
* 0 = Classic
* 1 = Wall
* 2 = Portal
* 3 = Cheese
* 4 = Infinity
* 5 = Twin
* 6 = Winged
* 7 = YingYang
* 8 = Key
* 9 = Peaceful
### Example
```
window.snake.modes = [4,5,6];
```
Play infinity-twin-winged.

Have fun!