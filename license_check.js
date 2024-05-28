const expirationDate = new Date('2024-05-28T05:30:00Z');

console.log('Время окончания лицензии:', expirationDate.toUTCString());

function checkLicense() {
    const currentDate = new Date();

    console.log('Текущее время:', currentDate.toUTCString());

    if (currentDate > expirationDate) {
        return 'expired';
    } else {
        return 'valid';
    }
}

console.log('Состояние лицензии:', checkLicense());
