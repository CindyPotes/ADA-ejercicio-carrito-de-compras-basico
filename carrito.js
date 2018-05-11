let precio = 0
$('.agregar').on('click',function(){
	let precioArticulo = parseInt(($(this).siblings('p').html()))
	let nombre = ($(this).siblings('h1').html())
	let enElCarrito = '<li>' + nombre + ' ' + precioArticulo + '</li>'
	let lista = $('.lista')
	lista.append(enElCarrito)
	precio = precio + precioArticulo
	$('.total').html(precio)
})