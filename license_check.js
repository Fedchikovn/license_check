const expirationDate = new Date('2024-05-28T05:35:00Z');

console.log('Время окончания лицензии:', expirationDate.toUTCString());

function checkLicense() {
    const currentDate = new Date();

    console.log('Текущее время:', currentDate.toUTCString());

    if (currentDate > expirationDate) {
        console.log('Состояние лицензии: expired');
        return 'expired';
    } else {
        console.log('Состояние лицензии: valid');
        return 'valid';
    }
}
console.log('Состояние лицензии:', checkLicense());
