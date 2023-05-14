const getData = async () => {
  const res: any = await fetch(`https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?applicationId=1041165688926091329&format=json&carrier=0&genre=onsen`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default async  function IndexPage() {
  const data = await getData();
  return (
    <>
      <h1 className="hidden">Inpa Dev</h1>
      <section className="relative h-screen" data-jarallax=".2">
        <div className="swiper-wrapper"> </div>
        <div className="swiper-pagination swiperClassic-pagination text-white z-index-2 pb-5 pb-lg-7"></div>
        <div className="w-100 h-100 position-absolute end-0 top-0 bg-cover bg-no-repeat bg-center h-screen"
            style={{
              opacity: .4,
              backgroundImage: `url(https://tistory1.daumcdn.net/tistory/4939852/skin/images/allLogo2.jpg)`,
          }}>
            <div className="jarallax h-100 w-100" data-jarallax-video="mp4:https://tistory3.daumcdn.net/tistory/4939852/skin/images/allLogo.mp4"></div>
        </div>

        <div id="home_mainText" className="container pt-19 pb-2 position-relative z-index-2">
            <div className="row pt-lg-9 pb-9">
                <div className="col-xl-11 mx-auto text-center">
                    <h6 className="bubble-heading">I LOVE WHAT I DO</h6>
                    <h2 className="special-heading display-1">
                        Hello World !  <br/>
                        Let's Get it
                        <br className="d-sm-none"/>
                        <span className="d-inline-block text-warning"
                        data-typed='{"strings": ["Java","Python","Javascript","Typescript","Kotlin","PHP", "Node.js", "Spring"]}'></span>
                    </h2>
                    <div className="quote-separator"></div>
                    <p className="mb-7 lead">안녕 세계! 나에게 프로그래밍 세상을 보여줘서 고마워</p>
                    <div className="text-center">
                        <a href="#firstSection"
                            className="btn p-0 width-8x height-8x btn-outline-white btn-circle-ripple shadow-lg rounded-circle flex-center d-flex text-center mx-auto">
                            <div className="link-arrow-bounce">
                                <i className="fal fa-angle-down fs-2"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="particleCanvas-Orange" className="e-particles-orange"></div>
        <div id="particleCanvas-Blue" className="e-particles-blue"></div>
      </section>
    </>
  )
}
