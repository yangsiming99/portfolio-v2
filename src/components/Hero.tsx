import hillside from "../images/hillsideWealth/HillSideWealth_1.png";
import topStars from "../images/Other/topstars.png";
import playon from "../images/playon/playon-dashboard.png";

interface Image {
  src: string;
  alt: string;
  url: string;
}

export function Hero() {
  const images = [
    {
      src: playon.src,
      alt: "Dashboard of Playon Web app",
      url: "https://github.com/yangsiming99/HillsideWealth-AutoStocks",
    },
    {
      src: hillside.src,
      alt: "Login screen of Hillside Wealth Autostocks",
      url: "https://github.com/yangsiming99/HillsideWealth-AutoStocks",
    },
    {
      src: topStars.src,
      alt: "Login screen of UstarLinks",
      url: "https://github.com/yangsiming99",
    },
  ];

  const goTo = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const btn = event.currentTarget;
    const carousel = document.querySelector(".carousel");
    const href = btn.getAttribute("href")!;
    const target = carousel.querySelector<HTMLDivElement>(href)!;
    const left = target.offsetLeft;
    carousel.scrollTo({ left: left });
  };

  const imageList = images.map((val: Image, key: number) => (
    <div key={key} id={`image-${key}`} className="carousel-item w-full h-full">
      <img src={val.src} className="w-full" alt={val.alt} />
    </div>
  ));
  const buttons = images.map((_: Image, key: number) => (
    <a key={key} onClick={goTo} className="btn btn-xs" href={`#image-${key}`}>
      {key + 1}
    </a>
  ));

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left m-12">
          <h4 className="text-xl">Hello, This is the portfolio site of </h4>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-blue-500 inline-block text-transparent bg-clip-text pb-2">
            Siming Yang
          </h1>
          <h2 className="text-2xl">Web Developer</h2>
        </div>

        <div className="mockup-browser bg-base-300 border m-12 max-w-[55%] min-w-96">
          <div className="mockup-browser-toolbar">
            <div className="input"></div>
          </div>
          <div className="bg-base-200 flex justify-center b">
            {/* <img src={images[current].src} /> */}
            <div className="flex flex-col">
              <div className="carousel w-full">{imageList}</div>
              <div className="flex w-full justify-center gap-2 py-2">
                {buttons}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
