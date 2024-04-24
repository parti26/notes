## DOM Manipulation
- document serves as an entry point into the dom
  we need it to start selecting elements --> query selector
- next html
- next head and body (siblings of html)
- whatever is in html document has to be in the dom
- dom is a complete representation of html document
- dom is not a part of javascript language
- dom and dom methods are part of the web APIs
- web APis are like libraries thatbrowsers implement 
and that we can access with our js code

**Event listener**
- event is sg that happens on the page
eg. mouse click or moving or key press
- with an event listener we can wait for a certain 
event to happen and react to it
- we first need to select the element where the 
event should happen
- eg -> document.querySelector('.classname').addEventListener('name fo the event -- click', function value as a 2. argument, so function(){
 })
- a function is also just a value so we can pass it into another function as an argument
- .blablabla a pont a class selector

### Web APIs
- Web Application Programming Interface
- sets of rules and protocols used to build 
and interact with web-based software applications.
- enable different software systems, often running on 
different platforms, to communicate with each other over the internet. 

**Communication**
- facilitate comm. between dif. software components 
or applications over the web using http requests and responses

**data exchange**
-often use standard data formats like JSON 
(javascript object notation) or XML (extensible markup language) for sending and receiving data.

**Functionalty Access**
-APIs provide a defined way for developers to 
request services from an application or platform.
- A web API might allow developers to retrieve 
information from a server, update data, or initiate processes.

**Security**
- often include methods to secure accessto the 
backend resources (authentication and authorization)