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
		document.getElementById('main_header').classList.add('part_slide'); 
	}

	_closeIconMenu() {
		document.getElementById('gn_menu_wrapper').classList.remove('gn-open-part');
		document.getElementById('main_header').classList.remove('part_slide'); 
	}

	_openMenu() {
		if( this.isMenuOpen ) return;
		document.getElementById('gn_icon_menu').classList.add('gn-selected'); 
		this.isMenuOpen = true;
		document.getElementById('gn_menu_wrapper').classList.add('gn-open-all');
		document.getElementById('main_header').classList.add('full_slide'); 
		this._closeIconMenu();
	}


	_closeMenu() {
		if( !this.isMenuOpen ) return;
		document.getElementById('gn_icon_menu').classList.remove('gn-selected'); 
		this.isMenuOpen = false;
		document.getElementById('gn_menu_wrapper').classList.remove('gn-open-all');
		document.getElementById('main_header').classList.remove('full_slide'); 
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
