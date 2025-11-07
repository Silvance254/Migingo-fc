// Players Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Position Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const playerCards = document.querySelectorAll('.player-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            playerCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-position') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Search Functionality
    const searchInput = document.getElementById('playerSearch');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        playerCards.forEach(card => {
            const playerName = card.querySelector('h3').textContent.toLowerCase();
            if (playerName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Load More Functionality
    const loadMoreBtn = document.getElementById('loadMore');
    let visiblePlayers = 8; // Initial number of visible players
    
    // Hide players beyond initial count
    playerCards.forEach((card, index) => {
        if (index >= visiblePlayers) {
            card.style.display = 'none';
        }
    });
    
    loadMoreBtn.addEventListener('click', function() {
        visiblePlayers += 8;
        
        playerCards.forEach((card, index) => {
            if (index < visiblePlayers) {
                card.style.display = 'block';
            }
        });
        
        // Hide load more button if all players are visible
        if (visiblePlayers >= playerCards.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
    
    // Initialize player count display
    if (visiblePlayers >= playerCards.length) {
        loadMoreBtn.style.display = 'none';
    }
});
