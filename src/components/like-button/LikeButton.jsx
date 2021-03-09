import  React  from 'react'

const colors = ['primary','success','danger','warning','dark','info']

class LikeButton extends  React.Component {
    state = {
        count1: 0,
        count2: 0 
      }

      handleClick1 = (amount) => {        
        const index = Math.floor(Math.random() * colors.length);
        const item = colors[index];
   
          this.setState((prev) => {              
              return {
                  count1: prev.count1 + amount,
                  count2: prev.count2,
                  item: item  
                            
              }
          })
      }
      handleClick2 = (amount) => {
        const index = Math.floor(Math.random() * colors.length);
        const item2 = colors[index];
        
        this.setState((prev) => {              
            return {
                count1: prev.count1,
                count2: prev.count2 + amount,
                item2: item2 
            }
        })
    }

    render() {

              return (
        <div>
            <button type="button" className={`btn btn-${this.state.item} btn-lg border-dark me-3`} onClick={() => this.handleClick1(1)}>{this.state.count1} Likes</button>
            <button type="button" className={`btn btn-${this.state.item2} btn-lg border-dark`}  onClick={() => this.handleClick2(1)}>{this.state.count2} Likes</button>
        </div>
        )
    }

}
export default LikeButton