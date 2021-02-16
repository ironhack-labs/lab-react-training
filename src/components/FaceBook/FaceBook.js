import React,{Component} from "react";
import profiles from "../../data/berlin.json"

class FaceBook extends Component {
    state = {
        countrys : [],
        profiles : []
    }
    componentDidMount(){
        const countrysArr = [];
        const profileComponents = profiles.map((item,idx)=>
            <div key={idx} country={item.country} style={{display:"flex", alignItems:"center", border:"1px solid black", width:"600px",margin:"50px auto"}}>
                <div>
                    <img style={{width:"120px", height:"120px", marginRight:"20px"}} alt="" src={item.img} />
                </div>
                <div>
                    <p><strong>Frist Name:</strong>{item.firstName}</p>
                    <p><strong>Last Name:</strong>{item.lastName}</p>
                    <p><strong>Country:</strong>{item.country}</p>
                    <p><strong>Type:</strong>{item.isStudent==true ? "Student" : "Teacher"}</p>
                </div>
            </div>
            )
        const profileCountrysArr = profiles.forEach(profile => {
            countrysArr.push(profile.country)
        })
        const countrysArrNoDup = countrysArr.filter((item, idx) => countrysArr.indexOf(item) === idx)
        this.setState({countrys:countrysArrNoDup,profiles:profileComponents})

        // const countrysArrNoDup1 = profileArr.reduce((acc,next) => {
        //     if(!acc.includes(next.country)){
        //         acc.push(next.country)
        //     }
        //        return acc
        // })
        // console.log(countrysArrNoDup1);

    }

    handleClick = (e) => {
        const coloredProfiles = []
        let {name} = e.target;
        profiles.forEach((item,idx) => {
            if(name === item.country){
                coloredProfiles.push(
                <div key={idx} country={item.country} style={{display:"flex", alignItems:"center", border:"1px solid black", width:"600px",margin:"50px auto",background:"#A3D2E2"}}>
                    <div>
                        <img style={{width:"120px", height:"120px", marginRight:"20px"}} alt="" src={item.img} />
                    </div>
                    <div>
                        <p><strong>Frist Name:</strong>{item.firstName}</p>
                        <p><strong>Last Name:</strong>{item.lastName}</p>
                        <p><strong>Country:</strong>{item.country}</p>
                        <p><strong>Type:</strong>{item.isStudent===true ? "Student" : "Teacher"}</p>
                    </div>
                </div>
                )
            } else {
                coloredProfiles.push(
                <div key={idx} country={item.country} style={{display:"flex", alignItems:"center", border:"1px solid black", width:"600px",margin:"50px auto"}}>
                    <div>
                        <img style={{width:"120px", height:"120px", marginRight:"20px"}} alt="" src={item.img} />
                    </div>
                    <div>
                        <p><strong>Frist Name:</strong>{item.firstName}</p>
                        <p><strong>Last Name:</strong>{item.lastName}</p>
                        <p><strong>Country:</strong>{item.country}</p>
                        <p><strong>Type:</strong>{item.isStudent===true ? "Student" : "Teacher"}</p>
                    </div>
                </div>
                )
            }
        })
        this.setState({profiles:coloredProfiles})
    }
    
    render(){
        return (
        <div>
            <div style={{margin:"0 auto", display:"flex",justifyContent:"space-between"}}>
            {this.state.countrys.map((item,idx)=>
            <button onClick={this.handleClick} key={item} name={item}>{item}</button>
            )}
            </div>
            <div>
                {this.state.profiles}
            </div>
        </div>
        )
    }
}

export default FaceBook;