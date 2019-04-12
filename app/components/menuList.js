import React from 'react';

const MenuList = (props) => {	
	return (
		<div className="menuList">
			{props.items.map(item => {
				return <li key={item.id} 
					onClick={() => props.onSelect(item)}>
					{item.name} - ({item.short_name})
				</li>
			})}
		</div>
	)
	
}

export default MenuList;
