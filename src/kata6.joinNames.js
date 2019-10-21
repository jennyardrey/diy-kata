const joinNames = namesObj => {
    //creates new array of names, then joins them into a string with ', ' between each one.
    const names = namesObj.map(e => e.name).join(', '); 
    //finds the index number of the last occurance of a comma
    const finalComma = names.lastIndexOf(","); 
     //splits string into two at the last comma, then joins the two back together with a '&' in between.
    const final = names.substr(0, finalComma) + ' &' + names.substr(finalComma + 1); 
   
    return final;
};

module.exports = joinNames;
