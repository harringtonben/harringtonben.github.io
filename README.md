# My Personal Site
### This project can be viewed at [harringtonben.github.io](https://harringtonben.github.io)
 
 ##### Part 1 Requirements
 > Basically an HTML version of your resume.

 1. Each place you've worked must be contained in an article element.
 1. Each article element should have a header that contains the name of the company and the dates of your employment.
 1. Each article should contain at least one section that describes your position there.
 1. No footer required for these articles.
 1. Contact information page

 > One article

 1. A heading (e.g. "How to contact me").
 1. Four sections that contain an email address, GitHub link and two social media URLs. (Bonus points if you use images to link to each of these).
 1. Common page elements

 > Navigation

 * Create a navigation bar on each page that contains a link to both pages. You can use whatever elements you like for the navigation, but it must be contained in the appropriate HTML5 semantic element.

 > Page header

 * Each page should have an `<h1>` title contained in the appropriate HTML5 semantic tag.

 > Page footer

 * Each page should have the same footer information. Put whatever information you like in the footer.

 ##### Part 2 Requirements

 1. Create 2 new HTML pages: Projects and About Me
 1. Add links to these 2 new pages to your existing navigation bar.
 1. Update your navigation bar with the following interactivity.

 1. When the user hovers over one of the links, the color of the text should change.
 1. When the user hovers over one of the links, the background color of the element that contains the link should change.
 1. When the user clicks on one of the links, the element that contains the link should grow in size by 5px on the left and right.

 ##### Part 3 Requirements

 1. Create 1 new HTML page: Blog
 1. Add a link to this blog page in your existing navigation.
 1. Create at least 5 blog entry "cards" for now. Each card should have:
 1. A header section containing an H4 title and the date the blog was written.
 1. A content section containing your body of text. These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course.
 1. Use Flexbox to achieve this

 ##### Part 4 Requirements

 1. Create a main.js file and link to it in your blog.html
 1. Create an html element with the id ‘blog-holder’
 1. Make an array called blogs
 1. Add each of your existing blogs to the blogs array by making them into objects with the following key, value pairs: title, content, date (you should have at least 5 blog objects)
 1. Loop over the blogs array and build up the HTML card elements using the values from your blog objects
 1. Add the HTML you created in the last step to the blog-holder element
 > Final Result

 ```
 HTML File:
  - navbar
  - blog-holder element
 JS File
  - An array with 5 blog objects
  - variable that stores DOM container element
  - Loop that iterates over the array, builds up a string, and then puts the string on the DOM
  ```
![blog page screenshot](Blogs page screenshot.png)