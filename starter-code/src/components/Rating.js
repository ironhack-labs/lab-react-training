import React from 'react';
import classNames from 'classnames';

const Rating = ({ rate }) => {
	return (
		<div className='startWrapper'>
			{rate === 0 && (
				<div className='startCpntainer'>
					<div className='star' />
					<div className='star' />
					<div className='star' />
					<div className='star' />
					<div className='star' />
				</div>
			)}
			{rate === 1 && (
				<div className='startCpntainer'>
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className='star' />
					<div className='star' />
					<div className='star' />
					<div className='star' />
				</div>
			)}
			{rate === 2 && (
				<div className='startCpntainer'>
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className='star' />
					<div className='star' />
					<div className='star' />
				</div>
			)}
			{rate === 3 && (
				<div className='startCpntainer'>
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className='star' />
					<div className='star' />
				</div>
			)}
			{rate === 4 && (
				<div className='startCpntainer'>
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className='star' />
				</div>
			)}
			{rate === 5 && (
				<div className='startCpntainer'>
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
					<div className={classNames('star', rate ? 'rate' : 0)} />
				</div>
			)}
		</div>
	);
};
export default Rating;
