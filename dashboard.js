// === CHART DASHBOARD ===
const ctx = document.getElementById('trendChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Fish Detected',
      data: [10, 12, 25, 20, 30, 27, 35],
      borderWidth: 2,
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// === MENU TOGGLE SECTION ===
const menuDashboard = document.getElementById('menu-dashboard');
const menuDataset = document.getElementById('menu-dataset');
const dashboardSection = document.getElementById('dashboard-section');
const datasetSection = document.getElementById('dataset-section');

menuDashboard.addEventListener('click', (e) => {
  e.preventDefault();
  dashboardSection.style.display = 'block';
  datasetSection.style.display = 'none';
});

menuDataset.addEventListener('click', (e) => {
  e.preventDefault();
  dashboardSection.style.display = 'none';
  datasetSection.style.display = 'block';
});
