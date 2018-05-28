// 1. 常规导入导出
import {s1, s2} from "./a.js"
console.log(s1, s2);

import {s3} from "./b.js"
console.log(s3);


//2.export default 1,只能出现1次 2,导入时可以随意命名
import any from "./b.js"
import any2 from "./b.js"

console.log(any);
console.log(any2);

//3. 导入的有重名
console.log('-----------');
import * as obj1 from "./a.js"
import * as obj2 from "./b.js"

console.log(obj1.s7);
console.log(obj2.s7);
