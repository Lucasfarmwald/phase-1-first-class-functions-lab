function returnFirstTwoDrivers([name1,name2,name3,name4]){
    return [name1,name2]
}
function returnLastTwoDrivers([name1,name2,name3,name4]){
       return [name3,name4]
}


 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

 function createFareMultiplier(int){
     return function (fare){
         return fare * int
     }
 }

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(arr,fun){
         return fun(arr)
 }