const calculateFromATH = async (): Promise<string | null> => {
    try {
        const res = await fetch("https://tstapi.cryptorank.io/v0/coins/bitcoin");
        const {data} = await res.json();
        
        const currentBTCPrice = data.price.USD;
        const athPrice = data.athPrice.USD;
    
        const diff = athPrice - currentBTCPrice;
        const fromATHPercentage = (diff / athPrice * 100).toFixed(2);
    
        const fromAthMessage = `Bitcoin is down ${fromATHPercentage}% from the all-time high`;
    
        return fromAthMessage;
    } catch (error) {
        console.error(error);
        
        return null;
    }
};

const calculateToATH = async (): Promise<string | null> => {
    try {
        const res = await fetch("https://tstapi.cryptorank.io/v0/coins/bitcoin");
        const {data} = await res.json();
    
        const currentBTCPrice = data.price.USD;
        const athPrice = data.athPrice.USD;
    
        const diff = athPrice - currentBTCPrice;
        const toAthPercentage = (diff / currentBTCPrice * 100).toFixed(2);
    
        const toAthMessage = `Bitcoin price has to rise by ${toAthPercentage}% in order to reach the all-time high`;
    
        return toAthMessage;
    } catch (error) {
        console.error(error);
        
        return null;
    }
}

export {calculateFromATH, calculateToATH};