import Image from "next/image"

export default function PortraitOfGordon() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/p.jpg"
          alt="Portrait photography with natural lighting"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end">
        <div className="w-full max-w-4xl mx-auto px-4 pb-16 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            PORTRAIT OF
            <br />
            RAFFLES
          </h1>

          <div className="space-y-8">
            <div>
              <p className="text-2xl md:text-3xl mb-2">
                We capture moments through the lens
                <br />
                enhancing with thoughtful makeup artistry
              </p>
              <p className="text-lg md:text-xl text-white/90">
                我们用镜头记录 我们用妆容点缀
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl mb-2">
                Our work goes beyond simply photographing people.
                <br />
                we create portraits about people.
              </p>
              <p className="text-lg md:text-xl text-white/90">
                {`我们不是拍摄"有人"的照片 而是拍摄"关于人"的照片`}
              </p>
            </div>

            <hr className="border-white/20 my-8" />

            <div className="space-y-4">
              <p className="text-lg md:text-xl uppercase tracking-wide">
                GUIDED BY PRINCIPLES OF AUTHENTICITY, SIMPLICITY, AND NATURAL BEAUTY,
              </p>
              <p className="text-lg md:text-xl uppercase tracking-wide">
                WE CRAFT IMAGES WITH RICH TONAL DEPTH, INTRICATE LAYERING, AND A STRIKING
              </p>
              <p className="text-lg md:text-xl uppercase tracking-wide">
                INTERPLAY OF DIMENSIONAL LIGHT AND SHADOW.
              </p>
              <p className="text-lg md:text-xl uppercase tracking-wide">
                THROUGH THESE COMPOSITIONS, WE REVEAL THE INNER EMOTIONS OF OUR SUBJECTS,
              </p>
              <p className="text-lg md:text-xl uppercase tracking-wide">
                CREATING WORKS THAT RESONATE WITH THE SOUL.
              </p>
            </div>

            <div className="text-lg md:text-xl text-white/90">
              <p>以真实、简单、自然为拍摄理念 丰富的影调、细腻的层次</p>
              <p>极致的空间立体光影艺术和技法 用镜头展现人物内心情感 打造真实的灵魂作品</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

