person = {
	"name": 'Alice',
	"age": 30,
	"city": 'New York',
	"work": {
		"organization": 'school',
	},
}

person2 = person

person2['name'] = 'Jo'


print(person)
print(person2)