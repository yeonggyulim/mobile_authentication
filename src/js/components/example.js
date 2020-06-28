import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Example extends Component {
	constructor() {
		super({
			store,
			element: document.createElement('div'),
		});
	}

	/**
	 * React to state changes and render the component's HTML
	 *
	 * @returns {void}
	 */
	render() {
		// let suffix = store.state.items.length !== 1 ? 's' : '';
		// let emoji = store.state.items.length > 0 ? '🙌' : '😢';

		this.element.innerHTML = `
            Exmale Component
        `;
	}
}
