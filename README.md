# glorious - a lightdm webkit2 theme

my fork of the glorious theme made by [manilarome](https://github.com/manilarome) primarily aimed toward desktop users & downgraded a bit.

<br/>

<!--## [Live Demo](https://manilarome.github.io/lightdm-webkit2-theme-glorious)

### Demo password: `toor`

<p align='center'><img alt='glorious' src='glorious.gif'/><br/><i>glorious slightly modified </i></p>
-->

## Dependencies

+ lightdm
+ lightdm-webkit2-greeter

<br/>

## Installation

1. `systemd` users have to run `systemctl enable lightdm.service`. Other init users do the equivalent to that.

2. Clone and copy (run as root):
	```sh
	git clone 'https://github.com/matthmr/lightdm-webkit2-theme-glorious.git'
	cp -r lightdm-webkit2-theme-glorious /usr/share/lightdm-webkit/themes/glorious
	```

3. Set lightdm greeter session to webkit2 by changing your `/etc/lightdm/lightdm.conf` file to:

	```sh
	greeter-session = lighdm-webkit2-greeter
	```
	and `/etc/lightdm/lightdm-webkit2-greeter.conf` to:
	```sh
	webkit-theme = glorious
	```
	or to whatever name you gave it when copying it to `/usr/share/lightdm-webkit/themes/`.

4. Set `debug_mode` still on lightdm-webkit's config file to `true`.<br/>You may encounter an error saying: "An error was detected in the current theme that could interfere with the system login process."<br/>
If you're using pure **X** (e.g. by running *dwm*), that **might** be fixed by deleting `~/.Xauthority` (or making a backup, rather) and setting your `~/.xinitrc` executable (`chmod +x ~/.xinitrc`) if your window manager runs on `startx`. You also could change your lightdm config to `user-session = xinitrc`.


## Uninstall

1. Remove the directory from your install point at `/usr/share/lightdm-webkit/themes/glorious` (make sure you have a fallback)

<br/>

## Features (kept from the original)

+ Multi-user support
+ Customization and Settings
+ Keyboard navigation
+ Remappable keybindings
+ Vanilla Javascript!

<br/>

## Keybinds

The default modifier is the <kbd>Meta</kbd> key. You can change it in the settings.

+ <kbd>Mod + s</kbd> opens the dashboard.
+ <kbd>Mod + e</kbd> opens the session selection.
+ <kbd>Mod + x</kbd> opens the power selection.
+ <kbd>Mod + y</kbd> opens the account selection.
+ <kbd>Escape</kbd> to close or go back.

<br/>

## Customization and Settings

+ Color customization supports `#RGB`, `#RRGGBB`, and `#RRGGBBAA`.
+ Blur strength settings only allows an integer with `px` suffix.
+ Animation speed supports `s` and `ms`.
+ Background image selection. Supports randomness.

<br/>

## Changing clock mode

There are two clock modes available - `24-hour` and `12-hour`. Switch between clock modes by just clicking on the clock. Simple.

<br/>

## Notes

+ Add more background images by putting your wallpapers/images in `/usr/share/backgrounds/`.
+ Non-image and directory inside `/usr/share/backgrounds/` will cause an error! You will likely encounter this if you installed a package (for example `archlinux-wallpaper` that includes `AUTHORS` file).
+ Set your profile image in system settings or by using `mugshot`.

<br/>

# Credits

<span>Background image by <a href="https://unsplash.com/@korpa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jr Korpa</a> on <a href="https://unsplash.com/s/photos/cherry-blossoms-purple?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
