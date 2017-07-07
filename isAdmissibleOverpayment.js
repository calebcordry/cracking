function isAdmissibleOverpayment(prices, notes, x) {
    let difference = 0;
    
    for (i = 0; i < prices.length; i++) {
        const price = prices[i];
        const note = notes[i];
        const words = note.split(' ');
        
        if (words[0] === 'Same') { continue; }
            
        const first = words[0];
        const percent = Number(first.slice(0, first.length - 1)) / 100;
        let inStoreCost;
        
        if (words[1] === 'higher') {
            inStoreCost =  price / (1 + percent);
        }
        
        if (words[1] === 'lower') {
            inStoreCost =  price / (1 - percent);
        }
        
        difference += price - inStoreCost;
    }
    
    console.log(difference);
    return Math.round(difference * 1000000) <= x * 1000000;
}


const notes = ["0.001% higher than in-store", 
 "0.0% lower than in-store", 
 "0.0% higher than in-store", 
 "0.0% lower than in-store"]
const result = isAdmissibleOverpayment([40, 40, 40, 40], notes, 0);
console.log(result);