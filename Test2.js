const prompt = require('prompt-sync')();
const purchase_country = prompt('Please enter the country you are purchasing from:');
const passport_number = prompt('Please enter the passport number, if you do not want to enter passport number type NULL:');
const number_of_masks = prompt('Please enter the number of masks you want to purchase:');
const number_of_gloves = prompt('Please enter the number of gloves you want to purchase:');
var nog =  parseInt(number_of_gloves, 10);
var nom = parseInt(number_of_masks, 10);
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
var totalcost=0;
//condition to check for out of stock bounds
if(nom>200 || nog>150){
    console.log("OUT_OF_STOCK:100:100:100:50")  ;
}
//code for purchase in UK within the limit of stock available
if(purchase_country == "UK"  && number_of_masks<201 && number_of_gloves<151)
{ 
  remaining_mask_UK = (100-nom);
//code using ternary operator for doing calculations related to mask sales in UK inventory.
  (remaining_mask_UK > 0) ? (remaining_mask_Germany = 100,remaining_mask_UK = (100-nom),transportation_cost_mask= transportation_cost_mask+0) : (remaining_mask_Germany = (100+ remaining_mask_UK),remaining_mask_UK = 0, ((passport_number == "NULL" || passport_number.match(re_2)) ? (transportation_cost_mask = transportation_cost_mask+((Math.ceil((nom-100)/10))*400)) : (transportation_cost_mask = transportation_cost_mask+((Math.ceil((nom-100)/10))*320)))); 
  cost_mask = cost_mask + (65*(100-remaining_mask_UK))+ (100*(100-remaining_mask_Germany)) + transportation_cost_mask;
  remaining_gloves_UK = (100-nog);
//code using ternary operator for doing calculations related to gloves sales in UK invenntory.
  (remaining_gloves_UK > 0) ? (remaining_gloves_Germany = 50, remaining_gloves_UK = (100-nog)) : (remaining_gloves_Germany = (50+ remaining_gloves_UK), remaining_gloves_UK = 0, ((passport_number == "NULL" || passport_number.match(re_2)) ? (transportation_cost_gloves = transportation_cost_gloves+((Math.ceil((nog-100)/10))*400)) : (transportation_cost_gloves = transportation_cost_gloves+((Math.ceil((nog-100)/10))*320))
  ));
  cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany)) +cost_gloves;
  //code to calculate total cost and log it to the console.
  totalcost = cost_mask + cost_gloves;
  console.log(+totalcost + ":" +remaining_mask_UK + ":" +remaining_mask_Germany + ":" +remaining_gloves_UK + ":" +remaining_gloves_Germany);
}
//code for purchase in Germany within the limit of stock available
if(purchase_country == "Germany"  && number_of_masks<201 && number_of_gloves<151)
{
  //code using ternary operator for doing calculations related to mask sales in Germany inventory.
 (passport_number == "NULL" || passport_number.match(re)) ? ((remaining_mask_Germany = (100-nom)),((remaining_mask_Germany>0) ? (remaining_mask_UK = 100 , remaining_mask_Germany = (100-nom), transportation_cost_mask = transportation_cost_mask+0) :( remaining_mask_Germany = (100-nom) ,remaining_mask_UK = (100+ remaining_mask_Germany),remaining_mask_Germany = 0,  transportation_cost_mask = transportation_cost_mask+((Math.ceil((nog-100)/10))*400)))): (nom%10==0 ? (remaining_mask_Germany = 100, remaining_mask_UK = 100-nom,transportation_cost_mask = transportation_cost_mask + ((Math.ceil((nom)/10))*320)):(remaining_mask_Germany = 100-(nom%10),remaining_mask_UK = 100-(((nom/10)*10)-(nom%10)),transportation_cost_mask = transportation_cost_mask+((Math.floor((nom/10)*320)))));
  cost_mask =  transportation_cost_mask + (100*(100-remaining_mask_Germany)) + (65*(100-remaining_mask_UK));
  if(passport_number.match(re_2) && number_of_gloves<101)
  {
    //code using ternary operator for doing calculations related to gloves sales in Germany inventory.
    (nog%10==7 || nog%10==8 || nog%10==9 || nog%10==0) ? (remaining_gloves_Germany = 50,remaining_gloves_UK = (100-number_of_gloves),transportation_cost_gloves = transportation_cost_gloves +((Math.ceil((100-remaining_gloves_UK)/10))*320)) :(remaining_gloves_Germany = 50 - (nog%10),remaining_gloves_UK = 100-(((nog/10)*10)-(nog%10)),transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*320))
  }
  if(passport_number.match(re_2) && number_of_gloves>101 && number_of_gloves<151)
  {
          remaining_gloves_Germany = 50 - (nog%10);
          remaining_gloves_UK = 100-(((nog/10)*10)-(nog%10));
          transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*320);
  }
  if( (passport_number.match(re) || passport_number == "NULL") )
  {  //code using ternary operator for doing calculations related to gloves sales in Germany inventory.
    (nog<101) ? (( nog%10==9 || nog%10==0)? (remaining_gloves_Germany = 50 ,remaining_gloves_UK = 100 -(number_of_gloves), transportation_cost_gloves = transportation_cost_gloves +((Math.ceil((100-remaining_gloves_UK)/10))*400)) :(remaining_gloves_Germany = 50 - (nog%10),  remaining_gloves_UK = 100-(((nog/10)*10)-(nog%10)),transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*400))) :( remaining_gloves_UK = 100-(nog),remaining_gloves_Germany= 50-(remaining_gloves_UK),remaining_gloves_UK =0,transportation_cost_gloves = transportation_cost_gloves + ((Math.ceil((100-remaining_gloves_UK)/10))*400))
  }
 cost_gloves = transportation_cost_gloves + (100*(100-remaining_gloves_UK)) + (150*(50-remaining_gloves_Germany));
 //code to calculate total cost and log it to the console.
  total_cost = cost_gloves + cost_mask;
  console.log(+total_cost + ":" +remaining_mask_UK + ":" +remaining_mask_Germany + ":" + remaining_gloves_UK+ ":" +remaining_gloves_Germany); 
}
         
         
         
         










    
        
 
      
 
 


 
 
 
 
 