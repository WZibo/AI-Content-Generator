import React from "react";
import ai1 from "../../assets/AI-robot.png";
import blink from "../../assets/pen.png";

export default function HomeFeatures() {
  return (
    <>
      <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black via-[#333333] via-80% to-[#333333] overflow-hidden">
        <img
          className="hidden sm:block absolute top-0 right-1/2 -mr-64 xl:mr-24 mt-12 h-20 animate-spinStar"
          src={blink}
          alt="Blink"
        />
        <img
          className="hidden sm:block absolute bottom-0 right-0 mb-64 mr-8 h-20 animate-spinStar"
          src={blink}
          alt="Blink"
        />
        <div className="relative container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-2/5 xl:w-1/2 px-4 mb-8 lg:mb-0">
              <img
                className="block w-full max-w-md xl:max-w-lg"
                src={ai1}
                alt="Features bg"
              />
            </div>
            <div className="w-full lg:w-3/5 xl:w-1/2 px-4">
              <div className="relative overflow-hidden">
                <div className="slider">
                  <div className="slider-container">
                    <div className="slide flex mb-16 items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-indigo-700">

                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                          Powerful AI creation
                        </h4>
                        <p className="text-xl text-gray-200">
                          AI Article Generator will change the way you create content. Our intelligent 
                          algorithm generates high-quality, engaging content, saving you time and 
                          increasing your creativity.
                        </p>
                      </div>
                    </div>
                    <div className="slide flex mb-16 items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-yellow-700">

                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                          Meeting diverse needs
                        </h4>
                        <p className="text-xl text-gray-200">
                          Meeting any of your needs. Whether an engaging blog, interesting story or
                          perfect marketing copy, you can generate them efficiently with our powerful
                          AI, and make sure each piece is fit for its purpose.
                        </p>
                      </div>
                    </div>
                    <div className="slide flex items-start">
                      <div className="flex-shrink-0 flex mr-8 items-center justify-center w-16 h-16 rounded-full bg-green-700">

                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-3xl font-medium text-white mb-8">
                          Streamline Your Workload
                        </h4>
                        <p className="text-xl text-gray-200">
                        AI Article Generator can greatly reduce your workload. 
                        You only need to select the article topic and writing 
                        style you want, and generate your idea with one click.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
