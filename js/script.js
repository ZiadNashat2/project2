var MenuItems = document.getElementById('MenuItems');



                                // product /smallImg
var ProductImg = document.getElementById("ProductImg");
var smallImg  = document.getElementsByClassName('small-img');



                            // Account
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");







MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
        {
        MenuItems.style.maxHeight = "200px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
    
}




                            // product /smallImg

        smallImg[0].onclick = function()
        {
            ProductImg.src= smallImg[0].src
        }
        smallImg[1].onclick = function()
        {
            ProductImg.src= smallImg[1].src
        }
        smallImg[2].onclick = function()
        {
            ProductImg.src= smallImg[2].src
        }
        smallImg[3].onclick = function()
        {
            ProductImg.src= smallImg[3].src
        }











                                            // Account
        function reginster(){
            RegForm.style.transform = " translateX(0px)";
            LoginForm.style.transform = " translateX(0px)";
            Indicator.style.transform = " translateX(100px)";
        }

        function login(){
            RegForm.style.transform = " translateX(295px)";
            LoginForm.style.transform = " translateX(295px)";
            Indicator.style.transform = " translateX(0px)";
        }