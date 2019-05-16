function checkCorrect() {
    var cus_id = document.getElementsByName("ID_customer")[0].value;
    var cus_fname = document.getElementsByName("firstname")[0].value;
    var cus_lname = document.getElementsByName("lastname")[0].value;
    var cus_birthDate = document.getElementsByName("birthday")[0].value;
    var cus_gender = document.getElementsByName("gender")[0].value;
    var cus_address = document.getElementsByName("address")[0].value;
    var cus_telnumber = document.getElementsByName("telephone")[0].value;
    var cus_email = document.getElementsByName("email")[0].value;
    
    
    if (cus_id == "") {
        alert("กรุณากรอก รหัสบัตรประชาชนของลูกค้า")
    } else if (cus_fname == "") {
        alert("กรุณากรอก ชื่อ")
    } else if (cus_lname == "") {
        alert("กรุณากรอก นามสกุล")
    } else if (cus_birthDate == "") {
        alert("กรุณาเลือก วัน-เดือน-ปีเกิด")
    } else if (cus_gender == "เลือก....") {
        alert("กรุณาเลือก เพศ")
    } else if (cus_address == "") {
        alert("กรุณากรอก ที่อยู่")
    } else if (cus_telnumber == "") {
        alert("กรุณากรอกเบอร์ติดต่อ")
    } else if (cus_email == "") {
        alert("กรุณากรอก E-mail")
    } else if (checkCustomerID() == 0) {
        alert("รหัสบัตรประชาชนต้องเป็นตัวเลขเท่านั้นและความยาวเท่ากับ 13 ตัวอักษร")
    } else if (checkFname() == 0) {
        alert("ชื่อต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkLname() == 0) {
        alert("นามสกุลต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkTelnumber() == 0) {
        alert("เบอร์ติดต่อต้องเป็นตัวเลขเท่านั้นและความยาว 10 ตัวอักษร")
    } else if (checkEmail() == 0) {
        alert("กรุณากรอกอีเมลให้ถูกต้อง")
    } else {
        document.getElementById("addCustomer").submit()
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
    var cus_telnumber = document.getElementById("telephone").value;

    if (cus_telnumber != parseInt(cus_telnumber) || cus_telnumber.length != 10) {
        document.getElementById('telephone').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkLname() {
    var cus_lname = document.getElementById("lastname").value;

    if (isNaN(cus_lname)) {
        return 1;
    } else {
        document.getElementById('lastname').value = "";
        return 0;
    }
}

function checkFname() {
    var cus_fname = document.getElementById("firstname").value;

    if (isNaN(cus_fname)) {
        return 1;
    } else {
        document.getElementById("firstname").value = "";
        return 0;
    }
}

function checkCustomerID() {
    var cus_id = document.getElementById("ID_customer").value;

    if (cus_id != parseInt(cus_id) || cus_id.length != 13) {
        document.getElementById("ID_customer").value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkInputID(){
    var data = document.getElementById("ID_customer").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("ID_customer").value = data.substring(0,data.length-1);
    }
}

function checkInputFname(){
    var data = document.getElementById("firstname").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("firstname").value = data.substring(0,data.length-1);
    }
}

function checkInputLname(){
    var data = document.getElementById("lastname").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("lastname").value = data.substring(0,data.length-1);
    }
}

function checkInputTel(){
    var data = document.getElementById("telephone").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("telephone").value = data.substring(0,data.length-1);
    }
}