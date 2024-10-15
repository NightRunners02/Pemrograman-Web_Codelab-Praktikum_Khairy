function hitung() {
    const bil1 = document.getElementById('bil1').value;
    const bil2 = document.getElementById('bil2').value;

    if (bil1 === '' || bil2 === '') {
        alert('Silakan isi kedua bilangan terlebih dahulu.');
        return; // Menghentikan eksekusi jika input kosong
    }

    const hasil = parseFloat(bil1) + parseFloat(bil2);
    document.getElementById('hasil').innerText = hasil;
}

function reset() {
    document.getElementById('bil1').value = '';
    document.getElementById('bil2').value = '';
    document.getElementById('hasil').innerText = '0';
}
