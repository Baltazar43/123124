function createOrder() {
    // Проверка наличия заполненных полей
    var orderName = document.getElementsByName('orderName')[0].value;
    var contractor = document.getElementsByName('contractor')[0].value;
    var customer = document.getElementsByName('customer')[0].value;
    var workPeriod = document.getElementsByName('workPeriod')[0].value;
    var installationLocation = document.getElementsByName('installationLocation')[0].value;

    if (orderName.trim() !== '' && contractor.trim() !== '' && customer.trim() !== '' && workPeriod.trim() !== '' && installationLocation.trim() !== '') {
        showNotification('createOrderNotification');
    } else {
        showNotification('createOrderValidationNotification', true);
    }
}

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
    }, 3000);
}
