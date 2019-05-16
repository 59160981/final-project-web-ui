function checkCorrect() {
    var car_gen = document.getElementById("generation").value;
    var car_brand = document.getElementById("brand").value;
    var car_regis = document.getElementById("register").value;
    var car_tanknum = document.getElementById("tanknumber").value;
    var car_color = document.getElementById("color").value;
    var car_power = document.getElementById("power").value;
    var car_price = document.getElementById("price").value;
    var car_type = document.getElementById("type").value;

    if (car_gen == "") {
        alert("กรุณากรอก รุ่น")
    } else if (car_brand == "เลือก....") {
        alert("กรุณาเลือก ยี่ห้อ")
    } else if (car_regis == "") {
        alert("กรุณากรอก ทะเบียน")
    } else if (car_tanknum == "") {
        alert("กรุณากรอก เลขตัวถัง")
    } else if (car_color == "") {
        alert("กรุณากรอก สี")
    } else if (car_power == "") {
        alert("กรุณากรอก แรงม้า")
    } else if (car_price == "") {
        alert("กรุณากรอก ราคา")
    } else if (car_type == "เลือก....") {
        alert("กรุณาเลือก ประเภท")
    } else if (checkCarTanknumber() == 0) {
        alert("เลขตัวถังต้องมี 17 หลัก")
    } else {
        //alert("55555")
        document.getElementById("addCar").submit()
    }
}

function checkCarTanknumber() {
    var part_id = document.getElementById("tanknumber").value;

    if ( part_id.length != 17) {
        document.getElementById('tanknumber').value = "";
        return 0;
    } else {
        return 1;
    }
}

function checkInputPower(){
    var data = document.getElementById("power").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("power").value = data.substring(0,data.length-1);
    }
}

function checkInputPrice(){
    var data = document.getElementById("price").value;
    if (data.charAt(data.length-1) != parseInt(data.charAt(data.length-1))) {
        document.getElementById("price").value = data.substring(0,data.length-1);
    }
}

function checkInputColor(){
    var data = document.getElementById("color").value;
    if (data.charAt(data.length-1) == parseInt(data.charAt(data.length-1))) {
        document.getElementById("color").value = data.substring(0,data.length-1);
    }
}