# 🦠 Covid Chaos Frontend 🧟‍♂️
## 📖 Contents 
-----------------------------
* Introduction 
* Installation
* Controls
* Running The Local Server
* Stopping The Local Server
### 👋🏼 Introduction 
-----------------------------
Current Maintainer: Tom Tobar <devtomtobar@gmail.com>

Covid Chaos was my Mod 3 project at Flatiron School. It was the end of February 2020 when Flatiron School and many other schools sent thier students to work from home and self isolate. Toilet paper, and other essential items like hand sanitizer, became scarce as well as decency during the uncertain times. I knew I wanted to create a game for the project and thought that it would be a good distraction, to the madness unfolding around me, to tie the theme of the game to the chaos.  This is what I had in mind:
</br></br>
![Keynote Mock Up](public/assets/images/keynote.png)
</br></br>
This is a screen shot of a keynote presentation that I created for the pitch to my instructors. I originally thought that there might be monsters coming from the bottom of the canvas element to attack the player and covid viruses raining from above. The gameplay now has monsters and viruses both rainging from the top of the screen. 
</br></br>
The goal of the game is to collect as much hand sanitizer and toilet paper as possible to earn a slot in the Top 5 scores:
</br>
* TP = 10 points
* Sanitizer = 5 points
* Bonus points: 1 bonus point for each second after 30 seconds. 
</br></br>
![Wire Frame](public/assets/images/relations.png)
</br></br>
I wanted to have a player potentially sign up with username and password (and did implement that for the project) but ended up going old school with just an entry of the player name. Here is a look at the user story:
</br></br>
![User Story](public/assets/images/user_story.png)
</br></br>
This game was a labor of love for me and I will constantly make improvements to learn something new from it. 

### 🕹 Controls
-----------------------------
This is the player character that can be manipulated by the user.
<br><br>
<img src='public/assets/sprites/covid-player.png' width=70><br>
* Move player up - up arrow key
* Move player down - down arrow key
* Move player left - left arrow key
* Move player right - right arrow key

### 🛠 Installation
-----------------------------
* This Front end was made using JavaScript
* Clone the repo onto your local machine
    * CD (change directory) into the cloned directory
    * run the command:
        * npm install

### 🏃🏽‍♀️ Running The Local Server
-----------------------------
* To run the app on a local server, run the command:
    * npm start
* Open Google Chrome and paste this in the URL bar:
    * [http://localhost:3000](http://localhost:3000)

### 🛑 Stopping The Local Server
-----------------------------
* To stop a running local server, press:
    * control + c
