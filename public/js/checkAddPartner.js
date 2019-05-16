function checkCorrect() {
    var part_id = document.getElementById("ID_partner").value;
    var part_name = document.getElementById("name").value;
    var part_tel = document.getElementById("telephone").value;
    var part_email = document.getElementById("email").value;
    var part_address = document.getElementById("address").value;
    var part_fax = document.getElementById("fax").value;
    var part_type = document.getElementById("partner_type").value;

    if (part_id == "") {
        alert("กรุณากรอก รหัสพาร์ทเนอร์")
    } else if (part_name == "") {
        alert("กรุณากรอก ชื่อ - นามสกุล")
    } else if (part_tel == "") {
        alert("กรุณากรอก เบอร์ติดต่อ")
    } else if (part_email == "") {
        alert("กรุณากรอก E - mail")
    } else if (part_address == "") {
        alert("กรุณากรอก ที่อยู่")
    } else if (part_fax == "") {
        alert("กรุณากรอก fax")
    } else if (part_type == "เลือก....") {
        alert("กรุณาเลือก ประเภท")
    } else if (checkPartnerID() == 0) {
        alert("รหัสคู่ค้าต้องเป็นตัวเลขและมี 8 ตัวอักษร")
    } else if (checkTelnumber() == 0) {
        alert("เบอร์ติดต่อต้องเป็นตัวเลขและมี 10 ตัวอักษร")
    } else if (checkFax() == 0) {
        alert("Fax ต้องเป็นตัวเลขและมี 9 ตัวอักษร")
    } else if (checkEmail() == 0) {
        alert("E - mail ไม่ถูกต้อง")
    } else {
        document.getElementById("addPartner").submit()
    }
}

function checkEmail() {
    var cus_email = document.getElementById("email").value;
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validate.test(String(cus_email).toLowerCase())) {
        return 1;
    } else {
        document.getElementById('email').value = "";
        return 0;
    }
}

function checkTelnumber() {
    var cus_tel = document.getElementById("telephone").value;

    if (cus_tel != parseInt(cus_tel) || cus_tel.length != 10) {
        document.getElementById('telephone').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkFax() {
    var cus_fax = document.getElementById("fax").value;

    if (cus_fax != parseInt(cus_fax) || cus_fax.length != 9) {
        document.getElementById('fax').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkPartnerID() {
    var part_id = document.getElementById("ID_partner").value;

    if (part_id != parseInt(part_id) || part_id.length != 8) {
        document.getElementById('ID_partner').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkInputID(){
    var data = document.getElementById("ID_partner").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("ID_partner").value = data.substring(0,data.length-1);
    }
}

function checkInputName(){
    var data = document.getElementById("name").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("name").value = data.substring(0,data.length-1);
    }
}

function checkInputTel(){
    var data = document.getElementById("telephone").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("telephone").value = data.substring(0,data.length-1);
    }
}

function checkInputFax(){
    var data = document.getElementById("fax").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("fax").value = data.substring(0,data.length-1);
    }
}