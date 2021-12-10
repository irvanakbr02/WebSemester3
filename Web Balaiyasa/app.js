var elapsed = 0;
var start = new Date();
var $timer = document.querySelector(".timer");

// Fungsi untuk menghitung jumlah detik yang sudah berlalu
function tick() {
  elapsed = new Date() - start;
  var roundedElapsed = Math.round(elapsed / 100);
  var seconds = (roundedElapsed / 10).toFixed(1);
  $timer.innerHTML = seconds;
};

// Setiap 50 milisecond, jalankan fungsi tick
setInterval(tick, 50);

formContact = document.querySelector('#masukan');
formContact.addEventListener('submit', (e) => {
  e.preventDefault()
  let nama = document.getElementById('nama').value;
  let email = document.getElementById('email').value;
  let pesan = document.getElementById('message').value;
  if (nama != "" && email!="" && pesan !="") {
    swal("Masukan Diterima", "Terimakasih atas masukan kritiknya,kami akan mengevaluasinya lagi 😊", "success");
  }else{
    swal("Error!", "Anda harus mengisi data pemesanan dengan lengkap !", "error");
  }
})
