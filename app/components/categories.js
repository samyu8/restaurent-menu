import React from 'react';
import MenuList from './menulist';
import Menu from './menu';
import './categories.css';

class Categories extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuList: [],
			selectedMenu:{},
			selectedItems:[]
		}

		this.getMenuList = this.getMenuList.bind(this);
		this.itemSelected = this.itemSelected.bind(this);
	}

	getMenuList() {
		fetch('https://stream-restaurant-menu-svc.herokuapp.com/category')
			.then(res => res.json())
			.then(res => {
				this.setState({menuList: res})
			});
	}

	itemSelected(item) {
		fetch(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${item.short_name}`)
			.then(res => res.json())
			.then(res => {
				this.setState({selectedMenu: item, selectedItems: res});
			});
	}

	render () {

		return (
			<div className="categories">
				<MenuList items={this.state.menuList} onSelect={this.itemSelected}></MenuList>
				<Menu menu={this.state.selectedMenu} items={this.state.selectedItems}></Menu>
			</div>
		)
	}

	componentDidMount() {
		this.getMenuList();
	}
}

export default Categories;
