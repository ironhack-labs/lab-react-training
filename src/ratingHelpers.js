export const renderStars = (num) => {
    num = Math.round(num);
    let starArray = [];
    for (let i = 0; i < num; i++) {
        starArray.push('♥');
    }
    for (let i = starArray.length; i < 5; i++) {
        starArray.push('♡');
    }
    return starArray
}