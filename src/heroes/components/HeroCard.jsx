import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import 'animate.css';

export const HeroCard = ({ hero }) => {
    return (
        <div className="card p-2 animate__animated animate__fadeIn" >
            <img className="card-img" src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
            <div className="card-body">
                <h5 className="card-title">{hero.superhero}</h5>
                <p className="card-text">{hero.alter_ego}</p>

                <Link to={`/hero/${hero.id}`}>
                   Mas...
                </Link>
            </div>
        </div>
    )
}

HeroCard.propTypes = {
    hero: PropTypes.shape({
        id: PropTypes.string.isRequired,
        superhero: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        alter_ego: PropTypes.string.isRequired,
        first_appearance: PropTypes.string.isRequired,
        characters: PropTypes.string.isRequired
    }).isRequired
};