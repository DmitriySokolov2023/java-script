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

const person = {
	name: 'Alice',
	age: 30,
	city: 'New York',
	work: {
		organization: 'school',
	},
}

const person2 = structuredClone(person)

person2.name = 'Jo'
person2.work.organization = 'gaz'

console.log(person2)
console.log(person)
