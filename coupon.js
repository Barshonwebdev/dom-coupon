document.getElementById("apply-button").addEventListener("click",function(){
    const couponField=document.getElementById("coupon-field");
    const couponString=couponField.value;
    if (couponString=="dis30"){
        const getOriginalPriceElement =
          document.getElementById("original-price");
        const getOriginalPriceString = getOriginalPriceElement.innerText;
        const originalPriceValue = parseFloat(getOriginalPriceString);
        const discountedPrice = originalPriceValue * (35 / 100);
        const discountedPriceFixed = discountedPrice.toFixed(2);
        const discountedPriceElement =
          document.getElementById("discounted-price");
        discountedPriceElement.innerText = discountedPriceFixed;
        couponField.value="";
    }
    else {
        alert("wrong coupon");
        couponField.value="";
    }
})