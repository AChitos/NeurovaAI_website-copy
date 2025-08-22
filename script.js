// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initFloatingElements();
    initFormHandling();
    initSmoothScrolling();
    initParallaxEffects();
    initLoadingAnimations();
    initInteractiveElements();
    initChatbot(); // New chatbot functionality
});

// Chatbot functionality
function initChatbot() {
    const floatingChatbot = document.getElementById('floating-chatbot');
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const modalInput = document.getElementById('modal-chatbot-input');
    const modalSendBtn = document.getElementById('modal-chatbot-send');
    const contactInput = document.getElementById('chatbot-input');
    const contactSendBtn = document.getElementById('chatbot-send');

    // Open chatbot modal
    floatingChatbot.addEventListener('click', function() {
        chatbotModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        modalInput.focus();
        
        // Remove notification dot when opened
        const notificationDot = document.querySelector('.notification-dot');
        if (notificationDot) {
            notificationDot.style.display = 'none';
        }
    });

    // Close chatbot modal
    chatbotClose.addEventListener('click', function() {
        chatbotModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    chatbotModal.addEventListener('click', function(e) {
        if (e.target === chatbotModal) {
            chatbotModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Send message function
    function sendMessage(message, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-content">
                ${isUser ? message : `<strong>Neurova Bot:</strong> ${message}`}
            </div>
            <div class="message-time">${timeString}</div>
        `;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Add animation
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 100);
    }

    // Handle message sending from modal
    function handleModalSend() {
        const message = modalInput.value.trim();
        if (message) {
            sendMessage(message, true);
            modalInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const botResponse = generateBotResponse(message);
                sendMessage(botResponse, false);
            }, 1000);
        }
    }

    // Handle message sending from contact form
    function handleContactSend() {
        const message = contactInput.value.trim();
        if (message) {
            // Update the contact form message
            const contactMessage = document.getElementById('chatbot-message');
            contactMessage.innerHTML = `<strong>You:</strong> ${message}`;
            
            // Simulate bot response
            setTimeout(() => {
                const botResponse = generateBotResponse(message);
                contactMessage.innerHTML = `<strong>Neurova Bot:</strong> ${botResponse}`;
            }, 1000);
            
            contactInput.value = '';
        }
    }

    // Event listeners for sending messages
    modalSendBtn.addEventListener('click', handleModalSend);
    contactSendBtn.addEventListener('click', handleContactSend);

    // Enter key support
    modalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleModalSend();
        }
    });

    contactInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleContactSend();
        }
    });

    // Auto-close notification dot after 5 seconds
    setTimeout(() => {
        const notificationDot = document.querySelector('.notification-dot');
        if (notificationDot) {
            notificationDot.style.animation = 'none';
            notificationDot.style.opacity = '0.5';
        }
    }, 5000);
}

// Generate bot responses based on user input
function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Service-related questions
    if (message.includes('service') || message.includes('what do you do') || message.includes('help')) {
        return "We offer comprehensive AI development, website creation, SEO optimization, and social media marketing services. Our team specializes in creating custom solutions that drive business growth. What specific service are you interested in?";
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence')) {
        return "Our AI development services include custom AI systems, machine learning models, natural language processing, and AI integration into existing platforms. We've helped businesses automate processes and gain valuable insights from their data.";
    }
    
    if (message.includes('website') || message.includes('web development')) {
        return "We create professional websites from basic informational sites to complex e-commerce platforms. Our websites are optimized for speed, SEO, and user experience. We also provide hosting and domain services.";
    }
    
    if (message.includes('seo') || message.includes('search engine')) {
        return "Our SEO services help improve your website's visibility in search results. We optimize content, technical aspects, and build quality backlinks to increase organic traffic and rankings.";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
        return "Our pricing varies based on project requirements. We offer three main packages: Basic Website, E-commerce, and Custom Website. For accurate pricing, please contact us with your specific needs.";
    }
    
    if (message.includes('contact') || message.includes('get in touch')) {
        return "You can reach us at +31 619919544 or info@neurovaai.com. We're located at Oostersingel 12, Groningen. Our support hours are Monday-Friday 10:00AM-7:00PM and Saturday-Sunday 4:30PM-10:00PM.";
    }
    
    if (message.includes('medical') || message.includes('healthcare')) {
        return "We specialize in custom medical software development, covering every need of your expertise. Our medical software solutions include personalized features and 24/7 customer support.";
    }
    
    if (message.includes('time') || message.includes('how long')) {
        return "Project timelines depend on complexity. Basic websites typically take 2-4 weeks, e-commerce sites 4-8 weeks, and custom projects vary. We'll provide a detailed timeline during consultation.";
    }
    
    if (message.includes('experience') || message.includes('portfolio')) {
        return "We have extensive experience in AI development and digital strategies, with a proven track record helping businesses enhance their online presence. We've worked with various industries and can provide case studies upon request.";
    }
    
    if (message.includes('support') || message.includes('help desk')) {
        return "We provide 24/7 customer support to all our clients. You can reach us anytime for fast and accurate responses to your questions and needs.";
    }
    
    // Default response
    return "Thank you for your question! I'm here to help with information about our AI development, website creation, SEO, and consulting services. Feel free to ask about specific services, pricing, or how we can help your business.";
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('[data-aos-delay]');
                children.forEach(child => {
                    const delay = child.getAttribute('data-aos-delay');
                    setTimeout(() => {
                        child.classList.add('aos-animate');
                    }, delay * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Floating elements animation
function initFloatingElements() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        const speed = parseFloat(card.getAttribute('data-speed')) || 1;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5 * speed;
            card.style.transform = `translateY(${rate}px)`;
        });
    });

    // Mouse move effect for floating cards
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingCards.forEach((card, index) => {
            const speed = parseFloat(card.getAttribute('data-speed')) || 1;
            const x = (mouseX - 0.5) * 20 * speed;
            const y = (mouseY - 0.5) * 20 * speed;
            
            card.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Form handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form .form');
    const newsletterForm = document.querySelector('.newsletter-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                showNotification('Please enter your email address.', 'error');
                return;
            }

            // Simulate subscription
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Successfully subscribed to our newsletter!', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.gradient-orb, .grid-pattern');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Loading animations
function initLoadingAnimations() {
    // Add loading class to elements
    const loadingElements = document.querySelectorAll('.service-card, .feature-card, .tech-item');
    
    loadingElements.forEach((el, index) => {
        el.classList.add('loading');
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // Hero content animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Interactive elements
function initInteractiveElements() {
    // Service card interactions
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature card interactions
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Tech item interactions
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.color = '#8b5cf6';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.color = '#6366f1';
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handlers
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb, .grid-pattern');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 16); // 60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    .notification-message {
        flex: 1;
    }
`;

document.head.appendChild(notificationStyles);

// Initialize additional features when page is fully loaded
window.addEventListener('load', function() {
    // Add loading completion class
    document.body.classList.add('loaded');
    
    // Initialize any additional features
    initAdditionalFeatures();
});

function initAdditionalFeatures() {
    // Add cursor trail effect
    initCursorTrail();
    
    // Add particle effects
    initParticleEffects();
}

// Cursor trail effect
function initCursorTrail() {
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    cursorTrail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursorTrail);

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        cursorTrail.style.left = trailX - 3 + 'px';
        cursorTrail.style.top = trailY - 3 + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    animateTrail();
}

// Particle effects
function initParticleEffects() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: var(--primary-color);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: float-particle ${duration}s infinite ${delay}s;
    `;
    
    container.appendChild(particle);
    
    // Add particle animation CSS
    if (!document.querySelector('#particle-animations')) {
        const particleStyles = document.createElement('style');
        particleStyles.id = 'particle-animations';
        particleStyles.textContent = `
            @keyframes float-particle {
                0%, 100% {
                    transform: translateY(0px) translateX(0px);
                    opacity: 0.2;
                }
                50% {
                    transform: translateY(-100px) translateX(50px);
                    opacity: 0.6;
                }
            }
        `;
        document.head.appendChild(particleStyles);
    }
}

// Export functions for potential external use
window.NeurovaAI = {
    showNotification,
    initNavigation,
    initScrollAnimations,
    initChatbot,
    generateBotResponse
};
