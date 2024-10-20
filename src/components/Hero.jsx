import bg from '../assets/hero1.jpg'

const Hero = () => {
  return (
    <section className="hero-container">
                <picture>
                    <source
                        media="(max-width: 767px)"
                        srcSet={bg}
                        type="image/jpeg" />
                    <source
                        media="(min-width: 768px)"
                        srcSet={bg}
                        type="image/jpeg" />
                    <img
                        src="desktop-image.jpg"
                        alt="Your image description"
                        loading="lazy" />
                </picture>

            <div className="px-4 py-5 my-5 text-center hero-content">
                <h1 className="display-5 fw-bold">Pork Loins WIth Potatoes</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Hero