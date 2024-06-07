import './styles/main.scss'

const fixedHeaderNav = document.querySelector('.nav__header--fixed')
const fixedHeaderLinks = document.querySelectorAll('.nav__menu-link')

const tourSectionTabs = document.querySelectorAll('.tour__tab')

const dateInputs = document.querySelectorAll('.find__input[type="date"]')

dateInputs.forEach(input => {
	input.addEventListener('input', () => {
		input.classList.add('colored')

		let value = input.value
		if (value) {
			input.classList.remove('colored')
		}
	})
})

const toggleNavbar = () => {
	if (window.scrollY > 450) {
		fixedHeaderNav.classList.add('visible-nav')
	} else {
		fixedHeaderNav.classList.remove('visible-nav')
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
	tourSectionTabs.forEach(t => t.classList.remove('tour__tab--active'))
	tab.classList.add('tour__tab--active')
}

window.addEventListener('scroll', toggleNavbar)

fixedHeaderLinks.forEach(link => {
	link.addEventListener('click', () => scrollToSection(link))
})

tourSectionTabs.forEach(tab => {
	tab.addEventListener('click', () => setActiveTab(tab))
})
