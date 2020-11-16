# Basic part2

**Table of Contents**
### Lab 1 
### Lab 2

### 1. ตัวดำเนินการแบบตรรกะ
> 1.9.  แบบฝึกหัด
1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร Slide 25

    - alert( null || 2 || undefined );
    - alert( alert(1) || 2 || alert(3) );
    - alert( 1 && null && 2 );
    - alert( alert(1) && alert(2) );
    - alert( null || 2 && 3 || 4 );
        ```javascript
        let ;
        let ;
        ```
2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60
3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
4. คำสั่ง alert ไหนที่จะถูกรันบ้าง
     ```javascript
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 0) alert( 'third' );
    ```
5. ให้เขียนระบบ login
    - ให้ใช้ prompt ในการถามใครเป็นคน login
    - ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
        - วิธีเช็ค Password
        - ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”
        - ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
        - ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
    - ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
    - ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”
    link https://docs.google.com/presentation/d/162B1cUr5EoHxgxADXO3S6YKC4Hcxju8cMT0Crji1aSs/edit#slide=id.g7e4f968bee_0_267
### 2.5.  แบบฝึกหัด
1. เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร Slide 43
    ```javascript
    let i = 3;

    while (i) {
    alert( i-- );
    }
    ```
2.	code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
    ```javascript
    let i = 0;
    while (++i < 5) alert( i );
    ```
    ```javascript
    let i = 0;
    while (i++ < 5) alert( i );
    ```
3.	code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
    ```javascript
    for (let i = 0; i < 5; i++) alert( i );
    ```
    ```javascript
    for (let i = 0; i < 5; ++i) alert( i );
    ```
4.	ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
5.	เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
    ```javascript
    for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }
    ```
### 6.	ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
- ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
- และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น

    ```javascript
    ```
### 3. Swtich Cases
> 3.3.  แบบฝึดหัด slide 56
1. แปลง Code ดังกล่าวเป็นif-else statement
    ```javascript
    switch (browser) {
        case 'Edge':
            alert( "You've got the Edge!" );
            break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;

        default:
            alert( 'We hope that this page looks ok!' );
        }
    ```
2. แปลง Code ดังกล่าวเป็น Switch cases
    ```javascript
    let a = +prompt('a?', '');

    if (a == 0) {
    alert( 0 );
    }
    if (a == 1) {
    alert( 1 );
    }

    if (a == 2 || a == 3) {
    alert( '2,3' );
    }
    ```
### 4. ฟังก์ชัน
> แบบฝึกหัดพิเศษ Slide 78
1. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
    **      ***     ****
    n = 2   n = 3   n = 4
    ```
2. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    ****
            ***     ****
    **      ***     ****
    **      ***     ****
    n = 2   n = 3   n = 4
    ```
3. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    1234
            123     1234
    12      123     1234
    12      123     1234
    n = 2   n = 3   n = 4
    ```
4. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    1111
            111     2222
    11      222     3333
    22      333     4444
    n = 2   n = 3   n = 4
    ```
5. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    4444
            333     3333
    22      222     2222
    11      111     1111
    n = 2   n = 3   n = 4
    ```
6. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    1234
            123     5678
    12      456     9101112
    34      789     13141516
    n = 2   n = 3   n = 4
    ```
7. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    16151413
            987     1211109
    43      657     8765
    21      321     4321
    n = 2   n = 3   n = 4
    ```
8. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    0
            0       2
    0       2       4
    2       4       6
    n = 2   n = 3   n = 4
    ```
9. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    2
            2       4
    2       4       6
    4       6       8
    n = 2   n = 3   n = 4
    ```
10. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    1234
            122     2468
    12      246     36912
    24      369     481216
    n = 2   n = 3   n = 4
    ```
11. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    _***
            _**     *_***
    _*      *_*     **_*
    *_      **_     ***_
    n = 2   n = 3   n = 4
    ```
13. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    *___
            *__     **__
    *_      **_     ***_
    **      ***     ****
    n = 2   n = 3   n = 4
    ```
14. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    ****
            ***     ***_
    **      **_     **_
    *_      *__     *__ 
    n = 2   n = 3   n = 4
    ```

15. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    *___
            *__     **__
            **_     ***_
    *_      ***     ****
    **      **_     ***_
    *_      *__     **__
                    *___
    n = 2   n = 3   n = 4
    ```

17. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    ___*
            __*     __**
    _*      _**     _***
    **      ***     ****
    n = 2   n = 3   n = 4
    ```
18. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    ****
            ***     _***
    **      _**     __**
    _*      __*     ___*
    n = 2   n = 3   n = 4
    ```
19. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    ___*
            __*     __**
            _**     _***
    _*      ***     ****
    **      _**     _***
    _*      __*     __**
                    ___*
    n = 2   n = 3   n = 4
    ```
20. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    ---1
            --1     ---23
            -23     --456
    -1      456     78910
    23      -78     -111213
    -4      --9     --1415
                    ---16
    n = 2   n = 3   n = 4
    ```
21. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
            __*__   ___*___
    _*_     _***_   __***__
    ***     _***_   _*****_
            *****   *******
    n = 2   n = 3   n = 4
    ```
22. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    *******
            *****   _*****_
    ***     _***_   __***__
    _*_     __*__   ___*___
    n = 2   n = 3   n = 4
    ```
23. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                    ___*___
            __*__   __***__
            _***_   _*****_
    _*_     *****   *******
    ***     _***_   _*****_
    _*_     __*__   ___*___
    n = 2   n = 3   n = 4
    ```
24. จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้
    ```javascript
                        ---1---
            --1--       --234--
            -234-       -56789-
    -1-     56789       10111213141516
    234     -101112-    -1718192021-
    -5-     --13--      --222324--
                        ---25---
    n = 2   n = 3       n = 4
    ```
### 6. Arrow Function
> 6.2. แบบฝึกหัด Slide 120
-   แปลง function ข้างล่างให้อยู่ในรูป arrow function
    ```javascript
    function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
    }

    ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
    );
    ```