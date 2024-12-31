document.addEventListener('DOMContentLoaded', function () {
    const parallaxElement = document.getElementById('parallax');
    const registryGrid = document.getElementById('registry-grid');
    const navbar = document.getElementById('navbar');
    let lastScrollPosition = 0;

    // Parallax scroll effect and navbar hide/show
    function handleScroll() {
        const scrollPosition = window.pageYOffset;
        const parallaxSpeed = 0.5; // Adjust this value to change scroll speed

        // Calculate new position for parallax
        const offset = scrollPosition * parallaxSpeed;

        // Apply transform for parallax
        parallaxElement.style.transform = `translateY(${offset}px)`;

        // Hide/show navbar
        if (scrollPosition > lastScrollPosition && scrollPosition > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollPosition = scrollPosition;
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Registry items data
    const registryItems = [
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg',
        'assets/V1-images-38.jpg'
    ];

    // Function to create registry items
    function createRegistryItems() {
        registryItems.forEach(item => {
            const registryItem = document.createElement('div');
            registryItem.className = 'registry-item';

            const img = document.createElement('img');
            img.src = item;
            img.alt = 'Registry Item';

            registryItem.appendChild(img);
            registryGrid.appendChild(registryItem);
        });
    }

    // Call function to create registry items
    createRegistryItems();

    // Optional: Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});