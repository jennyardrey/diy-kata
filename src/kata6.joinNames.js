const joinNames = namesObj => {
    const names = namesObj.map(e => e.name).join(', ');
    const finalComma = names.lastIndexOf(",");
    const final = names.substr(0, finalComma) + ' &' + names.substr(finalComma + 1);
    return final;
};

module.exports = joinNames;
