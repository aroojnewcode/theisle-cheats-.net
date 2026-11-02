import type { FaqCopy } from '../types';

export const FAQ_ZH_TW: Record<string, FaqCopy> = {
  status: {
    q: '哪裡可以查看 The Isle 外掛是否在線？',
    a: '請看 theisle-cheats.net 的即時狀態橫幅與 Discord #status 頻道。The Isle 或 EAC 反作弊更新後務必重新確認。',
  },
  'after-buy': {
    q: '購買後會得到什麼？',
    a: '入口網站會解鎖載入器、安裝指南與設定庫。請在啟動 The Isle 前先依指南操作。',
  },
  'ban-risk': {
    q: '使用私人 The Isle 外掛會被封嗎？',
    a: '會—任何修改都有風險。反作弊與舉報系統持續演進。請先查看目前狀態並自行承擔風險。',
  },
  platforms: {
    q: '支援哪些平台？',
    a: '僅支援官方啟動器的 The Isle，Windows 10/11 64 位元。不支援 macOS 與 Linux。',
  },
  'license-move': {
    q: '可以把授權移到新電腦嗎？',
    a: '可以—使用入口的 HWID 重設或開 Discord 工單。次數限制依方案而異。',
  },
  'products-page': {
    q: '產品與工具在哪裡？',
    a: 'The Isle 外掛產品頁列出 Lite/Pro/Elite、HWID 欺騙器、UGC、服裝更換器、功能清單與結帳。',
  },
  'what-is-esp': {
    q: 'The Isle ESP 透視 / ESP 是什麼？',
    a: 'ESP 透視與玩家 ESP 可穿透 Evrima 地形顯示敵方位置、掉落、物資與營地。Lite 為資訊疊加；Pro、Elite 另加腳本模組。',
  },
  'esp-vs-scripts': {
    q: 'ESP 透視與自瞄有何不同？',
    a: 'ESP 透視/ESP 是資訊疊加，不會自動施放技能。自瞄、Smooth Aim、Sticky Aim 在 Pro、Elite。Lite 僅感知。',
  },
  'which-tier-esp': {
    q: '只要 ESP 透視要哪個方案？',
    a: 'Lite 僅感知：玩家 ESP、掉落、物資計時、雷達外掛。Pro 加自瞄；Elite 加機器人、搶擊與服裝更換器。',
  },
  'which-tier-scripts': {
    q: '哪個方案含自瞄？',
    a: 'Pro 含 Aimbot、Smooth Aim、Sticky Aim 與熱鍵巨集。Elite 含 Pro 全部再加 Farm Assist、Auto Kill。Lite 無技能自動化。',
  },
  'rank-lite-vs-pro': {
    q: 'Lite、Pro、Elite 怎麼選？',
    a: '只要地圖感知 → Lite。Evrima 槍戰要自瞄 → Pro。完整機器人與優先修補 → Elite。可在各外掛頁或 FAQ 比較。',
  },
  'elite-slots': {
    q: '為何 Elite 名額有限？',
    a: 'Elite 為私人建置，含開發者直接支援與優先修補。名額限制可加快修補週期。結帳前請看狀態橫幅。',
  },
  'stream-proof': {
    q: 'OBS 會錄到疊加層嗎？',
    a: 'Lite、Pro、Elite 的防錄影模式可對 OBS 與 Discord 分享隱藏疊加。直播前請先本地錄影測試。',
  },
  undetected: {
    q: '未偵測 The Isle 外掛有保證嗎？',
    a: '沒有。未偵測是產品頁的當下狀態，非永久保證。若顯示更新中、測試中或已偵測請立刻停用。',
  },
  'esp-safer': {
    q: 'ESP 透視比自瞄更安全嗎？',
    a: '重播中可能比明顯機器人模式低調，但仍是外掛。關閉自瞄並不代表反作弊會忽略疊加層。',
  },
  'hwid-when': {
    q: '何時需要 HWID 欺騙器？',
    a: '新 EAC 帳號在同一台 PC 立刻失敗、其他 PC 正常時—硬體封鎖。僅帳號問題請看 UGC。',
  },
  'ugc-what': {
    q: 'UGC 是什麼？',
    a: 'UGC（Unban & Governance Control）是 EAC 帳號限制與反作弊封鎖的申訴工作區—流程與追蹤，不保證解封。',
  },
  'skin-changer': {
    q: '服裝更換器會改我的衣櫃嗎？',
    a: '僅在本機客戶端預覽外觀。其他玩家仍看到真實 inventory。Elite 內含；單買僅供預覽。',
  },
  'external-loader': {
    q: '載入器會注入 EAC 資料夾嗎？',
    a: 'The Isle Cheats 為外部執行並雲端同步設定—不會在 The Isle 目錄注入檔案。反作弊風險仍存在。',
  },
  'blog-vs-cheats': {
    q: '部落格作弊碼等同 Evrima 外掛嗎？',
    a: '否。部落格的 EAC 主控台指令僅適用於開啟作弊的自訂大廳。Evrima 需 theisle-cheats.net 各方案的 The Isle 外掛。',
  },
  'blog-setup': {
    q: '部落格安裝指南的購買連結？',
    a: '指南連至方案頁與產品中心。結帳經安全合作夥伴—勿使用陌生 Discord 私訊的載入器。',
  },
  'compare-plans': {
    q: '哪裡可以並排比較方案？',
    a: '各外掛方案頁有比較表。FAQ 彙整產品、外掛與部落格答案。',
  },
  'who-lite': {
    q: '誰適合 Lite？',
    a: '只要地圖感知—ESP、掉落、物資—且不用技能自動化。若常開連招自瞄請改買 Pro。',
  },
  'who-pro': {
    q: '誰該買 Pro？',
    a: '想要 ESP 透視加 Aimbot、Smooth Aim、熱鍵巨集的 Evrima 玩家。theisle-cheats.net 最受歡迎的方案。',
  },
  'who-elite': {
    q: '誰該買 Elite？',
    a: '需要 Farm Assist、Auto Kill、服裝更換器，且有名額時的優先修補的重度使用者。',
  },
  'eac-update': {
    q: '反作弊更新後怎麼做？',
    a: '查看 theisle-cheats.net 狀態與 Discord #status。橫幅顯示 online 前勿啟動。修補後載入保守預設。',
  },
  'discord-help': {
    q: '如何取得安裝協助？',
    a: '購買後在 Discord 提供訂單 email、Windows 版本與 The Isle 客戶端建置。客服會即時協助載入器設定。',
  },
  'zero-build-ranked': {
    q: '副本與 Evrima PvP 能用嗎？',
    a: '可以—Lite、Pro、Elite 在入口有副本與 Evrima 預設。首次排隊前調整距離上限與腳本延遲。',
  },
  'zoom-hack': {
    q: '哪個方案含雷達外掛？',
    a: '雷達從 Lite 起至 Pro、Elite 皆含。迷你雷達有助區域感知。',
  },
  'auto-farm': {
    q: '哪個方案含 Farm Assist？',
    a: 'Farm Assist、Flight Assist AI、自動配裝僅 Elite。Pro 僅戰鬥自瞄，無機器人掛機。',
  },
  'private-cheats': {
    q: '私人 The Isle 外掛是什麼？',
    a: '每使用者金鑰與維護中的建置—非公開 zip 包。The Isle Cheats 經入口提供 ESP、自瞄與透視方案。',
  },
  'faq-more': {
    q: '完整 FAQ 在哪？',
    a: '本站有首頁 FAQ 與各頁專區。FAQ 頁彙整所有產品、外掛與部落格答案—或閱讀部落格深度指南。',
  },
  'blog-guide-start': {
    q: 'Evrima PvP 能用訓練作弊碼嗎？',
    a: '不行。訓練大廳作弊碼僅在開啟作弊的自訂對戰有效。Evrima 需 theisle-cheats.net 方案的 The Isle 外掛。',
  },
  'blog-guide-tier': {
    q: '哪個方案符合這篇指南？',
    a: '感知指南 → Lite。腳本與連招指南 → Pro。機器人與搶擊主題 → Elite。',
  },
  'blog-guide-status': {
    q: '修補後這篇指南還有效嗎？',
    a: '請看文章日期與即時狀態橫幅。修補日文章會註明模組變更—Discord #status 有最新建置說明。',
  },
  'blog-setup-loader': {
    q: '載入器在哪下載？',
    a: '僅能從結帳後的營運入口—勿用留言或私訊的非官方連結。',
  },
  'blog-setup-lobby': {
    q: '要先在大廳測試嗎？',
    a: '要。Evrima PvP 前請在大廳或副本載入保守預設。多次對局調整腳本延遲與 ESP 距離上限。',
  },
  'blog-sec-eac': {
    q: '這篇文章保證未偵測嗎？',
    a: '任何文章都不能取代即時狀態橫幅。未偵測是當下標籤—若顯示更新或已偵測請停止。',
  },
  'blog-default-1': {
    q: '部落格指南是官方產品文件嗎？',
    a: '文章說明流程並連至 Lite、Pro、Elite 與產品中心。結帳以產品頁功能清單為準。',
  },
  'blog-default-2': {
    q: '需要協助套用指南？',
    a: '在 Discord 提供訂單 email 與文章 slug。客服會參照指南中的相同入口預設。',
  },
  'blog-default-3': {
    q: '下個修補還能用這些設定嗎？',
    a: '每次 The Isle 更新後重新確認狀態。入口預設隨修補說明更新—請重新載入設定，勿複製舊滑桿。',
  },
  'blog-slug-esp': {
    q: '這篇文章的 ESP 透視對應哪個方案？',
    a: 'Lite 含玩家 ESP、掉落定位與物資計時。Pro 在同一疊加層加戰鬥自瞄。',
  },
  'blog-slug-scripts': {
    q: '這篇文章的自瞄在哪個方案？',
    a: 'Pro、Elite 含 Aimbot 與相關模組。Lite 僅 ESP 透視。',
  },
  'blog-slug-hwid': {
    q: '這篇文章能取代 HWID 或 UGC 產品嗎？',
    a: '復原指南補充 HWID 欺騙器與 UGC—請讀產品頁了解流程範圍與實際結果。',
  },
};
