import CookiePermissionPlugin from 'src/script/plugin/cookie-permission/cookie-permission.plugin';
import CookieStorage from 'src/script/helper/storage/cookie-storage.helper';

export default class MyCookiePermission extends CookiePermissionPlugin {
    init() {
        CookieStorage.setItem('allowCookie', '');
        super.init();
    }

    _hideCookieBar() {
        if (confirm('Are you sure?')) {
            super._hideCookieBar();
        }
    }
}
