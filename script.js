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
        { Name: 'sheshnath', title: 'Online Grocery Store', description: 'An e-commerce platform for local grocery delivery.' },
        { Name: 'prince', title: 'Digital Marketing Agency', description: 'Helping businesses grow their online presence.' }
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
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (!email || !message) {
        alert('Please enter both email and message.');
        return;
    }

    // Get the messages container
    const messagesDiv = document.getElementById('messages');


    // Create a new message div
    const newMessageDiv = document.createElement('div');
    newMessageDiv.classList.add('message');
    newMessageDiv.textContent = `${email}: ${message}`;


    // Append the new message to the messages container
    messagesDiv.appendChild(newMessageDiv);

    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Clear the input fields
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}



 