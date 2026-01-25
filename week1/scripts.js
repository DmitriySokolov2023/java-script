// // app.js
// const getPosts = async () => {
// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// 		const posts = await response.json()

// 		// Берем только первые 10 постов
// 		const limitedPosts = posts.slice(0, 10)

// 		const postsContainer = document.getElementById('posts-container')
// 		postsContainer.innerHTML = '' // Очищаем контейнер

// 		limitedPosts.forEach(post => {
// 			const p = document.createElement('p')
// 			p.textContent = post.title
// 			postsContainer.appendChild(p)
// 		})
// 	} catch (error) {
// 		console.error('Ошибка:', error)
// 		const postsContainer = document.getElementById('posts-container')
// 		postsContainer.innerHTML = `<p style="color: red;">Ошибка загрузки: ${error.message}</p>`
// 	}
// }

// // Запускаем при загрузке страницы
// document.addEventListener('DOMContentLoaded', getPosts)

// const person = {
// 	name: 'Alice',
// 	age: 30,
// 	city: 'New York',
// 	work: {
// 		organization: 'school',
// 	},
// }

// const person2 = structuredClone(person)

// person2.name = 'Jo'
// person2.work.organization = 'gaz'

// console.log(person2)
// console.log(person)

// const sum = (a, b) => {
// 	return a + b
// }
// const powerSum = (sumFn, a, b) => {
// 	const power = sumFn(a, b) ** 2

// 	return power
// }

// const power = powerSum(sum, 5, 10)

// console.log(power)

// const person = {
// 	name: 'Alice',
// 	age: 30,
// 	city: 'New York',
// 	work: {
// 		organization: 'school',
// 	},
// }

// const { name, age } = person

// console.log(name, age)

// const obg = {}

// const isInstance = obg instanceof Object

// console.log(isInstance)

// const a = 10
// const b = 10

// const myFn = a => {}

// setTimeout(function () {
// 	console.log('console')
// }, 1000)

// const btn = document.getElementById('myButton')
// const div = document.getElementById('posts-container')

// const sum = (a, b) => {
// 	try {
// 		if (typeof a !== 'number' || typeof b !== 'number') {
// 			throw new TypeError('Both arguments must be numbers')
// 		}
// 		return a + b
// 	} catch (error) {
// 		console.log('Error:', error)
// 		return null // или обработать иначе
// 	}
// }

// const s1 = sum(5, 2) // 7
// const s2 = sum(5, '2')

// btn.addEventListener('click', () => {
// 	const sm = sum(5, '8')

// 	div.innerText = sm
// })

// const fnErr = () => {
// 	try {
// 		b = c + 1
// 	} catch (error) {
// 		console.error(error)
// 		console.log(error.message)
// 	}
// }

// fnErr()

// console.log(123)

// a = 5 + 2
// a = 5 + 2;
console.log('Шаг 1: Начинаем асинхронную операцию')

setTimeout(() => {
	console.log('Шаг 2: Асинхронная операция завершена')
}, 1000) // Через 1 секунду

console.log('Шаг 3: Уже выполнилось!') // Не ждет!
