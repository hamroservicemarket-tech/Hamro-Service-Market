/**
 * Hamro Service Market - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const servicesGrid = document.getElementById('services-grid');
    const exploreBtn = document.getElementById('explore-more-btn');

    // Config
    const INITIAL_SHOW_COUNT = 6;
    let isExpanded = false;

    // Render Service Card
    function createServiceCard(service) {
        const card = document.createElement('div');
        card.className = 'service-card glass';

        card.innerHTML = `
            <div class="service-img-wrapper">
                <img src="${service.image}" alt="${service.title}" loading="lazy">
            </div>
            <div class="service-content">
                <div class="service-header">
                    <h3>${service.title}</h3>
                    <span class="service-price">${service.price}</span>
                </div>
                <p class="service-desc">${service.description}</p>
                
                <div class="service-details" id="details-${service.id}">
                    <div class="details-inner">
                        <h4>What's Included:</h4>
                        <ul>
                            ${service.details.includes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        
                        ${service.details.notes ? `
                        <p><strong>Note:</strong> ${service.details.notes}</p>
                        ` : ''}
                        
                        ${service.details.terms ? `
                        <p style="margin-top:0.5rem; font-size:0.85rem; opacity:0.8;"><em>* ${service.details.terms}</em></p>
                        ` : ''}
                    </div>
                </div>

                <button class="toggle-details-btn" onclick="toggleDetails('${service.id}', this)">
                    View Details
                </button>
            </div>
        `;
        return card;
    }

    // Render Services
    function renderServices(showAll = false) {
        servicesGrid.innerHTML = '';

        const servicesToShow = showAll ? servicesData : servicesData.slice(0, INITIAL_SHOW_COUNT);

        servicesToShow.forEach(service => {
            servicesGrid.appendChild(createServiceCard(service));
        });

        // Hide button if showing all
        if (showAll || servicesData.length <= INITIAL_SHOW_COUNT) {
            exploreBtn.style.display = 'none';
        } else {
            exploreBtn.style.display = 'inline-block';
            exploreBtn.innerText = 'Explore More Services';
        }
    }

    // Initial Render
    renderServices(false);

    // Explore Button Click
    exploreBtn.addEventListener('click', () => {
        isExpanded = true;
        renderServices(true);
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Simple toggle for now, can be improved with animation class
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
            }
        });
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
});

// Global function for detail toggle
window.toggleDetails = function (id, btn) {
    const detailsDiv = document.getElementById(`details-${id}`);
    const isHidden = detailsDiv.style.maxHeight === '' || detailsDiv.style.maxHeight === '0px';

    if (isHidden) {
        detailsDiv.style.maxHeight = detailsDiv.scrollHeight + 'px';
        btn.innerText = 'Hide Details';
        btn.style.background = '#F0F9FF';
    } else {
        detailsDiv.style.maxHeight = '0px';
        btn.innerText = 'View Details';
        btn.style.background = 'white';
    }
};
