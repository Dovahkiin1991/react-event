import Head from 'next/head';
import Shedule from '../components/shedule';
// import "../scss/styles.scss";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Event homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Shedule />

      <section className="promo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Our updates</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                 elit. Numquam facilis unde voluptatibus commodi at quidem quas dolorem itaque animi expedita. Animi, rer
                 um minima ex quasi dolores labore aspernatur cupiditate facere.</p>

              <a href="#" className="promo__play"></a>
            </div>
          </div>
        </div>
      </section>
      
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

        .promo {
          padding-top: 100px;
          padding-bottom: 100px;
          background: #000;
        }
        .promo h2 {
          font-size: 40px;
          font-weight: 700;
          color: rgb(255, 255, 255);
          line-height: 1.25;
          text-align: center;
          display: block;
          margin-bottom: 1.5rem;
        }
        .promo p {
          font-size: 14px;
          color: rgb(255, 255, 255);
          line-height: 1.667;
          text-align: center;
          display: block;
        }
        .promo__play {
          background: url('../play__icon.png') no-repeat center center;
          background-size: cover;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: block;
          margin: 10px auto 0;
        }
      `}</style>
      </main>
  )
}

