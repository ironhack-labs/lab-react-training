import IdCard from './IdCard';
import { IdInfo } from '../../data/Data';

const ListIdCard = () => {
  return (
    <div >
      {IdInfo.map((fields) => {
        return <IdCard key={fields.id} {...fields} />;
      })}
    </div>
  );
};

export default ListIdCard;
