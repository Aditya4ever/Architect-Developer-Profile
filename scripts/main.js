// ===========================
// MOBILE NAVIGATION
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// PROJECT FILTERING
// ===========================
let currentFilter = 'all';

function renderProjects() {
    // Healthcare Projects
    const healthcareContainer = document.getElementById('healthcare-projects');
    healthcareContainer.innerHTML = '';
    const healthcareFiltered = filterProjects(projectsData.healthcare);
    healthcareFiltered.forEach(project => {
        healthcareContainer.appendChild(createProjectCard(project));
    });
    
    // Utilities Projects
    const utilitiesContainer = document.getElementById('utilities-projects');
    utilitiesContainer.innerHTML = '';
    const utilitiesFiltered = filterProjects(projectsData.utilities);
    utilitiesFiltered.forEach(project => {
        utilitiesContainer.appendChild(createProjectCard(project));
    });
    
    // Finance Projects
    const financeContainer = document.getElementById('finance-projects');
    financeContainer.innerHTML = '';
    const financeFiltered = filterProjects(projectsData.finance);
    financeFiltered.forEach(project => {
        financeContainer.appendChild(createProjectCard(project));
    });
    
    // Retail Projects
    const retailContainer = document.getElementById('retail-projects');
    retailContainer.innerHTML = '';
    const retailFiltered = filterProjects(projectsData.retail);
    retailFiltered.forEach(project => {
        retailContainer.appendChild(createProjectCard(project));
    });
    
    // Manufacturing Projects
    const manufacturingContainer = document.getElementById('manufacturing-projects');
    manufacturingContainer.innerHTML = '';
    const manufacturingFiltered = filterProjects(projectsData.manufacturing);
    manufacturingFiltered.forEach(project => {
        manufacturingContainer.appendChild(createProjectCard(project));
    });

    // Hide empty sectors
    hideEmptySectors();
}

function filterProjects(projects) {
    if (currentFilter === 'all') {
        return projects;
    }
    return projects.filter(project => project.platform === currentFilter);
}

function hideEmptySectors() {
    const sectors = ['healthcare', 'utilities', 'finance', 'retail', 'manufacturing'];
    sectors.forEach(sector => {
        const container = document.getElementById(`${sector}-projects`);
        const sectorGroup = container.closest('.sector-group');
        if (container.children.length === 0) {
            sectorGroup.style.display = 'none';
        } else {
            sectorGroup.style.display = 'block';
        }
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const platformIcon = {
        gcp: 'fab fa-google',
        azure: 'fab fa-microsoft',
        aws: 'fab fa-aws'
    }[project.platform];
    
    const platformName = {
        gcp: 'GCP',
        azure: 'Azure',
        aws: 'AWS'
    }[project.platform];
    
    card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="cloud-badge ${project.platform}">
                <i class="${platformIcon}"></i> ${platformName}
            </span>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        <a href="${project.link}" target="_blank" class="project-link">
            Read Case Study <i class="fas fa-arrow-right"></i>
        </a>
    `;
    
    return card;
}

// Filter button functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.filter;
        renderProjects();
    });
});

// ===========================
// ARTICLES RENDERING
// ===========================
function renderArticles() {
    const articlesContainer = document.getElementById('articles-grid');
    articlesContainer.innerHTML = '';
    
    articlesData.forEach(article => {
        const card = document.createElement('a');
        card.href = article.link;
        card.target = '_blank';
        card.className = 'article-card';
        
        const platformIcon = article.platform === 'medium' ? 
            '<i class="fab fa-medium"></i>' : 
            '<i class="fab fa-linkedin"></i>';
        
        card.innerHTML = `
            <div class="article-category">${article.category}</div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <span>${formatDate(article.date)}</span>
                <span>${platformIcon}</span>
            </div>
        `;
        
        articlesContainer.appendChild(card);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe all project cards and article cards
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderArticles();
    
    // Observe elements for animation
    setTimeout(() => {
        document.querySelectorAll('.project-card, .article-card, .skill-card').forEach(el => {
            observer.observe(el);
        });
    }, 100);
});

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--dark-bg)';
    }
});