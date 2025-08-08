// JavaScript for Business Ideas Hub

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display existing business ideas
    loadIdeas();

    // Handle idea form submission
    const ideaForm = document.getElementById('idea-form');
    ideaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        saveIdea(title, description);
        ideaForm.reset();
    });

    // Handle chat form submission
    const chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = document.getElementById('message').value;
        sendMessage(message);
        chatForm.reset();
    });
});



function loadIdeas() {
    // Placeholder for fetching ideas from a database or API
    const ideasList = document.getElementById('ideas-list');
    const ideas = [
        { Name: 'Sheshnath', title: 'Online Grocery Store', description: 'An e-commerce platform for local grocery delivery.' },
        { Name: 'Prince', title: 'Digital Marketing Agency', description: 'Helping businesses grow their online presence.' },
        { Name: 'Nitin', title: 'Mobile App Development', description: 'Creating custom mobile applications for various industries.' },
        { Name: 'Nitish', title: 'E-learning Platform', description: 'An online platform for courses and tutorials.' },
    ];

    ideasList.innerHTML = '';
    ideas.forEach((idea) => {
        const ideaDiv = document.createElement('div');
        ideaDiv.classList.add('idea');
        ideaDiv.innerHTML = `
            <h3>${idea.Name}</h3>
            <h3>${idea.title}</h3>
            <p>${idea.description}</p>
        `;
        ideasList.appendChild(ideaDiv);
    });
}

 
// Handle form submission
document.getElementById('idea-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Validate inputs
    if (!name || !title || !description) {
        alert('Please fill out all fields!');
        return;
    }

    // Create new idea element
    const newIdea = document.createElement('div');
    newIdea.innerHTML = `
        <strong>${name}</strong>
        <p><strong>${title}</strong></p>
        <p>${description}</p>
    `;

    // Add the new idea to the top of the list
    const ideasList = document.getElementById('ideas-list');
    ideasList.insertBefore(newIdea, ideasList.firstChild);

    // Clear the form
    document.getElementById('idea-form').reset();
});







function sendMessage() {
    // Get name and message input values
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (!username || !message) {
        alert('Please enter both username and message.');
        return;
    }

    // Get the messages container
    const messagesDiv = document.getElementById('messages');


    // Create a new message div
    const newMessageDiv = document.createElement('div');
    newMessageDiv.classList.add('message');
    newMessageDiv.textContent = `${username}: ${message}`;


    // Append the new message to the messages container
    messagesDiv.appendChild(newMessageDiv);

    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('messages...').value = '';
}



 document.querySelectorAll('#menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});











const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3307;

// MySQL Connection Setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', // XAMPP default
  database: 'MySQL',
  port: 3307 // XAMPP default
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('business_idea_hub.');
});

// Sample Route
app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${3307}`);
});
