export const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="id-card-info">
        <p style={{ fontWeight: 'bold' }}>
          {' '}
          Name:{' '}
          <span style={{ fontWeight: 'normal' }}>
            {firstName} {lastName}
          </span>
        </p>
        <p style={{ fontWeight: 'bold' }}>
          Gender: <span style={{ fontWeight: 'normal' }}>{gender}</span>
        </p>
        <p style={{ fontWeight: 'bold' }}>
          Height: <span style={{ fontWeight: 'normal' }}>{height}</span>
        </p>
        <p style={{ fontWeight: 'bold' }}>
          Birthday:{' '}
          <span style={{ fontWeight: 'normal' }}>
            {birth.toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};
