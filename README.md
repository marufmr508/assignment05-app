_Name: Dev Stack Builder_

Dev Stack Builder is a responsive web application that helps developers explore different technologies and build their own technology stack.

_'Technologies Used'_

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

'''_Features_''''

_Explore Technologies_ — Browse different frontend, backend, database, language, styling, DevOps, and development tools.
_Build Your Stack_ — Add technologies to your personal stack and remove them whenever needed.
_Responsive Design_ — Works smoothly across mobile, tablet, and desktop devices.

# 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript.
We use JSX in React to create the UI/components easily.

# 2. What is the difference between props and state?

Props are used to send data from parent to child.
State is used to store and manage data inside a component.

# 3. What does the `useState` hook do, and where did you use it in this project?

useState is used to store data and update it when something changes.
In this project, I used useState to store the ''_selected technologies/stack items_''.

# 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

useEffect runs code when a component loads or changes.
I used it to load the JSON data when the application starts.

# 5. Why does every item in a .map() list need a unique `key` prop?

The key helps React identify each item separately.
It helps React update the list correctly and efficiently.

# 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a condition is true.
For example, I showed an empty stack message when there was no technologies selected.

\*_'{stack.length === 0 && <p>Your stack is empty</p>}'_

# 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent sends data to the child using props.
The child can send something back by calling a function passed from the parent through props.
