# Advanced JavaScript - Part 2
## หัวข้อ
ตัวเลข
ข้อความ
Array
Methods ของ Array
Iterable

### 1. ตัวเลข
    >   1.9.  แบบฝึกหัด Slide 28
    1. ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
    ```javascript
    alert( random(1, 5) ); // 1.2345623452
    alert( random(1, 5) ); // 3.7894332423
    alert( random(1, 5) ); // 4.3435234525
    ```

### 2. ข้อความ (String)
> 2.11.  แบบฝึกหัด

    1. เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่
    2.	เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false
    3.	เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”

    ```javascript
    truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

    truncate("Hi everyone!", 20) = "Hi everyone!"
    ```
    4.	เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
    ```javascript
    alert( extractCurrencyValue('$120', 30.5) === 3660 ); // true
    ```

### 3. Array
1. ผลลัพธ์ของความยาว array คืออะไร slide 89
```javascript
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // ?
```
2.	ให้ทำตามขั้นตอนต่อไปนี้
<br>a.  สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
<br>b.  เพิ่ม “Rock-n-Roll” ต่อท้าย
<br>c.  นำค่า Classics ไปทับค่าตรงกลางของ Array
<br>d.  นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
<br>e.  เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array

3.	เขียนฟังก์ชัน sumInput() ที่
ใช้ propmt รับ value มาเก็บใน array
หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
คำนวณผลรวมของตัวเลขทั้งหมดใน Array
```javascript
getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
```

### 4. Methods ของ Array Slide 123
> ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
```javascript
1.1   array1 = [1, 2, 30, 400]
      array2 [2, 4, 60, 800]

1.2   array1 = [1, 2, 3, 4]
      array2 ["1", "2", "3", "4"]

1.3   array1 = [1, "1", 2, {}] 
      array2 ["number", "string", "number", "object"]

1.4   array1 = ["apple", "banana", "orange"]
      array2 ["APPLE", "BANANA", "ORANGE"]
      1.5 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
    ]
    array2 ["apple", "banana", "watermelon"]

1.6 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
    ]
    array2 [14, 18, 32]

1.7 array1 = [
      { name: "apple", surname: "London" },
      { name: "banana", surname: "Bangkok" },
      { name: "watermelon", surname: "Singapore" },
    ]
    array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
    
1.8 array1 = [1,3,4,5,6,7,8]
    array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]

1.9 array1 = [1, -3, 2, 8, -4, 5]
    array2 [1, 3, 2, 8, 4, 5]

1.10 array1 = [100, 200.25, 300.84, 400.3]
     array2 ["100.00", "200.25", "300.84", "400.30"]

1.11 array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-01" },
       { name: "watermelon", birth: "1985-12-01" },
     ]
     array2 [
       { name: "apple", birth: "2000-01-01", age: 19 },
       { name: "banana", birth: "1990-10-01", age: 29 },
       { name: "watermelon", birth: "1985-12-01", age: 33 },
     ] 
1.12 array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
     ]
     array2 [
         "<tr>
           <td>apple</td> 
           <td>01 jan 2000</td>
          </tr>",
         "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
         "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
     ] 
```
> ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
```javascript
2.1  array1 = [1, 2, 30, 400] 
     array2 [30, 400] // filter เลขที่มากกว่า 10

2.2  array1 = [1, 2, 3, 4]
     array2 [1, 3] // filter เลขคี่

2.3  array1 = [1, "1", 2, {}] 
     array2 [1, 2] // filter Number

2.4  array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
     array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6
2.5 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ]
    array2 [
      { name: "apple", age: 14 },
      { name: "pineapple", age: 16 },
    ] // filter age < 18
2.6 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ]
    array2 [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ] // filter ไม่เอาคนที่อายุ 32
2.7  array1 = [1, -3, 2, 8, -4, 5]
     array2 [1, 2, 8, 5] // filter เลขบวก

2.8  array1 = [1,3,4,5,6,7,8]
     array2 [3, 6] // filter เลขหาร 3 ลงตัว

2.9  array1 = ["peach", 1, -3, "2", {}, []]
     array2 ["peach", "2"] // filter string

2.10 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
     array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว

2.11 array1 = [
       { name: "apple", birth: "2001-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
       { name: "peach", birth: "2002-10-13" },
     ]
     array2 [
       { name: "banana", birth: "1990-10-10" },
         { name: "peach", birth: "2002-10-13" },
     ] // filter คนเกิดเดือน 10

2.12 array1 = [
       { name: "apple", birth: "2001-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
       { name: "peach", birth: "2002-10-13" },
     ]
     array2 [
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
     ] // filter คนเกิดก่อนปี 2000
```

### 6. Map และ Set
> 6.10.  แบบฝึกหัด
- ให้ arr เป็น Array
สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr 

```javascript
function unique(arr) {
  /* your code */
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

alert( unique(values) ); // Hare, Krishna, :-O
```
- 2.	Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )

nap - pan
ear - are - era
cheaters - hectares - teachers
```javascript
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
```
- 3.	เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้
	เราจะทำยังไงให้ keys.push สามารถทำงาน
```javascript
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
```

### 7. Keys, Values และ Entries
1. กำหนดให้ salaries เป็น Object
ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0 
```javascript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
```
2. ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
```javascript
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2


```
