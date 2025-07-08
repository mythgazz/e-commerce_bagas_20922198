 // Ambil data dari localStorage
    const keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    const list = document.getElementById('daftar-keranjang');
    let total = 0;

    keranjang.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nama} - Rp${item.harga}`;
      list.appendChild(li);
      total += item.harga;
    });

    document.getElementById('total').textContent = 'Total: Rp' + total;

    function checkout() {
      if (keranjang.length === 0) {
        alert("keranjang kosong!");
        return;
      }

      alert("Checkout berhasil! Terima kasih telah berbelanja.");
      localStorage.removeItem('keranjang');
      window.location.href = "produk.html";
    }

function tambahKekeranjang(nama, harga) {
      const item = { nama, harga };

      // Ambil data dari localStorage atau buat array baru
      let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
      keranjang.push(item);

      // Simpan kembali ke localStorage
      localStorage.setItem('keranjang', JSON.stringify(keranjang));

      alert(nama + ' berhasil ditambahkan ke keranjang!');
    }
