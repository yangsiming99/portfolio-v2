import { useEffect, useState } from "react";

interface Props {
  info: {
    images: {
      src: string;
      alt: string;
    }[];
    title: string;
    description: string[];
    tech: string[];
    links: any[];
    id: string;
  };
  pos: Number;
}

export function Project({ info, pos }: Props) {
  const [photo, setPhoto] = useState(0);
  const [opacity, _setOpacity] = useState(true);

  const links =
    info.links.length !== 0 ? (
      <>
        <h3 className="text-xl mb-2 mt-2">Links</h3>
        <div className="mt-2">
          {info.links.map((val, key) => (
            <a
              key={key}
              href={val.url}
              target="_blank"
              className="btn btn-primary mr-1"
            >
              {val.button}
            </a>
          ))}
        </div>
      </>
    ) : null;

  const bg = Number(pos) % 2 === 0 ? "bg-base-200" : "bg-base-500";
  const order = Number(pos) % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";

  const changeImage = async (pos: number) => {
    setPhoto(pos);
    // setOpacity(false);
    // await setTimeout(() => {
    //   setPhoto(pos);
    //   setOpacity(true);
    // }, 500);
  };

  return (
    <>
      <div className={`hero ${bg} min-h-fit w-screen my-4`}>
        <div
          className={`hero-content w-10/12 text-start flex flex-col-reverse ${order}`}
        >
          <div className="max-w-3xl flex-1">
            <h1 className="text-3xl">{info.title}</h1>
            {info.description.map((val: string, key: number) => (
              <p className="py-3" key={key}>
                {val}
              </p>
            ))}
            <h3 className="text-xl mb-2 mt-2">Tech Stack</h3>
            <div>
              {info.tech.map((val, key) => (
                <div key={key} className="mr-1 badge badge-primary">
                  {val}
                </div>
              ))}
            </div>
            {links}
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <div
                id={`${info.id}-carousel`}
                className={`carousel w-full transition duration-300 opacity-${opacity ? "100" : "0"}`}
              >
                <div className="carousel-item w-full h-full">
                  <img
                    src={info.images[photo].src}
                    alt={info.images[photo].alt}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div
                className={`${info.images.length <= 1 ? "hidden" : "flex"} w-full justify-center gap-2 py-2`}
              >
                {info.images.map((_, key: number) => (
                  <button
                    onClick={() => changeImage(key)}
                    key={key}
                    className="btn btn-xs"
                  >
                    {key + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
