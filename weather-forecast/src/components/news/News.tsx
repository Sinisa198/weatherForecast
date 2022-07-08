import "./News.css";
import human from "../../assets/human.jpg";
import novisad from "../../assets/novisad.jpg";
import cdc from "../../assets/cdc.webp";
import helicto from "../../assets/helicto.jpg";
import doctor from "../../assets/doctor.jpg";
import fire from "../../assets/fire.jpg";
const News = () => {
  return (
    <div className="news-main">
      <header className="news-header">
        <h1 className="news-title">Weather Forecast</h1>
        <p className="news-paragrap">
          The latest news and ideas of how to use weather information in today's
          digital services.
        </p>
      </header>

      <div className="blog-post">
        <div className="blog-post__img">
          <img src={human} alt="" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>Monday</span>
            <span>July 4 2022</span>
          </div>
          <h1 className="blog-post__title">War in Ukraine</h1>
          <p className="blog-post__text">
            The university professor has been teaching online since the pandemic
            but for the past few months, he has been educating his students from
            the frontline.
          </p>
          <a
            href="https://www.bbc.com/news/world-europe-62003180"
            className="blog-post__cta"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={novisad} alt="" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>Wednesday</span>
            <span>June 29 2022</span>
          </div>
          <h1 className="blog-post__title">Novi Sad</h1>
          <p className="blog-post__text">
            Compared to May of the previous year, overnight stays increased by
            48.3%, and arrivals by as much as 185.8%.
          </p>
          <a
            href="https://www.dnevnik.rs/novi-sad/novi-sad-ostvario-najboli-turisticki-promet-u-posledne-dve-decenije-06-07-2022"
            className="blog-post__cta"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={cdc} alt="" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>Thursday</span>
            <span>July 7 2022</span>
          </div>
          <h1 className="blog-post__title">CDC report</h1>
          <p className="blog-post__text">
            Arizona residents seeking refuge from extreme heat may face barriers
            to accessing cooling centers
          </p>
          <a
            href="https://azcir.org/news/2022/06/17/cooling-center-access-limited-vulnerable-residents-extreme-heat/"
            className="blog-post__cta"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={helicto} alt="" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>Sunday</span>
            <span>June 2 2022</span>
          </div>
          <h1 className="blog-post__title">Japanese tourist</h1>
          <p className="blog-post__text">
            By Euronews with AP • Updated: 25/04/2022 Rescuers said that 10
            people who were retrieved Sunday
          </p>
          <a
            href="https://www.euronews.com/travel/2022/04/24/at-least-10-dead-in-japan-after-tour-boat-sinks-in-rough-waters-authorities-confirm"
            className="blog-post__cta"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={doctor} alt="" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>Friday</span>
            <span>July 9 2022</span>
          </div>
          <h1 className="blog-post__title">Two German tourists</h1>
          <p className="blog-post__text">
            Two German tourists have been convicted of manslaughter over a fatal
            boat crash on Lake Garda in Italy.
          </p>
          <a
            href="https://www.euronews.com/2022/03/21/two-german-tourists-convicted-over-fatal-lake-garda-boat-crash"
            className="blog-post__cta"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={fire} alt="" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>Tuesday</span>
            <span>July 5 2022</span>
          </div>
          <h1 className="blog-post__title">Cable car</h1>
          <p className="blog-post__text">
            A cable car crashed in northern Czech Republic on Sunday, killing
            one person, officials said.
          </p>
          <a
            href="https://www.euronews.com/2021/10/31/cable-car-crashes-in-northern-czech-republic-killing-one-person"
            className="blog-post__cta"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
