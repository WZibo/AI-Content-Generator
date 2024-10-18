import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "High quality",
    description:
      "With the help of advanced AI large language models, users can quickly generate high-quality articles with rigorous structure and rich content. Whether it is a long blog, technical documentation or press release, the system can understand and generate articles that conform to the context through natural language processing technology to ensure coherent content and accurate information.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Security",
    description:
      "We attach great importance to user data security and privacy protection. All article generation and processing are carried out in an encrypted environment to ensure that your sensitive information is not leaked. Data transmission uses SSL encryption technology, and the content used by the model is limited to the user's current task and will never be stored or shared.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "View History",
    description:
      "Our history function will safely save your past articles and drafts, allowing users to quickly retrieve and modify previous work when needed. Each generated article can be categorized and searched by date, topic or keyword, ensuring your creative process is organized and efficient. At the same time, the system supports one-click recovery to the previous version, allowing you to compare or roll back article modifications.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function AppFeatures() {
  return (
    <div className="bg-[#333333] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
          Simply realize your idea
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Efficient article production
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
          A variety of powerful functions are available to experience. Comprehensively help users generate satisfactory articles
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
