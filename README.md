# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Daucko/frontend-mentor-rock-paper-scissors-solution-original)
- Live Site URL: [Add live site URL here](https://frontend-mentor-rock-paper-scissors-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

I used this project to master building modal components as shown below:

```js
var rulesModal = document.getElementById('rulesModal');
document.getElementById('rulesOpenBtn').addEventListener('click', function () {
  rulesModal.classList.add('open');
});
document.getElementById('rulesCloseBtn').addEventListener('click', function () {
  rulesModal.classList.remove('open');
});
rulesModal.addEventListener('click', function (e) {
  if (e.target === rulesModal) rulesModal.classList.remove('open');
});
```

### Continued development

I want to focus more on my javaScript development.

### AI Collaboration

Since the project starter files has two files that instruct AI agents and Claude to not get involve in the execution of the project, the copilot in my VS Code was deactivated. But I made use of 'claude.ai' and 'Deepseek.ai' in my browser when I got stuck on how to style the _modal component_ properly.

## Author

- Website - [Add your name here](https://www.daucode-portfolio.vercel.app)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/daucko)
- Twitter - [@yourusername](https://www.twitter.com/daucoooflife)
