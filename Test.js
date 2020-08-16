const prompt = require('prompt-sync')();
const purchase_country = prompt('Please enter the country you are purchasing from:');
const passport_number = prompt('Please enter the passport number, if you do not want to enter passport number type NULL:');
const number_of_masks = prompt('Please enter the number of masks you want to purchase:');
const number_of_gloves = prompt('Please enter the number of gloves you want to purchase:');
var nog =  parseInt(number_of_gloves, 10);
var nom = parseInt(number_of_masks, 10);
console.log("THE:" +nom);
console.log("THE:" +nog);
var re = new RegExp('^A');
var re_2 = new RegExp('^B');
var remaining_mask_UK ;
var remaining_mask_Germany;
var remaining_gloves_UK ;
var remaining_gloves_Germany;
var transportation_cost_mask=0;
var transportation_cost_gloves =0;
var cost_mask = 0;
var cost_gloves = 0;
var totalcost;

if(purchase_country == "UK" && passport_number == "NULL" && number_of_masks<101 )
{ 
 remaining_mask_UK = (100-nom);
 remaining_mask_Germany = 100;
 transportation_cost_mask = transportation_cost_mask+0;
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask +(65*nom);
}


if(purchase_country == "UK" && passport_number == "NULL" && number_of_masks>100 && number_of_masks<201 )
{ 
 remaining_mask_UK = (100-nom);
 remaining_mask_Germany = (100+ remaining_mask_UK);
 remaining_mask_UK = 0;
 transportation_cost_mask = transportation_cost_mask+((Math.ceil((nom-100)/10))*400);
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + (65*(100)) + (100*(nom-100)) + transportation_cost_mask;
}


if(purchase_country == "UK" && passport_number == "NULL" && number_of_masks>200 )
{ 
 
 
 console.log("OUT_OF_STOCK:100:100:100:50")  ;

}


if(purchase_country == "UK" && passport_number.match(re_2) && number_of_masks<101 )
{ 
 remaining_mask_UK = (100-nom);
 remaining_mask_Germany = 100;
 transportation_cost_mask = transportation_cost_mask+0;
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + (nom*65) + transportation_cost_mask;
}

if(purchase_country == "UK" && passport_number.match(re_2) && number_of_masks>100 && number_of_masks<201 )
{ 
 remaining_mask_UK = (100-nom);
 remaining_mask_Germany = (100+ remaining_mask_UK);
 remaining_mask_UK = 0;
 transportation_cost_mask = transportation_cost_mask+((Math.ceil((nom-100)/10))*400);
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost_mask + (100*65) + ((nom-100)*100);
}

if(purchase_country == "UK" && passport_number.match(re_2) && number_of_masks>200 )
{ 
 
console.log("OUT_OF_STOCK:100:100:100:50")  ;
}

if(purchase_country == "UK" && passport_number.match(re) && number_of_masks<101 )
{ 
 remaining_mask_UK = (100-nom);
 remaining_mask_Germany = 100;
 transportation_cost_mask = transportation_cost_mask+0;
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost_mask +  (nom*65);
}

if(purchase_country == "UK" && passport_number.match(re) && number_of_masks>100 && number_of_masks<201 )
{ 
 remaining_mask_UK = (100-nom);
 remaining_mask_Germany = (100+ remaining_mask_UK);
 remaining_mask_UK = 0;
 transportation_cost_mask = transportation_cost_mask+((Math.ceil((nom-100)/10))*320);
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost_mask + (65*(100)) + (100*(nom-100));
}

if(purchase_country == "UK" && passport_number.match(re) && number_of_masks>200 )
{ 
 
console.log("OUT_OF_STOCK:100:100:100:50")  ;
}

if(purchase_country == "Germany" && passport_number.match(re) && number_of_masks<101 )
{ 
 remaining_mask_UK = 100;
 remaining_mask_Germany = (100-nom);
 transportation_cost_mask = transportation_cost_mask+0;
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);

 cost_mask = cost_mask + (100*nom) + transportation_cost_mask;
}

if(purchase_country == "Germany" && passport_number.match(re) && number_of_masks>100 && number_of_masks<201 )
{ 
 
 remaining_mask_Germany = 0;
 remaining_mask_UK = 100 + (100-nom)
 transportation_cost_mask = transportation_cost_mask+((Math.ceil((nom-100)/10))*400);
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost_mask +(100*100) +(65*(nom-100));
}

if(purchase_country == "Germany" && passport_number.match(re) && number_of_masks>200 )
{ 
 
console.log("OUT_OF_STOCK:100:100:100:50")  ;
}


if(purchase_country == "Germany" && passport_number.match(re_2) && number_of_masks<101) { 
if(nom%10 == 0)
{
 console.log(nom/10);
 remaining_mask_Germany = 100;
 remaining_mask_UK = 100-nom;
 transportation_cost_mask = transportation_cost_mask + ((Math.ceil((nom)/10))*320);
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost_mask + (65*nom);
}
else if(nom%10 != 0)
{
 remaining_mask_Germany = 100-(nom%10);
 remaining_mask_UK = 100-(((nom/10)*10)-(nom%10));
 transportation_cost = transportation_cost+320;
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost + (100*(100-remaining_mask_Germany)) + (65*(100-remaining_mask_UK));
}
}
if(purchase_country == "Germany" && passport_number.match(re_2) && number_of_masks>100 && number_of_masks<201) 
{

 remaining_mask_UK = 100-number_of_masks;
 remaining_mask_Germany = 100 + remaining_mask_UK;
 remaining_mask_UK = 0;
 transportation_cost= transportation_cost + ((Math.ceil((100-remaining_mask_UK)/10))*320);
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost + (65*(100-remaining_mask_UK)) + (100*(100- remaining_mask_Germany));

}

if(purchase_country == "Germany" && passport_number.match(re_2) && number_of_masks>200)
{
  console.log("OUT_OF_STOCK:100:100:100:50"); 
}


if(purchase_country == "Germany" && passport_number == "NULL" && number_of_masks<101 )
{
 remaining_mask_UK = 100;
 remaining_mask_Germany = (100-nom);
 transportation_cost = transportation_cost+0;
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost + (65*(100-remaining_mask_UK)) + (100*(100-remaining_mask_Germany));
}

if(purchase_country == "Germany" && passport_number == "NULL" && number_of_masks>100 && number_of_masks<201 )
{ 
 
 remaining_mask_Germany = 0;
 remaining_mask_UK = 100 + (100-nom)
 transportation_cost = transportation_cost+((Math.ceil((100-remaining_mask_UK)/10))*400);
 console.log("remaining_mask_UK :" +remaining_mask_UK);
 console.log("remaining_mask_Germany :" +remaining_mask_Germany);
 cost_mask = cost_mask + transportation_cost + (65*(100-remaining_mask_UK)) + (100*(100-remaining_mask_Germany))
}

if(purchase_country == "Germany" && passport_number == "NULL" && number_of_masks>200 )
{ 
 
 
 console.log("OUT_OF_STOCK:100:100:100:50")  ;

}


if(purchase_country == "UK" && passport_number == "NULL" && number_of_gloves<101 )
{
 remaining_gloves_UK = (100-nog);
 remaining_gloves_Germany = 50;
 transportation_cost_gloves = transportation_cost_gloves+0;
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK));


}
if(purchase_country == "UK" && passport_number == "NULL" && number_of_gloves>100 && number_of_gloves<151 )
{ 
 remaining_gloves_UK = (100-nog);
 remaining_gloves_Germany = (50+ remaining_gloves_UK);
 remaining_gloves_UK = 0;
 transportation_cost_gloves = transportation_cost+((Math.ceil((50-remaining_gloves_Germany)/10))*400);
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 cost_gloves = transportation_cost_gloves + (100*(remaining_gloves_UK)) + (150*(remaining_gloves_Germany));
 
}

if(purchase_country == "UK" && passport_number == "NULL" && number_of_gloves>150 )
{ 
 
 
 console.log("OUT_OF_STOCK:100:100:100:50")  ;

}

if(purchase_country == "UK" && passport_number.match(re_2) && number_of_gloves<101 )
{ 
 remaining_gloves_UK = (100-nog);
 remaining_gloves_Germany = 50;
 transportation_cost_gloves = transportation_cost_gloves+0;
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK));
}

if(purchase_country == "UK" && passport_number.match(re_2) && number_of_gloves>100 && number_of_gloves<151 )
{ 
 remaining_gloves_UK = (100-nog);
 remaining_gloves_Germany = (50+ remaining_gloves_UK);
 remaining_gloves_UK = 0;
 transportation_cost_gloves = transportation_cost_gloves +((Math.ceil((100-remaining_gloves_Germany)/10))*400);
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));
}


if(purchase_country == "UK" && passport_number.match(re_2) && number_of_gloves>150 )
{ 
 
console.log("OUT_OF_STOCK:100:100:100:50")  ;
}

if(purchase_country == "UK" && passport_number.match(re) && number_of_gloves<101 )
{ 
 remaining_gloves_UK = (100-nom);
 remaining_gloves_Germany = 50;
 transportation_cost_gloves = transportation_cost_gloves+0;
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) +(150*(50-(remaining_gloves_Germany)));
}

if(purchase_country == "UK" && passport_number.match(re) && number_of_gloves>100 && number_of_gloves<151 )
{ 
 remaining_gloves_UK = (100-nog);
 remaining_gloves_Germany = (50+ remaining_gloves_UK);
 remaining_gloves_UK = 0;
 transportation_cost_gloves = transportation_cost_gloves +((Math.ceil((50-remaining_gloves_Germany)/10))*320);
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));
}

if(purchase_country == "UK" && passport_number.match(re) && number_of_gloves>150 )
{ 
 
 console.log("OUT_OF_STOCK:100:100:100:50")  ;
}

if(purchase_country == "Germany" && passport_number.match(re) && number_of_gloves<101)
{
  if(nog%10==7 || nog%10==8 || nog%10==9 || nog%10==0)
  {
   remaining_gloves_Germany = 50 ;
   remaining_gloves_UK = 100 -(number_of_gloves);
   console.log("remaining_gloves_UK :" +remaining_gloves_UK);
   console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
   transportation_cost_gloves = transportation_cost_gloves +((Math.ceil((100-remaining_gloves_UK)/10))*400);
   cost_gloves = transportation_cost_gloves + (150*(50-remaining_gloves_Germany)) + (100*(100-remaining_gloves_UK));
  }
  else
  {
   remaining_gloves_Germany = 50 - (nog%10);
   remaining_gloves_UK = 100-(((nog/10)*10)-(nog%10));
   console.log("remaining_gloves_UK :" +remaining_gloves_UK);
   console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
   transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*400);
   cost_gloves = transportation_cost_gloves + (150*(50-remaining_gloves_Germany)) + (100*(100-remaining_gloves_UK));
  } 
  
  }




if(purchase_country == "Germany" && passport_number.match(re) && number_of_gloves>100 && number_of_gloves<151)
{

 remaining_gloves_UK = 100-(nog);
 remaining_gloves_Germany= 50-(remaining_gloves_UK)
 remaining_gloves_UK =0;
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*400);
 cost_gloves = transportation_cost_gloves + (100*(100-remainig_gloves_UK)) + (150*(50-remaining_gloves_Germany));


}

if(purchase_country == "Germany" && passport_number.match(re) && number_of_gloves>151 )
{

 console.log("OUT_OF_STOCK:100 100:100 50");
}

if(purchase_country == "Germany" && passport_number.match(re_2) && number_of_gloves<101 )
{
if(nog%10==7 || nog%10==8 || nog%10==9 || nog%10==0)
{
 remaining_gloves_Germany = 50 ;
 remaining_gloves_UK = 100 -(number_of_gloves);
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 transportation_cost_gloves = transportation_cost_gloves +((Math.ceil((100-remaining_gloves_UK)/10))*320);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));
}
else
{
 remaining_gloves_Germany = 50 - (nog%10);
 remaining_gloves_UK = 100-(((nog/10)*10)-(nog%10));
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*320);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));
} 
}
if(purchase_country == "Germany" && passport_number.match(re_2) && number_of_gloves>100 && number_of_gloves<151 )
{
  remaining_gloves_UK = 100-(nog);
  remaining_gloves_Germany= 50-(remaining_gloves_UK)
  remaining_gloves_UK =0;
  console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
  transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*320);
  cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));
}
if(purchase_country == "Germany" && passport_number.match(re_2) && number_of_gloves>151 )
{

console.log("OUT_OF_STOCK:100 100:100 50");
}

if(purchase_country == "Germany" && passport_number.match(re_2) && number_of_gloves>100 && number_of_gloves<151)
{

 remaining_gloves_UK = 100 -nog;
 remaining_gloves_Germany = 50+(remaining_gloves_UK);
 remaining_gloves_UK = 0;
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*320);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));

}

if(purchase_country == "Germany" && passport_number=="NULL" && number_of_gloves<51)
{
 remaining_gloves_Germany = 50-nog;
 remaining_gloves_UK = 100;
 transportation_cost = transportation_cost_gloves+ ((Math.ceil((100-remaining_gloves_UK)/10))*400);
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));


}

if(purchase_country == "Germany" && passport_number=="NULL" && number_of_gloves>50 && number_of_gloves<150)
{

 remaining_gloves_Germany = 50-nog;
 remaining_gloves_UK = 100+(remaining_gloves_Germany);
 remaining_gloves_Germany =0;
 console.log("remaining_gloves_UK :" +remaining_gloves_UK);
 console.log("remaining_gloves_Germany :" +remaining_gloves_Germany);
 transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*400);
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));

}

if(purchase_country == "Germany" && passport_number=="NULL" && number_of_gloves>151 )
{

 console.log("OUT_OF_STOCK:100 100:100 50");
}

 
totalcost = cost_gloves +cost_mask;
console.log("totalcost:" +totalcost);


