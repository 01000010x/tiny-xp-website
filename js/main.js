// Main JavaScript for /dev/vibe

document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const experimentsContainer = document.getElementById('experiments-container');
    const tagFiltersContainer = document.getElementById('tag-filters');
    const searchInput = document.getElementById('search-input');
    
    // State
    let experiments = [];
    let activeTags = [];
    let allTags = [];
    
    // Fetch experiments data from JSON file
    async function fetchExperiments() {
        try {
            const response = await fetch('data/experiments.json');
            if (!response.ok) {
                throw new Error('Failed to load experiments data');
            }
            
            const data = await response.json();
            return data.experiments;
        } catch (error) {
            console.error('Error loading experiments:', error);
            experimentsContainer.innerHTML = `
                <div class="no-results">
                    <h3>Error loading experiments</h3>
                    <p>${error.message}</p>
                </div>
            `;
            return [];
        }
    }
    
    // Initialize the application
    async function init() {
        // Load experiments
        experiments = await fetchExperiments();
        
        if (experiments.length === 0) {
            return;
        }
        
        // Extract all unique tags
        allTags = [...new Set(experiments.flatMap(exp => exp.tags))].sort();
        
        // Render tag filters
        renderTagFilters();
        
        // Render all experiments
        renderExperiments();
        
        // Set up event listeners
        setupEventListeners();
    }
    
    // Render tag filters
    function renderTagFilters() {
        if (allTags.length === 0) return;
        
        const tagsHTML = allTags.map(tag => `
            <div class="tag" data-tag="${tag}">${tag}</div>
        `).join('');
        
        tagFiltersContainer.innerHTML = tagsHTML;
    }
    
    // Render experiments
    function renderExperiments() {
        const filteredExperiments = filterExperiments();
        
        if (filteredExperiments.length === 0) {
            experimentsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No experiments found</h3>
                    <p>Try adjusting your search or filters.</p>
                </div>
            `;
            return;
        }
        
        const experimentsHTML = filteredExperiments.map(experiment => `
            <div class="experiment-card" data-id="${experiment.id}">
                <div class="card-content">
                    <h3 class="card-title">${experiment.title}</h3>
                    <p class="card-description">${experiment.description}</p>
                    <div class="card-tags">
                        ${experiment.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="card-links">
                        <a href="${experiment.demoUrl}" class="card-link" target="_blank">run</a>
                        ${experiment.codeUrl ? `<a href="${experiment.codeUrl}" class="card-link secondary" target="_blank">view_source</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
        experimentsContainer.innerHTML = experimentsHTML;
    }
    
    // Filter experiments based on search and active tags
    function filterExperiments() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        return experiments.filter(experiment => {
            // Filter by search term
            const matchesSearch = searchTerm === '' || 
                experiment.title.toLowerCase().includes(searchTerm) || 
                experiment.description.toLowerCase().includes(searchTerm);
            
            // Filter by tags
            const matchesTags = activeTags.length === 0 || 
                activeTags.every(tag => experiment.tags.includes(tag));
            
            return matchesSearch && matchesTags;
        });
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener('input', debounce(() => {
            renderExperiments();
        }, 300));
        
        // Tag filters
        tagFiltersContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('tag')) {
                const tag = event.target.dataset.tag;
                
                // Toggle tag selection
                if (activeTags.includes(tag)) {
                    activeTags = activeTags.filter(t => t !== tag);
                    event.target.classList.remove('active');
                } else {
                    activeTags.push(tag);
                    event.target.classList.add('active');
                }
                
                renderExperiments();
            }
        });
    }
    
    // Debounce function to limit how often a function is called
    function debounce(func, delay) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }
    
    // Start the application
    init();
});
