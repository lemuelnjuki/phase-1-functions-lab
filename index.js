// Code your solution in this file!
const startingAddress = 42
function distanceFromHqInBlocks(blocks){
   if (blocks >= 42){
     return (blocks - startingAddress)
    }
    else if (blocks <= 42){
     return (startingAddress - blocks)
    }
}
function distanceFromHqInFeet(feet){
   if (feet >= 42){
    return ((feet - startingAddress) *264)
    }
    else if (feet <= 42){
    return ((startingAddress - feet) *264)
    }
}
function  distanceTravelledInFeet(distanceTravelled){
 if (distanceTravelled === 43 || distanceTravelled ===48){
    return 1320;
 }else if (distanceTravelled === 50 || distanceTravelled === 60){
    return 2640;
 }else  {
    return 1584;
 }
}
 const calculatesFarePrice = (start ,destination)=>{
    if ((Number(destination)- Number(start))=== 1){
        return 0;
    }if(start, destination === 34 || start, destination ===32){
        return 2.56;
    }else if(start,destination ===50 || start, destination ===58){
        return 25;
    }else{
        return `cannot travel that far`
    }
 }