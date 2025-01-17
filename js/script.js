// Define the items object globally so it is accessible across functions
const items = {
    soil: [
        { name: "Soil-Conditioner", displayName: "Soil Conditioner", price: 65.00, description: "Aged bark fines + Manure", stockStatus: "in-stock" },
        { name: "Topsoil-3way-Mix", displayName: "Topsoil 3way Mix", price: 40.00, description: "60% Topsoil - 20% Soil Conditioner - 20% Sand", stockStatus: "in-stock" },
        { name: "Garden-3way-Mix", displayName: "Garden 3way Mix", price: 30.00, description: "70% Topsoil - 10% Soil Conditioner - 20% Sand", stockStatus: "in-stock" }
    ],
    gravel: [
        { name: "Fill-Dirt", displayName: "Fill Dirt", price: 15.00, stockStatus: "in-stock" },
        { name: "5-8-Minus-Crushed", displayName: "5/8 Minus Crushed", price: 32.00, stockStatus: "in-stock" },
        { name: "1-1-4-Minus-Crushed", displayName: "1-1/4 Minus Crushed", price: 32.00, stockStatus: "in-stock" },
        { name: "Pea-Gravel-3-8", displayName: "Pea Gravel 3/8", price: 35.00, stockStatus: "in-stock" },
        { name: "CV-Screened-Rock-1-2-1", displayName: "CV Screened Rock 1/2 - 1", price: 35.00, stockStatus: "in-stock" },
        { name: "CV-Drain-Rock-2", displayName: "CV Drain Rock 2", price: 35.00, stockStatus: "in-stock" },
        { name: "DW-Screened-Rock-1-2-1", displayName: "DW Screened Rock 1/2 -1", price: 30.00, stockStatus: "in-stock" },
        { name: "DW-Screened-Rock-1-1-2-3", displayName: "DW Screened Rock 1 - 1-1/2", price: 30.00, stockStatus: "in-stock" },
        { name: "Sand", displayName: "Sand", price: 20.00, stockStatus: "in-stock" },
        { name: "missing-image", displayName: "C33 Sand", price: 30.00, stockStatus: "coming-soon" }
    ],
    bark: [
        { name: "Wood-Chips", displayName: "Wood Chips", price: 25.00, stockStatus: "in-stock" },
        { name: "Small-Bark", displayName: "Small Bark", price: 35.00, stockStatus: "in-stock" },
        { name: "Medium-Bark", displayName: "Medium Bark", price: 25.00, stockStatus: "in-stock" },
        { name: "Large-Bark", displayName: "Large Bark", price: 35.00, stockStatus: "in-stock" }
    ],
    decorative: [
        { name: "Gray-Chip", displayName: "Gray Chip 3/4 - 1/2", price: 40.00, stockStatus: "in-stock" },
        { name: "Huckleberry-Greenstone-1-1-1-2", displayName: "Huckleberry Greenstone 1 - 1-1/2 ", price: 55.00, stockStatus: "out-of-stock" },
        { name: "Huckleberry-Greenstone-1-2-1", displayName: "Huckleberry Greenstone 1/2 - 1 ", price: 60.00, stockStatus: "out-of-stock" },
        { name: "Grey-Dolomite", displayName: "Gray Dolomite 2 Minus", price: 60.00, stockStatus: "in-stock" },
        { name: "White-Large", displayName: "White Large 1 - 1-1/2 ", price: 75.00, stockStatus: "out-of-stock" },
        { name: "White-Medium", displayName: "White Medium 1/2 - 1", price: 80.00, stockStatus: "in-stock" },
        { name: "White-Small", displayName: "White Small", price: 80.00, stockStatus: "in-stock" },
        { name: "Basalt-1-1-2", displayName: "Basalt 1-1/2", price: 60.00, stockStatus: "in-stock" },
        { name: "Lava-Rock", displayName: "Lava Rock", price: 90.00, stockStatus: "in-stock" },
        { name: "Eagle-Gray-Large", displayName: "Eagle Grey Large 1", price: 96.00, stockStatus: "in-stock" },
        { name: "Montana-Rainbow-Chip", displayName: "Montana Rainbow Chip", price: 95.00, stockStatus: "in-stock" },
        { name: "Montana-Rainbow-Pebble-3-4", displayName: "Montana Rainbow Pebble 3/4", price: 96.00, stockStatus: "low-stock" },
        { name: "Montana-Rainbow-Pebble-1-1-2", displayName: "Montana Rainbow Pebble 1-1/2", price: 120.00, stockStatus: "in-stock" },
        { name: "missing-image", displayName: "Montana Rainbow Pea Gravel - Sold by 5 gal Bucket Only", price: 4.00, stockStatus: "out-of-stock" }
    ],
    stone: [
        { name: "missing-image", displayName: "Cobble Stone", price: 45.00, description: "Rustic cobble stones for pathways", stockStatus: "coming-soon" },
        { name: "missing-image", displayName: "Flagstone", price: 60.00, description: "Flat stones ideal for patios", stockStatus: "coming-soon" }
    ]
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
        "50% off on select gravel this week!",
        "New landscaping stones now available!",
        "Custom soil blends for your garden!",
        "Need storage, check out our Affiliates page!",
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

let chatbotOpened = false; // Tracks whether the chatbot has been opened

// Toggle chatbot visibility and send the first bot message
function toggleChatbot() {
    const chatbot = document.getElementById("chat-container");
    
    if (chatbot.style.transform === "scale(1)") {
        chatbot.style.transform = "scale(0)"; // Collapse
    } else {
        chatbot.style.transform = "scale(1)"; // Expand

        // Send the first bot message if opening for the first time
        if (!chatbotOpened) {
            addMessage("Terra", "Hi there! I am a chatbot here to help you with all your needs.", "bot-message");
            addMessage(
                "Terra",
                "You can say things like bot options, general information, products, pricing, delivery, or usage to see specifics. You can ask your own question also!",
                "bot-message"
            );
            chatbotOpened = true; // Mark as opened
        } 
    }       
}

// Handle user input and bot responses
function sendMessage() {
    const userInputField = document.getElementById("user-input");
    const userInput = userInputField.value.trim();
    if (!userInput) return;

    // Add user message to the chat
    addMessage("You", userInput, "user-message");

    // Clear the input field
    userInputField.value = "";

    // Generate bot response
    const botResponse = generateBotResponse(userInput);
    addMessage("Bot", botResponse, "bot-message");
}

// Detect "Enter" key or click
document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("Enter key detected! Sending message...");
        event.preventDefault(); // Prevent default form submission or behavior
        sendMessage();
    }
});

// Add click event for the send button
document.getElementById("send-button").addEventListener("click", function () {
    sendMessage();
});


//SAVE THE MESSAGES ACROSS THE DIFFERENT TABS
// Function to add a message to the chat
function addMessage(sender, text, className) {
    const messagesDiv = document.getElementById("messages");

    // Create a new message element
    const message = document.createElement("div");
    message.className = className;
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messagesDiv.appendChild(message);

    // Scroll to the latest message
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Save messages to localStorage
    saveMessages();
}

// Save all messages as an array of objects
function saveMessages() {
    const messagesDiv = document.getElementById("messages");
    const messageElements = messagesDiv.querySelectorAll("div");
    const messages = Array.from(messageElements).map(msg => ({
        sender: msg.querySelector("strong").textContent.replace(":", ""),
        text: msg.textContent.replace(msg.querySelector("strong").textContent, "").trim(),
        className: msg.className,
    }));
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

// Load all messages from localStorage
function loadMessages() {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
        const messagesDiv = document.getElementById("messages");
        const messages = JSON.parse(savedMessages);
        messages.forEach(msg => {
            addMessage(msg.sender, msg.text, msg.className);
        });
    }
}


// Initialize the chat by loading saved messages
document.addEventListener("DOMContentLoaded", function () {
    loadMessages();
});




// Generate bot responses (customize logic here)
function generateBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Bot Options
    if (lowerInput.includes("bot options")) {
        return "Topics - General Information | Product Questions | Pricing and Ordering | Delivery and Pickup | Usage and Recommendations | Environmental and Quality | Policies";
    }
    // General Information
    if (lowerInput.includes("general information")) {
        return "General Information Options:\n1. What do you sell?\n2. What are your hours of operation?\n3. Where are you located?\n4. Do you deliver?\n5. Can I pick up my order? \n 6. Payment methods.";
    }
    // Product Questions
    if (lowerInput.includes("product questions")) {
        return "Product Questions Options:\n1. What types of soil do you sell?\n2. Do you sell rocks or gravel?\n3. Do you sell mulch?\n4. Can you create custom soil mixes?\n5. What is the difference between fill dirt and topsoil?";
    }
    // Pricing and Ordering
    if (lowerInput.includes("pricing and ordering")) {
        return "Pricing and Ordering Options:\n1. How much does your soil cost?\n2. Can I get a quote?\n3. Do you offer bulk discounts?";
    }
    // Delivery and Pickup
    if (lowerInput.includes("delivery and pickup")) {
        return "Delivery and Pickup Options:\n1. How far do you deliver?\n2. How much does delivery cost?\n3. Do I need to schedule a pickup?";
    }
    // Usage and Recommendations
    if (lowerInput.includes("usage and recommendations")) {
        return "Usage and Recommendations Options:\n1. What soil is best for gardening?\n2. What type of rock is best for drainage?\n3. What type of dirt should I use for leveling my yard?\n4. Do you recommend soil for raised garden beds?";
    }
    // Environmental and Quality
    if (lowerInput.includes("environmental and quality")) {
        return "Environmental and Quality Options:\n1. Is your soil tested for quality?\n2. Are your products eco-friendly?\n3. Do you sell organic soil?";
    }
    // Policies
    if (lowerInput.includes("policies")) {
        return "Policies Options:\n1. What is your return policy?\n2. Do you offer refunds on delivery fees?";
    }

    // General Information
    if (lowerInput.includes("what do you sell") || lowerInput.includes("products")) {
        return "We specialize in high-quality dirt, rocks, and soil products for landscaping, gardening, and construction needs.";
    } else if (lowerInput.includes("hours") || lowerInput.includes("open")) {
        return "We are open Wednesday through Saturday, 9 AM to 5 PM.  We are closed on Sunday-Tuesday.";
    } else if (lowerInput.includes("location") || lowerInput.includes("where are you")) {
        return "We are located located at 764 Hwy 395 N Kettle Falls Wa 99141.";
    } else if (lowerInput.includes("deliver")) {
        return "Yes, we offer delivery services. Delivery fees depend on the location and quantity ordered.";
    } else if (lowerInput.includes("pickup")) {
        return "Yes, you can pick up your order directly from our yard during business hours.";
    } else if (lowerInput.includes("payment methods")) {
        return "We accept cash, credit/debit cards, and checks. Payments are processed securely.";
    } else if (lowerInput.includes("receipt")) {
        return "Yes, we provide detailed receipts for all purchases.";
    } else if (lowerInput.includes("seasonal discounts")) {
        return "We occasionally run seasonal promotions. Check our website or call us for current offers.";
    
            

    // Product Questions
    } else if (lowerInput.includes("types of soil") || lowerInput.includes("soil")) {
        return "We offer various Soil and additives mixtures, Gravel and Sand, Bark, Decorative Rock, Stone and Coble.";
    } else if (lowerInput.includes("rocks") || lowerInput.includes("gravel") || lowerInput.includes("stone")) {
        return "We provide a variety of rocks, including gravel, river rocks, crushed stone, decorative rocks, and boulders.";
    } else if (lowerInput.includes("mulch")) {
        return "Yes, we sell various types of mulch, including dyed and natural options.";
    } else if (lowerInput.includes("custom soil")) {
        return "Yes, we can create custom soil mixes based on your project requirements. Contact us for details.";
    } else if (lowerInput.includes("difference") && lowerInput.includes("fill dirt") && lowerInput.includes("topsoil")) {
        return "Fill dirt is used for grading and leveling, while topsoil is nutrient-rich and ideal for planting and gardening.";

    // Pricing and Ordering
    } else if (lowerInput.includes("cost") || lowerInput.includes("price")) {
        return "Prices vary depending on the product and quantity. Contact us for a detailed price list or a custom quote.";
    } else if (lowerInput.includes("quote")) {
        return "Absolutely! Visit the 'Contact Us' page and put in your information and we will be happy to get you a quote. If you dont want to email, feel free to call  (509)738-2110.";
    } else if (lowerInput.includes("bulk discount")) {
        return "Yes, we offer discounts for bulk orders. Contact us for pricing on large quantities.";

    // Delivery and Pickup
    } else if (lowerInput.includes("how far do you deliver")) {
        return "We deliver within a 6-mile radius of our location or $150/hr. For locations outside this range, additional charges may apply.";
    } else if (lowerInput.includes("schedule pickup")) {
        return "While walk-ins are welcome, scheduling a pickup in advance ensures we have your order ready.";

    // Usage and Recommendations
    } else if (lowerInput.includes("gardening soil") || lowerInput.includes("best soil for garden")) {
        return "Our garden soil mix, enriched with compost, is perfect for vegetable and flower gardens.";
    } else if (lowerInput.includes("drainage") && lowerInput.includes("rock")) {
        return "Crushed gravel or river rocks are ideal for improving drainage in landscaping projects.";
    } else if (lowerInput.includes("leveling") && lowerInput.includes("yard")) {
        return "Fill dirt is the best choice for leveling or grading projects.";
    } else if (lowerInput.includes("raised garden beds")) {
        return "Our nutrient-rich garden soil is ideal for raised garden beds.";

    // Environmental and Quality Questions
    } else if (lowerInput.includes("quality") && lowerInput.includes("soil")) {
        return "Yes, all our soil is tested to ensure it meets quality and safety standards.";
    } else if (lowerInput.includes("eco-friendly") || lowerInput.includes("organic")) {
        return "Yes, we offer organic and eco-friendly products, including organic soil and natural mulch.";

    // Policies
    } else if (lowerInput.includes("return policy")) {
        return "Returns are accepted for unopened and unused products within [number] days of purchase. Contact us for more details.";

    // Default Fallback
    } else {
        return "I'm here to help! Could you clarify your question?";
    }
}



// Add a message to the chat window
function addMessage(sender, message, className) {
    const messagesDiv = document.getElementById("messages");
    const newMessage = document.createElement("div");
    newMessage.className = className;
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messagesDiv.appendChild(newMessage);

    // Scroll to the bottom of the chat window
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to show the tooltip and hide it after 5 seconds
function showTooltip() {
    const tooltip = document.getElementById("chatbot-tooltip");
    tooltip.classList.remove("hidden"); // Show the tooltip

    // Hide the tooltip after 10 seconds
    setTimeout(() => {
        tooltip.classList.add("hidden");
    }, 10000);
}

// Run the tooltip logic every 20 seconds
window.onload = function () {
    showTooltip(); // Show on page load
    setInterval(showTooltip, 60000); // Show every 60 seconds
};
