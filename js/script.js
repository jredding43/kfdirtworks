
// Define the items object globally so it is accessible across functions
const items = {
    soil: [
        { name: "Soil-Conditioner", displayName: "Soil Conditioner", price: 65.00, description: "Aged bark fines + Manure", stockStatus: "in-stock" },
        { name: "Topsoil-3way-Mix", displayName: "Standard Blend", price: 30.00, description: "50% Topsoil - 20% Soil Conditioner - 30% Sand", stockStatus: "in-stock" },
        { name: "Garden-3way-Mix", displayName: "Garden Blend", price: 40.00, description: "60% Topsoil - 10% Soil Conditioner - 30% Sand", stockStatus: "in-stock" }
    ],
    gravel: [
        { name: "Fill-Dirt", displayName: "Fill Dirt", price: 15.00, stockStatus: "in-stock" },
        { name: "5-8-Minus-Crushed", displayName: "5/8 Minus Crushed", price: 32.00, stockStatus: "in-stock" },
        { name: "1-1-4-Minus-Crushed", displayName: "1-1/4 Minus Crushed", price: 32.00, stockStatus: "in-stock" },
        { name: "3minus", displayName: "3 Minus", price: 32.00, stockStatus: "in-stock" },
        { name: "Pea-gravel-updated", displayName: "Pea Gravel 3/8", price: 35.00, stockStatus: "in-stock" },
        { name: "CV-Screened-Rock-1-2-1", displayName: "CV Screened Rock 1/2 - 1", price: 35.00, stockStatus: "in-stock" },
        { name: "CV-Drain-Rock-2", displayName: "CV Drain Rock 2", price: 35.00, stockStatus: "in-stock" },
        { name: "DW-Screened-Rock-1-2-1", displayName: "DW Screened Rock 1/2 -1", price: 30.00, stockStatus: "in-stock" },
        { name: "DW-Screened-Rock-1-1-2-3", displayName: "DW Screened Rock 1 - 1-1/2", price: 30.00, stockStatus: "in-stock" },
        { name: "Sand", displayName: "Sand", price: 20.00, stockStatus: "in-stock" },
        { name: "c33", displayName: "C33 Sand", price: 35.00, stockStatus: "in-stock" }
    ],
    bark: [
        { name: "Wood-Chips", displayName: "Wood Chips", price: 35.00, stockStatus: "in-stock" },
        { name: "Small-Bark", displayName: "Small Bark", price: 35.00, stockStatus: "in-stock" },
        { name: "Medium-Bark", displayName: "Medium Bark", price: 35.00, stockStatus: "in-stock" },
        { name: "Large-Bark", displayName: "Large Bark", price: 35.00, stockStatus: "in-stock" },
        { name: "vaagen", displayName: "Vaagen Bark", price: 35.00, stockStatus: "in-stock" },
        { name: "dark_bark", displayName: "Dark Bark Fines", price: 30.00, stockStatus: "in-stock" }
    ],
    decorative: [
        { name: "Gray-Chip", displayName: "Gray Chip 3/4 - 1/2", price: 40.00, stockStatus: "in-stock" },
        { name: "Huckleberry-Greenstone-1-1-1-2", displayName: "Huckleberry Greenstone 1 - 1-1/2 ", price: 55.00, stockStatus: "out-of-stock" },
        { name: "Huckleberry-Greenstone-1-2-1", displayName: "Huckleberry Greenstone 1/2 - 1 ", price: 60.00, stockStatus: "out-of-stock" },
        { name: "Grey-Dolomite", displayName: "Gray Dolomite 2 Minus", price: 60.00, stockStatus: "in-stock" },
        { name: "White-Large", displayName: "White Large 1 - 1-1/2 ", price: 75.00, stockStatus: "out-of-stock" },
        { name: "White-Medium", displayName: "White Medium 1/2 - 1", price: 80.00, stockStatus: "in-stock" },
        { name: "White-Small", displayName: "White Small", price: 65.00, stockStatus: "in-stock" },
        { name: "Basalt-1-1-2", displayName: "Basalt 1-1/2", price: 65.00, stockStatus: "in-stock" },
        { name: "TM-Large", displayName: "TM Rustic - Large", price: 65.00, stockStatus: "in-stock" },
        { name: "TM-Small", displayName: "TM Rustic - Small", price: 70.00, stockStatus: "in-stock" },
        { name: "Lava-Rock", displayName: "Lava Rock", price: 90.00, stockStatus: "in-stock" },
        { name: "Eagle-Gray-Large", displayName: "Eagle Grey Large 1", price: 96.00, stockStatus: "in-stock" },
        { name: "Montana-Rainbow-Chip", displayName: "Montana Rainbow Chip", price: 95.00, stockStatus: "in-stock" },
        { name: "Montana-Rainbow-Pebble-3-4", displayName: "Montana Rainbow Pebble 3/4", price: 120, stockStatus: "in-stock" },
        { name: "Montana-Rainbow-Pebble-1-1-2", displayName: "Montana Rainbow Pebble 1-1/2", price: 120.00, stockStatus: "in-stock" },
        { name: "missing-image", displayName: "Montana Rainbow Pea Gravel - Sold by 5 gal Bucket Only", price: 4.00, stockStatus: "out-of-stock" }
    ]
    // stone: [
    //     { name: "missing-image", displayName: "Cobble Stone", price: 45.00, description: "Rustic cobble stones for pathways", stockStatus: "coming-soon" },
    //     { name: "missing-image", displayName: "Flagstone", price: 60.00, description: "Flat stones ideal for patios", stockStatus: "coming-soon" }
    // ]
};


// ======================INVENTORY ======================
function showCategory(category) {

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });

    // Update active button
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');

    // Dynamically populate content
    const imageGrid = document.getElementById('image-grid');
    imageGrid.innerHTML = `<p>Showing content for ${category}</p>`;
    
    // Remove "active" class from all tab-content sections and tab buttons
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Add "active" class to the clicked tab-content and its button
    document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`).classList.add('active');
    
    // Clear and populate the image grid
    const grid = document.getElementById("image-grid");
    grid.innerHTML = ""; // Clear the grid

    // Fetch items for the selected category
    const categoryItems = items[category] || [];
    categoryItems.forEach(item => {
        const imagePath = `images/${category}/${item.name}.jpg`;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-card");

        let stockOverlay = "";
        if (item.stockStatus === "out-of-stock") {
            stockOverlay = '<span class="stock-overlay out-of-stock">Out of Stock</span>';
        } else if (item.stockStatus === "low-stock") {
            stockOverlay = '<span class="stock-overlay low-stock">Low Stock</span>';
        } else if (item.stockStatus === "coming-soon") {
            stockOverlay = '<span class="stock-overlay coming-soon">Coming Soon</span>';
        }

        itemDiv.innerHTML = `
        <div class="image-container">
        <img src="${imagePath}" alt="${item.displayName}" class="item-image" onerror="this.src='images/missing-image.jpg'">
        ${stockOverlay}
        </div>
        <p class="item-name">${item.displayName}</p>
        <p class="item-price">$${item.price.toFixed(2)}</p>
        <p class="item-description">${item.description || ""}</p>
`;

        grid.appendChild(itemDiv);
    });
}



// ======================INVENTORY EASTER EGG ======================
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("inventoryLogo");

    if (logo) {
        let hoverCount = 0;
        const hoverLimit = 7;
        const resetTime = 10000; 
        let resetTimer;

        // Function to reset hover count
        function resetHoverCount() {
            hoverCount = 0;
            clearTimeout(resetTimer);
        }

        // Add hover event listener
        logo.addEventListener("mouseover", () => {
            hoverCount++;

            if (hoverCount >= hoverLimit) {
                logo.classList.add("roll-off");

                
                setTimeout(() => {
                    logo.classList.remove("roll-off");
                }, 4000);

                
                resetHoverCount();
            } 
            else {
                clearTimeout(resetTimer);
                resetTimer = setTimeout(resetHoverCount, resetTime);
            }
        });
    }

    const specialsList = [
        "Check back for our latest specials!",
        "Greenhouse coming soon!",
        "Custom soil blends for your garden!",
        "Need storage, check out our Affiliates page!",
        "Need excavation or machine work, Check out our Affiliates page!",
        "Have a business and need a website, Check out our Affiliates page!",
        "New inventory, come see!"
    ];

    let currentIndex = 0;
    const specialContent = document.getElementById("special-content");

    function updateSpecial(){
        currentIndex = (currentIndex + 1) % specialsList.length;
        specialContent.textContent = specialsList[currentIndex];
    }

    setInterval(updateSpecial, 5000)
});


// ======================CONTACT CONFIRMATION POPUP ======================
// ======================CONTACT CONFIRMATION POPUP ======================
function showConfirmationPopup(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the email input value
    const emailInput = document.getElementById('email').value;

    // Validate the email
    if (!validateEmail(emailInput)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Display the popup
    const popup = document.getElementById('confirmation-popup');
    popup.style.display = 'flex';

    // Clear the form fields
    event.target.reset();
}

function validateEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function closePopup() {
    // Hide the popup
    const popup = document.getElementById('confirmation-popup');
    popup.style.display = 'none';
}


// ======================CHATBOT ======================
// ======================CHATBOT ======================
// Include Fuse.js for fuzzy matching (you can include the library via a CDN or npm install)
// <script src="https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js"></script>

// Chatbot state
let chatbotOpen = false;

// Predefined bot responses
const botResponses = {
    "hi": "Hello, how may I help you.  Say things like chat options to see the list of topics.",
    "hello": "Hello, how may I help you.  Say things like chat options to see the list of topics.",
    "hey": "Hello, how may I help you.  Say things like chat options to see the list of topics.",
    "chat options": "Topics - General Information | Product Questions | Pricing and Ordering | Delivery and Pickup | Usage and Recommendations | Environmental and Quality | Policies",
    "general information": "General Information Options:\n1. What do you sell?\n2. What are your hours of operation?\n3. Where are you located?\n4. Do you deliver?\n5. Can I pick up my order?\n6. What payment methods do you accept?",
    "product questions": "Product Questions Options:\n1. What types of soil do you sell?\n2. Do you sell rocks or gravel?\n3. Do you sell mulch or bark?\n4. Can you create custom soil mixes?\n5. What is the difference between fill dirt and topsoil?",
    "pricing and ordering": "Pricing and Ordering Options:\n1. How much does your soil cost?\n2. Can I get a quote?\n3. Do you offer bulk discounts?",
    "delivery and pickup": "Delivery and Pickup Options:\n1. How far do you deliver?\n2. How much does delivery cost?\n3. Do I need to schedule a pickup?",
    "usage and recommendations": "Usage and Recommendations Options:\n1. What soil is best for gardening?\n2. What type of rock is best for drainage?\n3. What type of dirt should I use for leveling my yard?\n4. Do you recommend soil for raised garden beds?",
    "environmental and quality": "Environmental and Quality Options:\n1. Is your soil tested for quality?\n2. Are your products eco-friendly?\n3. Do you sell organic soil?",
    "policies": "Policies Options:\n1. What is your return policy?\n2. Do you offer refunds on delivery fees?",
    "help": "Here are some examples of questions I can answer:\n- 'What are your hours?'\n- 'Do you deliver?'\n- 'What types of soil do you sell?'\n- 'Can I get a quote?'\n\nType 'Bot Options' for more categories.",
    "what do you sell": "We offer a wide array of products including various types of soil, gravel, bark, and decorative rocks to satisfy all your landscaping and project needs. For a detailed list, please visit our [Products Page](https://kfdirtworks.com/products).",
    "hours of operation": "We are open Wednesday through Saturday, from 9 AM to 5 PM. For the most current hours, please check our [Home Page](https://kfdirtworks.com/).",
    "where are you located": "We are located at 764 Hwy 395 N, Kettle Falls, WA 99141. You can find directions on our [Contact Us Page](https://kfdirtworks.com/contact-us).",
    "do you deliver": "Yes, we offer delivery services. The delivery fee is $100 within a 6-mile radius or $150 per hour for longer distances. For more details, please visit our [Services Page](https://kfdirtworks.com/services).",
    "can i pick up my order": "Absolutely! You can pick up your order directly from our location during business hours. We also offer loading services to make your pickup experience hassle-free.",
    "what payment methods do you accept": "We accept various payment methods. For specific details, please contact us directly at (509) 738-2010.",
    "what types of soil do you sell": "We offer several types of soil, including Soil Conditioner, Garden 3 Way Mix, and Topsoil 3 Way Mix. For detailed descriptions and pricing, please visit our [Products Page](https://kfdirtworks.com/products).",
    "do you sell rocks or gravel": "Yes, we provide a variety of rocks and gravel, including Fill Dirt, Crushed Rock, Pea Gravel, and more. You can find the full list on our [Products Page](https://kfdirtworks.com/products).",
    "do you sell mulch or bark": "Yes, we offer different types of bark, such as Wood Chips, Small Bark, Medium Bark, and more. For pricing and availability, please check our [Products Page](https://kfdirtworks.com/products).",
    "can you create custom soil mixes": "While we offer a range of soil mixes, for custom soil mix inquiries, please contact us directly at (509) 738-2010.",
    "what is the difference between fill dirt and topsoil": "Fill dirt is primarily used for grading and leveling, containing minimal organic material. Topsoil is nutrient-rich and ideal for planting and gardening.",
    "how much does your soil cost": "Our soil prices vary depending on the type. For example, Soil Conditioner is $65.00 per cubic yard, Garden 3 Way Mix is $40.00 per cubic yard, and Topsoil 3 Way Mix is $30.00 per cubic yard. For a complete list, please visit our [Products Page](https://kfdirtworks.com/products).",
    "can i get a quote": "Certainly! Please contact us at (509) 738-2010 or visit our [Contact Us Page](https://kfdirtworks.com/contact-us) to request a quote.",
    "do you offer bulk discounts": "For information on bulk discounts, please contact us directly at (509) 738-2010.",
    "how far do you deliver": "We deliver within a 6-mile radius for a $100 fee. For distances beyond that, the delivery fee is $150 per hour round trip. More details are available on our [Services Page](https://kfdirtworks.com/services).",
    "do i need to schedule a pickup": "While not mandatory, scheduling a pickup in advance ensures your order is ready upon arrival. Please contact us at (509) 738-2010 to arrange a pickup.",
    "what soil is best for gardening": "Our Garden 3 Way Mix, consisting of 60% Topsoil, 20% Soil Conditioner, and 20% Sand, is ideal for gardening purposes.",
    "what type of rock is best for drainage": "Crushed rocks like 5/8\" Minus Crushed or CV Drain Rock 2\" are excellent choices for drainage solutions.",
    "what type of dirt should i use for leveling my yard": "Fill Dirt is suitable for leveling and grading projects due to its compact nature.",
    "do you recommend soil for raised garden beds": "Yes, our Garden 3 Way Mix is highly recommended for raised garden beds.",
    "is your soil tested for quality": "We ensure all our products meet high-quality standards. For specific testing information, please contact us directly.",
    "are your products eco-friendly": "We strive to offer eco-friendly products. For detailed information, please reach out to us at (509) 738-2010.",
    "do you sell organic soil": "For inquiries about organic soil options, please contact us directly.",
    "what is your return policy": "For details on our return policy, please contact us at (509) 738-2010."
};

// Fuse.js setup for fuzzy matching
const fuse = new Fuse(Object.keys(botResponses), { threshold: 0.4 });

// Toggle Chatbot Visibility
function toggleChatbot() {
    const chatbot = document.querySelector(".chatbot-container");
    chatbot.classList.toggle("hidden");
    chatbotOpen = !chatbotOpen;

    if (chatbotOpen) {
        initializeChat();
    }
}

// Initialize Chat on First Open
function initializeChat() {
    const messagesDiv = document.getElementById("messages");
    if (messagesDiv.innerHTML.trim() === "") {
        addMessage("Bot", "Hello! How can I assist you today? Type 'help' for a list of options.", "bot-message");
    }
}

// Send Message Function
function sendMessage() {
    const inputField = document.querySelector("#user-input");
    const userMessage = inputField.value.trim();

    if (userMessage) {
        // Add the user's message to the chat
        addMessage("You", userMessage, "user-message");

        // Generate a bot response and add it to the chat
        const botResponse = generateBotResponse(userMessage);
        addMessage("Bot", botResponse, "bot-message");

        // Clear the input field
        inputField.value = "";

        // Scroll to the bottom of the chat
        const messagesDiv = document.getElementById("messages");
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    } else {
        alert("Please enter a message!");
    }
}

// Add Event Listener for Enter Key Press
document.addEventListener("DOMContentLoaded", () => {
    initializeChatbot(); 

    const inputField = document.querySelector("#user-input");

    if (inputField) {
        inputField.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault(); // Prevent newline
                sendMessage(); // Trigger send message function
            }
        });
    } else {
        console.error("Input field with ID 'user-input' not found.");
    }
});


function addMessage(sender, text, className) {
    const messagesDiv = document.getElementById("messages");
    const messageBubble = document.createElement("div");
    messageBubble.className = `chatbot-bubble ${className}`;
    messageBubble.innerHTML = `<p><strong>${sender}:</strong> ${text}</p>`;
    messagesDiv.appendChild(messageBubble);

    // Scroll to bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push({ sender, text, className });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

function initializeChat() {
    const messagesDiv = document.getElementById("messages");
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

    savedMessages.forEach((msg) => {
        const messageBubble = document.createElement("div");
        messageBubble.className = `chatbot-bubble ${msg.className}`;
        messageBubble.innerHTML = `<p><strong>${msg.sender}:</strong> ${msg.text}</p>`;
        messagesDiv.appendChild(messageBubble);
    });

    if (savedMessages.length === 0) {
        addMessage("Bot", "Hello! How can I assist you today? Type 'help' for a list of options.", "bot-message");
    }
}


// Generate Bot Response
function generateBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Exact match for predefined responses
    if (botResponses[lowerInput]) {
        return botResponses[lowerInput];
    }

    // Fuzzy matching for close matches
    const closestMatch = fuse.search(lowerInput);
    if (closestMatch.length > 0) {
        return `Did you mean: "${closestMatch[0].item}"? Please type it to learn more.`;
    }

    // Default Fallback
    return "I'm sorry, I didn't quite understand that. Please try asking in a different way or type 'help' for guidance.";
}

function handleQuickQuestion() {
    window.location.href = "contact.html"; 
}

function toggleChatbot() {
    const chatbot = document.querySelector(".chatbot-container");
    chatbot.classList.toggle("hidden");

    // Save state to localStorage
    const isOpen = !chatbot.classList.contains("hidden");
    localStorage.setItem("chatbotOpen", isOpen);
}

// Restore visibility state on page load
document.addEventListener("DOMContentLoaded", () => {
    const isOpen = JSON.parse(localStorage.getItem("chatbotOpen"));
    if (isOpen) {
        const chatbot = document.querySelector(".chatbot-container");
        chatbot.classList.remove("hidden");
    }
});


function initializeChatbot() {
    // Create the chatbot container
    const chatbotContainer = document.createElement("div");
    chatbotContainer.className = "chatbot-container hidden"; // Hidden by default

    // Add the chatbot content
    chatbotContainer.innerHTML = `
        <div class="chatbot-header">
            <h3>Contact Us</h3>
            <p class="chatbot-status">Open Wednesday - Saturday 9am - 5pm</p>
        </div>
        <div class="chatbot-messages" id="messages">
            <div class="chatbot-bubble bot-message">
                <p>Let me know if you have any questions!</p>
                <button class="chatbot-action-button" onclick="handleQuickQuestion()">Send us an email</button>
            </div>
        </div>
        <div class="chatbot-input">
            <input
                type="text"
                id="user-input"
                placeholder="Enter your question or message here"
                aria-label="Type your message"
            >
            <button id="send-button" class="chatbot-send-button" onclick="sendMessage()">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                    <path d="M480 850.33L80 520h240V416h320v104h240L480 850.33z"/>
                </svg>
            </button>
        </div>
    `;

    // Append the chatbot container to the body
    document.body.appendChild(chatbotContainer);

    // Add the toggle button
    const toggleButton = document.createElement("button");
    toggleButton.className = "chatbot-toggle";
    toggleButton.innerHTML = `💬`; // Emoji or custom icon
    toggleButton.onclick = toggleChatbot;

    document.body.appendChild(toggleButton);
}

//submit button form
function submitForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form element
    const form = document.getElementById("contact-form");

    // Collect form data
    const formData = new FormData(form);

    // Submit the form data to Formspree
    fetch("https://formspree.io/f/xovvgngg", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                // Show the confirmation popup
                const popup = document.getElementById("confirmation-popup");
                popup.style.display = "flex";

                // Clear the form
                form.reset();
            } else {
                alert("Oops! There was an issue sending your message. Please try again later.");
            }
        })
        .catch((error) => {
            console.error("Error submitting the form:", error);
            alert("Something went wrong. Please try again.");
        });
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("confirmation-popup");
    popup.style.display = "none";
}


// Initialize the chatbot when the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeChatbot);


