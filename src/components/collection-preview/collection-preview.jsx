import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((item, index) => index < 4) // make sure that only 4 items are on display for the preview
				.map(({ id, ...OtherItemProps }) => (
					<CollectionItem key={id} {...OtherItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
