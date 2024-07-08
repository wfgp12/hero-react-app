import { useMemo } from "react"
import PropTypes from 'prop-types'

import { getHerosByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
    const publisherHeroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            {
                publisherHeroes.map(hero =>
                    <HeroCard
                        key={hero.id}
                        hero={hero} 
                    />
                )
            }
        </div>
    )
}


HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}