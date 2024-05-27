import './styles/main.scss'

const nav = document.querySelector('.nav__header--fixed')
const links = document.querySelectorAll('.nav__menu-link')

const tabs = document.querySelectorAll('.tour__tab')

const dateInputs = document.querySelectorAll('.find__input[type="date"]')

dateInputs.forEach(input => {
	input.addEventListener('input', () => {
		input.classList.add('colored')

		let value = input.value
		console.log('value', value)
		if (value) {
			input.classList.remove('colored')
		}
	})
})

const toggleNavbar = () => {
	if (window.scrollY > 450) {
		nav.classList.add('visible-nav')
	} else {
		nav.classList.remove('visible-nav')
	}
}

const scrollToSection = link => {
	const currClass = link.getAttribute('href').split('#')[1]
	const anchor = document.querySelector(`.${currClass}`)

	window.scrollTo({
		top: anchor.offsetTop - 100,
		behavior: 'smooth'
	})
}

const setActiveTab = tab => {
	tabs.forEach(t => t.classList.remove('tour__tab--active'))
	tab.classList.add('tour__tab--active')
}

window.addEventListener('scroll', toggleNavbar)

links.forEach(link => {
	link.addEventListener('click', () => scrollToSection(link))
})

tabs.forEach(tab => {
	tab.addEventListener('click', () => setActiveTab(tab))
})
