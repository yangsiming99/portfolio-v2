import { experience, education } from "../constants/experience";
import pdfResume from "../images/Resume - Siming Yang.pdf";

export function Resume(props) {
  return (
    <div className="text-start w-screen max-w-screen flex justify-center">
      <div>
        <div className="w-screen bg-base-200 pt-5 pb-5 flex justify-center">
          <div className="w-10/12">
            <h3 className="text-3xl text-right">
              <b>Relevant Links</b>
            </h3>
            <div className="divider"></div>
            <div className="mb-2">
              <a
                href="https://github.com/yangsiming99"
                target="_blank"
                className="m-2 btn btn-primary"
              >
                {props.github} Github
              </a>
              <a
                href="https://www.linkedin.com/in/siming-yang/"
                target="_blank"
                className="m-2 btn btn-primary"
              >
                {props.linkedin} LinkedIn
              </a>
              <a
                href={pdfResume}
                target="_blank"
                className="m-2 btn btn-primary"
              >
                {props.filetext} Resume
              </a>
            </div>
          </div>
        </div>
        <div className="w-screen bg-base-500 pt-5 pb-5 flex justify-center">
          <div className="w-10/12 ">
            <h3 className="text-3xl mb-3">
              <b>Experience</b>
            </h3>
            <div className="divider"></div>
            <div className="text-start">
              {experience.map((val, key) => (
                <div key={key} className="mb-3">
                  <h4 className="text-2xl">
                    <b>{val.company}</b> - {val.position}
                  </h4>
                  <h4 className="text-xl">
                    {val.location} | {val.dates}
                  </h4>
                  <div className="pl-4">
                    <ul className="list-disc">
                      {val.info.map((infoVal, infoKey) => (
                        <li key={infoKey}>{infoVal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-screen bg-base-200 pt-5 pb-5 flex justify-center">
          <div className="w-10/12 ">
            <h3 className="text-3xl text-right">
              <b>Education</b>
            </h3>
            <div className="divider"></div>
            <div className="text-start">
              {education.map((val, key) => (
                <div key={key} className="mb-3">
                  <div className="flex flex-row">
                    <h4 className="flex-4 text-2xl">
                      <b>{val.degree}</b>
                    </h4>
                    <h3 className="flex-1 flex justify-end text-xl">
                      {val.dates}
                    </h3>
                  </div>
                  <h3 className="text-xl">
                    {val.institution}, {val.location}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
