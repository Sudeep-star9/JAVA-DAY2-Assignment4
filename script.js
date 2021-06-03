const Inventory_Data={
    mask:{
        Price:20,
        Quantity:999
    },
    Sanitizer:{
        Price:100,
        Quantity:500,
    },
    Paracetamol:{
        Price:50,
        Quantity:900
    }
}
//mask
 console.log(Inventory_Data);
const Mask_Quantity=10;
const Total_Mask_price= Inventory_Data.mask.Price*Mask_Quantity;
console.log('mask price'+ ' ' +Total_Mask_price);
const Remaining_Mask=Inventory_Data.mask.Quantity=Inventory_Data.mask.Quantity-Mask_Quantity;
console.log('Remaining mask quantity'+' '+Remaining_Mask)

//sanitizer
const Sanitizer_Quantity=65;
const Total_Sanitizer_price=Inventory_Data.Sanitizer.Price*Sanitizer_Quantity;
console.log('sanitizer price'+' '+Total_Sanitizer_price);
const Remaining_Sanitizer=Inventory_Data.Sanitizer.Quantity=Inventory_Data.Sanitizer.Quantity-Sanitizer_Quantity;
console.log('Remaining Sanitizer Quantity'+' ' +Remaining_Sanitizer)

//paracetamol
const Paracetamol_Quantity=20;
const Total_Paracetamol_price=Inventory_Data.Paracetamol.Price*Paracetamol_Quantity;
console.log('sanitizer price'+' '+Total_Paracetamol_price);
const Remaining_Paracetamol=Inventory_Data.Sanitizer.Quantity=Inventory_Data.Sanitizer.Quantity-Paracetamol_Quantity;
console.log('Remaining Paracetamol Quantity'+' ' +Remaining_Paracetamol)
