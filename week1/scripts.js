const btn = document.getElementById('myButton')
const sumDiv = document.getElementById('sum')
let count = 0

btn.addEventListener('click', () => {
	if (sumDiv) {
		count += 1
		sumDiv.textContent = `Button clicked ${count} times`
	}
})
