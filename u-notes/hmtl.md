# HTML
- always have to start with <html> opening tag, end with closing tag </html>
- head -> settings of the page/ describing the page
- title goes under <head>
- body -> includes visible elements
- h1,h2,...til h6 (block element)
- p -> paragraph
- !+tab
- |
- ˇ
```HTML
<!DOCTYPE html>
<html lang="en">  //telling the browser we are using English//
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
  
  **attributes**
  -describe elements
  -<a> link element(anchor element)
  -<a href="this is where the url goes">and you can name it here</a>
  - an anchor element is an inline element - flows in line with the other element
  - <p>text you include the link in<a href="link(url)">name for the link</a>. > </p>
  - <img src="image adress"/> doesn't have a closing tag
  - classes and ids - we use them to name elements so that we can then select them in CSS in order to style them
  also to select them in js when we do dom manipulation. They are crucial to identify elements.
  - eg. <p class="first"> ; <img id="course-image" src="https://bla-blabla">
  - ids have to be unique, you can name diff p-s second but can't have another element with the same id
  - div - generic box <div id="your name"> </div>
  - div element has no meaning, just a generic box
  - <form id="yourn-name"> using istead of div, form is more semantic
  - form element better describes the content that inside the box
  - <input type="text(eg)" placeholder="your name (eg)"> input element. type attribute to specify the type of data that should be inputted
  - <button>OK! (eg)</button>