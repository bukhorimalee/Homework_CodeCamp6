# Advanced JavaScript - Part 1
### 1. การเขียน Code
>   1.10.  แบบฝึกหัด Slide 24   
```javascript
    function pow(x,n)
    {
    let result=1;
    for(let i=0;i<n;i++) {result*=x;}
    return result;
    }
    let x=prompt("x?",''), n=prompt("n?",'')
    if (n<=0)
    {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
    }
    else
    {
    alert(pow(x,n))
    }
```
### 4. Object
>   4.18.  แบบฝึกหัด Slide 78

1.  ให้ทำตามคำสั่งต่อไปนี้<br>
    a.  สร้าง Object เปล่าขึ้นมา<br>
    b.  เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”<br>
    c.  เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”<br>
    d.  เปลี่ยน properties name เป็น “Boy”<br>
    e.  ลบ properties name ออกจาก Object<br>
2.	ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false
3.	การเขียนข้างล่างต่อไปนี้ Error  ไหม
```javascript
    const user = {
    name: "John"
    };
    // does it work?
    user.name = "Pete";
```
4.	จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
```javascript
    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
```
5.	จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
```javascript
    // before the call
    let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };


    multiplyNumeric(menu, 2);

    // after the call
    menu = {
    width: 400,
    height: 600,
    title: "My menu"
    };
```
### 6. Methods ของ Object
1.  การทำงานของ code ดังกล่าวจะได้อะไรออกมา Slide 100
```javascript
    let user = {
    name: "John",
    go: function() { alert(this.name) }
    }

    (user.go)()
```
2.	การทำงานของ code ดังกล่าวจะได้อะไรออกมา
```javascript
    function makeUser() {
    return {
        name: "John",
        ref: this
    };
    };

    let user = makeUser();

    alert( user.ref.name ); // What's the result?
```
3.	สร้าง object calculator จาก 3 methods นี้:
read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties. <br>
sum() คืนค่าผลบวกของ 2 ค่านั้น.<br>
mul() คืนค่าผลคูณของ 2 ค่านั้น.<br>
```javascript
    let calculator = {
    // ... your code ...
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
```
4.	ให้ Object ชื่อ ladder มี
	method ขึ้น และ ลง
```javascript
    let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // shows the current step
        alert( this.step );
    }
    };
```
4.  (ต่อ).	Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
```javascript
    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
```
4.  (ต่อ).	ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
```javascript
    ladder.up().up().down().showStep(); // 1
```
### 7. Constructor กับ New
1.  สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
<br>a.  read(): รับค่าจาก propmt สองตัว
<br>b.  sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
<br>c.  mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว
2.	สร้าง constructor function Accumulator(startingValue)
<br>a.  โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
<br>b.  ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue

### 8. Methods ของ Primitive
>   8.1.  Methods ของ primitive
-   Object จะหนักกว่า primitive
-   แต่ primitive ไม่สามารถใช้ Methods ได้
-   ตัวอย่าง
```javascript
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
```