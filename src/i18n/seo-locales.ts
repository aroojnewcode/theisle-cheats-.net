import { PRODUCT_BASE } from '../config/site';

/**
 * Localized <title> / meta description per page path (without locale prefix).
 * Keys: locale code → page path → SEO strings.
 * English lives in the default page props; this covers non-default locales.
 */
const P = PRODUCT_BASE;
const ELITE = `${P}elite/`;
const UTIL = `${P}utilities/`;

export const PAGE_SEO_BY_LOCALE: Record<string, Record<string, { title: string; description: string }>> = {
  ko: {
    '/': {
      title: 'The Isle 치트 — 플레이어 ESP·레이더·Evrima (PC)',
      description:
        'PC용 The Isle 치트·핵: 플레이어·공룡 ESP, 둥지 레이더, 전투 어시스트, 스트림 프루프. Evrima 공식 서버, EAC 패치 후 NovaXware 로더 빠른 업데이트.',
    },
    [P]: {
      title: 'The Isle 치트 제품 — Elite, HWID 스푸퍼, UGC, 코스튬 | PC',
      description:
        'The Isle 치트 전 제품 비교: Elite ESP·월핵·스킬 어시스트, HWID 스푸퍼, UGC 계정 복구, 코스튬 체인저. Windows PC 전용, 디스코드 24시간 지원, 패치 후 즉시 업데이트.',
    },
    [ELITE]: {
      title: 'The Isle Elite 치트 — ESP, 오토 킬, 파밍 어시스트 | PC',
      description:
        'The Isle Elite: 풀 ESP 월핵, 직업 스킬 어시스트, Auto Kill, Auto Interrupt, 파밍 어시스트, 코스튬 체인저. 우선 패치 큐와 디스코드 직접 지원이 포함된 한정 슬롯 티어.',
    },
    [UTIL]: {
      title: 'The Isle 유틸리티 — HWID 스푸퍼·UGC·코스튬 체인저',
      description:
        'The Isle PC 유틸리티 모음: HWID 스푸퍼, UGC 언밴·제재 이의 제기 워크스페이스, 로컬 코스튬 체인저. 설치 가이드와 디스코드 지원, 안티치트 패치 후 호환 업데이트 제공.',
    },
    '/blog/': {
      title: 'The Isle 치트 블로그 — 가이드·패치 노트·Evrima 팁',
      description:
        'The Isle ESP 월핵 설정, Evrima 프리셋, 직업 스킬 어시스트, 안티치트 패치 체크리스트와 로더 업데이트 소식을 한곳에서. 설치 가이드와 최신 패치 노트를 확인하세요.',
    },
    '/faq/': {
      title: 'The Isle 치트 FAQ — 밴 위험·설치·HWID·환불 안내',
      description:
        'The Isle 치트 자주 묻는 질문: 온라인 상태 확인, 구매 후 이용 방법, 밴 위험, 지원 플랫폼, HWID 초기화, 라이선스 이전, 환불 정책까지 한 번에 확인하세요.',
    },
    '/support/': {
      title: 'The Isle Cheats 고객지원 — 로더·HWID·결제 도움',
      description:
        '로더 설치 오류, HWID 초기화, 결제·라이선스, 계정 문제를 디스코드 24시간 및 이메일로 지원합니다. 티켓에 포함할 정보와 빠른 해결 방법을 안내해 드립니다.',
    },
    '/about/': {
      title: 'The Isle Cheats 소개 — theisle-cheats.net 팀과 서비스',
      description:
        'theisle-cheats.net은 PC용 The Isle 치트 티어, 가이드, 유틸리티를 제공합니다. 패치 후 빠른 로더 업데이트와 디스코드 중심 지원 철학을 소개합니다.',
    },
    '/forum/': {
      title: 'The Isle 치트 포럼 — ESP·EAC·NovaXware Q&A',
      description:
        'The Isle 치트 커뮤니티: ESP·전투 어시스트 설정, Evrima 팁, EAC 패치 토론, NovaXware 로더 질문. theisle-cheats.net 가이드와 연결된 토론.',
    },
    '/privacy/': {
      title: '개인정보 처리방침 | The Isle Cheats',
      description:
        'theisle-cheats.net이 분석 도구, 쿠키, 주문·연락 데이터를 어떻게 수집하고 사용하는지, 그리고 이용자의 권리와 문의 방법을 안내하는 개인정보 처리방침입니다.',
    },
    '/terms/': {
      title: '이용약관 | The Isle Cheats',
      description:
        'theisle-cheats.net The Isle 치트 제품의 구매, 라이선스 범위, 환불, 책임 제한 및 계정 위험에 관한 이용약관입니다. 구매 전에 반드시 확인해 주세요.',
    },
  },

  'zh-tw': {
    '/': {
      title: 'The Isle 外掛 — ESP 透視、雷達、Evrima PvP 輔助（PC）',
      description:
        'PC 版 The Isle 外掛：玩家 ESP、穿牆透視、Evrima雷達、採集 ESP、職業技能輔助、服裝變更器。支援Evrima PvP 與副本，Steam/EAC 更新後快速跟進，Discord 24 小時客服。',
    },
    [P]: {
      title: 'The Isle 外掛產品總覽 — Elite、HWID、UGC、服裝變更器',
      description:
        '比較所有 The Isle 外掛產品：Elite ESP 穿牆與技能輔助、HWID 偽裝器、UGC 帳號申訴、服裝變更器。僅限 Windows PC，Discord 全天客服，更新後立即維護。',
    },
    [ELITE]: {
      title: 'The Isle Elite 外掛 — ESP 穿牆、自動擊殺、刷資源輔助',
      description:
        'The Isle Elite 完整功能：ESP 穿牆、職業技能輔助、自動擊殺、自動打斷、刷資源輔助、服裝變更器。限量名額，含優先更新佇列與 Discord 直接支援，適合Evrima與競技場。',
    },
    [UTIL]: {
      title: 'The Isle 工具 — HWID 偽裝、UGC 申訴、服裝變更器',
      description:
        'The Isle PC 實用工具：HWID 偽裝器、UGC 解封與處分申訴工作區、本機服裝變更器。附安裝指南與 Discord 客服，反作弊更新後同步提供相容版本。',
    },
    '/blog/': {
      title: 'The Isle 外掛部落格 — 攻略、更新紀錄、Evrima技巧',
      description:
        '一站掌握 The Isle ESP 穿牆設定、Evrima預設、職業技能輔助、反作弊更新檢查清單與載入器更新消息。查看安裝教學與最新更新紀錄，快速上手不踩雷。',
    },
    '/faq/': {
      title: 'The Isle 外掛常見問題 — 封號風險、安裝、HWID、退款',
      description:
        'The Isle 外掛常見問題：如何確認運作狀態、購買後如何使用、封號風險、支援平台、HWID 重置、授權轉移與退款政策，一次看懂，購買前先做功課。',
    },
    '/support/': {
      title: 'The Isle Cheats 客服支援 — 載入器、HWID、付款協助',
      description:
        '載入器安裝錯誤、HWID 重置、付款與授權、帳號問題，皆可透過 Discord 24 小時與電子郵件取得協助。了解客服單需附上的資料，更快解決問題。',
    },
    '/about/': {
      title: '關於 The Isle Cheats — theisle-cheats.net 團隊與服務',
      description:
        'theisle-cheats.net 專為 PC 玩家提供 The Isle 外掛方案、攻略與工具。了解我們如何在更新後快速推送載入器，並以 Discord 為核心提供貼心的客服。',
    },
    '/forum/': {
      title: 'The Isle 外掛論壇 — 設定分享、更新討論、問答',
      description:
        'The Isle 外掛玩家論壇：分享 ESP 與技能輔助設定、Evrima技巧、反作弊更新討論與載入器問答。與社群一起更安全、更有效率地完成設定。',
    },
    '/privacy/': {
      title: '隱私權政策 | The Isle Cheats',
      description:
        '說明 theisle-cheats.net 如何蒐集與使用分析工具、Cookie、訂單與聯絡資料，以及您的權利與聯絡方式。使用本站服務前，請先閱讀本隱私權政策。',
    },
    '/terms/': {
      title: '服務條款 | The Isle Cheats',
      description:
        'theisle-cheats.net The Isle 外掛產品的購買、授權範圍、退款、責任限制與帳號風險條款。購買前請詳細閱讀，了解雙方權利與義務，保障自身權益。',
    },
  },

  de: {
    '/': {
      title: 'The Isle Cheats — ESP, Radar & Evrima-PvP-Overlay für PC',
      description:
        'The Isle Cheats für den PC: Spieler-ESP, Wallhack, Evrima-Radar, Sammel-ESP, klassenbasierte Skill-Hilfe und Kostüm-Changer. Für PvP, Instanzen und Flugkämpfe, schnell nach Patches.',
    },
    [P]: {
      title: 'The Isle Cheat-Produkte — Elite, HWID-Spoofer, UGC, Kostüme',
      description:
        'Alle The Isle Produkte im Vergleich: Elite mit ESP, Wallhack und Skill-Hilfe, HWID-Spoofer, UGC-Kontowiederherstellung und Kostüm-Changer. Nur Windows, Discord-Support rund um die Uhr.',
    },
    [ELITE]: {
      title: 'The Isle Elite Cheats — ESP, Auto Kill & Farm-Assistent',
      description:
        'The Isle Elite: voller ESP-Wallhack, klassenbasierte Skill-Hilfe, Auto Kill, Auto Interrupt, Farm-Assistent und Kostüm-Changer. Begrenzte Plätze mit Prioritäts-Patches und direktem Discord-Support.',
    },
    [UTIL]: {
      title: 'The Isle Utilities — HWID-Spoofer, UGC & Kostüm-Changer',
      description:
        'The Isle PC-Utilities: HWID-Spoofer, UGC-Workspace für Bann-Einsprüche und lokaler Kostüm-Changer. Mit Installationsanleitung, Discord-Support und Updates nach jedem Anti-Cheat-Patch.',
    },
    '/blog/': {
      title: 'The Isle Cheat-Blog — Guides, Patchnotes & Evrima-Tipps',
      description:
        'The Isle ESP-Wallhack-Setup, Evrima-Presets, klassenbasierte Skill-Hilfe, Anti-Cheat-Patch-Checklisten und Loader-Updates. Installationsguides und aktuelle Patchnotes auf einen Blick.',
    },
    '/faq/': {
      title: 'The Isle Cheats FAQ — Bann-Risiko, Setup, HWID & Erstattung',
      description:
        'Häufige Fragen zu The Isle Cheats: Online-Status prüfen, Nutzung nach dem Kauf, Bann-Risiko, unterstützte Plattformen, HWID-Reset, Lizenzübertragung und Erstattungsrichtlinie.',
    },
    '/support/': {
      title: 'The Isle Cheats Support — Loader, HWID & Zahlung',
      description:
        'Hilfe bei Loader-Fehlern, HWID-Reset, Zahlung, Lizenz und Konto per Discord rund um die Uhr oder E-Mail. So gelingt dein Ticket: diese Angaben beschleunigen die Lösung.',
    },
    '/about/': {
      title: 'Über The Isle Cheats — Team und Service von theisle-cheats.net',
      description:
        'theisle-cheats.net bietet The Isle Cheat-Pakete, Guides und Utilities für PC-Spieler. Erfahre, wie wir Loader nach Patches schnell aktualisieren und über Discord unterstützen.',
    },
    '/forum/': {
      title: 'The Isle Cheats Forum — Setups teilen, Patches & Fragen',
      description:
        'Das The Isle Cheats Forum: ESP- und Skill-Hilfe-Setups teilen, Evrima-Tipps, Anti-Cheat-Patches besprechen und Loader-Fragen klären. Gemeinsam sicherer und schneller konfigurieren.',
    },
    '/privacy/': {
      title: 'Datenschutzerklärung | The Isle Cheats',
      description:
        'So nutzt theisle-cheats.net Analysen, Cookies sowie Bestell- und Kontaktdaten. Informationen zu deinen Rechten und Kontaktmöglichkeiten in unserer Datenschutzerklärung.',
    },
    '/terms/': {
      title: 'Nutzungsbedingungen | The Isle Cheats',
      description:
        'Kauf, Lizenzumfang, Erstattung, Haftungsbeschränkung und Kontorisiken für The Isle Cheat-Produkte von theisle-cheats.net. Bitte vor dem Kauf sorgfältig lesen.',
    },
  },

  'pt-br': {
    '/': {
      title: 'Cheats The Isle — ESP, Radar e Overlay PvP do Abismo (PC)',
      description:
        'Cheats de The Isle para PC: ESP de jogadores, wallhack, radar do Abismo, ESP de coleta, assistência de skills por classe e trocador de trajes. Atualizado após cada patch da Steam/EAC.',
    },
    [P]: {
      title: 'Produtos The Isle Cheats — Elite, HWID Spoofer, UGC e Trajes',
      description:
        'Compare todos os produtos de The Isle: Elite com ESP, wallhack e assistência de skills, spoofer de HWID, recuperação UGC e trocador de trajes. Só Windows, suporte 24h no Discord.',
    },
    [ELITE]: {
      title: 'The Isle Elite Cheats — ESP, Auto Kill e Assistência de Farm',
      description:
        'The Isle Elite: ESP wallhack completo, assistência de skills por classe, Auto Kill, Auto Interrupt, assistência de farm e trocador de trajes. Vagas limitadas com patches prioritários.',
    },
    [UTIL]: {
      title: 'Utilitários The Isle — Spoofer HWID, UGC e Trocador de Trajes',
      description:
        'Utilitários de The Isle para PC: spoofer de HWID, espaço UGC para apelar bans e trocador de trajes local. Guia de instalação, suporte no Discord e atualizações após patches anticheat.',
    },
    '/blog/': {
      title: 'Blog The Isle Cheats — Guias, Notas de Patch e Dicas do Abismo',
      description:
        'Configuração de ESP wallhack, presets do Abismo, assistência de skills por classe, checklists de patches anticheat e novidades do loader. Guias de instalação e notas de patch recentes.',
    },
    '/faq/': {
      title: 'FAQ The Isle Cheats — Risco de Ban, Instalação, HWID e Reembolso',
      description:
        'Dúvidas comuns sobre cheats de The Isle: status online, uso após a compra, risco de ban, plataformas suportadas, reset de HWID, troca de licença e política de reembolso.',
    },
    '/support/': {
      title: 'Suporte The Isle Cheats — Loader, HWID e Pagamento',
      description:
        'Ajuda com erros do loader, reset de HWID, pagamento, licença e conta pelo Discord 24h ou e-mail. Veja o que incluir no ticket para resolver tudo mais rápido.',
    },
    '/about/': {
      title: 'Sobre o The Isle Cheats — Equipe e Serviço do theisle-cheats.net',
      description:
        'O theisle-cheats.net oferece planos de cheats de The Isle, guias e utilitários para jogadores de PC. Conheça nosso foco em atualizar o loader rápido após patches e suporte via Discord.',
    },
    '/forum/': {
      title: 'Fórum The Isle Cheats — Configs, Patches e Perguntas',
      description:
        'Fórum de usuários de cheats de The Isle: compartilhe configs de ESP e assistência de skills, dicas do Abismo, discuta patches anticheat e tire dúvidas do loader com a comunidade.',
    },
    '/privacy/': {
      title: 'Política de Privacidade | The Isle Cheats',
      description:
        'Como o theisle-cheats.net usa análises, cookies, dados de pedido e contato, além dos seus direitos e formas de falar conosco. Leia nossa política antes de usar o site.',
    },
    '/terms/': {
      title: 'Termos de Serviço | The Isle Cheats',
      description:
        'Termos de compra, escopo da licença, reembolso, limitação de responsabilidade e riscos de conta dos produtos de The Isle do theisle-cheats.net. Leia com atenção antes de comprar.',
    },
  },

  th: {
    '/': {
      title: 'โกง The Isle — ESP เรดาร์ โอเวอร์เลย์ PvP อบิส (PC)',
      description:
        'โกง The Isle สำหรับ PC: ESP ผู้เล่น วอลล์แฮค เรดาร์อบิส ESP เก็บของ ตัวช่วยสกิลตามอาชีพ และเปลี่ยนชุดคอสตูม รองรับ PvP ดันเจี้ยน และการบิน อัปเดตไวหลังแพตช์ Steam/EAC',
    },
    [P]: {
      title: 'สินค้าโกง The Isle — Elite, HWID Spoofer, UGC, คอสตูม',
      description:
        'เปรียบเทียบสินค้า The Isle ทั้งหมด: Elite พร้อม ESP วอลล์แฮค ตัวช่วยสกิล, HWID Spoofer, กู้คืนบัญชี UGC และเปลี่ยนชุดคอสตูม รองรับ Windows เท่านั้น ซัพพอร์ต Discord 24 ชม.',
    },
    [ELITE]: {
      title: 'โกง The Isle Elite — ESP, Auto Kill, ตัวช่วยฟาร์ม',
      description:
        'The Isle Elite: ESP วอลล์แฮคเต็มรูปแบบ ตัวช่วยสกิลตามอาชีพ Auto Kill Auto Interrupt ตัวช่วยฟาร์ม และเปลี่ยนชุดคอสตูม จำนวนจำกัด พร้อมแพตช์ลำดับความสำคัญและซัพพอร์ต Discord',
    },
    [UTIL]: {
      title: 'ยูทิลิตี้ The Isle — HWID Spoofer, UGC, เปลี่ยนชุดคอสตูม',
      description:
        'ยูทิลิตี้ The Isle บน PC: HWID Spoofer, พื้นที่ UGC สำหรับอุทธรณ์แบน และเปลี่ยนชุดคอสตูมในเครื่อง พร้อมคู่มือติดตั้ง ซัพพอร์ต Discord และอัปเดตหลังแพตช์แอนตี้โกง',
    },
    '/blog/': {
      title: 'บล็อกโกง The Isle — คู่มือ บันทึกแพตช์ เคล็ดลับอบิส',
      description:
        'ตั้งค่า ESP วอลล์แฮค พรีเซ็ตอบิส ตัวช่วยสกิลตามอาชีพ เช็กลิสต์แพตช์แอนตี้โกง และข่าวอัปเดตโหลดเดอร์ ครบทั้งคู่มือติดตั้งและบันทึกแพตช์ล่าสุด อ่านได้ที่นี่',
    },
    '/faq/': {
      title: 'FAQ โกง The Isle — ความเสี่ยงแบน ติดตั้ง HWID คืนเงิน',
      description:
        'คำถามที่พบบ่อยเกี่ยวกับโกง The Isle: เช็กสถานะออนไลน์ การใช้งานหลังซื้อ ความเสี่ยงโดนแบน แพลตฟอร์มที่รองรับ รีเซ็ต HWID ย้ายไลเซนส์ และนโยบายคืนเงิน',
    },
    '/support/': {
      title: 'ซัพพอร์ต The Isle Cheats — โหลดเดอร์ HWID การชำระเงิน',
      description:
        'ช่วยเรื่องโหลดเดอร์ผิดพลาด รีเซ็ต HWID การชำระเงิน ไลเซนส์ และบัญชี ผ่าน Discord 24 ชม. หรืออีเมล ดูข้อมูลที่ควรแนบในทิกเก็ตเพื่อแก้ปัญหาให้เร็วขึ้น',
    },
    '/about/': {
      title: 'เกี่ยวกับ The Isle Cheats — ทีมและบริการของ theisle-cheats.net',
      description:
        'theisle-cheats.net ให้บริการแพ็กเกจโกง The Isle คู่มือ และยูทิลิตี้สำหรับผู้เล่น PC เรามุ่งอัปเดตโหลดเดอร์ไวหลังแพตช์ พร้อมซัพพอร์ตผ่าน Discord ตลอดเวลา',
    },
    '/forum/': {
      title: 'ฟอรัมโกง The Isle — แชร์คอนฟิก คุยแพตช์ ถามตอบ',
      description:
        'ฟอรัมผู้ใช้โกง The Isle: แชร์คอนฟิก ESP และตัวช่วยสกิล เคล็ดลับอบิส พูดคุยเรื่องแพตช์แอนตี้โกง และถามปัญหาโหลดเดอร์กับชุมชน ตั้งค่าได้ปลอดภัยและเร็วขึ้น',
    },
    '/privacy/': {
      title: 'นโยบายความเป็นส่วนตัว | The Isle Cheats',
      description:
        'theisle-cheats.net ใช้ข้อมูลวิเคราะห์ คุกกี้ ข้อมูลคำสั่งซื้อและข้อมูลติดต่ออย่างไร รวมถึงสิทธิ์ของคุณและช่องทางติดต่อ โปรดอ่านก่อนใช้บริการของเรา',
    },
    '/terms/': {
      title: 'ข้อกำหนดการใช้บริการ | The Isle Cheats',
      description:
        'เงื่อนไขการซื้อ ขอบเขตไลเซนส์ การคืนเงิน การจำกัดความรับผิด และความเสี่ยงต่อบัญชีสำหรับสินค้า The Isle ของ theisle-cheats.net โปรดอ่านให้ครบก่อนตัดสินใจซื้อ',
    },
  },

  ja: {
    '/': {
      title: 'The Isle チート — ESP・レーダー・アビス PvP オーバーレイ（PC）',
      description:
        'PC 向け The Isle チート：プレイヤー ESP、ウォールハック、アビスレーダー、採取 ESP、クラス別スキルアシスト、コスチュームチェンジャー。PvP・インスタンス対応、パッチ後も迅速に更新。',
    },
    [P]: {
      title: 'The Isle チート製品一覧 — Elite・HWID・UGC・コスチューム',
      description:
        'The Isle の全製品を比較：ESP・ウォールハック・スキルアシストの Elite、HWID スプーファー、UGC アカウント復旧、コスチュームチェンジャー。Windows 専用、Discord 24 時間サポート。',
    },
    [ELITE]: {
      title: 'The Isle Elite チート — ESP・Auto Kill・周回アシスト',
      description:
        'The Isle Elite：フル ESP ウォールハック、クラス別スキルアシスト、Auto Kill、Auto Interrupt、周回アシスト、コスチュームチェンジャー。限定枠で優先パッチと Discord 直接サポート付き。',
    },
    [UTIL]: {
      title: 'The Isle ユーティリティ — HWID・UGC・コスチュームチェンジャー',
      description:
        'The Isle PC 向けユーティリティ：HWID スプーファー、BAN 異議申し立ての UGC ワークスペース、ローカルのコスチュームチェンジャー。導入ガイドと Discord サポート、パッチ後の更新付き。',
    },
    '/blog/': {
      title: 'The Isle チートブログ — ガイド・パッチノート・アビス攻略',
      description:
        'The Isle ESP ウォールハックの設定、アビスプリセット、クラス別スキルアシスト、アンチチートパッチのチェックリスト、ローダー更新情報。導入ガイドと最新パッチノートをまとめて確認。',
    },
    '/faq/': {
      title: 'The Isle チート FAQ — BAN リスク・導入・HWID・返金',
      description:
        'The Isle チートのよくある質問：稼働状況の確認、購入後の使い方、BAN リスク、対応プラットフォーム、HWID リセット、ライセンス移行、返金ポリシーをわかりやすく解説します。',
    },
    '/support/': {
      title: 'The Isle Cheats サポート — ローダー・HWID・決済',
      description:
        'ローダーのエラー、HWID リセット、決済・ライセンス、アカウントの問題を Discord（24 時間）とメールでサポート。チケットに含める情報を確認して、素早く解決しましょう。',
    },
    '/about/': {
      title: 'The Isle Cheats について — theisle-cheats.net のチームとサービス',
      description:
        'theisle-cheats.net は PC プレイヤー向けに The Isle チートのプラン、ガイド、ユーティリティを提供します。パッチ後の迅速なローダー更新と Discord 中心のサポート体制をご紹介します。',
    },
    '/forum/': {
      title: 'The Isle チートフォーラム — 設定共有・パッチ議論・質問',
      description:
        'The Isle チートユーザーのフォーラム：ESP やスキルアシストの設定共有、アビスのコツ、アンチチートパッチの議論、ローダーの質問。コミュニティと一緒に安全に素早くセットアップ。',
    },
    '/privacy/': {
      title: 'プライバシーポリシー | The Isle Cheats',
      description:
        'theisle-cheats.net が分析ツール、Cookie、注文・連絡先データをどのように取得・利用するか、またお客様の権利とお問い合わせ方法を説明するプライバシーポリシーです。',
    },
    '/terms/': {
      title: '利用規約 | The Isle Cheats',
      description:
        'theisle-cheats.net の The Isle チート製品の購入、ライセンス範囲、返金、責任の制限、アカウントリスクに関する利用規約です。ご購入前に必ずお読みください。',
    },
  },

  es: {
    '/': {
      title: 'Cheats The Isle — ESP, Radar y Overlay PvP del Abismo (PC)',
      description:
        'Cheats de The Isle para PC: ESP de jugadores, wallhack, radar del Abismo, ESP de recolección, asistencia de habilidades por clase y cambiador de trajes. Actualizado tras cada parche.',
    },
    [P]: {
      title: 'Productos The Isle Cheats — Elite, HWID Spoofer, UGC y Trajes',
      description:
        'Compara todos los productos de The Isle: Elite con ESP, wallhack y asistencia de habilidades, spoofer de HWID, recuperación UGC y cambiador de trajes. Solo Windows, soporte 24h por Discord.',
    },
    [ELITE]: {
      title: 'The Isle Elite Cheats — ESP, Auto Kill y Asistencia de Farmeo',
      description:
        'The Isle Elite: ESP wallhack completo, asistencia de habilidades por clase, Auto Kill, Auto Interrupt, asistencia de farmeo y cambiador de trajes. Plazas limitadas con parches prioritarios.',
    },
    [UTIL]: {
      title: 'Utilidades The Isle — Spoofer HWID, UGC y Cambiador de Trajes',
      description:
        'Utilidades de The Isle para PC: spoofer de HWID, espacio UGC para apelar bans y cambiador de trajes local. Guía de instalación, soporte en Discord y actualizaciones tras parches anticheat.',
    },
    '/blog/': {
      title: 'Blog The Isle Cheats — Guías, Notas de Parche y Tips del Abismo',
      description:
        'Configuración de ESP wallhack, presets del Abismo, asistencia por clase, listas de verificación de parches anticheat y novedades del loader. Guías de instalación y notas de parche recientes.',
    },
    '/faq/': {
      title: 'FAQ The Isle Cheats — Riesgo de Ban, Instalación, HWID y Reembolso',
      description:
        'Preguntas frecuentes sobre cheats de The Isle: estado en línea, uso tras la compra, riesgo de ban, plataformas compatibles, reinicio de HWID, traslado de licencia y reembolsos.',
    },
    '/support/': {
      title: 'Soporte The Isle Cheats — Loader, HWID y Pagos',
      description:
        'Ayuda con errores del loader, reinicio de HWID, pagos, licencia y cuenta por Discord las 24 horas o por correo. Descubre qué incluir en tu ticket para resolverlo más rápido.',
    },
    '/about/': {
      title: 'Acerca de The Isle Cheats — Equipo y Servicio de theisle-cheats.net',
      description:
        'theisle-cheats.net ofrece planes de cheats de The Isle, guías y utilidades para jugadores de PC. Conoce nuestro enfoque: loaders actualizados rápido tras parches y soporte por Discord.',
    },
    '/forum/': {
      title: 'Foro The Isle Cheats — Configs, Parches y Preguntas',
      description:
        'Foro de usuarios de cheats de The Isle: comparte configs de ESP y asistencia de habilidades, consejos del Abismo, debate parches anticheat y resuelve dudas del loader con la comunidad.',
    },
    '/privacy/': {
      title: 'Política de Privacidad | The Isle Cheats',
      description:
        'Cómo theisle-cheats.net usa analítica, cookies, datos de pedidos y de contacto, además de tus derechos y vías de contacto. Lee nuestra política antes de usar el sitio.',
    },
    '/terms/': {
      title: 'Términos del Servicio | The Isle Cheats',
      description:
        'Condiciones de compra, alcance de la licencia, reembolsos, limitación de responsabilidad y riesgos de cuenta de los productos The Isle de theisle-cheats.net. Léelos antes de comprar.',
    },
  },

  fr: {
    '/': {
      title: 'Cheats The Isle — ESP, Radar et Overlay PvP de l’Abîme (PC)',
      description:
        'Cheats The Isle pour PC : ESP joueurs, wallhack, radar de l’Abîme, ESP de récolte, assistance de compétences par classe et changeur de tenues. Mis à jour après chaque patch Steam/EAC.',
    },
    [P]: {
      title: 'Produits The Isle Cheats — Elite, Spoofer HWID, UGC, Tenues',
      description:
        'Comparez tous les produits The Isle : Elite avec ESP, wallhack et assistance de compétences, spoofer HWID, récupération UGC et changeur de tenues. Windows uniquement, support Discord 24 h/24.',
    },
    [ELITE]: {
      title: 'Cheats The Isle Elite — ESP, Auto Kill et Assistance au Farm',
      description:
        'The Isle Elite : ESP wallhack complet, assistance de compétences par classe, Auto Kill, Auto Interrupt, assistance au farm et changeur de tenues. Places limitées avec patchs prioritaires.',
    },
    [UTIL]: {
      title: 'Utilitaires The Isle — Spoofer HWID, UGC et Changeur de Tenues',
      description:
        'Utilitaires The Isle pour PC : spoofer HWID, espace UGC pour contester les bans et changeur de tenues local. Guide d’installation, support Discord et mises à jour après les patchs anticheat.',
    },
    '/blog/': {
      title: 'Blog The Isle Cheats — Guides, Notes de Patch et Astuces Abîme',
      description:
        'Configuration de l’ESP wallhack, presets de l’Abîme, assistance par classe, checklists de patchs anticheat et actualités du loader. Guides d’installation et notes de patch récentes.',
    },
    '/faq/': {
      title: 'FAQ The Isle Cheats — Risque de Ban, Installation, HWID, Remboursement',
      description:
        'Questions fréquentes sur les cheats The Isle : statut en ligne, utilisation après l’achat, risque de ban, plateformes compatibles, réinitialisation HWID, transfert de licence et remboursement.',
    },
    '/support/': {
      title: 'Support The Isle Cheats — Loader, HWID et Paiement',
      description:
        'Aide pour les erreurs du loader, la réinitialisation HWID, le paiement, la licence et le compte via Discord 24 h/24 ou par e-mail. Voyez quoi inclure dans votre ticket pour aller plus vite.',
    },
    '/about/': {
      title: 'À propos d’The Isle Cheats — Équipe et Service d’theisle-cheats.net',
      description:
        'theisle-cheats.net propose des offres de cheats The Isle, des guides et des utilitaires pour les joueurs PC. Découvrez nos loaders mis à jour rapidement après les patchs et notre support Discord.',
    },
    '/forum/': {
      title: 'Forum The Isle Cheats — Configs, Patchs et Questions',
      description:
        'Forum des utilisateurs de cheats The Isle : partagez vos configs ESP et assistance de compétences, astuces de l’Abîme, débats sur les patchs anticheat et questions sur le loader.',
    },
    '/privacy/': {
      title: 'Politique de Confidentialité | The Isle Cheats',
      description:
        'Comment theisle-cheats.net utilise les statistiques, cookies, données de commande et de contact, ainsi que vos droits et moyens de nous joindre. À lire avant d’utiliser le site.',
    },
    '/terms/': {
      title: 'Conditions d’Utilisation | The Isle Cheats',
      description:
        'Conditions d’achat, portée de la licence, remboursement, limitation de responsabilité et risques de compte pour les produits The Isle d’theisle-cheats.net. À lire avant tout achat.',
    },
  },
};
