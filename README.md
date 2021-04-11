# Learn a11y

A web app for learning web accessibility.

[![Build Status](https://travis-ci.org/jkup/learn-a11y.svg?branch=master)](https://travis-ci.org/jkup/learn-a11y)

[![NPM](https://nodei.co/npm/learn-a11y.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/learn-a11y/)

This is meant to accompany my Introduction to Accessibility workshop but my hope is that it will stand fine on its own.

## Installation

This is made to be as easy as possible. Just download or clone the repository and open index.html in your favorite browser!

## Exercises

All exercises should be clearly explained. Please don't hesitate to ask or open an issue if there is any confusion. Some of them are vague, like the semantic HTML section. There is no _right_ answer for these, just poke around the code and see if you can improve the experience for users with disabilities.

### Coding challenges

There are a few exercises that will require writing a fair amount of JavaScript code. Don't worry too much about providing the most efficient, clean or modern solution! Remember, this class is about making great products. The jQuery library is included on every page in an attempt to make your jobs easier!

## Update on 1/3/19: Notes on Tools in the Course

- Accessibility Developer Tools -> [Lighthouse](https://developers.google.com/web/tools/lighthouse/) and [axe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd). The accessibility portion of Lighthouse is powered by the axe-core API.
- Tenon is still a service, it requires a license.
- WAVE is also still a thing.
- Color contrast tools: http://colorsafe.co/ and https://contrast-ratio.com/
- tota11y still looks like it's in use.
- Addy's a11y tool has been deprecated in favor of Lighthouse / axe-core.
- React-a11y is still a thing, as well as [React-axe](https://github.com/dequelabs/react-axe)

# Accessibility:

# alt tag for img attribute - voiceover(screen reader) will read it

# Writing good alt text

    - Be accurate, be succint, dont be redundant, dont use image of or graphic of"

- alt="" - if its empty it will get skipped
- alt="UPPSERCASE" individually reads letters

# Hide from screen readers

# Frameworks have special classes

- display: none;
- visibility: hidden;
- <input hidden/>

# Hide from user but show to screen readers (knock it off the screen)

- .screenreader {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  }

# Label

- They are important for screen readers so that as the user is tabbing through they know what they are supposed to do there
  <label for ="username">Enter Your User Name</label>
  <input type="text" id="username">

# aria-labelledby

- Instead of label you can define relationship for divs using aria-labelledby. When you have forms broken into sections.
- <div id="billing">Billing Address</div>
  <div>
      <div id="name">Name</div>
      <input type="text" aria-labelledby="billing name" />
  </div>
  <div>
      <div id="address">Address</div>
      <input type="text" aria-labelledby="billing address"></div>
  </div>

# ARIA Roles

- Sometimes it's nice to have both HTML5 and ARIA roles for older browsers
<article role="article">Your Content</article>

- Will turn into

<div role="article">Your Content</div>
