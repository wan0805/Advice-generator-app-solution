# Frontend Mentor - Advice generator app solution

![](./src/design/desktop-preview.jpg)

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

Desktop

![#desktop](./src/design/desktop-design.jpg)

Desktop Active Stats

![desktop-Active-Stats](./src/design/active-states.jpg)

Mobile

![Mobile](./src/design/mobile-design.jpg)

### Links

Code:

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wan0805/Advice-generator-app-solution)

Live:

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://advice-generator-app-solution-iota.vercel.app/)

## My process

### Built with

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### What I learned

with this project I learned how to use Async and Await with Fetch and also how to use try and catch to prevent errors

as an example below

```js
async function doAcessApi(sortNumber) {
  try {
    let url = await fetch(`https://api.adviceslip.com/advice/${sortNumber}`);
    let response = await url.json();
    doRenderToAdvice(response);
  } catch (error) {
    console.log(error);
  }
}
};
```

## Author

[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3F54A3.svg?style=for-the-badge&logo=Frontend-Mentor&logoColor=white)](https://www.frontendmentor.io/profile/wan0805)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wanderson-duarte-a9778711b/)

## Acknowledgments

Thank you to God for another completed project and also to the Frontend Mentor (https://www.frontendmentor.io) for the projects as they help a lot in our development
