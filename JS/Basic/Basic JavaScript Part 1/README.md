# Basic part1

**Table of Contents**

### Lab 1
> 3.4. การตั้งชื่อตัวแปรที่ดี สไลด์ 43
- ให้ประกาศตัวแปรชื่อ human และ name
- ใส่ชื่อตัวเองลงในตัวแปร name
- นำค่าที่อยู่ในตัวแปร name ไปใส่ให้ human
- เมื่อ console.log(human) ออกมาต้องเป็นชื่อตัวเอง
    ```javascript
    let humen = "boy",
        name = "bukhori",
        humen = name;
        console.log(humen) // bukhori
    ```

### Lab 2
> 3.4.   การตั้งชื่อตัวแปรที่ดี (Lab)
- ตั้งชื่อตัวแปรที่ใช้เก็บจำนวนเงินในกระเป๋าตังของคุณ
- ตั้งชื่อตัวแปรที่ใช้เก็บชื่อของ พ่อและแม่ของคุณ
- ตั้งชื่อตัวแปรที่ใช้เก็บที่อยู่ของบ้านคุณ
- ตั้งชื่อตัวแปรที่ใช้เก็บอายุของจักรวาล
    ```javascript
    let myMoney = 0;
    let nameFarther = "farther Name";
    let nameMother = "mother Name";
    let myAddress = "Bangkok Thailand";
    let approximately = "13.6 billion years"
    let galaxyAge = 13.6;
        
    ```
### Exercise 1
> ตัวแปรและประเภทของข้อมูล (Exercise 1)
- 1.1. ผลลัพธ์ทั้ง console.log ทั้งสามคืออะไร
    ```javascript
    let name = "Codecamp";

        console.log(`hello ${1}`);
        console.log(`hello ${"name"}`);
        console.log(`hello ${name}`);

    // hello
    // name
    // Codecamp
    ```
### Exercise 2
> ตัวแปรและประเภทของข้อมูล (Exercise 2) Slide 64
- 2.1. กำหนดตัวแปรสำหรับเก็บชื่อ และกำหนดค่าเริ่มต้นเป็นชื่อของผู้เรียน
- 2.2. กำหนดตัวแปรสำหรับเก็บอายุ และกำหนดค่าเริ่มต้นเป็นอายุของผู้เรียน
- 2.3. กำหนดตัวแปรสำหรับเก็บที่อยู่ และกำหนดค่าเริ่มต้นเป็นที่อยู่ของผู้เรียน
- 2.4. กำหนดตัวแปรสำหรับเก็บประวัติของนักเรียนโดยใช้ตัวแปรทั้ง 3 ตัวด้านบนประกอบการเขียนประวัตินี้ด้วย
    ```javascript
    let name2 = "Bukhori";
    let age2 = "21";
    let address2 = "Narathiwat";
    let Adress = name2 + "," + age2 + "," + address2 + "," ;
    ```
### 4 การดำเนินการเบื้องต้น
> 4.6. แบบฝึกหัด การดำเนินการเบื้องต้น สไลด์ 90
1. ให้ระบุค่าของ a, b, c และ d หลังจากจบ statements ทั้งสามบรรทัด
    ```javascript
    let a = 1, b = 1;
    let c = ++a ;
    let d = b++;
    // 2 2 2 1
    ```
2. จงหาผลลัพธ์ของ Statement ต่อไปนี้
    1. "" + 1 + 0
    2.  "" - 1 + 0
    3. true + false
    4. 6 / "3"
    5. "2" * "3"
    6. 4 + 5 + "px"
    7. "$" + 4 + 5
    8. "4" - 2
    9. "4px" - 2
    10. 7 / 0
    11.	"  -9  " + 5
    12.	"  -9  " - 5
    13.	null + 1
    14.	undefined + 1
    15.	" \t \n" - 2

    ```javascript
    let a1 = "" + 1 + 0         //  10
    let a2 = "" - 1 + 0         //  -1
    let a3 = true + false       //  1
    let a4 = 6 / "3"            //  2
    let a5 = "2" * "3"          //  6
    let a6 = 4 + 5 + "px"       //  9px
    let a7 = "$" + 4 + 5        //  $45
    let a8 = "4" - 2            //  2
    let a9 = "4px" - 2          //  NaN เพราะว่าสตริง ลบ กับนัมเบอร์ไม่ได้
    let a10 = 7 / 0             //  Infinity
    let	a11 = "-9" + 5      //  -95
    let	a12 = "-9" - 5      //  -14
    let	a13 = null + 1          //  -14
    let	a14 = undefined + 1     //  NaN
    let	a15 = " \t \n" - 2      //  -2
    console.log(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)
    //คำตอบ// 10 -1 1 2 6 9px $45 2 NaN Infinity   -9  5 -14 1 NaN -2

    ```
### 5. การเปรียบเทียบ
> 5.7. การเปรียบเทียบ - แบบฝึกหัด สไลด์ 114
1. จงหาค่าของการเปรียบเทียบต่อไปนี้
- 5>4 true
- "apple">"pineapple"   false
- "2">"12"              true
- undefined == null     true
- undefined === null    false
- "bee"<"be"            false
- "bee">"Bee"           true
- "Bee"<"be"            true
    ```javascript
    b1 = 5 > 4;
    b2 = "apple" > "pineapple";b3 = "2" > "12";
    b3 = "2">"12";
    b4 = undefined == null;
    b5 = undefined === null;
    b6 = "bee" < "be";
    b7 = "bee" > "Bee";
    b8 = "Bee" < "be";
    console.log(b1,b2,b3,b4,b5,b6,b7,b8)
    //คำตอบ true false true true false false true true
    ```
### 6. การเขียนเงื่อนไข
> 6.5.  แบบฝึกหัด
1. Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม
    ```javascript
    if ("0") {
    //ไม่เจอเพราะไม่มี ; เสมิคอลอน
        alert('Hello Codecamp #5'):
    }
    //แบบนี้ข้อความจะขึ้น
    if ("0") {
        alert('Hello Codecamp #5');
    }
    ```
2. ใช้ if else ในการเขียนถามชื่อของคุณ
    - ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก”
    - ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”
    ```javascript
    let sign = prompt("1+1 = ?")
    if (sign.toLowerCase() == "2") {
    alert("ว้าวคุณตอบถูกต้อง เก่งมาก");
    message = "เก่งมาก"
    } else {
    message = "คุณไม่รู้จักชือฉัน"
    }
    ```
3.	ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
    - ถ้าคะแนน มากกว่าเท่ากับ 80	ได้ A
    - ถ้าคะแนน อยู่ระหว่าง 70 - 79 	ได้ B
    - ถ้าคะแนน อยู่ระหว่าง 60 - 69 	ได้ C
    - ถ้าคะแนน อยู่ระหว่าง 50 - 59 	ได้ D
    - ถ้าคะแนน น้อยกว่า 50			ได้ F
    ```javascript
    let grade = prompt('รับคะแนนมาคำนวณเกรด');
    if (grade >= 80) {
        alert('grade A');
    } else if (grade > 70) {
        alert('grade B');
    } else if (grade > 60) {
        alert('grade C');
    } else if (grade > 50) {
        alert('grade D');
    } else if (grade < 50) {
        alert('grade F');
    } else {
        alert('โปรดระบุคะแนน');
    }
    ```
4.	เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators
    ```javascript
    let age = prompt('How old are you?');
    let proce;
    if (age < 18) {
        price = 2000;
    }   else {
        price = 3500;
    }

    // ตอบ
    let age = prompt('อายุ?');
    let price;
    price = (age < 18) ? '2000' : '3500';
    alert(price)
    ```
### การบ้าน
> // ส่งใน Pull Request
- https://github.com/codecamp-official-thailand/CC5-Day9-Homework
