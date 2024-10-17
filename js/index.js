document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelectorAll('form');

    form.forEach(f => {
        f.addEventListener('submit', function(event) {
            event.preventDefault();

            alert('Pendaftaran/Kontak berhasil dikirim!');
            
            f.reset();
        });
    });
});
