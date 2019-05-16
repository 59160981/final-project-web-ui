function checkData() {
    var emp_id = document.getElementById("EMP_ID").value;
    var emp_email = document.getElementById("EMP_email").value;
    var emp_newpass = document.getElementById("EMP_newpass").value;
    var emp_renewpass = document.getElementById("EMP_renewpass").value;

    if (emp_id == "") {
        alert("กรุณากรอก รหัสพนักงาน")
    } else if (emp_email == "") {
        alert("กรุณากรอก E-mail")
    } else if (emp_newpass == "") {
        alert("กรุณากรอก รหัสผ่านใหม่")
    } else if (emp_renewpass == "") {
        alert("กรุณากรอก รหัสผ่านใหม่อีกครั้ง")
    } else if (checkEmployeeID() == 0) {
        alert("รหัสพนักงานต้องเป็นตัวเลขเท่านั้นและความยาวเท่ากับ 8 ตัวอักษร") 
    } else if (checkEmail() == 0) {
        alert("กรุณากรอกอีเมลให้ถูกต้อง")  
    } else if (checkPasswordLength() == 0) {
        alert("รหัสผ่านต้องมีความยาวระหว่าง 8 - 15 ตัวอักษร") 
    } else if (checkPassword() == 0) {
        alert("รหัสผ่านและรหัสผ่านใหม่อีกครั้งไม่ตรงกัน") 
    } else {
        document.getElementById("updatePassowrd").submit();
    }
} 

function checkPassword() {
    var emp_newpass = document.getElementById("EMP_newpass").value;
    var emp_renewpass = document.getElementById("EMP_renewpass").value;

    if (emp_newpass != emp_renewpass) {
        document.getElementById('EMP_newpass').value = "";
        document.getElementById('EMP_renewpass').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkPasswordLength() {
    var emp_newpass = document.getElementById("EMP_newpass").value;

    if (emp_newpass.length < 8 || emp_newpass.length > 15) {
        document.getElementById('EMP_newpass').value = "";
        document.getElementById('EMP_renewpass').value = "";
        return 0;
    } else {
        return 1;
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

function checkEmployeeID() {
    var emp_id = document.getElementById("EMP_ID").value;

    if (emp_id != parseInt(emp_id) || emp_id.length != 8) {
        document.getElementById('EMP_ID').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkNull() {
    var emp_id = document.getElementById("EMP_ID").value;
    var emp_email = document.getElementById("EMP_email").value;
    var emp_newpass = document.getElementById("EMP_newpass").value;
    var emp_renewpass = document.getElementById("EMP_renewpass").value;

    if (emp_id == "" || emp_email == "" || emp_newpass == "" || emp_renewpass == "") {
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