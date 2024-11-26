import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function SessionOverview() {
  const sessionDetails = [
    {
      en: "This event marks the first stop of the RAFFLES Portrait Team's SoutheastAsia tour: Singapore.",
      cn: "本次活动所有拍摄为莱佛士肖像团队东南亚巡拍第一站——新加坡（Singapore)"
    },
    {
      en: "Package includes 2 sets of outfits, 2 styling looks, 2 photo sessions, and2 retouched images.",
      cn: "本次活动提供2套服装/2组造型/2组拍摄/2张精修"
    },
    {
      en: "Limited-time offer, available while slots last.",
      cn: "限时抢定，满额即止"
    },
    {
      en: "The session must be completed within the specified period; otherwise,it will automatically expire.",
      cn: "拍摄需在指定期间内完成，逾期自动失效"
    },
    {
      en: "Limited availability for this event, only one session per person allowed.",
      cn: "活动名额有限，每人限定一份"
    },
    {
      en: "Additional retouched image available for SGD$200",
      cn: "精修加选一张 200 新币"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[55vh]">
        <Image
          src="/black.png"
          alt="Fashion portrait in black attire"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Session Overview */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Photography Session Overview
        </h1>
        <p className="text-xl text-center mb-8">本次拍摄活动说明</p>

        <Card className="bg-gray-50 p-6 md:p-8">
          <div className="space-y-8">
            {sessionDetails.map((detail, index) => (
              <div key={index} className="space-y-2">
                <p className="text-lg font-medium">
                  {index + 1}. {detail.en}
                </p>
                <p className="text-gray-600">
                  {index + 1}. {detail.cn}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

