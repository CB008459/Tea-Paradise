
// HamBurger Menu Function

const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('.mobile-menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('mobile-menu-active');
    })
}

navSlide();

function myFunction(x) {
    x.classList.toggle("change");
}

// Scripting for Button (Links) 

function visitPage1(){
    window.location='CSS2.html';
}

function CSS1(){
    window.location='CSS1.html'; 
}

function Dilmah(){
    window.location='https://www.dilmahtea.com/'; 
}

function Malwatte(){
    window.location='https://www.malwattevalley.com'; 
}

function George(){
    window.location='https://gsteas.lk/'; 
}

function Home(){
    window.location='#part-one'; 
}

function Types(){
    window.location='#types_intro';
}

function black(){
    window.location='#black_tea';
}

function white(){
    window.location='#white_tea';
}

function green(){
    window.location='#green_tea';
}

function herbal(){
    window.location='#herbal_tea';
}
function inlineD(){
    window.location='#dilmah_BG';
}

function inlineM(){
    window.location='#malwatte_BG';
}

function inlineG(){
    window.location='#george_BG';
}

// Scripting For Buy Now Page

let theForm = document.forms["teaform"];

let tea_prices = new Array();
tea_prices["Dilmah"]=1000;
tea_prices["Jones"]=1500;
tea_prices["Malwatte"]=1000;
tea_prices["George"]=2000;
tea_prices["Empires"]=1000;
tea_prices["Prestige"]=2000;

// Returning Price Value
function getTeaBrand() {

    let teaPrice = 0;
    let theForm = document.forms["teaform"];
    let selectTea = theForm.elements["selectedTea"];

    for(let i = 0; i < selectTea.length; i++)
    {
        if(selectTea[i].checked)
        {
            teaPrice = tea_prices[selectTea[i].value];
            break;
        }
    }
    return teaPrice;

}

//Array for Extras
let tea_extras= new Array();
tea_extras["None"]=0;
tea_extras["Mug"]=500;
tea_extras["Silver"]=1000;
tea_extras["Wooden"]=1500;

// Returning Extras Value
function getExtrasPrice() {

    let ExtrasPrice=0;
    let theForm = document.forms["teaform"];
    let selectedExtras = theForm.elements["Extras"];

    ExtrasPrice = tea_extras[selectedExtras.value];

    return ExtrasPrice;
}


let tea_sizes = new Array();
tea_sizes["Small"]=1000;
tea_sizes["Medium"]=2500;
tea_sizes["Large"]=5000;

function getTeaSize(){

    let teaSize = 0;
    let theForm = document.forms["teaform"];
    let selectedSize = theForm.elements["selectedSize"];
    
    for(let i = 0; i < selectedSize.length; i++)
    {
        if(selectedSize[i].checked)
        {
            teaSize = tea_sizes[selectedSize[i].value];
            break;
        }
    }
    return teaSize;
}

//Array for Packages
let tea_packages= new Array();
tea_packages["None"] = 0;
tea_packages["Tin"]=1000;
tea_packages["Paper"]=5000;
tea_packages["Bags"]=2500;


// Returning Packages Value
function getTeaPackages() {

    let teaPackages = 0;
    let theForm = document.forms["teaform"];
    let Package = theForm.elements["Package"];
    
    teaPackages = tea_packages[Package.value];

    return teaPackages;
}

// Scripting for Calculating Final Total Price


function getTotalPrice(){

    let Price = getTeaBrand();
    let teaExtraPrice = getTeaSize() + getTeaPackages() + getExtrasPrice();

    let teaTotalPrice = Price + teaExtraPrice;

    //displaying the result
    document.getElementById('teaTotalPrice').value ="LKR " + teaTotalPrice;

}




// ============================== Sripting for Appending Overall Order in the table =======================

let btnAddOrder = document.getElementById('addorder');
btnAddOrder.addEventListener('click', appendOrder);

let tea_names = new Array();
tea_names["Dilmah"]="Dilmah";
tea_names["Jones"]="Jones";
tea_names["Malwatte"]="Malwatte";
tea_names["George"]="George";
tea_names["Empires"]="Empires";
tea_names["Prestige"]="Prestige";


function getTeaName() {
    let teaName = "";
    let theForm = document.forms["teaform"];
    let selectTea = theForm.elements["selectedTea"];

    for(let i = 0; i < selectTea.length; i++)
    {
        if(selectTea[i].checked)
        {
            teaName = tea_names[selectTea[i].value];
            break;
        }else{
            teaName = "None"
        }
    }
    return teaName;
}

// Fucntion for Current Order
function cBrand(){
    let teaName = "";
    let theForm = document.forms["teaform"];
    let selectTea = theForm.elements["selectedTea"];

    for(let i = 0; i < selectTea.length; i++)
    {
        if(selectTea[i].checked)
        {
            teaName = tea_names[selectTea[i].value];
            break;
        }else{
            teaName = "None"
        }
    }

    document.getElementById('cBrand').value = teaName;
    return teaName;
}


let extras_name = new Array();
extras_name["None"]="None";
extras_name["Mug"]="Mug";
extras_name["Silver"]="Silver Pin";
extras_name["Wooden"]="Souvenir";

function getExtrasName() {

    let ExtrasName="";
    let theForm = document.forms["teaform"];
    let selectedExtras = theForm.elements["Extras"];

    ExtrasName = extras_name[selectedExtras.value];

    return ExtrasName;
}

function cExtras(){

    let ExtrasName="";
    let theForm = document.forms["teaform"];
    let selectedExtras = theForm.elements["Extras"];

    ExtrasName = extras_name[selectedExtras.value];

    document.getElementById('cExtras').value = ExtrasName;
}

let sizes_name = new Array();
sizes_name["Small"]="Small";
sizes_name["Medium"]="Medium";
sizes_name["Large"]="Large";

function getTeaSizeName() {

    let teaSizeName = "";
    let theForm = document.forms["teaform"];
    let selectedSize = theForm.elements["selectedSize"];
    
    for(let i = 0; i < selectedSize.length; i++)
    {
        if(selectedSize[i].checked)
        {
            teaSizeName = sizes_name[selectedSize[i].value];
            break;
        }else{
            teaSizeName = "None"
        }
    }
    return teaSizeName;
}

// Fucntion for Current Order
function cSize(){
    let teaSizeName = "";
    let theForm = document.forms["teaform"];
    let selectedSize = theForm.elements["selectedSize"];
    
    for(let i = 0; i < selectedSize.length; i++)
    {
        if(selectedSize[i].checked)
        {
            teaSizeName = sizes_name[selectedSize[i].value];
            break;
        }else{
            teaSizeName = "None"
        }
    }
    document.getElementById('cSize').value = teaSizeName;
}

let packages_name = new Array();
packages_name["None"] = "None";
packages_name["Tin"]="Tins";
packages_name["Paper"]="Paper";
packages_name["Bags"]="Bags";


function getPackageName(){

    let packageName="";
    let theForm = document.forms["teaform"];
    let selectedPackage = theForm.elements["Package"];

    packageName = packages_name[selectedPackage.value];

    return packageName;
}

// Fucntion for Current Order

function cPackage(){
    let packageName="";
    let theForm = document.forms["teaform"];
    let selectedPackage = theForm.elements["Package"];

    packageName = packages_name[selectedPackage.value];

    document.getElementById('cPackage').value = packageName;

}

function getTotalCost(){

    let Price = getTeaBrand();
    let teaExtraPrice = getTeaSize() + getTeaPackages() + getExtrasPrice();

    let teaTotalPrice = Price + teaExtraPrice;

    return teaTotalPrice;
}


// Appending Current Order to the Overall Order

function appendOrder(){

        let Product = cBrand();

        if(Product === "None"){
            window.alert("Select Items to Proceed")
        }else{
            let table = document.getElementById('tblOverallOrder');
                  
            let newRow = table.insertRow(table.rows.length/1);
            
            // add cells to the row
            let cel1 = newRow.insertCell(0);
            let cel2 = newRow.insertCell(1);
            let cel3 = newRow.insertCell(2);
            let cel4 = newRow.insertCell(3);
            let cel5 = newRow.insertCell(4);
            let cel6 = newRow.insertCell(5);
        
        
            // Displaying results in the table
            cel1.innerHTML = (table.rows.length - 1); 
            cel2.innerHTML = getTeaName(); // Brand
            cel3.innerHTML = getTeaSizeName(); // Size 
            cel4.innerHTML = getPackageName(); // Package 
            cel5.innerHTML = getExtrasName(); // Extras 
            cel6.innerHTML = getTotalCost()// Total Price
        
            let overallPrice = 0;
        
                    
            for(let i = 1; i < table.rows.length; i++)
            {
                overallPrice = overallPrice + parseInt(table.rows[i].cells[5].innerHTML);
            }
        
            document.getElementById('cBrand').value ="";
            document.getElementById('cSize').value ="";
            document.getElementById('cPackage').value ="";    
            document.getElementById('cExtras').value ="";    
            document.getElementById('teaTotalPrice').value ="LKR " + 0;    
            document.getElementById('overallPrice').value ="LKR " + overallPrice;
        }

}

// Scripting for Favorites 

let btnAddFav = document.getElementById("addFav");

btnAddFav.addEventListener('click', addFavOrder);

// Storing Favourites Values in Local Storage 
function addFavOrder() {

    let Product = cBrand();

    if(Product === "None"){
        window.alert("Select Items to Proceed")
    }else{
    let Favourites = [];
    if("Favourites" in localStorage) {
      TeaParadise = JSON.parse(localStorage.getItem('Favourites'));
    }
    
	let favBrand = getTeaName();
	let favSize = getTeaSizeName();
    let favPackage = getPackageName();
    let favExtra =  getExtrasName();
    let favPrice = getTotalCost();

	Favourites.push(favBrand, favSize, favPackage, favExtra, favPrice);
    localStorage.setItem('Favourites', JSON.stringify(Favourites));
    
    document.getElementById('fBrand').value = Favourites[0];
    document.getElementById('fSize').value = Favourites[1];
    document.getElementById('fPackage').value = Favourites[2];
    document.getElementById('fExtras').value = Favourites[3];
    document.getElementById('fTotal').value = Favourites[4];

    document.getElementById('cBrand').value ="";
    document.getElementById('cSize').value ="";
    document.getElementById('cPackage').value ="";    
    document.getElementById('cExtras').value ="";    
    document.getElementById('teaTotalPrice').value ="LKR " + 0; 
    }   
}

// Adding Favourites to Overall Order
let btnOrderFav = document.getElementById('orderFav');

btnOrderFav.addEventListener('click', orderFav);

function orderFav() {
    let Favourites = [];
    if("Favourites" in localStorage) {
        Favourites = JSON.parse(localStorage.getItem('Favourites'));
    }

    let table = document.getElementById("tblOverallOrder");
                  
    let newRow = table.insertRow(table.rows.length/1);
    
    // add cells to the row
    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    let cel5 = newRow.insertCell(4);
    let cel6 = newRow.insertCell(5);


    // Displaying results in the table
    cel1.innerHTML = (table.rows.length - 1);
    cel2.innerHTML = Favourites[0]; // Brand
    cel3.innerHTML = Favourites[1]; // Size
    cel4.innerHTML = Favourites[2]; // Package
    cel5.innerHTML = Favourites[3]; // Extras
    cel6.innerHTML = Favourites[4]; // Total Price

    let overallPrice = 0;
            
    for(let i = 1; i < table.rows.length; i++)
    {
        overallPrice = overallPrice + parseInt(table.rows[i].cells[5].innerHTML);
    }
    document.getElementById('overallPrice').value ="LKR " + overallPrice;
}

// Adds Favorites to the Display

let Favourites = [];
if("Favourites" in localStorage) {
    Favourites = JSON.parse(localStorage.getItem('Favourites'));
}

document.getElementById('fBrand').value = Favourites[0];
document.getElementById('fSize').value = Favourites[1];
document.getElementById('fPackage').value = Favourites[2];
document.getElementById('fExtras').value = Favourites[3];
document.getElementById('fTotal').value = Favourites[4];

// Checking Loyalty 

let btnLoyalty = document.getElementById('checkLoyalty');

btnLoyalty.addEventListener('click', checkLoyalty);


function checkLoyalty() {


    let table1 = document.getElementById("tblOverallOrder");
    // "-1" is to avoid the Header count of the table 
    let points = (table1.rows.length - 1);

    let final = 0;
    
   if (points > 4) {
       final = (points * 20);

       window.alert("You have Earned " + final +" Loyalty Points");
   } else{
       window.alert("You have not Earned Enough Loyalty Points");
   }
   let Loyalty = [];
   if("Loyalty" in localStorage) {
       Loyalty = JSON.parse(localStorage.getItem('Loyalty'));
   }
   
   Loyalty.push(final);
   localStorage.setItem('Loyalty', JSON.stringify(Loyalty));
}

// Place Order

let btnPlaceOrder = document.getElementById('placeOrder');

btnPlaceOrder.addEventListener('click', placeOrder);

function placeOrder(){

    let table2 = document.getElementById("tblOverallOrder");
    let orderNo = (table2.rows.length - 1);
    
    if(orderNo >= 1){
        window.alert("Thanks for Purchasing with Us");
        document.getElementById('overallPrice').value ="LKR " + 0;
        for(let i = 1; i < table2.rows.length; i++){
            table2.rows[i].innerHTML = "";
        }
    }else{
        window.alert("No Final Order to Proceed");
    }

}