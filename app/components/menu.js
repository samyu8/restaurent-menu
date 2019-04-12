import React from 'react';

const Menu = (props) => {

	if (!props.menu.short_name) {
		return null;
	}

	return (
		<div className="menu">
			<span>Items in Category: ({props.menu.short_name}) </span>
			<table>
				<tbody>
				<tr>
					<td>Name</td>
					<td>Description</td>
				</tr>
				{props.items.map(item => {
					return <tr key={item.id}>
						<td>{item.name}</td>
						<td>{item.description}</td>
					</tr>
				})}
				</tbody>
			</table>
		</div>
	)
}

export default Menu;
