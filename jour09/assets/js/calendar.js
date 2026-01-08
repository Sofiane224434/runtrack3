let calendar;

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            handleDateClick(info.dateStr);
        },
        events: getCalendarEvents(),
        displayEventTime: false,
        eventDisplay: 'block'
    });
    
    calendar.render();
    
    // Rafraîchir le calendrier toutes les 2 secondes pour voir les changements
    setInterval(updateCalendar, 2000);
});

function handleDateClick(dateStr) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Vous devez être connecté pour marquer votre présence');
        return;
    }
    
    // Récupérer les demandes existantes
    const requests = JSON.parse(localStorage.getItem('attendanceRequests')) || [];
    
    // Vérifier si l'utilisateur a déjà une demande pour cette date
    const existingRequest = requests.find(r => 
        r.userId === currentUser.email && r.date === dateStr
    );
    
    if (existingRequest) {
        alert('Vous avez déjà marqué cette date');
        return;
    }
    
    // Ajouter nouvelle demande
    requests.push({
        id: Date.now(),
        userId: currentUser.email,
        username: currentUser.username,
        date: dateStr,
        status: 'pending',
        timestamp: Date.now()
    });
    
    // Sauvegarder
    localStorage.setItem('attendanceRequests', JSON.stringify(requests));
    
    // Mettre à jour l'affichage
    updateCalendar();
}

function getCalendarEvents() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser) return [];
    
    const requests = JSON.parse(localStorage.getItem('attendanceRequests')) || [];
    
    // Filtrer les demandes de l'utilisateur actuel
    return requests
        .filter(r => r.userId === currentUser.email)
        .map(request => {
            let title, backgroundColor, borderColor;
            
            if (request.status === 'pending') {
                title = '⏳ En attente';
                backgroundColor = '#FCD34D';
                borderColor = '#F59E0B';
            } else if (request.status === 'approved') {
                title = '✅ Validé';
                backgroundColor = '#34D399';
                borderColor = '#10B981';
            } else if (request.status === 'rejected') {
                title = '❌ Refusé';
                backgroundColor = '#FCA5A5';
                borderColor = '#EF4444';
            }
            
            return {
                title,
                start: request.date,
                backgroundColor,
                borderColor,
                textColor: '#000',
                allDay: true
            };
        });
}

function updateCalendar() {
    if (calendar) {
        calendar.removeAllEvents();
        calendar.addEventSource(getCalendarEvents());
    }
}

// Écouter les changements du localStorage depuis d'autres onglets
window.addEventListener('storage', (e) => {
    if (e.key === 'attendanceRequests') {
        updateCalendar();
    }
});