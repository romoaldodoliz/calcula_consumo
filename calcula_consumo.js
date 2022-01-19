function clicar() {
	var valorGasolina = document.getElementById('gasolina').value;
	var valorEtanol = document.getElementById('etanol').value;

	var resultado = parseFloat(valorEtanol) / parseFloat(valorGasolina)

		if (resultado > 0.7) {
			document.write ("Compensa mais usar gasolina para abastecer seu veículo!")	
		}
		else if (resultado < 0.7) {
			document.write ("Compensa mais usar etanol para abastecer seu carro!")
		}
	}
