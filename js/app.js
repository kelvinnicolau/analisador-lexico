//analisando

function verif()
{ // Alfabeto Python
	var keyIdentificador = ["(",")","*","+"];

	//codigo = 'for ( var i=0 ) * ? del';
	codigo = document.getElementById('codigo').value;
	numElem = 0;
	relatorio="<table class='table table-bordered'><tr><th>Token</th><th>Identificação [linha][coluna]</th></tr>";
	alfabeto ="";
	reserv ="<table class='table table-bordered'>ALFABETO<tr>";
	ident="";
	delim ="";
	numElemStr="";
	frase = codigo.split('\n');

	var lin=0;
	for (var i=0; i<keyIdentificador.length; i++)
	{
		ident+="<td>"+keyIdentificador[i]+"</td>";
		lin +=1;
		if (lin==10)
		{
			lin=0
			ident += "</tr><tr>";
		}
	}
	alfabeto+=reserv+ident+delim;

	for (var linha=0; linha<frase.length; linha++)
	{
		keys = frase[linha].split(' ');
		for (var i=0; i < keys.length; i++)
		{
			var entrou = false;
			for (var j=0; j < keyIdentificador.length; j++)
			{
				if (keys[i] == keyIdentificador[0] && entrou == false)
				{
					relatorio += "<tr><td>"+keys[i]+"</td><td> 1 </td></tr> "
					entrou = true;
					break;
				}
				if (keys[i] == keyIdentificador[1] && entrou == false)
				{
					relatorio += "<tr><td>"+keys[i]+"</td><td> 2 </td></tr> "
					entrou = true;
					break;
				}
				if (keys[i] == keyIdentificador[2] && entrou == false)
				{
					relatorio += "<tr><td>"+keys[i]+"</td><td> 3 </td></tr> "
					entrou = true;
					break;
				}
				if (keys[i] == keyIdentificador[3] && entrou == false)
				{
					relatorio += "<tr><td>"+keys[i]+"</td><td> 3 </td></tr> "
					entrou = true;
					break;
				}
				// Verifica as palavras 
				console.log(keys[i]);
				if (keys[i] == subtstr(0) && entrou == false){
					if (keys[i].length == 2){
						relatorio += "<tr><td>"+keys[i]+"</td><td> 5 </td></tr> "
						entrou = true;
						break;
					}
				}
				if (keys[i].slice(0) == "_" && entrou == false){
					if (keys[i].length == 3){
						relatorio += "<tr><td>"+keys[i]+"</td><td> 6 </td></tr> "
						entrou = true;
						break;
					}
				}
				if (keys[i].slice(0) == "_" && entrou == false){
					if (keys[i].length == 4){
						relatorio += "<tr><td>"+keys[i]+"</td><td> 7 </td></tr> "
						entrou = true;
						break;
					}
				}
			}
			if (entrou ==false)
			{
				relatorio += "<tr><td>"+keys[i]+"</td><td>Sem êxito na analise </td></tr> "

				entrou = true;
			}
		}
	}
	if (2==2)
	{
		document.getElementById('result').innerHTML = relatorio;

		document.getElementById('alfabeto').innerHTML = alfabeto;
	}
	else
	{
		document.getElementById('result').innerHTML=relatorio;
	}
}
