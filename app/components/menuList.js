import React from 'react';

class MenuList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}

	}


	render () {

		return (
			<div className="menuList">
				{this.props.items.map(item => {
					return <li key={item.id} 
						onClick={() => this.props.onSelect(item)}>
						{item.name} - ({item.short_name})
					</li>
				})}
			</div>
		)
	}
}

export default MenuList;
