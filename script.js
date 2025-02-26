// Show selected section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Animate Counters
function animateCounters() {
    document.querySelectorAll('.count').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const step = target / 100;

        function updateCount() {
            if (count < target) {
                count += step;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize counters
    animateCounters();

    // Create charts after the DOM is loaded
    const globalAcceptanceCtx = document.getElementById('globalAcceptanceChart').getContext('2d');
    const countryRankCtx = document.getElementById('countryRankChart').getContext('2d');
    const earningsComparisonCtx = document.getElementById('earningsComparisonChart').getContext('2d');
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');

    // Global Acceptance Chart (Pie Chart)
    new Chart(globalAcceptanceCtx, {
        type: 'pie',
        data: {
            labels: ['Accepted', 'Rejected', 'Pending'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // Country Rank Chart (Bar Chart)
    new Chart(countryRankCtx, {
        type: 'bar',
        data: {
            labels: ['USA', 'Canada', 'Germany', 'India', 'UK'],
            datasets: [{
                label: 'Rank in the World',
                data: [1, 5, 2, 10, 6],
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Earnings Comparison Chart (Line Chart)
    new Chart(earningsComparisonCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Earnings Comparison',
                data: [1200000, 1300000, 1400000, 1250000, 1350000, 1500000],
                borderColor: '#36A2EB',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });

    // Sales Chart (Bar Chart)
    new Chart(salesChartCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', ' June ', 'July', 'August', 'September', 'October', 'November'],
            datasets: [{
                label: 'Sales Data',
                data: [120, 150, 180, 200, 175, 110, 135, 195, 90, 158, 177],
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
});
