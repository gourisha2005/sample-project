function checkfreezing(temp)
{
if(temp<=0){
    return"temperature is at or below freezing.";
}
else{
    return "temperature is above freezing.";

}
}
console.log(checkfreezing(-2));
