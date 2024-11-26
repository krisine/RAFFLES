import Image from "next/image"

export default function UsesOfPortraits() {
  const portraitUses = [
    {
      id: "01",
      titleEn: "AS HEADSHOTS",
      titleCn: "用于头像",
      imageAlt: "Professional headshot portrait",
      img: "/pro.jpg"
    },
    {
      id: "02",
      titleEn: "CLOSE UPS BRINGS ATTENTION",
      titleCn: "特写吸引",
      imageAlt: "Close-up portrait",
            img: "/pro2.jpg"
    },
    {
      id: "03",
      titleEn: "HEADER IMAGES",
      titleCn: "用于头图",
      imageAlt: "Header style portrait",
            img: "/pro3.jpg"
    },
    {
      id: "04",
      titleEn: "INCREASE FAN ENGAGEMENT",
      titleCn: "增加粉丝粘度",
      imageAlt: "Engaging portrait",
            img: "/pro4.jpg"
    },
    {
      id: "05",
      titleEn: "LAPTOP/PHONE SCREENSAVERS",
      titleCn: "用于屏保",
      imageAlt: "Screensaver style portrait",
            img: "/pro5.jpg"
    },
    {
      id: "06",
      titleEn: "RETAIN ATTENTION",
      titleCn: "增加关注",
      imageAlt: "Attention-grabbing portrait",
            img: "/pro6.jpg"
    },
    {
      id: "07",
      titleEn: "BOOST VISUAL ELEGANCE",
      titleCn: "影响号召力",
      imageAlt: "Elegant portrait",
            img: "/pro7.jpg"
    },
    {
      id: "08",
      titleEn: "ADVERTORIALS",
      titleCn: "制作海报",
      imageAlt: "Advertorial style portrait",
            img: "/pro8.jpg"
    },
    {
      id: "09",
      titleEn: "RADIATE CHARM",
      titleCn: "散发魅力",
      imageAlt: "Charming portrait",
            img: "/pro9.jpg"
    }
  ]

  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          9 USES OF PORTRAITS
        </h2>
        <p className="text-xl text-center mb-12">肖 像 九 用</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portraitUses.map((use) => (
            <div key={use.id} className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={use.img}
                  alt={use.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">{use.id}</p>
                <h3 className="text-lg font-medium mb-1">{use.titleEn}</h3>
                <p className="text-sm text-gray-600">{use.titleCn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

