export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center bg-black text-white">
        <h1 className="text-3xl font-bold mb-6 leading-tight">
          환경을 사랑하는 러너의 <br />가장 뜨거운 인증샷 
        </h1>
        <p className="text-base leading-relaxed opacity-90">
          탄소중립을 향한 5,000여 명의 뜨거운 발걸음.<br />
          오늘 우리가 남긴 한 장의 사진이<br />
	  푸른 지구를 만드는 원동력이 됩니다.<br />
        </p>
        <p className="text-base leading-relaxed opacity-90 mt-4">
          건강한 레이스의 마침표,<br />
          기부 포토부스에서 완성하세요.
        </p>
      </section>

      {/* 이용 방법 */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">
          이용 순서,<br />미리 확인하고 빠르게 촬영하세요!
        </h2>
        
        <div className="space-y-6 mt-8 max-w-md mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div className="pt-1">
              <p className="font-semibold">사전 결제 확인 후 촬영 시작</p>
              <p className="text-sm text-gray-600 mt-1">(맨 아래 결제 안내 참고)</p>
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
            촬영 순서가 되면, <br />스태프에게 <span className="font-bold">[결제 완료 화면]</span>을 꼭 보여주세요.
          </p>
        </div>
      </section>

      {/* 구분선 */}
      <div className="h-2 bg-black mx-6"></div>

      {/* 프레임 선택 - 2x2 그리드 */}
{/* 프레임 선택 - 첫 줄 3개, 둘째 줄 2개 (중앙) */}
<section className="px-6 py-12 bg-white">
  <h2 className="text-2xl font-bold mb-3 text-center">프레임 미리보기</h2>
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

      {/* 결제 안내 - 대기동선 아래로 이동 */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-3 text-center">결제 안내</h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          대기줄 최소화를 위해 사전결제로 진행됩니다.<br />
	  촬영 순서가 되면, 결제 완료 창을 보여주세요!<br/>
          촬영 수익금의 일부는 환경 보호를 위해 기부됩니다.
        </p>

        {/* 결제 옵션 카드 */}
        <div className="space-y-3 max-w-md mx-auto">
          <div className="pt-4"> 
            <a 
              href="https://qr.kakaopay.com/Ej7klol3J"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-yellow-300 border-2 border-yellow-400 rounded-xl hover:bg-yellow-400 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">💰</span>
                <p className="font-bold text-gray-800">보다 빠른 카카오페이 송금</p>
              </div>
            </a>
            <p className="text-center font-semibold text-gray-800 mb-3">또는</p>
          </div>
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
                <p className="text-sm text-gray-600 mt-1">같은 프레임 2장이 출력됩니다</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">4,000원</p>
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
                <p className="text-sm text-gray-600 mt-1">같은 프레임 4장이 출력됩니다</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">6,000원</p>
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
                <p className="text-sm text-gray-600 mt-1">같은 프레임 6장이 출력됩니다</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">8,000원</p>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* Footer */}
      <section className="px-6 py-16 bg-black text-white text-center">
        <p className="text-base leading-relaxed mb-6">
          오늘 함께하신 모든 분들의 앞날에<br />
          건강과 행복이 가득하길 기원합니다.
        </p>
        <p className="text-base leading-relaxed mb-8">
          된다! 된다!<br />
          잘 된다! 더 잘 된다!
        </p>

        <div className="mt-8">
          <p className="text-sm mb-3 opacity-80">누비포토</p>
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
