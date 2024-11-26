import { Calendar, Clock, Camera, ImageIcon, CheckSquare, Paintbrush } from 'lucide-react'
import { Card } from "@/components/ui/card"

const SignupButton = ({ link, text = "报名入口" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 text-white text-lg font-semibold bg-[#B49652] rounded-lg shadow-lg hover:bg-[#9e8046] transition-all duration-300"
    >
      {text}
    </a>
  );
};


export default function BookingInfo() {
  const processSteps = [
    {
      icon: <Calendar className="w-12 h-12" />,
      titleEn: "Online reservation",
      titleCn: "线上预约"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      titleEn: "Arrive on time",
      titleCn: "准时到达"
    },
    {
      icon: <Paintbrush className="w-12 h-12" />,
      titleEn: "Makeup matching",
      titleCn: "化妆搭配"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      titleEn: "Image selection",
      titleCn: "拍摄选片"
    },
    {
      icon: <ImageIcon className="w-12 h-12" />,
      titleEn: "Editing preference",
      titleCn: "选片调整"
    },
    {
      icon: <CheckSquare className="w-12 h-12" />,
      titleEn: "final confirmation",
      titleCn: "确认制作"
    }
  ]

  return (
    <div className="bg-white py-16 px-4">
      <div className="text-center my-12">
        <SignupButton link="https://gordon.lercel.com/enroll" />
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {step.icon}
              <h3 className="mt-4 font-medium">{step.titleEn}</h3>
              <p className="text-sm text-gray-600">{step.titleCn}</p>
            </div>
          ))}
        </div>

        {/* Booking Information */}
        <Card className="p-8 space-y-8">
          {/* Shoot Period */}
          <div className="text-center space-y-2">
            <p className="text-lg">拍摄日期</p>
            <h2 className="text-3xl font-bold">SHOOT PERIOD : 9-15 DEC 2024.</h2>
          </div>

          {/* Shooting Time */}
          <div className="text-center space-y-2">
            <p className="text-lg">拍摄时间</p>
            <h2 className="text-3xl font-bold">SHOOTING TIME: 11AM—9PM</h2>
          </div>

          {/* Location */}
          <div className="text-center space-y-2">
            <p className="text-lg">拍摄地址</p>
            <div className="space-y-1">
              <p className="text-2xl font-bold">114 Lavender Street, </p>
              <p className="text-2xl font-bold">CT Hub 2, Lobby 2, #01-60, Singapore 338729</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center space-y-2">
            <p className="text-lg">联系电话</p>
            <div className="space-y-1">
              <p className="text-xl">TEL:6324 4423</p>
              <p className="text-xl">HP:83374088</p>
            </div>
          </div>

          {/* Email and Website */}
          {/* <div className="text-center space-y-2">
            <p className="text-lg lowercase">CUSTMERCARE@GLORIAPHOTOSTUDIO.COM</p>
            <p className="text-lg">WWW.GLORIAPHOTOSTUDIO.COM</p>
          </div> */}
        </Card>
      </div>
    </div>
  )
}

