import IdCardItem from './IdCardItem';



const userCard = [
    {
        lastName: 'Doe',
        firstName: 'John',
        gender: 'male',
        height: 178,
        birth:new Date("1992-07-14"),
        picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
        lastName: 'Dolores',
        firstName: 'Obrien',
        gender: 'female',
        height: 172,
        birth: new Date("1988-05-11"),
        picture: "https://randomuser.me/api/portraits/women/44.jpg", 
    }
]

const IdCard = () => {
    return (
       // <div className="card mb-3">
            //<div className="row g-0">
               // <div className="col-md-4">
                //</div>
                //<div className="col-md-8">
                    <div>
                        
                        <IdCardItem {...userCard[0]} />
                        <IdCardItem {...userCard[1]} />
                    </div>
                //</div>
           // </div>
        //</div>
       
    );
};

export default IdCard;