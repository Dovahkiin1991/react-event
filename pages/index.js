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

      <section className="tickets">
        <div className="container">
          <h2>Tickets</h2>

          <div className="row">
            <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="item">
                <span className="item__title">Super Early Bird</span>
                <span className="item__price">149</span>
                <span className="item__date">until February 10, 2019</span>

                <span className="item__lang"><b>Language:</b> English</span>
                <p>We will provide translation devices if needed.</p>

                <a href="#" className="btn">Buy Tickets</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="item">
                <span className="item__title">Early Bird</span>
                <span className="item__price">169</span>
                <span className="item__date">until February 10, 2019</span>

                <span className="item__lang"><b>Language:</b> English</span>
                <p>We will provide translation devices if needed.</p>

                <a href="#" className="btn">Buy Tickets</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="item">
                <span className="item__title">Regular</span>
                <span className="item__price">209</span>
                <span className="item__date">until February 10, 2019</span>

                <span className="item__lang"><b>Language:</b> English</span>
                <p>We will provide translation devices if needed.</p>

                <a href="#" className="btn">Buy Tickets</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="item">
                <span className="item__title">Late Bird</span>
                <span className="item__price">249</span>
                <span className="item__date">until February 10, 2019</span>

                <span className="item__lang"><b>Language:</b> English</span>
                <p>We will provide translation devices if needed.</p>

                <a href="#" className="btn">Buy Tickets</a>
              </div>
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

        section.tickets {
          padding-top: 100px;
          padding-bottom: 100px;
          background-image: -moz-linear-gradient( -86deg, rgb(230,255,175) 0%, rgb(54,242,227) 100%);
          background-image: -webkit-linear-gradient( -86deg, rgb(230,255,175) 0%, rgb(54,242,227) 100%);
          background-image: -ms-linear-gradient( -86deg, rgb(230,255,175) 0%, rgb(54,242,227) 100%);
        }
        section.tickets h2 {
          font-size: 42px;
          font-weight: 700;
          color: #313131;
          line-height: 1.25;
          display: block;
          text-align: center;
          margin-bottom: 3rem;
        }
        .item {
          border-radius: 5px;
          background-color: rgb(255, 255, 255);
          box-shadow: 0px 7px 27px 0px rgba(0, 0, 0, 0.05);
          padding: 35px 15px;
          text-align: center;
          height: 100%;
        }
        .item__title {
          font-size: 20px;
          color: rgb(49, 49, 49);
          line-height: 1.25;
          text-align: center;
          display: block;
          margin-bottom: 1rem;
        }
        .item__price {
          font-size: 50px;
          color: rgb(137, 101, 180);
          line-height: 1;
          text-align: center;
          display: inline-flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
        }
        .item__price:before {
          content: '$';
          font-size: 20px;
          color: rgb(137, 101, 180);
          line-height: 1.4;
          text-align: center;
          margin-right: 6px;
        }
        .item__date {
          font-size: 14px;
          color: rgb(145, 145, 145);
          line-height: 1.875;
          text-align: center;
          display: block;
          margin-bottom: 1rem;
        }
        .item__lang {
          font-size: 14px;
          color: rgb(49, 49, 49);
          line-height: 1.4;
          text-align: center;
          display: block;
        }
        .item p {
          font-size: 13px;
          color: rgb(49, 49, 49);
          line-height: 1.875;
          text-align: center;
          display: block;
        }
      `}</style>
      </main>
  )
}

