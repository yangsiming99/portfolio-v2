interface Image {
  src: string;
  alt: string;
  url: string;
}

interface Props {
  images: Image[];
}

export function Carousel({ images }: Props) {
  const goTo = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const btn = event.currentTarget;

    //Equivalent
    //const carousel = document.querySelector('.carousel')
    //const carousel = document.querySelector('#carouselId')
    const carousel = btn.parentElement!.parentElement!.parentElement!;

    const href = btn.getAttribute("href")!;
    const target = carousel.querySelector<HTMLDivElement>(href)!;
    const left = target.offsetLeft;
    carousel.scrollTo({ left: left });
  };

  const imageList = images.map((val: Image, key: number) => (
    <div id={`image-${key}`} className="carousel-item w-full h-full">
      <img src={val.src} className="w-full" alt={val.alt} />
    </div>
  ));
  const buttons = images.map((_: Image, key: number) => (
    <a onClick={goTo} className="btn btn-xs" href={`#image-${key}`}>
      {key + 1}
    </a>
  ));

  const test = () => {
    console.log("butts");
  };

  return (
    <div className="flex flex-col">
      <div className="carousel w-full">{imageList}</div>
      <div className="flex w-full justify-center gap-2 py-2">{buttons}</div>
      <button onClick={test}>Test</button>
    </div>
  );
}
