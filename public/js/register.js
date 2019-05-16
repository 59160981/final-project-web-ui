function checkCorrect() {
    var emp_id = document.getElementById("EMP_ID").value;
    var emp_fname = document.getElementById("EMP_fname").value;
    var emp_lname = document.getElementById("EMP_lname").value;
    var emp_birthDate = document.getElementById("EMP_birthDate").value;
    var emp_gender = document.getElementById("EMP_gender").value;
    var emp_type = document.getElementById("EMP_type").value;
    var emp_address = document.getElementById("EMP_address").value;
    var emp_telnumber = document.getElementById("EMP_tel").value;
    var emp_email = document.getElementById("EMP_email").value;
    var emp_password = document.getElementById("EMP_password").value;

    if (emp_id == "") {
        alert("กรุณากรอก รหัสพนักงาน")
    } else if (emp_password == "") {
        alert("กรุณากรอก รหัสผ่าน")
    } else if (emp_fname == "") {
        alert("กรุณากรอก ชื่อ")
    } else if (emp_lname == "") {
        alert("กรุณากรอก นามสกุล")
    } else if (emp_birthDate == "") {
        alert("กรุณาเลือก วัน-เดือน-ปีเกิด")
    } else if (emp_gender == "เพศ") {
        alert("กรุณาเลือก เพศ")
    } else if (emp_address == "") {
        alert("กรุณากรอก ที่อยู่")
    } else if (emp_telnumber == "") {
        alert("กรุณากรอกเบอร์ติดต่อ")
    } else if (emp_email == "") {
        alert("กรุณากรอก E-mail")
    } else if (emp_type == "ตำแหน่ง") {
        alert("กรุณาเลือก ตำแหน่ง")
    } else if (checkEmployeeID() == 0) {
        alert("รหัสพนักงานต้องเป็นตัวเลขเท่านั้นและความยาวเท่ากับ 8 ตัวอักษร")
    } else if (checkEmployeePassword() == 0) {
        alert("รหัสผ่านต้องมีความยาวระหว่าง 8 - 15 ตัวอักษร")
    } else if (checkFname() == 0) {
        alert("ชื่อต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkLname() == 0) {
        alert("นามสกุลต้องเป็นตัวอักษรเท่านั้น")
    } else if (checkTelnumber() == 0) {
        alert("เบอร์ติดต่อต้องเป็นตัวเลขเท่านั้นและความยาวไม่เกิน 10 ตัวอักษร)")
    } else if (checkEmail() == 0) {
        alert("กรุณากรอกอีเมลให้ถูกต้อง")
    } else {
        document.getElementById("addEmployee").submit()
    }
}

function checkEmail() {
    var emp_email = document.getElementById("EMP_email").value;
    var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validate.test(String(emp_email).toLowerCase())) {
        return 1;
    } else {
        document.getElementById('EMP_email').value = "";
        return 0;
    }
}

function checkTelnumber() {
    var emp_telnumber = document.getElementById("EMP_tel").value;

    if (emp_telnumber != parseInt(emp_telnumber) || emp_telnumber.length != 10) {
        document.getElementById('EMP_tel').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkNationality() {
    var emp_nationality = document.getElementById("EMP_nationality").value;

    if (isNaN(emp_nationality)) {
        return 1;
    } else {
        document.getElementById('EMP_nationality').value = "";
        return 0;
    }
}

function checkRace() {
    var emp_race = document.getElementById("EMP_race").value;

    if (isNaN(emp_race)) {
        return 1;
    } else {
        document.getElementById('EMP_race').value = "";
        return 0;
    }
}

function checkLname() {
    var emp_lname = document.getElementById("EMP_lname").value;

    if (isNaN(emp_lname)) {
        return 1;
    } else {
        document.getElementById('EMP_lname').value = "";
        return 0;
    }
}

function checkFname() {
    var emp_fname = document.getElementById("EMP_fname").value;

    if (isNaN(emp_fname)) {
        return 1;
    } else {
        document.getElementById('EMP_fname').value = "";
        return 0;
    }
}

function checkEmployeePassword() {
    var emp_password = document.getElementById("EMP_password").value;

    if (emp_password.length < 8 || emp_password.length > 15) {
        document.getElementById('EMP_password').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkEmployeeID() {
    var emp_id = document.getElementById("EMP_ID").value;

    if (emp_id != parseInt(emp_id) || emp_id.length != 8) {
        document.getElementById('EMP_ID').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkInputID(){
    var data = document.getElementById("EMP_ID").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("EMP_ID").value = data.substring(0,data.length-1);
    }
}

function checkInputFname(){
    var data = document.getElementById("EMP_fname").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("EMP_fname").value = data.substring(0,data.length-1);
    }
}

function checkInputLname(){
    var data = document.getElementById("EMP_lname").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("EMP_lname").value = data.substring(0,data.length-1);
    }
}

function checkInputTel(){
    var data = document.getElementById("EMP_tel").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("EMP_tel").value = data.substring(0,data.length-1);
    }
}