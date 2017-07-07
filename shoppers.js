// not finished. Dates in JS are a huge pain...
const makeNum = thing => thing.map(time => Number(time.split(':').join('')));
                                   
function busyHolidays(shoppers, orders, leadTime) {
    const formattedShoppers = shoppers.map(makeNum);
    
    for (let i = 0; i < orders.length; i++){
        const order = makeNum(orders[i]);
        const [orderStart, orderFinish] = order;
        const lead = leadTime[i];
        
        const canFill = formattedShoppers.some(shopper => {
            const [shopperStart, shopperFinish] = shopper;
            const early = orderStart + lead;
            if (early < shopperFinish && shopperStart + lead < orderFinish) {
                return true;
            }
            return false;
        })
        
        if (!canFill) { return false;}
    }
  
    return true;
}

const shoppers =[
 ["15:10","16:00"], 
 ["17:50","22:30"], 
 ["13:00","14:40"]
]

const orders = [["14:30","15:00"]]

const leadTime = [15];

const result = busyHolidays(shoppers, orders, leadTime);
console.log(result);