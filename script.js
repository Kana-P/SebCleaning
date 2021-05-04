// Hamburger
let sidebar = document.getElementById("side");
let ham = document.getElementById("ham");
let signIn = document.getElementById("signInNav");

function HamOpen() {
  const hamburger = document.querySelector("#ham");
  if (hamburger.classList.contains("stage0")) {
    sidebar.style.right = "0px";
    ham.classList.add("stage1");
    ham.classList.remove("stage0");
    ham.classList.add("fa-times");
    ham.classList.remove("fa-bars");
    ham.classList.remove("d-lg-none");
    signIn.classList.add("hide");
  } else if (hamburger.classList.contains("stage1")) {
    sidebar.style.right = "-302px";
    ham.classList.add("stage0");
    ham.classList.remove("stage1");
    ham.classList.add("fa-bars");
    ham.classList.remove("fa-times");
    ham.classList.add("d-lg-none");
    signIn.classList.remove("hide");
  }
}

// ---------- Service ---------- //
let clean = document.getElementById("cleanInfo");
let laundry = document.getElementById("laundryInfo");
let pack = document.getElementById("packageInfo");

let cleanButton = document.getElementById("cleanButton");
let laundryButton = document.getElementById("laundryButton");
let packButton = document.getElementById("packageButton");

// เปิดแท็บ Cleaning ในหน้า Services
function cleanOpen() {
  clean.classList.remove("disable");
  cleanButton.classList.add("selected");
  laundry.classList.add("disable");
  laundryButton.classList.remove("selected");
  pack.classList.add("disable");
  packButton.classList.remove("selected");
}

// เปิดแท็บ Laundry ในหน้า Services
function laundryOpen() {
  clean.classList.add("disable");
  cleanButton.classList.remove("selected");
  laundry.classList.remove("disable");
  laundryButton.classList.add("selected");
  pack.classList.add("disable");
  packButton.classList.remove("selected");
}

// เปิดแท็บ Combo ในหน้า Services
function packOpen() {
  clean.classList.add("disable");
  cleanButton.classList.remove("selected");
  laundry.classList.add("disable");
  laundryButton.classList.remove("selected");
  pack.classList.remove("disable");
  packButton.classList.add("selected");
}

// ---------- Form ---------- //
let basePrice;
let iron = 50;

let sizeOpt = document.getElementById("sizeOpt"); // div ขนาดบ้าน
let hourOpt = document.getElementById("hourOpt"); // div ชั่วโมง
let clothesOpt = document.getElementById("clothesOpt"); // div จำนวนผ้า

let houseSize = document.getElementById("houseSize"); // dropdown ขนาดบ้าน
let hour = document.getElementById("hour"); // dropdown ชั่วโมง
let clothes = document.getElementById("clothes"); // dropdown จำนวนผ้า

let finalPrice = document.getElementById("finalPrice"); // สรุปราคารวม
let resultService = document.getElementById("serName"); // บริการที่เลือก
let resultBase = document.getElementById("base"); // เรทราคา
let resultTime = document.getElementById("sumHour"); // สรุปเวลา
let resultAmount = document.getElementById("amount"); // สรุปจำนวนผ้า

let conBanner = document.getElementById("contactBanner"); // Banner หน้า contact
let conSelect = document.getElementById("conSelect"); // หน้าเลือกบริการ
let formPart01 = document.getElementById("part01"); // หน้ากรอกข้อมูล
let formPart02 = document.getElementById("part02"); // หน้ายืนยัน OTP
let formPart03 = document.getElementById("part03"); // หน้าขอบคุณ

// Contact to form

// ตั้งค่าเบื้องต้นสำหรับบริการ Cleaning
function cleanCon() {
  basePrice = 250;
  finalPrice.innerHTML = basePrice * 2 + " บาท";
  resultService.innerHTML = "Cleaning Service";
  resultBase.innerHTML = basePrice + " บาท/ชั่วโมง";
  resultAmount.classList.add("disable");
  toForm();
}

// ตั้งค่าเบื้องต้นสำหรับบริการ Laundry
function laundryCon() {
  basePrice = 200;
  finalPrice.innerHTML = basePrice + " บาท";
  resultService.innerHTML = "Laundry Service";
  resultBase.innerHTML =
    "เริ่มต้นที่ " + basePrice + " บาท เพิ่มขึ้น 50 บาท ทุกๆ 10 ชิ้น";
  resultAmount.classList.remove("disable");
  sizeOpt.classList.add("disable");
  hourOpt.classList.add("disable");
  clothesOpt.classList.remove("disable");
  resultTime.classList.add("disable");
  toForm();
}

// ตั้งค่าเบื้องต้นสำหรับบริการ Combo
function comboCon() {
  basePrice = 290;
  finalPrice.innerHTML = basePrice * 2 + " บาท";
  resultService.innerHTML = "Combo";
  resultBase.innerHTML = basePrice + " บาท/ชั่วโมง";
  resultAmount.classList.add("disable");
  toForm();
}

// ปิดหน้าเลือกแล้วแสดง Form Part 01
function toForm() {
  conBanner.classList.add("disable");
  conSelect.classList.add("disable");
  formPart01.classList.remove("disable");
  formPart02.classList.add("disable");
  formPart03.classList.add("disable");
}

// Form Part 01 ไป Form Part 02
function toFormPart02() {
  // Backend 01

  // ใส่ระบบส่ง OTP เข้าเมลตรงนี้

  // Backend 01

  conBanner.classList.add("disable");
  conSelect.classList.add("disable");
  formPart01.classList.add("disable");
  formPart02.classList.remove("disable");
  formPart03.classList.add("disable");
}

// Form Part 02 ไปหน้าขอบคุณ
function toFinal() {
  // Backend 02

  // ใส่ระบบยืนยัน OTP + ส่งเมลหลักฐานตรงนี้

  // Backend 02

  conBanner.classList.add("disable");
  conSelect.classList.add("disable");
  formPart01.classList.add("disable");
  formPart02.classList.add("disable");
  formPart03.classList.remove("disable");
}

// กลับหน้าเลือกบริการ
function toFirst() {
  conBanner.classList.remove("disable");
  conSelect.classList.remove("disable");
  formPart01.classList.add("disable");
  formPart02.classList.add("disable");
  formPart03.classList.add("disable");
}

// Form realtime change

// เปลี่ยนเวลาอิงจากขนาดบ้าน
function changeTime() {
  switch (houseSize.value) {
    case "1":
      hour.value = "2";
      break;
    case "2":
      hour.value = "2";
      break;
    case "3":
      hour.value = "3";
      break;
    case "4":
      hour.value = "3";
      break;
    case "5":
      hour.value = "4";
      break;
      3;
    case "6":
      hour.value = "5";
      break;
    default:
      hour.value = "8";
  }
  changePrice();
}

// ---------- Cleaners Dropdown ---------- //
let cleanersOpt = document.getElementById("cleanersOpt");

// เอาพนักงานที่มีภูมิแพ้ออกจาก Dropdown
function pet() {
  for (i = 0; i < cleanersOpt.length; ++i) {
    if (cleanersOpt.options[i].classList.contains("allergic")) {
      cleanersOpt.options[i].classList.add("disable");
    }
  }
}

// เอาพนักงานที่มีภูมิแพ้ออกกลับเข้ามา
function noPet() {
  for (i = 0; i < cleanersOpt.length; ++i) {
    if (cleanersOpt.options[i].classList.contains("disable")) {
      cleanersOpt.options[i].classList.remove("disable");
    }
  }
}

let jeffDisable = ["29-5-2021", "30-5-2021", "2-6-2021"]; // วันที่ jeff ไม่ว่าง
let linDisable = ["16-5-2021", "18-5-2021"]; // วันที่ lindy ไม่ว่าง
let jerryDisable = ["22-5-2021", "23-5-2021", "24-5-2021", "25-5-2021"]; // วันที่ jerry ไม่ว่าง

let disableDates = [];

$(".datepicker").datepicker({
  format: "mm/dd/yyyy",
  beforeShowDay: function (date) {
    dmy =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if (disableDates.indexOf(dmy) != -1) {
      return false;
    } else {
      return true;
    }
  },
});

// ตรวจสอบวันว่างของพนักงาน
function checkDate() {
  switch (cleanersOpt.value) {
    case "1":
      disableDates = [...jeffDisable];
      break;
    case "2":
      disableDates = [...linDisable];
      break;
    default:
      disableDates = [...jerryDisable];
  }
}

// ---------- Result ---------- //

// สรุปราคาที่ต้องจ่าย
function changePrice() {
  let time = parseInt(hour.value);
  resultTime.innerHTML = time + " ชั่วโมง";
  finalPrice.innerHTML = basePrice * time + " บาท";
}

// สรุปจำนวนผ้าที่ต้องรีด
function changeAmount() {
  let clothesValue = parseInt(clothes.value);
  resultAmount.innerHTML = "ไม่เกิน " + clothesValue + " ชิ้น";
  finalPrice.innerHTML = basePrice + 50 * ((clothesValue - 20) / 10) + " บาท";
}
