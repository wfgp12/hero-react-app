import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) return <Navigate to='/' />

  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    <div className="row mt-3">
      <div className="col-4">
        <img
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h2>
              {hero.superhero}
            </h2>
            <button
              className="btn btn-outline-primary"
              onClick={onNavigateBack}
            >
              Volver
            </button>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
              <li className="list-group-item"><b>Publisher</b> {hero.publisher}</li>
              <li className="list-group-item"><b>First appearance</b> {hero.first_appearance}</li>
            </ul>

            <h5 className="mt-5"> Characters</h5>
            <p className="card-text">{hero.characters}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
