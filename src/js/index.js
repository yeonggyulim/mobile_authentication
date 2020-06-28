import store from './store/index.js';

// Load up components
// import AuthTemplate from './components/authTemplate';

// import Example from './components/example';
import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';

function app() {
	// const authFragment = document.createDocumentFragment();
	const $authTemplate = document.createElement('div');
	$authTemplate.className = 'auth__template';

	const $authBox = document.createElement('div');
	$authBox.className = 'auth__box';

	$authTemplate.appendChild($authBox);

	const $title = document.createElement('div');
	$title.innerText = '입력 정보';
	$title.className = 'auth__title';

	const $description = document.createElement('div');
	$description.innerText = '본인 명의의 휴대폰 정보를 입력하세요.';
	$description.className = 'auth__description';

	const $carrier = document.createElement('div');
	$carrier.className = 'auth__carrier form';

	const $carrierText = document.createElement('div');
	$carrierText.innerText = '통신사';
	$carrierText.className = 'auth__carrier__text form__text';
	$carrier.appendChild($carrierText);

	const $carrierSelect = document.createElement('select');
	$carrierSelect.className = 'auth__carrier__select form__select';
	$carrier.appendChild($carrierSelect);

	const $mobile = document.createElement('div');
	$mobile.className = 'auth__mobile form';

	const $mobileText = document.createElement('div');
	$mobileText.innerText = '휴대폰 번호';
	$mobileText.className = 'auth__mobile__text form__text';
	$mobile.appendChild($mobileText);

	const $mobileInput = document.createElement('input');
	$mobileInput.className = 'auth__mobile__input form__input';
	$mobile.appendChild($mobileInput);

	const $identification = document.createElement('div');
	$identification.className = 'auth__identification form';

	const $identificationText = document.createElement('div');
	$identificationText.innerText = '주민등록번호';
	$identificationText.className = 'auth__identification__text form__text';
	$identification.appendChild($identificationText);

	const $identificationInput = document.createElement('input');
	$identificationInput.className = 'auth__identification__input` form__input';
	$identification.appendChild($identificationInput);

	const $name = document.createElement('div');
	$name.className = 'auth__name form';

	const $nameText = document.createElement('div');
	$nameText.innerText = '이름';
	$nameText.className = 'auth__name__text form__text';
	$name.appendChild($nameText);

	const $nameInput = document.createElement('input');
	$nameInput.className = 'auth__name__input form__input';
    $name.appendChild($nameInput);
    
    const $inquiry = document.createElement('div');
    $inquiry.innerText = '모든 정보가 올바르게 입력되었음에도 인증번호 요청이 되지않는 경우 가입하신 통신사에 문의해주세요.'
    $inquiry.className = 'auth__inquiry';

	$authBox.appendChild($title);
	$authBox.appendChild($description);
	$authBox.appendChild($carrier);
	$authBox.appendChild($mobile);
	$authBox.appendChild($identification);
    $authBox.appendChild($name);
    $authBox.appendChild($inquiry);

	// const $jsItems = document.createElement('div');
	// $jsItems.className = 'js-items';
	// const $jsForm = document.createElement('form');
	// $jsForm.className = 'js-form';

	// const $newLabelForm = document.createElement('label');
	// $newLabelForm.className = 'new-item__label';

	// const $jsStatus = document.createElement('div');
	// $jsStatus.className = 'js-count';

	// $authBox.appendChild($jsItems);
	// $authBox.appendChild($jsForm);
	// $authBox.appendChild($jsStatus);

	// 	// const countInstance = new Count();

	// 	// const div = document.createElement('div');
	// 	// const btn = document.createElement('button');

	// 	// div.innerHTML = 'Hello Development';
	// 	// btn.innerHTML = 'Click me and check the console!';
	// 	// div.appendChild(btn);

	// 	// authFragment.appendChild($authTemplate);
	// 	// authFragment.appendChild($authBox);

	return $authTemplate;
}

document.body.appendChild(app());

// Load up some DOM elements
const formElement = document.querySelector('.js-form');
// const inputElement = document.querySelector('#new-item-field');

// Add a submit event listener to the form and prevent it from posting back
formElement.addEventListener('submit', (evt) => {
	evt.preventDefault();

	// Grab the text value of the textbox and trim any whitespace off it
	// let value = inputElement.value.trim();

	// If there's some content, trigger the action and clear the field, ready for the next item
	// if (value.length) {
	// 	store.dispatch('addItem', value);
	// 	inputElement.value = '';
	// 	inputElement.focus();
	// }
});

// Instantiate components
// const authTemplateInstance = new AuthTemplate();
// const countInstance = new Count();
// const listInstance = new List();
// const statusInstance = new Status();

// // Initial renders
// authTemplateInstance.render();
// countInstance.render();
// listInstance.render();
// statusInstance.render();
