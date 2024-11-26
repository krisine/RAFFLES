import Image from "next/image"

export default function PhotographyLanding() {
  const stats = [
    {
      number: "30+",
      titleEn: "Artist in Collaboration",
      titleCn: "合作艺人30+"
    },
    {
      number: "300+",
      titleEn: "Collaborative Entrepreneurs",
      titleCn: "企业创始人300+"
    },
    {
      number: "1,000+",
      titleEn: "Experts in Their Professional Fields",
      titleCn: "专业领域达人1000+"
    }
  ]
  return (
<div className="min-h-screen bg-white">
  <div className="mx-auto">
    {/* Hero Section */}
    <div className="relative h-screen mb-32 sm:mb-64">
      <Image
        src="/head.jpg"
        alt="Portrait of elegance"
        fill
        className="object-cover grayscale"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        {/* <Image
          src="/placeholder.svg"
          alt="Gordon Photography Logo"
          width={80}
          height={40}
          className="object-contain"
        /> */}
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 sm:px-8">
        <div style={{position: "absolute", top: "70vh"}}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
            PORTRAIT OF
            <br />
            RAFFLES
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-2">
            WHERE BEAUTY MEETS TIMELESS ARTISTRY
          </p>
          <p className="text-base sm:text-lg">定 格 最 美 的 你</p>
        </div>
      </div>
    </div>

    {/* Header Section */}
    <div className="text-center mb-12 sm:mb-16 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#B49652] mb-4">
        An Exclusive Celebrity Photography Experience.
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-[#B49652] mb-8">
        免费体验明星肖像拍摄
      </p>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2">
          Exclusive Opportunity: Reserve Your Session with our Master Photographer.
        </h2>
        <p className="text-base sm:text-lg text-gray-900">
          Limited Availability, No Additional Slots Once fully taken.
        </p>
        <p className="text-base sm:text-lg text-gray-900 mt-2">
          大师掌镜限时开放 名额限时抢定,额满即止
        </p>
      </div>
    </div>

    {/* Photography Packages */}
    <div className="space-y-12 sm:space-y-16 px-4">
      {/* Package 1 */}
      <div className="grid gap-8 items-center sm:grid-cols-2">
        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
          <Image
            src="/Celebrity.jpg"
            alt="Celebrity Chic Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute -right-4 -top-4 bg-white p-4 sm:p-6 text-4xl sm:text-6xl font-bold">
            01
          </div>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            CELEBRITY CHIC COLLECTION - 2 SETS
          </h3>
          <p className="text-base sm:text-lg text-gray-600">
            明星穿搭造型搭配*2套
          </p>
        </div>
      </div>

      {/* Package 2 */}
      <div className="grid gap-8 items-center sm:grid-cols-2">
        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
          <Image
            src="/Editorial.jpg"
            alt="Editorial Fashion Magazine"
            fill
            className="object-cover"
          />
          <div className="absolute -right-4 -top-4 bg-white p-4 sm:p-6 text-4xl sm:text-6xl font-bold">
            02
          </div>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            EDITORIAL FASHION MAGAZINE-LEVEL RETOUCHING * 2 PHOTOS.
          </h3>
          <p className="text-base sm:text-lg text-gray-600">
            时尚杂志封面级精修*2张
          </p>
        </div>
      </div>
    </div>

    {/* Portrait Section */}
    <div className="text-center mb-12 sm:mb-16 px-4 text-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        A great portrait reveals character and story.
      </h2>
      <p className="text-base sm:text-lg mb-8">你的肖像 价值千万</p>
      <p className="text-sm sm:text-base lg:text-lg mb-4">
        We all have countless photos taken throughout our lifetime,
        <br />
        but everyone deserves at least one personal portrait.
      </p>
    </div>
  </div>
</div>
  )
}

