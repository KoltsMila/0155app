import { useState } from "react";

export const Settings = () => {
  const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="text-center row">
      <div className="col-md-6">
        <p>Количество кликов: {count}</p>
      </div>
      <div className="col-md-6">
        <button className="btn btn-dark" onClick={() => {
          setCount(count + 1);
        } }>Увеличить счет</button>
      </div>
    </div>

      <div className="row">
        <div className="bg-gray-100">
          <div className="px-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-32">
            <h1 className="p-4 text-2xl font-bold text-center text-gray-900">Collections</h1>

              <div className="p-3 mt-6 space-y-12 text-center lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
              <div key={callout.name} className="relative group">
              <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="object-cover object-center w-full h-full"
                />
              </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}