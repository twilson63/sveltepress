# static press

A static site generator using markdown, and sveltejs as the templates. Mainly focused on creating a simple blog site, but could be modified to support any kind of static site.

## Usage

First you want to use degit to create a new project:

```
npm install degit -g
degit twilson63/static-press myblog
```

`degit` is a cli tool that will checkout a git repo for you, but not attach the git meta data, so you are 
free to modify and make it your own project.

Next you will want to cd into the project directory and install dependencies:

```
cd myblog
npm install
```

Setting your blog meta data:

Open the `package.json` and modify the `meta` node to include your project meta data, like title, author,
etc.

``` json
{
  "meta": {
    "title": "My Awesome Blog",
    "author": {
      "name": "Tom Wilson",
      "twitter": "@twilson63",
      "bio": "A Javascript Developer"
    }
  }
}
```

Now, you are ready to start adding content, this blog press project uses markdown with front matter for your 
content files.  Here is an example,

``` markdown
---
ID: my-url-id
title: My Title
date: 2019-01-01
---
My Awesome Article
```
