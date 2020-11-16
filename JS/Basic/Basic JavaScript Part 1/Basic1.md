# Basic part1

**Table of Contents**


> ### Lab 1 ตัวแปรและประเภทของข้อมูล > slide 43

- ให้ประกาศตัวแปรชื่อ human และ name
- ใส่ชื่อตัวเองลงในตัวแปร name
- นำค่าที่อยู่ในตัวแปร name ไปใส่ให้ human
- เมื่อ console.log(human) ออกมาต้องเป็นชื่อตัวเอง



```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```
