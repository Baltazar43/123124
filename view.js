document.getElementById('cancelBtn').addEventListener('click', function() {
    showNotification('cancelNotification');
});

document.getElementById('submitBtn').addEventListener('click', function() {
    // Проверка наличия заполненных полей
    var equipment = document.getElementsByName('equipment')[0].value;
    var operations = document.getElementsByName('operations')[0].value;

    if (equipment.trim() !== '' && operations.trim() !== '') {
        showNotification('submitNotification');
    } else {
        showNotification('validationNotification', true);
    }
});

function showNotification(notificationId, isError = false) {
    var notification = document.getElementById(notificationId);
    notification.style.display = 'block';

    if (isError) {
        notification.classList.add('error');
    } else {
        notification.classList.remove('error');
    }

    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000); // Уведомление исчезнет через 3 секунды (можете изменить время)
}
