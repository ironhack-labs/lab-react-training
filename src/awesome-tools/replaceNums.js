const hideNumbers = (str) => str.replace(/[0-9](?=\d{4})/g, "*");

export default hideNumbers