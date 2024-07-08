import { heroes } from "../data/heros"

export const getHeroById = (heroID) => {
    return heroes.find(hero => hero.id === heroID)
}