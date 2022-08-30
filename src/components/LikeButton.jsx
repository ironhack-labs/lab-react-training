import { useState } from 'react'

export const LikeButton = () => {
 const colors = ['purple','blue','green','yellow','orange','red']

 const [likeAdd, setLikeAdd] = useState(0)
 const [likeAddRigth, setAddRigth] = useState(0)
 const [colorLeft] = useState(colors)
 const [colorRigth] = useState(colors)
 const [startingIndex, setStartingIndex] = useState(0)
 const [startingIndexRight, setStartingIndexRight] = useState(0)


 const handleClickAdd = () => {
  setLikeAdd(likeAdd+1)
  if(startingIndex === 5) {
   setStartingIndex(0)
  }else {
   setStartingIndex(startingIndex+1)
  }
 }

 const handleClickAddRigth = () => {
  setAddRigth(likeAddRigth+1)
  if(startingIndexRight === 5) {
   setStartingIndexRight(0)
  }else {
   setStartingIndexRight(startingIndexRight+1)
  }
 }

 return(
  <div>
   <button style={{backgroundColor: colorLeft[startingIndex]}} onClick={() => handleClickAdd()}>
    {likeAdd} Likes
   </button>
   <button   style={{backgroundColor: colorRigth[startingIndexRight]}}  onClick={() => handleClickAddRigth()}>
   {likeAddRigth} Likes
   </button>
  </div>
 )
}