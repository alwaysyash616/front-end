document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            email: document.getElementById('email').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            attending: document.getElementById('attending').value,
            guests: document.getElementById('guests').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (validateForm(formData)) {
            // Here you would typically send the data to your server
            console.log('Form submitted:', formData);
            
            // Show success message
            showMessage('Thank you for your response!', 'success');
            
            // Reset form
            form.reset();
        }
    });

    // Form validation
    function validateForm(data) {
        for (let key in data) {
            if (!data[key]) {
                showMessage(`Please fill in all required fields`, 'error');
                return false;
            }
        }
        
        if (!isValidEmail(data.email)) {
            showMessage('Please enter a valid email address', 'error');
            return false;
        }

        return true;
    }

    // Email validation
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Message display
    function showMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;

        // Insert message before form
        form.parentNode.insertBefore(messageElement, form);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }

    // Add floating label effect
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Check if input has value on page load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});