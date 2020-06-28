import Component from '../lib/component.js';
import store from '../store/index.js';

export default class AuthTemplate extends Component {
	constructor() {
		super({
			store,
			element: document.getElementsByTagName('BODY')[0],
		});
	}

	render() {
		this.element.innerHTML = `
            <div className='auth-template />
        `;
	}
}
