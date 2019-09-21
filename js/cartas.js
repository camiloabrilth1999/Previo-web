$(document).ready(function(){
	traerDatos2('#table72')

});


var data = [{"num":"1","nombre":"As de diamantes", "cantidad": "0"}
				,{"num":"2","nombre":"Dos de diamantes", "cantidad": "0"}
				,{"num":"3","nombre":"Tres de corazones", "cantidad": "0"}
				,{"num":"4","nombre":"Cuatro de corazones", "cantidad": "0"}
				,{"num":"5","nombre":"Cinco de corazones", "cantidad": "0"}
				,{"num":"6","nombre":"Seis de treboles", "cantidad": "0"}
				,{"num":"7","nombre":"Siete de diamantes", "cantidad": "0"}
				,{"num":"8","nombre":"Ocho de treboles", "cantidad": "0"}
				,{"num":"9","nombre":"Nueve de diamantes", "cantidad": "0"}
				,{"num":"10","nombre":"Diez de corazones", "cantidad": "0"}
				,{"num":"11","nombre":"J de treboles", "cantidad": "0"}
				,{"num":"12","nombre":"Q de picas", "cantidad": "0"}
				,{"num":"13","nombre":"K de diamantes", "cantidad": "0"}]

function traerDatos2(destino) {

		let datos = data;

			let res = document.querySelector(`${destino} tbody`);
			res.innerHTML = '';

			let cab = document.querySelector(`${destino} thead`);

			let item = datos [0]; 
			let cabecera = '';
			for (var key in item) {
				cabecera += `<th>${key}</th>`;
			}
			cab.innerHTML += `<tr>${cabecera}</tr>`;


			for(let item of datos) {
				resul = '';
				for (var key in item) {
					resul += `<td>${item[key]}</td>`;
				}
				res.innerHTML += `<tr>
	      				${resul}
	    			</tr>`;
			}
}

$("#guardar-carta").click(function(){
	data.push({"num":"14","nombre":"As de diamantes", "cantidad": "0"});
	traerDatos2('#table72');
});
