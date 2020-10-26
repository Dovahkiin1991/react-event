import Head from 'next/head';
// import "../scss/styles.scss";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Event homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="why-us">
          <div className="container">
            <h2 className="text-center">Why Should You Attend?</h2>

            <div className="row">
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="why-us__icon">
                  <img src="/why-us/why-us-1.png" alt="" />
                </div>
                <span className="why-us__title">Networking</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum earum fugit alias voluptatibus est 
                  ea blanditiis dolorum tempore, perferendis repellat dolores, quaerat dicta inventore veniam eius voluptas, vel ducimus!</p>
              </div>
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="why-us__icon">
                <img src="/why-us/why-us-2.png" alt="" />
                </div>
                <span className="why-us__title">Learning</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum earum fugit alias voluptatibus est 
                  ea blanditiis dolorum tempore, perferendis repellat dolores, quaerat dicta inventore veniam eius voluptas, vel ducimus!</p>
              </div>
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="why-us__icon">
                <img src="/why-us/why-us-3.png" alt="" />
                </div>
                <span className="why-us__title">Exposure</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum earum fugit alias voluptatibus est 
                  ea blanditiis dolorum tempore, perferendis repellat dolores, quaerat dicta inventore veniam eius voluptas, vel ducimus!</p>
              </div>
            </div>
          </div>
      </section>

        
      <style jsx>{`
        section.why-us {
          background: rgb(137, 101, 180);
          padding-top: 90px;
          padding-bottom: 90px;
        }
        section.why-us h2 {
          font-size: 42px;
          font-weight: 700;
          color: rgb(255, 255, 255);
          line-height: 1.25;
          display: block;
          margin-bottom: 3rem;
        }
        section.why-us p {
          font-size: 16px;
          font-weight: 300;
          color: rgb(255, 255, 255);
          line-height: 1.667;
          text-align: left;
          display: block;
        }
        .why-us__title {
          font-size: 26px;
          color: rgb(255, 255, 255);
          line-height: 1.5;
          text-align: left;
          display: block;
          margin-bottom: 1rem;
        }
        .why-us__icon {
          display: block;
          height: 110px;
        }
        .why-us__icon img {
          display: block;
          max-width: 100%;
        }
      `}</style>
      </main>
  )
}

