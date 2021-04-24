import React from 'react'
import {TextAndLine} from './TextAndLine'

export const TidBits = () => {
	return (
		<TextAndLine 
			text={
				<>
					<span style={{fontWeight: 900}}>Tid Bits: </span>
					<span>Eating Celery uses more calories than the celery provides</span>
				</>
			} 
		/>
	)
}