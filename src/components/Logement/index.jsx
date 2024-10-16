import { Link } from 'react-router-dom'
import { logementList } from '../../datas/logement'
import '../../Style/logements.css'
import '../../Style/produit.css'

function LocationList() {

	return (
		<main className='logement'>
			<div className='logement__list'>
				{logementList.map(({ id, cover, title }) =>
					<article key={id} className='logement__list__content'>
						<Link to={`/location?id=${id}`}>
							<div className="logement__list__content__bg"></div>
							<img className='logement__list__content__cover' src={cover} alt={`Logement ${title}`} />
							<p className="logement__list__content__name">{title}</p>
						</Link>
					</article>
				)}
			</div>
		</main>
	)
}

export default LocationList