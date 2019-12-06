import {MDCDrawer} from '@material/drawer/index'
import {MDCList} from "@material/list/index"
import {MDCTopAppBar} from "@material/top-app-bar/index"

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))
const lists = [].map.call(document.querySelectorAll('.mdc-list'), elem => new MDCList(elem))
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'))

topAppBar.setScrollTarget(document.getElementById('main-content'))
topAppBar.listen('MDCTopAppBar:nav', () => {
	drawer.open = !drawer.open;
})