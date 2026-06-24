const guides = {
  internal: {
    step: "STEP 01",
    kicker: "內耗模式",
    title: "直視你的內耗模式",
    intro: "有時候你不是懶，也不是不夠努力。你只是一直用某種方式，默默消耗自己。",
    questions: [
      {
        q: "1. 你最近最常對自己說的一句話是什麼？",
        h: "例如：我不可以停下來、我又做得不夠好、我應該再努力一點。",
      },
      {
        q: "2. 你最常在哪些時候覺得很累，但又不敢休息？",
        h: "寫下場景，不用分析原因。先看見它就好。",
      },
      {
        q: "3. 如果你的累是一種保護，它正在保護你不要面對什麼？",
        h: "可能是失望、被否定、被拋下，或一種你很熟悉的不安全感。",
      },
    ],
    closing: "如果你在答案裡看見一些重複的模式，這不是失敗。這是你開始醒來的地方。",
    link: "https://glow-in-shadow-o1lkrn.subscribepage.io",
    ready: true,
  },
  sos: {
    step: "STEP 02",
    kicker: "情緒急救",
    title: "先把自己穩住",
    intro: "當情緒很滿的時候，不需要急著想通。你只需要先回到此刻，讓身體知道你是安全的。",
    questions: [
      {
        q: "1. 現在你的情緒，如果用天氣形容，會是什麼？",
        h: "例如：暴雨、起霧、悶熱、快要打雷。",
      },
      {
        q: "2. 你的身體哪裡最有感覺？",
        h: "胸口、喉嚨、胃、肩膀、眼睛，或任何你第一時間想到的位置。",
      },
      {
        q: "3. 此刻你最需要聽到的一句話是什麼？",
        h: "不用正能量。只要是真正能接住你的話。",
      },
    ],
    closing: "你不需要馬上好起來。先穩住自己，已經是一種很深的照顧。",
    link: "https://glow-sos.subscribepage.io",
    ready: true,
  },
  hsp: {
    step: "STEP 03",
    kicker: "高敏感",
    title: "辨認你的能量邊界",
    intro: "你不是太敏感。你只是接收得太多、感受得太深，所以更需要學會保護自己的能量。",
    questions: [
      {
        q: "1. 最近最讓你耗電的人、地方或情境是什麼？",
        h: "不要急著合理化，先誠實寫下來。",
      },
      {
        q: "2. 你什麼時候會為了不讓別人失望，而忽略自己的感受？",
        h: "留意那些你說「沒關係」但心裡其實很累的時刻。",
      },
      {
        q: "3. 如果你今天只保留 20% 的能量給外界，你會少做什麼？",
        h: "這題不是自私，是練習回到自己的界線。",
      },
    ],
    closing: "你的敏感不是弱點。當你學會照顧它，它會變成你理解世界的力量。",
    link: "https://glow-hsp.subscribepage.io",
    ready: true,
  },
  love: {
    step: "STEP 04",
    kicker: "關係模式",
    title: "看見你在愛裡的劇本",
    intro: "有些關係痛苦不是因為你不會愛，而是你一直用小時候學會的方式，努力留住愛。",
    questions: [
      {
        q: "1. 你在關係裡最害怕發生什麼？",
        h: "例如：被冷落、被拋下、被嫌棄、被看見真正的自己。",
      },
      {
        q: "2. 當你不安時，你最常用什麼方式保護自己？",
        h: "討好、追問、冷掉、假裝沒事、先離開，或變得很用力。",
      },
      {
        q: "3. 你一直在對方身上等待誰曾經沒有給你的東西？",
        h: "這題可以慢慢寫。答案不一定是現在的對方。",
      },
    ],
    closing: "看見劇本，不是為了怪自己。是為了讓你終於有機會選擇新的方式去愛。",
    link: "https://glow-love.subscribepage.io",
    ready: true,
  },
};

const params = new URLSearchParams(window.location.search);
const type = guides[params.get("type")] ? params.get("type") : "internal";
const guide = guides[type];
const fields = ["answer1", "answer2", "answer3"];
const storageKey = `glow-resource-${type}`;

const resultCopy = {
  internal: {
    title: "你現在最需要先看：《為什麼你活得這麼累？》",
    text: "你的答案比較指向生存模式與自我價值。你可能不是不夠努力，而是太習慣用力、負責、撐住所有事。這份指南會陪你看見：你正在用甚麼方式換取安全、價值和被愛。",
  },
  sos: {
    title: "你現在最需要先看：《累了就打開》",
    text: "你的答案比較指向情緒與身體的超載。現在最重要的不是立刻想通，而是先讓身體知道：此刻可以慢一點。這份指南會先陪你穩住自己。",
  },
  hsp: {
    title: "你現在最需要先看：《高敏感者的自救指南》",
    text: "你的答案比較指向高敏感與能量耗損。你的敏感不是缺陷，但你需要一個能承載敏感的界線與生活方式。這份指南會陪你把能量慢慢收回來。",
  },
  love: {
    title: "你現在最需要先看：《愛，為什麼那麼難？》",
    text: "你的答案比較指向關係、依附與投射。你以為你在選擇愛，有時候只是潛意識在選擇熟悉。這份指南會陪你看見自己在關係裡反覆受傷的劇本。",
  },
};

const relatedLabels = {
  internal: "我也想看見內耗背後的壓力",
  sos: "我也想在情緒很滿時先穩住",
  hsp: "我也想保護自己的敏感與能量",
  love: "我也想看懂關係裡的重演",
};

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

function loadGuide() {
  if (!document.getElementById("worksheetForm")) return;

  document.title = `${guide.title}｜glow.in.shadow`;
  setText("stepLabel", guide.step);
  setText("guideKicker", guide.kicker);
  setText("guideTitle", guide.title);
  setText("guideIntro", guide.intro);
  setText("closingText", guide.closing);

  guide.questions.forEach((item, index) => {
    setText(`question${index + 1}`, item.q);
    setText(`hint${index + 1}`, item.h);
  });

  const downloadLink = document.getElementById("downloadLink");
  if (downloadLink) {
    downloadLink.href = guide.ready ? guide.link : "#";
    if (!guide.ready) {
      downloadLink.textContent = "完整 PDF 頁面準備中";
      downloadLink.setAttribute("aria-disabled", "true");
      downloadLink.addEventListener("click", (event) => event.preventDefault());
    }
  }

  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
  fields.forEach((field) => {
    const input = document.getElementById(field);
    if (!input) return;
    input.value = saved[field] || "";
    input.addEventListener("input", saveAnswers);
  });
}

function getQuizResult(form) {
  const scores = { internal: 0, sos: 0, hsp: 0, love: 0 };
  const selected = new FormData(form);

  for (const value of selected.values()) {
    if (scores[value] !== undefined) scores[value] += 1;
  }

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function loadQuiz() {
  const quiz = document.getElementById("resourceQuiz");
  if (!quiz) return;

  const result = document.getElementById("quizResult");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");
  const resultPdfLink = document.getElementById("resultPdfLink");
  const resultWorksheetLink = document.getElementById("resultWorksheetLink");
  const relatedGuideLinks = document.getElementById("relatedGuideLinks");
  const resetQuiz = document.getElementById("resetQuiz");

  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const answered = new FormData(quiz);
    const missing = ["q1", "q2", "q3", "q4"].some((name) => !answered.get(name));

    if (missing) {
      quiz.classList.add("quiz-form--incomplete");
      return;
    }

    quiz.classList.remove("quiz-form--incomplete");
    const resultType = getQuizResult(quiz);
    const resultGuide = guides[resultType];
    const copy = resultCopy[resultType];

    resultTitle.textContent = copy.title;
    resultText.textContent = copy.text;
    resultPdfLink.href = resultGuide.link;
    resultWorksheetLink.href = `./guide.html?type=${resultType}`;
    relatedGuideLinks.innerHTML = Object.entries(guides)
      .filter(([guideType]) => guideType !== resultType)
      .map(
        ([guideType, item]) =>
          `<a class="related-guide-link" href="${item.link}" target="_blank" rel="noreferrer">${relatedLabels[guideType]}</a>`
      )
      .join("");
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  resetQuiz.addEventListener("click", () => {
    quiz.reset();
    result.hidden = true;
    quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function saveAnswers() {
  const data = {};
  fields.forEach((field) => {
    data[field] = document.getElementById(field)?.value || "";
  });
  localStorage.setItem(storageKey, JSON.stringify(data));
}

async function copyAnswers() {
  const text = guide.questions
    .map((item, index) => {
      const answer = document.getElementById(fields[index])?.value || "";
      return `${item.q}\n${answer || "（未填寫）"}`;
    })
    .join("\n\n");

  try {
    await navigator.clipboard.writeText(text);
    this.textContent = "已複製";
    window.setTimeout(() => {
      this.textContent = "複製我的答案";
    }, 1600);
  } catch {
    this.textContent = "請手動選取複製";
  }
}

loadGuide();
loadQuiz();
document.getElementById("copyAnswers")?.addEventListener("click", copyAnswers);
