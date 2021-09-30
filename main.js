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

function checkLeapYear(year){
 if(year%400===0){
     return true;
 } 
 else if(year%100===0){
     return false;
 }
 else if(year%4===0){
     return true;
 }
 else {
     return false;
 }

}

function giveNextDate(date){
    var day =date.day+1;
    var month=date.month;
    var year=date.year;

    var numberofDaysInMonth =[31,28,31,30,31,30,31,31,30,31,30,31]

     // check for feb month
if(month === 2){ 
    // check for leap year
    if(isLeapYear(year)){ 
       if(day > 29){ 
         day = 1;
         month++;  // increment the month
       }
    }
    else {
       if(day > 28){
         day = 1;
         month++;  // increment the month
       }
    }
  }
  // check for other months
  else {
    //  check if the day exceeds the max days in month
    if(day > numberofDaysInMonth[month - 1]){ 
      day = 1; 
      month++;  // increment the month
    }
  }

  // increment the year if month is greater than 12
  if(month > 12){
    month = 1;
    year++; 
  }

  return {
    day: day,  
    month: month,
    year: year
  };
}
// var date={
//         day:2,
//         month:9,
//         year:2020
//     }

// console.log(giveNextDate(date))


var dateInput = document.querySelector('#user-input');
var checkBtn = document.querySelector('#button');
var result = document.querySelector('#result');

function clickHandler(){
  var bdayStr = dateInput.value; 
  if(bdayStr !== ''){
    var listOfDate = bdayStr.split('-'); 

    var date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0])
    };
    
    var isPalindrome = checkPalindrome(date);

    if(isPalindrome){
       result.innerText = 'Hurray! your birthday is a palindrome!';
    }
    else {
       result.innerText = "Oops ! your birthday is not a palindrome!"
    }
  }
}

checkBtn.addEventListener('click', clickHandler);
