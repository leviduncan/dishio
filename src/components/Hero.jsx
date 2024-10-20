import { useState, useEffect } from 'react';
import heroes from '../bgdata';

const chooseRandomHero = () => {
  const heroNames = heroes.map((hero) => hero.name);
  const randomIndex = Math.floor(Math.random() * heroNames.length);
  return heroNames[randomIndex];
};

const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    if (!heroes.length) {
      console.error("No heroes found");
      return;
    }
    setHero(chooseRandomHero());
  }, [heroes, chooseRandomHero]);

  if (!hero) return <div>Loading...</div>;

  const bg = heroes.find((h) => h.name === hero).url;
  const title = heroes.find((h) => h.name === hero).title;
  const sub = heroes.find((h) => h.name === hero).sub;

  return (
    <section className="hero-container">
      <picture>
        <source media="(max-width: 767px)" srcSet={bg} type="image/jpeg" />
        <source media="(min-width: 768px)" srcSet={bg} type="image/jpeg" />
        <img src={bg} alt="Your image description" loading="lazy" />
      </picture>
            <div className="px-4 py-5 my-5 text-center hero-content">
                <h1 className="display-5 fw-bold">{title}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{sub}.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">See Recipe</button>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Hero