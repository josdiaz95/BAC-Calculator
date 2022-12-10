
$(function(){
    $("form").on("submit",calculateBAC);
})

function calculateBAC(event){
    event.preventDefault();

    let beer = Number($("input#beers").val());
    beer *=0.54;
    let wine = Number($("input#wine").val());
    wine *= 0.6;
    let liquor = Number($("input#liquor").val());
    liquor *=.6;

    let weight = Number($("input#weight").val());
    let hours = Number($("input#hours").val());


    let totalOunces = beer + wine + liquor;

    let absorption = 7.5 * totalOunces;

    let BAC = absorption/weight;

    let  result = BAC - (hours * 0.015);

    $("td#calculations").text(result.toFixed(3));
    $("input[type=range]").val(result);


}