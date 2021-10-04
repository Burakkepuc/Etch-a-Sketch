# Etch A Sketch Game

### What is Etch a sketch ?  

 The Etch A Sketch is a closed drawing system that allows people to create art without the need for any other supplies such as paper, pencils, crayons, paints, pastels, or pens, and without any need for either preparation or clean up. I made up this game by using Javascript.
 
 
 ## Etch A Sketch Build Phase
 [x] We put container div in the HTML page by hand.  
```html
       <div id="container"></div>
```
[x] Use DOM elements to define the container variable in javascript code.  
```js
        let container = document.getElementById('container');
```

[x] Make div grid by 16x16 with javascript code by using for and  DOM elements such as. It fill  inner the container wit divs.   
```js
     for (let i = 0; i < 16 * 16; i++) {
         let cell = document.createElement('div');
         container.appendChild(cell);
         cell.classList.add('box');
     };
```
[x] We have to define css variable for box class and  container class, otherwise we can't make them div.(of course you can use flexbox etc.)  
```css 
#container{
    display: grid;
    grid-template-columns: repeat(16,1fr);
    grid-template-rows: repeat(16,1fr);
    width: 600px;
    height: 500px;
}
```

```css
.box{
    border:1px solid rgba(218, 214, 214, 0.925);
}
```

[x] And then we can use "Event Listener" , to fill the grid when we mouse over the container cells.  

```css 
 container.addEventListener("mouseover", (event) => {
          event.target.style.background = "black";
     });
```

Note:  
- I just try to tell how to make etch a sketch with javascript basically,not include design or other functions such as button,new game etc. You can find more in the source code.    

Demo: [Live Preview](https://burakkepuc.github.io/Etch-a-Sketch/):point_left:
