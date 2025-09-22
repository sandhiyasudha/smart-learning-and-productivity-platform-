// Subject list
let subjects = [];

// Add subject
function addSubject() {
    const input = document.getElementById("subjectInput");
    const subject = input.value.trim();
    if(subject) {
        subjects = [...subjects, subject];
        updateSubjectList();
        input.value = "";
        updateChart();
    }
}

// Update subject list display
function updateSubjectList() {
    const list = document.getElementById("subjectList");
    list.innerHTML = "";
    subjects.forEach(sub => {
        const li = document.createElement("li");
        li.textContent = sub;
        list.appendChild(li);
    });
}

// Chart.js setup
const ctx = document.getElementById("progressChart").getContext("2d");
let progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: subjects,
        datasets: [{
            label: 'Progress %',
            data: subjects.map(() => Math.floor(Math.random() * 50) + 10), // dummy progress
            backgroundColor: '#4CAF50'
        }]
    },
    options: {
        scales: { y: { beginAtZero: true, max: 100 } }
    }
});

// Update chart dynamically
function updateChart() {
    progressChart.data.labels = subjects;
    progressChart.data.datasets[0].data = subjects.map(() => Math.floor(Math.random() * 50) + 10);
    progressChart.update();
}

// Motivation quotes
const quotes = [
    "Small steps daily lead to big success!",
    "Stay consistent, success will follow!",
    "Focus on progress, not perfection!"
];

document.getElementById("motivationText").innerText = quotes[Math.floor(Math.random() * quotes.length)];