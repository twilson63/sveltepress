---
ID: welcome
title: Welcome to SveltePress 
date: 2019-04-21
description: "SveltePress is a static site generator built on SvelteJS with Markdown. This site will get you up and going with SveltePress and you will have your blog built in no time."
image: https://fillmurray.com/300/300
---

Welcome to SveltePress.com, this site explains the SveltePress project and how to get up and running 
creating your blog using SveltePress. SveltePress takes the power of server-side rendered functionality 
with Svelte and combines with the simplicity of Markdown to create a press publishing process using NodeJS 
weave the two technologies together.

## Why?

> There are many static site generators out there and you may be asking why do we need another? And that 
is a fair question.

Coming from react land, I like the fact that Svelte tries to simplify the component authoringe experience
to the minimum surface area, basically focused on writing html with a few helpers, (if, each, await). In my opinion this keeps things simple and familiar for the spectrum of developers, they do not have to learn a whole new style of 
development that strays away from the basics. This leads to more maintainable code and allows for knowledge 
transfer between developers.

Markdown is a technology that is a joy to work with, it is basically a way to write html in a short and readable format. You can't beat it as a minimal markup language to create content. Simple learning service and the result is maintainable code that can be edited.

## What is Svelte?

Svelte is a framework that focuses on getting out of the way of the application, it compiles your components into vanilla javascript for performant execution, in this context it is acting as a template language, so you do not need a lot of experience with javascript to get svelte press working for you. Simply understanding html and css and template languages rules, which you can learn here, is enough.

## What is Markdown?

Markdown is an abstraction on top of HTML that creates a readable source and generates html which can create beautiful looking articles. We will learn more about markdown on this site, it is a great way to write and maintain content.

## What if I don't like the way SveltePress is setup?

SveltePress is a project that is designed to be open and clear about what it is trying to accomplish and welcomes modification, you can easily change the components in the components folder or change the build pipeline in the build.js file. Create your own build steps in the lib file. The projects setup is designed in a way to empower you the author to get started creating your sites as quickly as possible and SveltePress should get out of the way. The only things you need to learn about SveltePress is how to build a press site, how to run in development mode and how to deploy.

## What is front-matter? 

Front-matter is the yaml section you place above your markdown file, to specify meta data about your markdown file.

> REQUIRED: ID, title, date

``` markdown
---
ID: my-article 
title: My Article
date: 2019-04-22
---

[Markdown goes here]
```

You can add any key value pair you want to the front matter, but be sure to include the ID, title and date, these key value pairs are used by the build steps to create url links, provide title information and sorting by date features for the framework.

> OPTIONS: You can always choose to modify the build steps and remove the need for these key elements.


