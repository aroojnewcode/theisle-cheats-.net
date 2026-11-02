import type { FaqCopy } from '../types';

export const FAQ_KO: Record<string, FaqCopy> = {
  status: {
    q: 'The Isle 치트가 온라인인지 어디서 확인하나요?',
    a: 'theisle-cheats.net 라이브 상태 배너와 Discord #status 채널에서 확인하세요. The Isle 또는 EAC(안티치트) 업데이트 후에는 반드시 다시 확인하세요.',
  },
  'after-buy': {
    q: '구매 후 무엇이 제공되나요?',
    a: '포털에서 로더, 설치 가이드, 설정 라이브러리가 잠금 해제됩니다. The Isle을 실행하기 전에 가이드를 따라 주세요.',
  },
  'ban-risk': {
    q: '프라이빗 The Isle 치트/핵을 쓰면 밴될 수 있나요?',
    a: '네—모든 변조에는 위험이 있습니다. 안티치트와 신고 시스템은 계속 진화합니다. 현재 상태를 확인하고 위험을 감수한 뒤 사용하세요.',
  },
  platforms: {
    q: '어떤 플랫폼을 지원하나요?',
    a: '공식 런처 The Isle, Windows 10/11 64비트만 지원합니다. macOS와 Linux는 지원하지 않습니다.',
  },
  'license-move': {
    q: '새 PC로 라이선스를 옮길 수 있나요?',
    a: '네—포털의 HWID 리셋 또는 Discord 티켓을 이용하세요. 횟수 제한은 티어에 따라 다릅니다.',
  },
  'products-page': {
    q: '제품과 유틸리티는 어디에 있나요?',
    a: 'The Isle 치트 제품 페이지에 Lite/Pro/Elite, HWID 스푸퍼, UGC, 코스튬 체인저 기능 목록과 체크아웃이 있습니다.',
  },
  'what-is-esp': {
    q: 'The Isle ESP 월핵 / ESP란?',
    a: 'ESP 월핵과 플레이어 ESP는 Evrima 지형 너머로 적 위치, 드롭, 루트, 캠프를 표시합니다. Lite는 정보 오버레이, Pro·Elite는 스크립트 모듈을 추가합니다.',
  },
  'esp-vs-scripts': {
    q: 'ESP 월핵과 에임봇의 차이는?',
    a: 'ESP 월핵/ESP는 정보 오버레이이며 스킬을 자동 사용하지 않습니다. 에임봇, Smooth Aim, Sticky Aim은 Pro·Elite의 조준 보조입니다. Lite는 인식 전용입니다.',
  },
  'which-tier-esp': {
    q: 'ESP 월핵만 필요하면 어떤 티어?',
    a: 'Lite는 인식 전용: 플레이어 ESP, 드롭, 루트 타이머, 레이더 핵. Pro는 에임봇, Elite는 봇·킬 스틸·코스튬 체인저까지.',
  },
  'which-tier-scripts': {
    q: '에임봇이 포함된 티어는?',
    a: 'Pro에 Aimbot, Smooth Aim, Sticky Aim, 핫키 매크로. Elite는 Pro 전부 + Farm Assist, Auto Kill. Lite에는 스킬 자동화가 없습니다.',
  },
  'rank-lite-vs-pro': {
    q: 'Lite·Pro·Elite는 어떻게 고르나요?',
    a: '맵 인식만 → Lite. Evrima 교전에 에임봇 → Pro. 풀 봇 스위트·우선 패치 → Elite. 각 치트 페이지 또는 FAQ에서 비교하세요.',
  },
  'elite-slots': {
    q: 'Elite 슬롯이 제한되는 이유는?',
    a: 'Elite는 개발자 직접 지원과 우선 패치가 있는 프라이빗 빌드입니다. 슬롯 제한으로 패치 주기를 빠르게 유지합니다. 결제 전 상태 배너를 확인하세요.',
  },
  'stream-proof': {
    q: 'OBS가 오버레이를 캡처하나요?',
    a: 'Lite·Pro·Elite의 스트림 프루프 모드는 OBS와 Discord 화면 공유에서 오버레이를 숨깁니다. 방송 전 로컬 녹화로 테스트하세요.',
  },
  undetected: {
    q: '미탐지 The Isle 치트가 보장되나요?',
    a: '아니요. 미탐지는 제품 페이지의 현재 상태일 뿐 영구 보장이 아닙니다. 업데이트·테스트·탐지 중이면 즉시 중단하세요.',
  },
  'esp-safer': {
    q: 'ESP 월핵이 에임봇보다 안전한가요?',
    a: '리플레이에서는 봇 패턴보다 덜 눈에 띌 수 있지만 여전히 치트입니다. 에임봇을 끄더라도 안티치트가 오버레이를 무시하지 않습니다.',
  },
  'hwid-when': {
    q: 'HWID 스푸퍼는 언제 필요한가요?',
    a: '새 EAC 계정이 한 PC에서만 즉시 실패하고 다른 PC에서는 될 때—하드웨어 제재입니다. 계정만 문제면 UGC를 참고하세요.',
  },
  'ugc-what': {
    q: 'UGC란?',
    a: 'UGC(Unban & Governance Control)는 EAC 계정 제한·안티치트 밴에 대한 이의 신청 워크스페이스입니다. 워크플로와 추적이며, 언밴을 보장하지 않습니다.',
  },
  'skin-changer': {
    q: '코스튬 체인저가 내 의상을 바꾸나요?',
    a: '로컬 클라이언트에서 코스메틱 미리보기만 합니다. 다른 플레이어는 실제 인벤토리를 봅니다. Elite 포함, 단독 구매는 미리보기 전용입니다.',
  },
  'external-loader': {
    q: '로더가 EAC 폴더에 인젝션하나요?',
    a: 'The Isle Cheats는 외부 방식과 클라우드 설정 동기화를 사용하며 The Isle 폴더에 파일을 넣지 않습니다. 안티치트 위험은 여전히 있습니다.',
  },
  'blog-vs-cheats': {
    q: '블로그 치트 코드가 Evrima 치트와 같나요?',
    a: '아니요. 블로그의 EAC 콘솔 명령은 치트가 켜진 커스텀 로비에서만 적용됩니다. Evrima용 The Isle 치트는 theisle-cheats.net 티어 별도 제품입니다.',
  },
  'blog-setup': {
    q: '블로그 설치 가이드의 구매 링크는?',
    a: '가이드는 티어 페이지와 제품 허브로 연결됩니다. 체크아웃은 안전한 파트너 경유—모르는 Discord DM의 로더는 사용하지 마세요.',
  },
  'compare-plans': {
    q: '플랜을 나란히 비교하려면?',
    a: '각 치트 티어 페이지에 비교 표가 있습니다. FAQ에 제품·치트·블로그 답변을 모아 두었습니다.',
  },
  'who-lite': {
    q: 'Lite가 맞는 사용자는?',
    a: 'ESP·드롭·루트 등 맵 인식만 원하고 스킬 자동화를 쓰지 않을 사람. 콤보 에임봇을 계속 켠다면 Pro를 구매하세요.',
  },
  'who-pro': {
    q: 'Pro를 사야 할 사람은?',
    a: 'ESP 월핵과 Aimbot, Smooth Aim, 핫키 매크로를 원하는 Evrima 플레이어. theisle-cheats.net에서 가장 인기 있는 티어입니다.',
  },
  'who-elite': {
    q: 'Elite를 사야 할 사람은?',
    a: 'Farm Assist, Auto Kill, 코스튬 체인저, 슬롯이 열려 있을 때 우선 패치가 필요한 헤비 유저.',
  },
  'eac-update': {
    q: '안티치트 업데이트 후에는?',
    a: 'theisle-cheats.net 상태와 Discord #status를 확인하세요. 배너가 online일 때까지 실행하지 마세요. 패치 후에는 보수적 프리셋을 로드하세요.',
  },
  'discord-help': {
    q: '설치 도움은 어떻게 받나요?',
    a: '구매 후 Discord에서 주문 이메일, Windows 버전, The Isle 클라이언트 빌드를 알려 주세요. 스태프가 로더 설정을 안내합니다.',
  },
  'zero-build-ranked': {
    q: '인스턴스와 Evrima PvP에서 작동하나요?',
    a: '네—Lite·Pro·Elite에 인스턴스·Evrima 프리셋이 포털에 있습니다. 첫 큐 전에 거리 상한과 스크립트 딜레이를 조정하세요.',
  },
  'zoom-hack': {
    q: '레이더 핵은 어떤 티어?',
    a: '레이더는 Lite부터 Pro·Elite까지 포함됩니다. 미니 레이더로 존 인식에 도움이 됩니다.',
  },
  'auto-farm': {
    q: 'Farm Assist는 어떤 티어?',
    a: 'Farm Assist, Flight Assist AI, 자동 로드아웃은 Elite 전용. Pro는 전투 에임봇만 제공하며 봇 파밍은 없습니다.',
  },
  'private-cheats': {
    q: '프라이빗 The Isle 치트란?',
    a: '사용자별 키와 유지보수되는 빌드—공개 zip 팩이 아닙니다. The Isle Cheats는 포털로 ESP·에임봇·월핵 티어를 제공합니다.',
  },
  'faq-more': {
    q: '전체 FAQ는 어디에 있나요?',
    a: '랜딩 FAQ와 페이지별 섹션이 있습니다. FAQ 페이지에서 제품·치트·블로그 답변 전체를 보거나 블로그 가이드에서 심화 내용을 읽으세요.',
  },
  'blog-guide-start': {
    q: 'Evrima PvP에서 트레이닝 치트 코드를 써도 되나요?',
    a: '아니요. 트레이닝 로비 치트 코드는 치트가 켜진 커스텀 게임에서만 작동합니다. Evrima에는 theisle-cheats.net 티어의 별도 The Isle 치트가 필요합니다.',
  },
  'blog-guide-tier': {
    q: '이 가이드에 맞는 티어는?',
    a: '인식 가이드 → Lite. 스크립트·콤보 가이드 → Pro. 봇·킬 스틸 주제 → Elite.',
  },
  'blog-guide-status': {
    q: '패치 후에도 이 가이드가 유효한가요?',
    a: '글 날짜와 라이브 상태 배너를 확인하세요. 패치 당일 글은 모듈 변경을 표시합니다—Discord #status에 최신 빌드 노트가 있습니다.',
  },
  'blog-setup-loader': {
    q: '로더는 어디서 받나요?',
    a: '결제 후 운영자 포털에서만—댓글이나 DM의 비공식 링크는 사용하지 마세요.',
  },
  'blog-setup-lobby': {
    q: '로비에서 먼저 테스트해야 하나요?',
    a: '네. Evrima PvP 전에 로비나 인스턴스에서 보수적 프리셋을 로드하세요. 여러 세션에 걸쳐 스크립트 딜레이와 ESP 거리 상한을 조정하세요.',
  },
  'blog-sec-eac': {
    q: '이 글이 미탐지를 보장하나요?',
    a: '어떤 글도 라이브 상태 배너를 대체하지 않습니다. 미탐지는 특정 시점의 라벨—업데이트·탐지 중이면 중단하세요.',
  },
  'blog-default-1': {
    q: '블로그 가이드가 공식 제품 문서인가요?',
    a: '글은 워크플로를 설명하고 Lite·Pro·Elite·제품 허브로 연결합니다. 체크아웃 기준 기능 목록은 제품 페이지가 authoritative합니다.',
  },
  'blog-default-2': {
    q: '가이드 적용에 도움이 필요하면?',
    a: 'Discord에서 주문 이메일과 글 slug를 알려 주세요. 스태프는 가이드에 나온 것과 같은 포털 프리셋을 참조합니다.',
  },
  'blog-default-3': {
    q: '다음 패치에도 이 설정이 통하나요?',
    a: 'The Isle 업데이트마다 상태를 재확인하세요. 포털 프리셋은 패치 노트와 함께 갱신—옛 슬라이더를 복사하지 말고 설정을 다시 로드하세요.',
  },
  'blog-slug-esp': {
    q: '이 글의 ESP 월핵은 어떤 티어?',
    a: 'Lite에 플레이어 ESP, 드롭 로케이터, 루트 타이머. Pro는 같은 오버레이 스택에 전투 에임봇을 추가합니다.',
  },
  'blog-slug-scripts': {
    q: '이 글의 에임봇은 어떤 티어?',
    a: 'Pro·Elite에 Aimbot 및 관련 모듈. Lite는 ESP 월핵만.',
  },
  'blog-slug-hwid': {
    q: '이 글이 HWID·UGC 제품을 대체하나요?',
    a: '복구 가이드는 HWID 스푸퍼·UGC를 보완합니다—워크플로 범위와 현실적 결과는 제품 페이지를 읽으세요.',
  },
};
