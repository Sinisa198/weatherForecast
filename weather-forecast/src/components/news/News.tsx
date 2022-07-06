import "./News.css";
import human from "../assets/pictures/human.jpg";
import novisad from "../assets/pictures/novisad.jpg";
import cdc from "../assets/pictures/cdc.webp";
import helicto from "../assets/pictures/helicto.jpg";
import doctor from "../assets/pictures/doctor.jpg";
import fire from "../assets/pictures/fire.jpg";
const News = () => {
  return (
    <div>
      <header className="news-header">
        <h1 className="news-title">Foreca News</h1>
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
            <span>Sunday</span>
            <span>July 4 2022</span>
          </div>
          <h1 className="blog-post__title">War Ukraine</h1>
          <p className="blog-post__text">
            The university professor has been teaching online since the pandemic
            but for the past few months, he has been educating his students from
            the frontline. The 47-year-old signed up to the military after the
            Russian invasion but he was eager for his students to continue their
            education. The result? He conducts twice-weekly classes on topics
            such as tourism and sociology from the trenches on his phone. "I've
            been teaching for 27 years. I can't just abandon that. It's what I'm
            good at," he tells the BBC. Mr Shandor has been teaching while
            serving in the military since Russia invaded in February. He signed
            up because he wanted to fight for his country and protect his wife
            and daughter. "I should stop the Russians before they come to my
            house," he says. Mr Shandor's dedication to his job has also helped
            keep participation numbers up.
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
            <span>Sunday</span>
            <span>October 29 20219</span>
          </div>
          <h1 className="blog-post__title">
            Novi Sad achieved the best tourist traffic in the last two decades
          </h1>
          <p className="blog-post__text">
            Compared to May of the previous year, overnight stays increased by
            48.3%, and arrivals by as much as 185.8%. In terms of the number of
            arrivals of domestic and foreign tourists, compared to all other
            tourist destinations in Serbia, Novi Sad is in second place, behind
            the capital, and ahead of spa and mountain centers, according to
            data from the Republic Institute of Statistics. In Novi Sad's
            accommodation facilities, in the first five months of 2022, 75,216
            tourists stayed and spent 194,783 nights. Of the total number of
            overnight stays, domestic tourists made 68,988, while foreigners
            stayed almost twice as many nights (125,795). When we compare this
            data with the pre-pandemic year 2019, we see a 33.2% increase in
            total overnight stays. According to data provided by Novi Sad
            hotels, foreign tourists with the most overnight stays come from the
            following countries: Bosnia and Herzegovina, the Russian Federation,
            Croatia, Slovenia and Germany. Another interesting fact relates to
            the visit to the TONS Tourist Info Centers at Trg slobode and the
            railway station. Namely, in May alone, nearly 1,500 tourists from as
            many as 48 countries contacted us for maps, brochures and useful
            information about the city. It is also interesting to mention that
            in May we were visited by guests from Albania, Qatar, Bahrain,
            Lebanon, Iraq, Georgia, Indonesia, the Philippines, Japan, Uruguay,
            Brazil and Argentina, while among the most numerous in the first
            five months of this year were tourists originating from the Russian
            Federation, followed by Germany, Great Britain, France, Turkey,
            India, Slovenia, Croatia, Bulgaria, and the USA.
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
            <span>Sunday</span>
            <span>October 29 20219</span>
          </div>
          <h1 className="blog-post__title">CDC report</h1>
          <p className="blog-post__text">
            With record-breaking heat and an increasing number of days exceeding
            triple digit temperatures, a CDC report reveals that Arizona
            residents seeking refuge from extreme heat may face barriers to
            indoor, air-conditioned centers designed to shield them from
            dangerous heat.
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
            <span>October 29 20219</span>
          </div>
          <h1 className="blog-post__title">
            Japanese tourist boat sinks with at least 10 dead, authorities
            confirm
          </h1>
          <p className="blog-post__text">
            By Euronews with AP • Updated: 25/04/2022 Rescuers said that 10
            people who were retrieved Sunday from the frigid sea and the rocky
            coast of a northern Japanese national park had died, a day after a
            tour boat with 26 aboard apparently sank in rough waters. The search
            for the others is still ongoing after the boat sent a distress call
            on Saturday afternoon local time saying it was sinking. The
            location, near the Kashuni Waterfall, is known as a difficult place
            to manoeuvre boats because of its rocky coastline and strong tide.
            Two crew and 24 passengers, including two children, were on the
            19-tonne Kazu 1 when it ran into trouble while travelling off the
            western coast of the Shiretoko Peninsula.
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
            <span>Sunday</span>
            <span>October 29 20219</span>
          </div>
          <h1 className="blog-post__title">
            Two German tourists convicted over fatal Lake Garda boat crash
          </h1>
          <p className="blog-post__text">
            Two German tourists have been convicted of manslaughter over a fatal
            boat crash on Lake Garda in Italy. Patrick Kassen and Christian
            Teismann were both found guilty of causing the nighttime accident in
            June last year and leaving the scene. The crash killed an Italian
            couple, who were on board a smaller vessel after spending part of
            the evening earlier with friends at the lake's shore. Umberto
            Garzarella, 37, was found dead in the wooden boat while the body of
            25-year-old Greta Nedrotti was found two days later by divers.
            Prosecutors alleged that the two tourists from Munich were drunk and
            had been speeding in the boat. Before the trial, Kassen had claimed
            that he didn’t realise there had been a collision. He had been put
            under house arrest since July.
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
            <span>Sunday</span>
            <span>October 29 20219</span>
          </div>
          <h1 className="blog-post__title">
            Cable car crashes in northern Czech Republic, killing one person
          </h1>
          <p className="blog-post__text">
            A cable car crashed in northern Czech Republic on Sunday, killing
            one person, officials said. The accident occurred Sunday afternoon
            when one of the two cabins of the cable car crashed to the ground.
            The only person onboard, a staff member, was killed, said head of
            the regional government Martin Puta. Rescuers said none of the 15
            people onboard the second cabin were harmed. It was the first
            accident involving the oldest cable car in the Czech Republic that
            dates to 1933. Operated by the Czech Railways, it leads almost to
            the top of the Jested mountain near the city of Liberec. The crash
            took place just a day before planned maintenance.
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
