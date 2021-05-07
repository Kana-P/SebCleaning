// สร้าง Card แสดงข้อมูลของพนักงานในหน้า Cleaners
function addItem(name, age, exp, desc, note, img) {
  var cards = document.getElementById("cleanerCard");

  // Card elements
  var cardContain = document.createElement("DIV");
  var cardRow = document.createElement("DIV");
  var imgCol = document.createElement("DIV");
  var infoCol = document.createElement("DIV");
  var infoBody = document.createElement("DIV");

  var _name = document.createElement("H4");
  var _ageExp = document.createElement("P");
  var _desc = document.createElement("P");
  var _note = document.createElement("P");
  var _img = document.createElement("IMG");

  // Add data
  _name.innerHTML = name;
  _ageExp.innerHTML = "อายุ : " + age + " ปี ประสบการณ์ : " + exp + " ปี";
  _desc.innerHTML = desc;
  _note.innerHTML = "หมายเหตุ : " + note;
  _img.src = img;

  // Add class and style
  cardContain.classList.add("card", "mb-3");
  cardRow.classList.add("row", "g-0");
  imgCol.classList.add("col-md-4");
  infoCol.classList.add("col-md-8");
  infoBody.classList.add("card-body");

  _ageExp.style.fontFamily = "ThaiSansNeue-Bold";
  _desc.classList.add("card-text");
  _note.classList.add("card-text", "text-muted");
  _img.classList.add("img-fluid");

  // Append
  infoBody.appendChild(_name);
  infoBody.appendChild(_ageExp);
  infoBody.appendChild(_desc);
  if (_note.innerHTML != "หมายเหตุ : none") {
    infoBody.appendChild(_note);
  }

  imgCol.appendChild(_img);
  infoCol.appendChild(infoBody);
  
  cardRow.appendChild(imgCol);
  cardRow.appendChild(infoCol);

  cardContain.appendChild(cardRow);

  cards.appendChild(cardContain);
}

// ดึงข้อมูลพนักงานจาก Database
function FetchCleanerData() {
  firebase
    .database()
    .ref("cleaner")
    .once("value", function (snapshot) {
      snapshot.forEach(function (ChildSnapshot) {
        let clnName = ChildSnapshot.val().name;
        let clnAge = ChildSnapshot.val().age;
        let clnExp = ChildSnapshot.val().exp;
        let clnDesc = ChildSnapshot.val().desc;
        let clnNote = ChildSnapshot.val().note;
        let clnImg = ChildSnapshot.val().img;
        addItem(clnName, clnAge, clnExp, clnDesc, clnNote, clnImg);
      });
    });
}

window.onload(FetchCleanerData());
