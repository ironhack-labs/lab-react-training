// // import React from 'react'
// import React, { createElement, useState } from 'react';
// import { Tooltip, } from 'antd';
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

// const Demo = () => {
//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);
//   const [action, setAction] = useState(null);

//   const like = () => {
//     setLikes(1);
//     setDislikes(0);
//     setAction('liked');
//   };

//   const dislike = () => {
//     setLikes(0);
//     setDislikes(1);
//     setAction('disliked');
//   };

//   const actions = [
//     <span key="comment-basic-like">
//       <Tooltip title="Like">
//         {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
//           onClick: like,
//         })}
//       </Tooltip>
//       <span className="comment-action">{likes}</span>
//     </span>,
//     <span key=' key="comment-basic-dislike"'>
//       <Tooltip title="Dislike">
//         {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined, {
//           onClick: dislike,
//         })}
//       </Tooltip>
//       <span className="comment-action">{dislikes}</span>
//     </span>,
//   ];
//  }

// // const Like = () => {

// // }

// export default Demo