const expirationDate = new Date('2024-05-28T04:32:00Z'); // Установите дату окончания лицензии

function checkLicense() {
    const currentDate = new Date();

    if (currentDate > expirationDate) {
        return 'expired';
    } else {
        return 'valid';
    }
}

export { checkLicense };
