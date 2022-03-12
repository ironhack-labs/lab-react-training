export const Rating = ({ children }) => {
  const floatNumber = Math.round(children);
  if (floatNumber === 0) {
    return <div style={{ fontSize: '3rem' }}>☆☆☆☆☆</div>;
  }
  if (floatNumber === 1) {
    return <div style={{ fontSize: '3rem' }}>★☆☆☆☆</div>;
  }
  if (floatNumber === 2) {
    return <div style={{ fontSize: '3rem' }}>★★☆☆☆</div>;
  }
  if (floatNumber === 3) {
    return <div style={{ fontSize: '3rem' }}>★★★☆☆</div>;
  }
  if (floatNumber === 4) {
    return <div style={{ fontSize: '3rem' }}>★★★★☆</div>;
  }
  if (floatNumber === 5) {
    return <div style={{ fontSize: '3rem' }}>★★★★★</div>;
  }
};
