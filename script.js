let teams = []; // Array for å lagre lag og poeng

// Håndterer registreringsskjemaet
document.getElementById('teamForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const navn = document.getElementById('navn').value;
    const lagnavn = document.getElementById('lagnavn').value;

    // Legg til laget i arrayet med 0 poeng som standard
    teams.push({ lagnavn: lagnavn, poeng: 0 });
    updateLeaderboard();

    // Tøm skjemaet
    document.getElementById('navn').value = '';
    document.getElementById('lagnavn').value = '';
    alert(`Lag ${lagnavn} er registrert!`);
});

// Oppdater ledertavlen
function updateLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = ''; // Tøm tabellen

    // Sorter lag etter poeng (høyest først)
    teams.sort((a, b) => b.poeng - a.poeng);

    teams.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${team.lagnavn}</td><td>${team.poeng}</td>`;
        tbody.appendChild(row);
    });
}

// Admin-login
function loginAdmin() {
    const pass = document.getElementById('Admin').value;
    if (pass === '4259') { // Bytt ut med et sikkert passord
        document.getElementById('admin').style.display = 'block';
        document.getElementById('adminControls').style.display = 'block';
    } else {
        alert('Feil passord!');
    }
}

// Oppdater poeng for et lag
function updatePoints() {
    const lagnavn = document.getElementById('teamToUpdate').value;
    const poeng = parseInt(document.getElementById('points').value);
    const team = teams.find(t => t.lagnavn === lagnavn);

    if (team) {
        team.poeng = poeng;
        updateLeaderboard();
        alert(`Poeng oppdatert for ${lagnavn}!`);
    } else {
        alert('Finner ikke laget!');
    }
}