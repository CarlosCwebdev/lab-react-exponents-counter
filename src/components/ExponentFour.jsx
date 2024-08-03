const ExponentFour = ({ count }) => {
  const result = Math.pow(count, 4)
  return (
  <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>4</sup></p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{result}</span></p>
    </div>
  )
};

export default ExponentFour;