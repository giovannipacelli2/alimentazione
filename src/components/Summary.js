import React from 'react'

const Summary = ({ total }) => {

    let totalMacro = total.carbo + total.prot + total.fat;

    const peso = 69;

    let percCarbo = total.carbo * 100 / totalMacro;
    let percProt = total.prot * 100 / totalMacro;
    let percFat = total.fat * 100 / totalMacro;

    let gCarbo = peso / total.carbo;
    let gProt = peso / total.prot;
    let gFat = peso / total.fat;

    let kcalCarbo = total.kcal * percCarbo / 100;
    let kcalProt = total.kcal * percProt / 100;
    let kcalFat = total.kcal * percFat / 100;

  return (
    <section className="container">
        <table className='summary-table'>
		<thead>
			<tr>
				<th>Macro</th>
				<th>%</th>
				<th>g/kg</th>
				<th>kcal</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					Carbo
				</td>
				<td>
					{ percCarbo.toFixed(1) }
				</td>
				<td>
					{ gCarbo.toFixed(1) }
				</td>
				<td>
					{ kcalCarbo.toFixed(1) }
				</td>
			</tr>
			<tr>
				<td>
					Prot
				</td>
				<td>
					{ percProt.toFixed(1) }
				</td>
				<td>
					{ gProt.toFixed(1) }
				</td>
				<td>
					{ kcalProt.toFixed(1) }
				</td>
			</tr>
			<tr>
				<td>
					Fat
				</td>
				<td>
					{ percFat.toFixed(1) }
				</td>
				<td>
					{ gFat.toFixed(1) }
				</td>
				<td>
					{ kcalFat.toFixed(1) }
				</td>
			</tr>
		</tbody>
	</table>
    </section>
  )
}

export default Summary