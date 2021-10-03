class GreeterScreen {
	constructor() {
		this._screenGreeter = document.querySelector('#screen-greeter');
		this._passwordInput = document.querySelector('#input-password');
		this._buttonScreenGreeter = document.querySelector('#button-greeter-screen');
		this._screenGreeterVisible = true;
		this._screenGreeterClickEvent();
		this._buttonGreeterClickEvent();
	}

	_screenGreeterClickEvent(){
		this._screenGreeter.addEventListener(
			'click',
			() => {
				this._hideGreeter();
			}
		)
	}

	getGreeterVisibility() {
		return this._screenGreeterVisible;
	}

	_buttonGreeterClickEvent() {
		this._buttonScreenGreeter.addEventListener(
			'click',
			() => {
				this._showGreeter();
			}
		);
	}

	_showGreeter() {
		userProfile.rotateProfilePicture();
		this._screenGreeter.classList.remove('screen-greeter-hide');
		this._passwordInput.blur();
		this._screenGreeterVisible = true;
	}

	_hideGreeter() {
		userProfile.rotateProfilePicture();
		this._screenGreeter.classList.add('screen-greeter-hide');
		this._passwordInput.focus();
		this._screenGreeterVisible = false;
	}

	toggleGreeter() {
		if (!this._screenGreeterVisible) {
			this._showGreeter();
		} else {
			this._hideGreeter();
		}
	}
}
