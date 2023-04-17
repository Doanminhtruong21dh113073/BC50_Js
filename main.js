// Bài 1 

function tinhLuong() {
    var luongMoiNgay = 100000; 
    var soNgayLamViec = document.getElementById("ngay-lam-viec").value;
    var tongTienLuong = luongMoiNgay * soNgayLamViec;
    document.getElementById("tien-luong").value = tongTienLuong + " đồng";
  }
  

// Bài 2
function tinhTrungBinh() {
    var soThuNhat = parseFloat(document.getElementById("so-thu-nhat").value);
    var soThuHai = parseFloat(document.getElementById("so-thu-hai").value);
    var soThuBa = parseFloat(document.getElementById("so-thu-ba").value);
    var soThuTu = parseFloat(document.getElementById("so-thu-tu").value);
    var soThuNam = parseFloat(document.getElementById("so-thu-nam").value);
    
    var giaTriTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    
    document.getElementById("ket-qua").innerHTML = "Giá trị trung bình của 5 số là: " + giaTriTrungBinh.toFixed(2);
  }

  //Bài 3

  function quyDoiTien() {
    var soTienUSD = parseFloat(document.getElementById("so-tien-usd").value);
    
    var tyGia = 23500;
    
    var soTienVND = soTienUSD * tyGia;
    
    document.getElementById("ket-qua_$").innerHTML = "Số tiền đã quy đổi sang VND là: " + soTienVND.toFixed(2);
  }
  
  // Bài 4 

  function tinh() {
    var chieuDai = parseFloat(document.getElementById("chieu-dai").value);
    var chieuRong = parseFloat(document.getElementById("chieu-rong").value);
    
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    
    document.getElementById("ket-qua_hcn").innerHTML = "Diện tích: " + dienTich.toFixed(2) + "<br>Chu vi: " + chuVi.toFixed(2);
  }
  

  // Bài 5
  function tinh() {
    var so = parseInt(document.getElementById("so").value);
    
    var kySoHangChuc = Math.floor(so / 10);
    var kySoHangDonVi = so % 10;
    
    var tong = kySoHangChuc + kySoHangDonVi;
    
    document.getElementById("ket-qua_kyso").innerHTML = "Tổng của hai ký số là: " + tong;
  }
  
  