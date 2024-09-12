1. Использование some и every в комбинации:

Дан массив объектов, каждый из которых представляет студента с массивом его посещаемости за месяц в формате булевых значений (true — присутствовал, false — отсутствовал), например [ {name: 'Alice', attendance: [true, true, false, true]}, {name: 'Bob', attendance: [true, true, true, true]}, {name: 'Carol', attendance: [false, false, true, false]}]. Напишите функцию, которая проверяет, есть ли хотя бы один студент, который не пропустил ни одного занятия, и все студенты, которые пропустили хотя бы одно занятие.

2. Расширенное применение filter и reduce:

Имеется массив объектов, каждый из которых содержит информацию о продукте, включая категорию и цену, например [ {name: 'Laptop', category: 'Electronics', price: 1000}, {name: 'Jeans', category: 'Apparel', price: 40}, {name: 'Blender', category: 'Appliances', price: 75}, {name: 'Smartphone', category: 'Electronics', price: 599}]. Напишите функцию, которая возвращает объект, где ключи — это категории, а значения — средняя цена продуктов в каждой категории.