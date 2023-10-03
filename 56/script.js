"use strict";

let num = 12345;
let nums = String(num);

alert(Number(nums[0]) + Number(nums[1]) + Number(nums[2]) + Number(nums[3]) + Number(nums[4]));

alert(Number(nums[0]) * Number(nums[1]) * Number(nums[2]) * Number(nums[3]) * Number(nums[4]));

num = Number(nums[4] + nums[3] + nums[2] + nums[1] + nums[0]);
alert(num);