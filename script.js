
let engageBtn = document.querySelector(".engage-btn")
let weddingBtn = document.querySelector(".wedding-btn")
let accessBtn = document.querySelector(".access-btn")
let engageTitle = document.querySelector(".engage-title")
let engageText = document.querySelector(".engage-text")
let weddingTitle = document.querySelector(".wedding-title")
let weddingText = document.querySelector(".wedding-text")
let accessTitle = document.querySelector(".access-title")
let btn = document.querySelectorAll(".btn")
let mainVisual = document.querySelector(".main-visual-container")

btn.forEach((cl) => {
  cl.addEventListener("click", () => {
    mainVisual.querySelector(".active").classList.remove("active")
    cl.classList.add("active")

    let attr = cl.getAttribute("language")

    engageBtn.textContent = data[attr].engageBtn
    weddingBtn.textContent = data[attr].weddingBtn
    accessBtn.textContent = data[attr].accessBtn
    engageTitle.textContent = data[attr].engageTitle
    engageText.textContent = data[attr].engageText
    weddingTitle.textContent = data[attr].weddingTitle
    weddingText.textContent = data[attr].weddingText
  })
})

let data = {
  jp: {
    engageBtn: "婚約指輪",
    weddingBtn: "結婚指輪",
    accessBtn: "アクセス",

    engageTitle: "私たちの考えるジュエリーとは",
    engageText:
      "社ラ優田スら市済セモウ討作お覧5長年て読解込レシソ奈売れちぱ掲止ヌ日東12幼わねたご問準ヱマヒサ禁元平乏咋びリぼ。調シヨルワ積無スだづあ権豊ーじス投時みそよべ謙問ヌ官区ルヘオカ八軽大ナソカ写直かふラた発告エコソム府8詩ぎ疑店12島ヘ子月五持むきどす夕断イ挙6再美リねじ。基ぼて江紙露フーきむ恥命わべか開読イれざ図川イろ権怯チワア全事ソタリ語団ヱヨ著格地おが青事ぞぱドる繰速威クえレも。放択フオ状禁えせょ登新転サツ留廃びぱーと政陽尽一が楽球チ陽示経セワミ演種げなぴざ代31稿ひいり日椅てかそ。2受サキア備況フでゅ容板ヒエ終国シヲヨ地長網詳セ況識コリイム実感イ州報尊評汚づみかと。察どゅざず数浸かじど公治モイ子掲トになす吉同るち多般しフご情著コウ政日ほえは話回コクロ座将つぎぽし図記スへレぼ問3知帯倒んすけぼ。",
    weddingTitle: "ハンドメイドにこだわる理由",
    weddingText: "B本コアク碁地サホユノ題死げふぱて治更せざ話朗皇わおよね併研クじは等持ヘホテ能敗ひ北芝りあぎら車際ワカテ判士レつく八前エメシ灯度で本心オフ震間エ心千続能巡ッれっ。報てえい美顕報芋ン政郷し北54氏3我回ぴぞぎ発広ヨ捕名オヌモニ駆方しっ渡家ヲロト参屋相トクヨツ来決がえけ数就乗げわさ頂取ネツロ球税レ滝指男雪語もの。治チ真吸シミツト可育れ多5米ホルヲフ道名っるう発作秘坂オアヤ的転あげゆの四化チフ印10務ス改権むをこす円著拍スニク歩浜ヘワ伊拠をかさ情疑て起殺よぐだ。多でっのラ見暮湿もひ単港どち十点イケ四技む求類め近件イユ長園クユ著壁ーおむ書中をひ知述べトじん含埼な氏案タチヤツ吟読てたべが流応ノマ富島ク職駅劇怒虐お。",
  },
  en: {
    engageBtn: "Engagement",
    weddingBtn: "Wedding",
    accessBtn: "Access",

    engageTitle: "My promise to you",
    engageText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan venenatis mi, in lobortis libero vestibulum at. Donec vitae nisl non nibh rhoncus semper ut id urna. Ut nisi arcu, elementum quis iaculis vitae, dignissim at lorem. Duis congue elit velit, sed varius lacus suscipit a. Aenean congue, velit id porta congue, risus turpis finibus libero, sed convallis arcu diam ut lorem. Aliquam in venenatis leo. Fusce sit amet dapibus libero, a convallis nunc. Proin ut mi neque. Ut id enim nec purus molestie volutpat. Nullam maximus nibh nec massa pharetra maximus. Vivamus suscipit ipsum sem, sit amet molestie elit luctus id. Vivamus accumsan, leo non dignissim condimentum, quam turpis euismod ipsum, nec elementum leo arcu a mauris. Sed et magna semper, posuere diam et, volutpat nibh. Praesent aliquam aliquam purus. Praesent arcu erat, fermentum non diam id, vestibulum lobortis sem.",
    weddingTitle: "From this day onward, I'm yours",
    weddingText: "Aliquam ac turpis in augue malesuada mollis quis semper neque. Proin convallis sapien enim, id ullamcorper ipsum tristique et. Vivamus faucibus, ex in imperdiet tristique, odio lorem tristique diam, ac pellentesque metus eros a velit. Proin purus purus, molestie sodales est vel, ultrices bibendum nisl. Donec ut tortor vitae mauris finibus faucibus eget in urna. Nullam accumsan interdum mi ac tincidunt. Ut lacinia nunc id odio fringilla viverra. Nunc quis tincidunt eros. Integer non viverra metus, id laoreet augue. Sed maximus, felis a dapibus pulvinar, nibh dui molestie neque, non ultrices orci justo vitae justo. Nulla facilisis dignissim augue. Nam vitae sem non orci iaculis semper. Aliquam sed viverra sem, volutpat vehicula magna.",
    
  },
}
