const user = {
	name: 'Guilherme',
	age: 19,
	birthday: '18/02/2004',
	city: 'Cambui - MG',
	parents: ['Celso', 'Shirlei']
}

console.log(user.city)

user['city'] = 'Corrego do Bom Jesus - MG'

console.log(user['city'])