// code your solution here
function superbowlWin(record){
    let result = record.find((item)=>item.result == 'W')
    if(result !== undefined)
        return result.year
    else 
        return undefined
}
