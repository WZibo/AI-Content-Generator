import React from "react";
import {
  HeartIcon,
  CurrencyDollarIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Customer Support",
    description:(
      <>
        We will provide users with a full range of technical support and
        after-sales service to ensure your creation.
        <br />
        Email: AIGenerator@gmail.com
        <br />
        Phone: 888-888-8888
      </>
    ),
    icon: PhoneIcon,
  },
  {
    name: "Satisfactory product",
    description:
      "Generate the articles that customers want according to their needs. Various topics and different article styles. Meet your diverse needs.",
    icon: HeartIcon,
  },
  {
    name: "Cheap and Cheerful",
    description:
      "A variety of price plans and functions to meet the different needs of different customers. We also provide free packages and basic services.",
    icon: CurrencyDollarIcon,
  },
];


export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-[#333333] py-24 sm:py-32">
      

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Generator - Innovative Article Generation
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
          AI Article Generator changes the way content is created. Use our advanced AI technology 
          to enrich article content and enhance readability. Enable creators to easily produce 
          high-quality, engaging content.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-white">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
