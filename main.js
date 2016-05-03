/* jshint node:true*/
"use strict";
var assert = require('assert');

var mutliNum = (function() {
    var obj = {};
    for (var i = 0, len = 17; i < len; i++) {
        obj[i] = Math.pow(2,17 - i) % 11;
    }
    console.log(obj);
    return obj;
})();

var xCodeMap = {
    '0'  : '1',
    '1'  : '0',
    '2'  : 'X',
    '3'  : '9',
    '4'  : '8',
    '5'  : '7',
    '6'  : '6',
    '7'  : '5',
    '8'  : '4',
    '9'  : '3',
    '10' : '2',
};

var getXCode = function(szID) {
    var sum = 0;
    for (var i = 0, len = szID.length - 1; i < len; i++) {
        sum += szID[i] * mutliNum[i];
    }
    var xCode = sum % 11;
    xCode = xCodeMap[xCode];
    return (xCode === 10 ? 'X' : '' + xCode);
};

var vaildIDNum = function(szID) {
    assert(szID.length === 18);

    var addrCode = szID.slice(0,6);

    var birthDayCode = szID.slice(6,14);

    var seqCode = szID.slice(14,17);

    var iGender = seqCode % 2; //奇数 男 偶数女

    console.log(' %s   %s - %s - %s gender %s',szID,addrCode,birthDayCode,seqCode,iGender);

    var xCode = getXCode(szID);
    if (xCode === szID[17]) {
        console.log('vaild szID %s',szID);
    }else{
        console.log('xcode not match %s : %s',xCode,szID[17]);
    }
};

var szID = '';

vaildIDNum(szID);


