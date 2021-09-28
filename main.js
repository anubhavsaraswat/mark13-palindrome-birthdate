function reverseStr(str){
 var splitedStr=str.split("");
 var reversedSplitedstr=splitedStr.reverse();
 var joinReversedstr=reversedSplitedstr.join("");

 return joinReversedstr;

}

function isPalindrome(str){
    var reversedStr=reverseStr(str);

    if(reversedStr===str){
        return true
    }   return false;


}

function convertDateToStr(date){
var dateStr={date:"",month:"",year:""}

if(date.day<10){
    dateStr.day="0"+date.day
} else {
    dateStr.day=date.day.toString();
}
if(date.month<10){
    dateStr.month="0"+date.month
} else {
    dateStr.month=date.month.toString();
}

dateStr.year=date.year.toString();

return dateStr;

}


function allDateFormats(date){
    var dateStr=convertDateToStr(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yyddmm = dateStr.year.slice(-2) + dateStr.day + dateStr.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

function checkPalindrome(date){
    var checkingPalindrome=allDateFormats(date);

    var flag=false;

    for (var i = 0; i < checkingPalindrome.length; i++){
        if(isPalindrome(checkingPalindrome[i])){
            flag=true;
            break;
        }

    }
    return flag;
}

var date={
    day:2,
    month:9,
    year:2020
}

console.log(checkPalindrome(date));