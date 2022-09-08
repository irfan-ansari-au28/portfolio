---
title: "Hello there !!"
number: 1
color: "red"
publishedAt: "2021-02-28"
image: getting-started-nextjs.png
summary: "Welcome to my small piece of the internet, dedicated to my journey as a self-taught developer"
banner: "hello-world_e6b2zv"
isFeatured: true
---

## Welcome!!

&nbsp;

```js
function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return { ...styleObject, ...style[className] };
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(" ");
}

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return (children) => {
    childrenCount += 1;
    return children.map((child, i) =>
      createElement({
        node: child,
        style,
        useInlineStyles,
        key: `code-segment-${childrenCount}-${i}`,
      })
    );
  };
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) };
    const children = childrenCreator(node.children);
    return (
      <TagName key={key} {...props}>
        {children}
      </TagName>
    );
  }
}
```

&nbsp;

A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a https://reactjs.org.

- Lists
- [ ] todo
- [x] done

A table:

| a   | b   |
| --- | --- |

&nbsp;

<!-- ![phoreka](getting-started-nextjs.png) -->

Hi everyone and welcome to my small piece of the internet, this is my first blog post. My name is Irfan, I'm a chemical engineer who is trying to find his way through programming.

&nbsp;

For the past few months, I've been learning how to write code. After weeks and weeks of practice, frustrations, hard work, and moments of real excitement, I have decided to finally start building my own projects, starting with the blog you are reading right now.

&nbsp;

I'm so glad you have found my site. I will be posting some tips and advice on things that I wish I knew when I first started. That way, if you are new to the fascinating world of programming or maybe are thinking about start learning, my experiences can help you in your own journey to become a programmer.

&nbsp;

If you want to know a bit more about who am I, you can check the about page or click [here](https://phoreka.com/about).

&nbsp;

## Who is this blog for?

&nbsp;

In short, my ideal answer would be **anyone who loves programming.** But also, I want to focus on sharing what I have learned with beginners. Because I fully understand how overwhelming can learning to code be at first when you are starting, we all start there.

&nbsp;

There is so much to understand even before you have typed your first lines of code. So, I want to try and help every one of those who right now may be struggling in their journey or those who are maybe considering the possibility of becoming a programmer.

&nbsp;

I'll be writing about pitfalls you may or will encounter and how to overcome them, I'll be sharing my thoughts on early decisions that you have to consider to become a better programmer, like, which programming languages learn first, what path to follow, how to organize your studying and much more.

&nbsp;

## How is the Website Structured?

&nbsp;

**Note:** Depending on when you have found this website some of the things I'll mention here may have not been implemented yet.

&nbsp;

### Home

&nbsp;

Here you can see my latest posts, the services I offer as a freelancer, and the main programming languages, libraries, and tools I use in my projects.

&nbsp;

### About

&nbsp;

Here you can read a little more about who I am and what I do.

&nbsp;

### Post

&nbsp;

In this section, you will find all the posts that I'll be publishing. I'll be covering many topics related mainly to web & mobile development, but also many topics related to programming in general. From the most basics to topics on decision making to become a developer.

&nbsp;

### Portfolio

&nbsp;

One of the intentions of this website is to display the personal projects I've been working on during my journey. In there I will explain how I approached the project, what was the main idea or purpose, and which programming language, libraries, and tools I used to develop the project.

&nbsp;

### Contact

&nbsp;

Finally, I added a contact page where you can let me know your thoughts and suggestions related to the content or if you want me to write about some particular topic.
Also, I created an Instagram page that you can follow where I will be sharing shorter info related to programming (check the social media links at the footer).

&nbsp;

### Much more

&nbsp;

There are many more ideas I have in mind but...baby steps, right?

&nbsp;

## Final thoughts...

&nbsp;

I'm really excited to share with you my journey into becoming a self-taught web developer. I hope you find the content useful and that you become a regular visitor. Finally, I want to thank you for taking the time and reading this and wish you the best of lucks in your own journey...
