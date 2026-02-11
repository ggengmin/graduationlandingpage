export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center bg-black text-white">
        <h1 className="text-3xl font-bold mb-6 leading-tight">
          2025 Dongseo Univ.<br />Graduation
        </h1>
        <p className="text-base leading-relaxed opacity-90">
          가장 빛나는 오늘의 당신을 위해<br />
          특별한 포토부스를 준비했습니다.
        </p>
        <p className="text-base leading-relaxed opacity-90 mt-4">
          소중한 동기, 가족들과 함께<br />
          마지막 교정의 추억을 남겨보세요.
        </p>
      </section>

      {/* 운영 안내 */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">운영 안내</h2>
        <div className="space-y-3 max-w-md mx-auto">
          <div className="flex items-start">
            <span className="font-semibold min-w-[60px]">일자</span>
            <span className="text-gray-700">2026. 2. 13. (금)</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold min-w-[60px]">시간</span>
            <span className="text-gray-700">10:00 – 15:00</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold min-w-[60px]">장소</span>
            <span className="text-gray-700">뉴밀레니엄관</span>
          </div>
        </div>
      </section>

      {/* 구분선 */}
      <div className="h-2 bg-black mx-6"></div>

      {/* 이용 방법 */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">
          복잡한 졸업식장,<br />미리 확인하고 빠르게 촬영하세요!
        </h2>
        
        <div className="space-y-6 mt-8 max-w-md mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div className="pt-1">
              <p className="font-semibold">사전 결제</p>
              <p className="text-sm text-gray-600 mt-1">(아래 옵션 중 선택)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div className="pt-1">
              <p className="font-semibold">프레임 선택</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div className="pt-1">
              <p className="font-semibold">4컷 촬영 후 베스트 3컷 선택</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div className="pt-1">
              <p className="font-semibold">출력 및 QR 다운로드</p>
              <p className="text-sm text-gray-600 mt-1">(프레임에 찍혀서 나와요)</p>
            </div>
          </div>
        </div>

        {/* 알림 박스 */}
        <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-black max-w-md mx-auto">
          <p className="font-bold mb-2">💡 확인해 주세요!</p>
          <p className="text-sm leading-relaxed">
            촬영 전, 스태프에게 <span className="font-bold">[결제 완료 화면]</span>을 꼭 보여주세요.
          </p>
        </div>

        {/* 결제 옵션 카드 */}
        <div className="mt-8 space-y-3 max-w-md mx-auto">
          <p className="text-center font-semibold text-gray-800 mb-4">💳 장수별 결제</p>
          
          <a 
            href="https://ciderpay.com/l/Mmyl42"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white border-2 border-gray-800 rounded-xl hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-800">2장</p>
                <p className="text-sm text-gray-600 mt-1">포토 2컷</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">3,000원</p>
              </div>
            </div>
          </a>

          <a 
            href="https://ciderpay.com/l/UADUfu"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white border-2 border-gray-800 rounded-xl hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-800">4장</p>
                <p className="text-sm text-gray-600 mt-1">포토 4컷</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">5,000원</p>
              </div>
            </div>
          </a>

          <a 
            href="https://ciderpay.com/l/qQYy6c"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white border-2 border-gray-800 rounded-xl hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-800">6장</p>
                <p className="text-sm text-gray-600 mt-1">포토 6컷</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">7,000원</p>
              </div>
            </div>
          </a>

          <div className="pt-4">
            <p className="text-center font-semibold text-gray-800 mb-3">또는</p>
            <a 
              href="https://qr.kakaopay.com/Ej7klol3J"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-yellow-300 border-2 border-yellow-400 rounded-xl hover:bg-yellow-400 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">💰</span>
                <p className="font-bold text-gray-800">카카오페이 바로송금</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 구분선 */}
      <div className="h-2 bg-black mx-6"></div>

{/* 프레임 선택 - 2x2 그리드 */}
<section className="px-6 py-12 bg-white">
  <h2 className="text-2xl font-bold mb-3 text-center">프레임 선택</h2>
  <p className="text-center text-gray-600 mb-8 text-sm">
    촬영 전, 아래 4가지 프레임 중 하나를 미리 골라주세요
  </p>
  
  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
    <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[2/3] flex items-center justify-center">
      <img 
        src="/a.png" 
        alt="프레임 1" 
        className="w-full h-full object-contain"
      />
    </div>
    <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[2/3] flex items-center justify-center">
      <img 
        src="/a2.png" 
        alt="프레임 2" 
        className="w-full h-full object-contain"
      />
    </div>
    <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[2/3] flex items-center justify-center">
      <img 
        src="/a3.png" 
        alt="프레임 3" 
        className="w-full h-full object-contain"
      />
    </div>
    <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[2/3] flex items-center justify-center">
      <img 
        src="/a4.png" 
        alt="프레임 4" 
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

      {/* 구분선 */}
      <div className="h-2 bg-black mx-6"></div>

      {/* 추가 즐길거리 */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-3 text-center">
          사진 말고도,<br />즐길 거리가 있어요
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm leading-relaxed">
          기다리는 시간까지도 기억이 되도록 준비했어요.<br />
          포토부스 외에도 곳곳에 숨겨진 재미를 찾아보세요!
        </p>

        <div className="space-y-6 max-w-md mx-auto">
          <div className="p-5 border-2 border-black rounded-lg">
            <h3 className="font-bold text-lg mb-2">우리들의 방명록</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              각 주제에 대해 자유롭게 작성해주세요. 우리의 이야기가 모여 하나의 추억이 됩니다.
            </p>
          </div>

          <div className="p-5 border-2 border-black rounded-lg">
            <h3 className="font-bold text-lg mb-2">실시간 메세징 웹캠 포토존</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              QR을 찍고 메시지를 보내면 5초 동안, 실시간으로 캠에 떠오릅니다.
            </p>
          </div>
        </div>
      </section>

      {/* 구분선 */}
      <div className="h-2 bg-black mx-6"></div>

      {/* 대기동선 안내 */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-3 text-center">대기동선 안내</h2>
        <p className="text-center text-gray-600 mb-8 text-sm leading-relaxed">
          원활한 진행을 위해 안내된 동선을<br />따라 줄을 서주시면 감사하겠습니다.
        </p>
        
        <div className="max-w-md mx-auto">
          <img 
            src="/waitingline.jpg" 
            alt="대기동선 안내" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <section className="px-6 py-16 bg-black text-white text-center">
        <p className="text-base leading-relaxed mb-6">
          동서대학교에서의 모든 시간이<br />
          당신의 앞날에 밑거름이 되길 응원합니다.
        </p>
        <p className="text-base leading-relaxed mb-8">
          오늘의 졸업이<br />
          오래 꺼내보고 싶은 추억이 되길 바라요.
        </p>

        <div className="mt-8">
          <p className="text-sm mb-3 opacity-80">📷 누비포토 인스타그램</p>
          <a 
            href="https://www.instagram.com/nuvy.photo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            @nuvy.photo
          </a>
        </div>
      </section>
    </main>
  )
}