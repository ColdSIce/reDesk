import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	isMenuOpen:boolean = false;

	_openIconMenu() {
		document.getElementById('gn_menu_wrapper').classList.add('gn-open-part'); 
	}

	_closeIconMenu() {
		document.getElementById('gn_menu_wrapper').classList.remove('gn-open-part');
	}

	_openMenu() {
		if( this.isMenuOpen ) return;
		document.getElementById('gn_icon_menu').classList.add('gn-selected'); 
		this.isMenuOpen = true;
		document.getElementById('gn_menu_wrapper').classList.add('gn-open-all');
		this._closeIconMenu();
	}


	_closeMenu() {
		if( !this.isMenuOpen ) return;
		document.getElementById('gn_icon_menu').classList.remove('gn-selected'); 
		this.isMenuOpen = false;
		document.getElementById('gn_menu_wrapper').classList.remove('gn-open-all');
		this._closeIconMenu();
	}
	

	bodyClickFn() {
		this._closeMenu();
	}


	_toggleMenu(){
		if(this.isMenuOpen){
			this._closeMenu();
		}else{
			this._openMenu();
		}
	}

}
