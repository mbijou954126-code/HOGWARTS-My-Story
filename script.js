/* =========================================================
   HOGWARTS LIFE
   FULL JAVASCRIPT
   사진 기능 없음
========================================================= */

const game = document.getElementById("game");


/* =========================================================
   PLAYER
========================================================= */

const player = {
  gender: null,

  personalities: [],
  traits: [],
  hobbies: [],

  wand: null,

  playerHouse: null,

  talentedSubjects: [],
  weakSubjects: [],

  club: null,

  romanceFriend: {
    name: null,
    house: null,
    intimacy: 0
  },

  newFriend: {
    name: null,
    intimacy: 0
  }
};


/* =========================================================
   PERSONALITIES
========================================================= */

const personalities = [

  {
    name: "완벽주의적인 편",
    description: "대충 끝내는 것보다 제대로 해내야 마음이 편하다.",
    houses: { gryffindor: 1, ravenclaw: 3, hufflepuff: 3, slytherin: 1 }
  },

  {
    name: "자존심이 강한 편",
    description: "자신을 함부로 대하는 것을 좋아하지 않는다.",
    houses: { gryffindor: 3, ravenclaw: 1, hufflepuff: 0, slytherin: 4 }
  },

  {
    name: "낯을 많이 가리는 편",
    description: "처음 만난 사람에게 먼저 다가가는 것이 쉽지 않다.",
    houses: { gryffindor: 1, ravenclaw: 3, hufflepuff: 2, slytherin: 2 }
  },

  {
    name: "사람을 쉽게 믿지 않는 편",
    description: "친해지기 전까지 상대를 오래 지켜본다.",
    houses: { gryffindor: 1, ravenclaw: 3, hufflepuff: 1, slytherin: 4 }
  },

  {
    name: "정이 많은 편",
    description: "한번 가까워진 사람은 오래 마음에 둔다.",
    houses: { gryffindor: 2, ravenclaw: 1, hufflepuff: 5, slytherin: 1 }
  },

  {
    name: "고집이 센 편",
    description: "자신이 옳다고 생각하면 쉽게 생각을 바꾸지 않는다.",
    houses: { gryffindor: 3, ravenclaw: 2, hufflepuff: 2, slytherin: 4 }
  },

  {
    name: "호기심이 많은 편",
    description: "모르는 것을 그냥 지나치는 것을 좋아하지 않는다.",
    houses: { gryffindor: 2, ravenclaw: 5, hufflepuff: 2, slytherin: 2 }
  },

  {
    name: "경쟁심이 강한 편",
    description: "남에게 뒤처지는 상황을 별로 좋아하지 않는다.",
    houses: { gryffindor: 3, ravenclaw: 2, hufflepuff: 1, slytherin: 5 }
  },

  {
    name: "감정적인 편",
    description: "가끔 머리보다 마음이 먼저 움직인다.",
    houses: { gryffindor: 4, ravenclaw: 1, hufflepuff: 4, slytherin: 1 }
  },

  {
    name: "침착한 편",
    description: "갑작스러운 일이 생겨도 먼저 상황을 파악한다.",
    houses: { gryffindor: 2, ravenclaw: 4, hufflepuff: 3, slytherin: 4 }
  },

  {
    name: "혼자 있는 것을 좋아하는 편",
    description: "혼자 생각하는 시간이 꽤 편하다.",
    houses: { gryffindor: 1, ravenclaw: 5, hufflepuff: 2, slytherin: 3 }
  },

  {
    name: "인정받고 싶은 마음이 큰 편",
    description: "내가 잘하고 있다는 말을 들으면 기분이 좋다.",
    houses: { gryffindor: 3, ravenclaw: 3, hufflepuff: 2, slytherin: 5 }
  },

  {
    name: "남을 잘 챙기는 편",
    description: "주변 사람이 힘들어하면 그냥 지나치기 어렵다.",
    houses: { gryffindor: 3, ravenclaw: 1, hufflepuff: 5, slytherin: 0 }
  },

  {
    name: "상처를 오래 기억하는 편",
    description: "괜찮다고 생각해도 마음속에는 오래 남는다.",
    houses: { gryffindor: 2, ravenclaw: 3, hufflepuff: 3, slytherin: 4 }
  },

  {
    name: "즉흥적인 편",
    description: "계획보다는 순간의 판단을 따를 때가 많다.",
    houses: { gryffindor: 5, ravenclaw: 1, hufflepuff: 1, slytherin: 2 }
  },

  {
    name: "책임감이 강한 편",
    description: "자신이 맡은 일은 끝까지 해내려고 한다.",
    houses: { gryffindor: 3, ravenclaw: 3, hufflepuff: 5, slytherin: 3 }
  }

];


/* =========================================================
   TRAITS
========================================================= */

const traits = [

  {
    name: "관찰력이 좋음",
    description: "사람의 표정이나 주변의 작은 변화를 잘 알아차린다.",
    houses: { gryffindor: 1, ravenclaw: 5, hufflepuff: 2, slytherin: 4 }
  },

  {
    name: "기억력이 좋음",
    description: "한번 들은 말이나 배운 것을 잘 기억한다.",
    houses: { gryffindor: 1, ravenclaw: 5, hufflepuff: 3, slytherin: 2 }
  },

  {
    name: "끈기가 좋음",
    description: "처음에는 서툴러도 계속 시도한다.",
    houses: { gryffindor: 3, ravenclaw: 3, hufflepuff: 5, slytherin: 3 }
  },

  {
    name: "판단이 빠름",
    description: "갑작스러운 상황에서도 빠르게 결정을 내린다.",
    houses: { gryffindor: 5, ravenclaw: 3, hufflepuff: 2, slytherin: 4 }
  },

  {
    name: "말을 잘함",
    description: "자신의 생각을 말로 표현하는 데 익숙하다.",
    houses: { gryffindor: 3, ravenclaw: 3, hufflepuff: 3, slytherin: 4 }
  },

  {
    name: "눈치가 빠름",
    description: "사람 사이의 미묘한 분위기를 잘 읽는다.",
    houses: { gryffindor: 2, ravenclaw: 4, hufflepuff: 4, slytherin: 5 }
  },

  {
    name: "상상력이 풍부함",
    description: "평범한 것에서도 새로운 가능성을 떠올린다.",
    houses: { gryffindor: 3, ravenclaw: 5, hufflepuff: 2, slytherin: 2 }
  },

  {
    name: "위기 상황에서 침착함",
    description: "당황하기보다 해결 방법을 찾으려고 한다.",
    houses: { gryffindor: 4, ravenclaw: 4, hufflepuff: 3, slytherin: 5 }
  },

  {
    name: "사람의 감정을 잘 알아챔",
    description: "상대가 말하지 않아도 기분을 어느 정도 짐작한다.",
    houses: { gryffindor: 3, ravenclaw: 3, hufflepuff: 5, slytherin: 3 }
  },

  {
    name: "계획을 잘 세움",
    description: "일을 시작하기 전에 순서를 정해두는 편이다.",
    houses: { gryffindor: 2, ravenclaw: 4, hufflepuff: 4, slytherin: 4 }
  },

  {
    name: "쉽게 포기하지 않음",
    description: "한번 시작한 일은 결과를 볼 때까지 계속한다.",
    houses: { gryffindor: 4, ravenclaw: 3, hufflepuff: 5, slytherin: 4 }
  }

];


/* =========================================================
   HOBBIES
========================================================= */

const hobbies = [

  {
    name: "독서",
    description: "혼자 조용히 책을 읽는 것을 좋아한다.",
    houses: { gryffindor: 1, ravenclaw: 5, hufflepuff: 2, slytherin: 2 }
  },

  {
    name: "역사 공부",
    description: "과거에 있었던 일들을 알아보는 것을 좋아한다.",
    houses: { gryffindor: 2, ravenclaw: 5, hufflepuff: 2, slytherin: 3 }
  },

  {
    name: "그림",
    description: "머릿속의 생각을 그림으로 표현하는 것을 좋아한다.",
    houses: { gryffindor: 3, ravenclaw: 5, hufflepuff: 2, slytherin: 2 }
  },

  {
    name: "악기 연주",
    description: "하나의 곡을 반복해서 연습하는 것을 좋아한다.",
    houses: { gryffindor: 3, ravenclaw: 3, hufflepuff: 5, slytherin: 2 }
  },

  {
    name: "동물 돌보기",
    description: "동물과 함께 시간을 보내는 것을 좋아한다.",
    houses: { gryffindor: 3, ravenclaw: 2, hufflepuff: 5, slytherin: 1 }
  },

  {
    name: "식물 키우기",
    description: "식물을 돌보고 성장하는 모습을 보는 것을 좋아한다.",
    houses: { gryffindor: 1, ravenclaw: 3, hufflepuff: 5, slytherin: 2 }
  },

  {
    name: "퍼즐과 수수께끼",
    description: "어려운 문제를 고민해서 풀어내는 것을 좋아한다.",
    houses: { gryffindor: 2, ravenclaw: 5, hufflepuff: 2, slytherin: 3 }
  },

  {
    name: "모험과 여행",
    description: "새로운 장소와 낯선 경험을 좋아한다.",
    houses: { gryffindor: 5, ravenclaw: 4, hufflepuff: 2, slytherin: 3 }
  },

  {
    name: "운동",
    description: "몸을 움직이거나 경쟁하는 것을 좋아한다.",
    houses: { gryffindor: 5, ravenclaw: 2, hufflepuff: 3, slytherin: 4 }
  },

  {
    name: "요리",
    description: "직접 무언가를 만들어 다른 사람과 나누는 것을 좋아한다.",
    houses: { gryffindor: 2, ravenclaw: 2, hufflepuff: 5, slytherin: 2 }
  },

  {
    name: "수집",
    description: "희귀하거나 마음에 드는 물건을 모으는 것을 좋아한다.",
    houses: { gryffindor: 2, ravenclaw: 3, hufflepuff: 2, slytherin: 5 }
  },

  {
    name: "친구들과 어울리기",
    description: "사람들과 이야기하고 함께 무언가 하는 것을 좋아한다.",
    houses: { gryffindor: 4, ravenclaw: 2, hufflepuff: 5, slytherin: 3 }
  }

];


/* =========================================================
   WANDS
   설명 + 전투력
========================================================= */

const wands = [

  {
    wood: "호두나무",
    core: "용의 심근",
    length: "12¾인치",
    power: 82,
    description: "지적인 마법사와 특히 좋은 궁합을 보이는 나무. 복잡한 마법을 다루는 데 강하다."
  },

  {
    wood: "벚나무",
    core: "불사조의 깃털",
    length: "11½인치",
    power: 91,
    description: "아름답지만 다루기 까다로운 지팡이. 강한 의지와 창의적인 마법에 반응한다."
  },

  {
    wood: "물푸레나무",
    core: "유니콘의 털",
    length: "12인치",
    power: 76,
    description: "안정적인 마법을 만들어내는 지팡이. 꾸준하고 성실한 마법사와 잘 맞는다."
  },

  {
    wood: "주목나무",
    core: "용의 심근",
    length: "13인치",
    power: 96,
    description: "매우 강력한 마법을 끌어낼 수 있는 희귀한 지팡이. 강한 성격의 주인을 선호한다."
  },

  {
    wood: "버드나무",
    core: "유니콘의 털",
    length: "11인치",
    power: 73,
    description: "치유와 보호 마법에 특히 뛰어난 지팡이. 섬세한 마법을 다루는 데 좋다."
  },

  {
    wood: "밤나무",
    core: "용의 심근",
    length: "12½인치",
    power: 84,
    description: "실용적인 마법에 강한 지팡이. 다양한 종류의 주문을 균형 있게 사용할 수 있다."
  },

  {
    wood: "느릅나무",
    core: "불사조의 깃털",
    length: "13¼인치",
    power: 89,
    description: "정교하고 우아한 마법을 만들어낸다. 숙련된 주문 사용에 강하다."
  },

  {
    wood: "흑단나무",
    core: "불사조의 깃털",
    length: "12¾인치",
    power: 94,
    description: "전투 마법과 공격 주문에 강한 지팡이. 독립심이 강한 주인에게 끌린다."
  },

  {
    wood: "단풍나무",
    core: "용의 심근",
    length: "11¾인치",
    power: 87,
    description: "새로운 마법을 배우는 속도가 빠른 지팡이. 모험심과 호기심을 좋아한다."
  },

  {
    wood: "삼나무",
    core: "유니콘의 털",
    length: "12¼인치",
    power: 79,
    description: "방어 마법과 보호 주문에 안정적이다. 충성심이 강한 마법사와 잘 맞는다."
  },

  {
    wood: "사과나무",
    core: "불사조의 깃털",
    length: "12인치",
    power: 88,
    description: "밝고 생명력 있는 마법을 만들어내는 지팡이. 사람을 돕는 것을 좋아하는 주인과 궁합이 좋다."
  },

  {
    wood: "편백나무",
    core: "유니콘의 털",
    length: "12¾인치",
    power: 81,
    description: "침착한 상황 판단과 방어 마법에 특화되어 있다."
  },

  {
    wood: "마호가니",
    core: "용의 심근",
    length: "13인치",
    power: 93,
    description: "강력한 공격 주문을 안정적으로 사용하는 데 적합하다."
  },

  {
    wood: "단풍나무",
    core: "불사조의 깃털",
    length: "12½인치",
    power: 90,
    description: "변화와 성장에 민감하게 반응한다. 끊임없이 배우는 주인과 잘 맞는다."
  },

  {
    wood: "배나무",
    core: "유니콘의 털",
    length: "11¾인치",
    power: 74,
    description: "부드럽고 정확한 주문을 사용하는 데 특화되어 있다."
  },

  {
    wood: "흑호두나무",
    core: "용의 심근",
    length: "13¾인치",
    power: 98,
    description: "극도로 강력하지만 주인을 매우 까다롭게 선택한다. 야심과 의지가 강한 마법사에게 반응한다."
  },

  {
    wood: "산사나무",
    core: "불사조의 깃털",
    length: "12¾인치",
    power: 86,
    description: "복잡한 마법과 변형 주문에 뛰어나다."
  },

  {
    wood: "아카시아",
    core: "유니콘의 털",
    length: "11½인치",
    power: 78,
    description: "다루기 까다롭지만 숙련된 마법사에게는 매우 섬세한 힘을 보여준다."
  },

  {
    wood: "흰물푸레나무",
    core: "용의 심근",
    length: "12¼인치",
    power: 85,
    description: "방어와 공격의 균형이 좋은 다재다능한 지팡이."
  },

  {
    wood: "느티나무",
    core: "불사조의 깃털",
    length: "13인치",
    power: 92,
    description: "강한 집중력과 창의성을 요구하는 고급 주문에 적합하다."

  }

];


/* =========================================================
   SUBJECTS
========================================================= */

const subjects = [

  {
    name: "변신술",
    description: "사물과 생물의 형태를 변화시키는 마법."
  },

  {
    name: "마법",
    description: "다양한 주문과 마법의 기본을 배우는 과목."
  },

  {
    name: "마법약",
    description: "재료를 조합해 여러 효과의 약을 만드는 과목."
  },

  {
    name: "약초학",
    description: "마법의 식물과 약초를 배우는 과목."
  },

  {
    name: "어둠의 마법 방어술",
    description: "위험한 마법과 생물로부터 자신을 보호하는 법."
  },

  {
    name: "천문학",
    description: "별과 행성, 밤하늘의 움직임을 공부한다."
  },

  {
    name: "마법의 역사",
    description: "마법 세계의 역사와 사건을 공부한다."
  },

  {
    name: "비행술",
    description: "빗자루를 타고 하늘을 나는 법을 배운다."
  }

];


/* =========================================================
   CLUBS
========================================================= */

const clubs = [

  {
    name: "결투 클럽",
    description: "학생들과 마법 결투를 연습한다.",
    effect: "전투 경험과 주문 숙련도를 얻는다.",
    power: 10
  },

  {
    name: "마법 생물 연구회",
    description: "마법 생물을 관찰하고 돌본다.",
    effect: "마법 생물 관련 능력이 향상된다.",
    power: 5
  },

  {
    name: "약초 연구회",
    description: "희귀한 마법 식물과 약초를 연구한다.",
    effect: "약초학과 마법약에 보너스를 얻는다.",
    power: 4
  },

  {
    name: "천문 관측회",
    description: "밤마다 천문탑에서 별을 관측한다.",
    effect: "천문학 지식과 관찰력이 향상된다.",
    power: 3
  },

  {
    name: "연극회",
    description: "마법을 이용해 연극과 공연을 만든다.",
    effect: "표현력과 사교 능력이 향상된다.",
    power: 2
  },

  {
    name: "마법 체스 동아리",
    description: "마법 체스를 두며 전략을 겨룬다.",
    effect: "판단력과 전략 능력이 향상된다.",
    power: 6
  },

  {
    name: "비행 클럽",
    description: "빗자루 비행과 공중 기술을 연습한다.",
    effect: "비행 능력과 반사신경이 향상된다.",
    power: 8
  },

  {
    name: "고대 룬 연구회",
    description: "오래된 마법 문자와 유물을 연구한다.",
    effect: "고대 마법 지식이 향상된다.",
    power: 7
  },

  {
    name: "음악회",
    description: "마법 악기를 이용해 함께 연주한다.",
    effect: "음악과 사교 능력이 향상된다.",
    power: 2
  },

  {
    name: "마법 탐험회",
    description: "학교 주변의 숨겨진 장소를 탐험한다.",
    effect: "탐험과 위기 대처 능력이 향상된다.",
    power: 9
  }

];


/* =========================================================
   HOUSE NAMES
========================================================= */

const houseNames = {
  gryffindor: "그리핀도르",
  ravenclaw: "래번클로",
  hufflepuff: "후플푸프",
  slytherin: "슬리데린"
};


/* =========================================================
   OPTIONS
========================================================= */

function createOptions(list, selected, type) {

  return list.map((item, index) => {

    const active =
      selected.includes(item)
        ? "selected"
        : "";

    return `
      <button
        class="option ${active}"
        onclick="toggleChoice('${type}', ${index})">

        <strong>${item.name}</strong>

        <small>${item.description}</small>

      </button>
    `;

  }).join("");

}


/* =========================================================
   TOGGLE
========================================================= */

function toggleChoice(type, index) {

  let list;
  let selected;
  let limit;

  if (type === "personality") {

    list = personalities;
    selected = player.personalities;
    limit = 4;

  }

  else if (type === "trait") {

    list = traits;
    selected = player.traits;
    limit = 3;

  }

  else if (type === "hobby") {

    list = hobbies;
    selected = player.hobbies;
    limit = 3;

  }

  else if (type === "talent") {

    list = subjects;
    selected = player.talentedSubjects;
    limit = 3;

  }

  else if (type === "weakness") {

    list = subjects;
    selected = player.weakSubjects;
    limit = 3;

  }


  const item = list[index];

  const existing =
    selected.indexOf(item);


  if (existing >= 0) {

    selected.splice(existing, 1);

  }

  else {

    /*
      ★ 핵심 수정

      재능 과목은 약점으로 선택 불가능
    */

    if (
      type === "weakness" &&
      player.talentedSubjects.includes(item)
    ) {

      return;

    }


    /*
      반대로 약점 과목도 재능으로 선택 불가능
    */

    if (
      type === "talent" &&
      player.weakSubjects.includes(item)
    ) {

      return;

    }


    if (selected.length >= limit) {

      return;

    }

    selected.push(item);

  }


  if (type === "personality") {

    showPersonality();

  }

  else if (type === "trait") {

    showTraits();

  }

  else if (type === "hobby") {

    showHobbies();

  }

  else if (type === "talent") {

    showTalents();

  }

  else if (type === "weakness") {

    showWeaknesses();

  }

}


/* =========================================================
   GENDER
========================================================= */

function showGender() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        캐릭터 생성 · 1
      </div>

      <h2 class="scene-title">
        당신의 성별을 선택하세요.
      </h2>

      <div class="options">

        <button
          class="option"
          onclick="chooseGender('남자')">

          <strong>소년</strong>

          <small>
            호그와트에 입학하게 될 소년
          </small>

        </button>

        <button
          class="option"
          onclick="chooseGender('여자')">

          <strong>소녀</strong>

          <small>
            호그와트에 입학하게 될 소녀
          </small>

        </button>

      </div>

    </div>

  `;

}


function chooseGender(gender) {

  player.gender = gender;

  showPersonality();

}


/* =========================================================
   PERSONALITY
========================================================= */

function showPersonality() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        캐릭터 생성 · 2
      </div>

      <h2 class="scene-title">
        당신은 어떤 사람인가요?
      </h2>

      <p class="scene-text">
        최대 4개까지 선택하세요.
      </p>

      <div class="options">

        ${createOptions(
          personalities,
          player.personalities,
          "personality"
        )}

      </div>

      <button
        class="next-button"
        onclick="showTraits()"
        ${player.personalities.length === 0 ? "disabled" : ""}>

        다음

      </button>

    </div>

  `;

}


/* =========================================================
   TRAITS
========================================================= */

function showTraits() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        캐릭터 생성 · 3
      </div>

      <h2 class="scene-title">
        당신에게는 어떤 특징이 있나요?
      </h2>

      <p class="scene-text">
        최대 3개까지 선택하세요.
      </p>

      <div class="options">

        ${createOptions(
          traits,
          player.traits,
          "trait"
        )}

      </div>

      <button
        class="next-button"
        onclick="showHobbies()"
        ${player.traits.length === 0 ? "disabled" : ""}>

        다음

      </button>

    </div>

  `;

}


/* =========================================================
   HOBBIES
========================================================= */

function showHobbies() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        캐릭터 생성 · 4
      </div>

      <h2 class="scene-title">
        평소 무엇을 좋아하나요?
      </h2>

      <p class="scene-text">
        최대 3개까지 선택하세요.
      </p>

      <div class="options">

        ${createOptions(
          hobbies,
          player.hobbies,
          "hobby"
        )}

      </div>

      <button
        class="next-button"
        onclick="showLetter()"
        ${player.hobbies.length === 0 ? "disabled" : ""}>

        선택 완료

      </button>

    </div>

  `;

}


/* =========================================================
   LETTER
========================================================= */

function showLetter() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        어느 여름날
      </div>

      <h2 class="scene-title">
        이상한 편지
      </h2>

      <p class="scene-text">

        창문을 두드리는 소리에 잠에서 깨어납니다.

        <br><br>

        창문 밖에는 부엉이 한 마리가 있습니다.

        <br><br>

        발에는 오래된 봉투가 묶여 있습니다.

      </p>

      <div class="letter">

        <h3>호그와트 마법학교</h3>

        <p>친애하는 학생에게.</p>

        <p>
          귀하에게 호그와트 마법학교의
          입학 자격이 있음을 알려드립니다.
        </p>

      </div>

      <button
        class="next-button"
        onclick="showDiagonAlley()">

        다이건 앨리로 간다

      </button>

    </div>

  `;

}


/* =========================================================
   DIAGON ALLEY
========================================================= */

function showDiagonAlley() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        다이건 앨리
      </div>

      <h2 class="scene-title">
        마법사의 거리
      </h2>

      <p class="scene-text">

        낡은 벽돌 벽을 지나자
        마법사들의 거리가 나타납니다.

        <br><br>

        거리 끝에는 오래된 지팡이 가게가 있습니다.

      </p>

      <button
        class="next-button"
        onclick="chooseWand()">

        지팡이 가게로 들어간다

      </button>

    </div>

  `;

}


/* =========================================================
   HOUSE SCORE
========================================================= */

function getPlayerScores() {

  const scores = {
    gryffindor: 0,
    ravenclaw: 0,
    hufflepuff: 0,
    slytherin: 0
  };


  [
    ...player.personalities,
    ...player.traits,
    ...player.hobbies
  ].forEach(item => {

    for (const house in item.houses) {

      scores[house] +=
        item.houses[house];

    }

  });


  return scores;

}


/* =========================================================
   WAND SELECTION
========================================================= */

function chooseWand() {

  const scores =
    getPlayerScores();


  const total =
    Object.values(scores)
      .reduce(
        (a, b) => a + b,
        0
      );


  /*
    캐릭터 성향에 따라 지팡이가 달라짐.
    현재는 간단한 방식이지만
    나중에 성격별 affinity를 넣을 수 있음.
  */

  player.wand =
    wands[
      total % wands.length
    ];


  showWand();

}


function showWand() {

  const wand =
    player.wand;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        다이건 앨리 · 지팡이 가게
      </div>

      <h2 class="scene-title">
        지팡이가 당신을 선택했습니다.
      </h2>

      <p class="scene-text">

        지팡이 가게의 주인이
        여러 개의 지팡이를 살펴봅니다.

        <br><br>

        그러다 하나를 꺼내 당신에게 건넵니다.

      </p>

      <div class="wand">

        <h2>
          ${wand.wood}
        </h2>

        <p>
          심: ${wand.core}
        </p>

        <p>
          길이: ${wand.length}
        </p>

        <hr>

        <p>
          <strong>지팡이 전투력</strong>
        </p>

        <p>
          ⚔️ ${wand.power}
        </p>

        <p>
          ${wand.description}
        </p>

      </div>

      <button
        class="next-button"
        onclick="showPlatform()">

        지팡이를 챙긴다

      </button>

    </div>

  `;

}


/* =========================================================
   PLATFORM
========================================================= */

function showPlatform() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        킹스 크로스 역
      </div>

      <h2 class="scene-title">
        9와 4분의 3 승강장
      </h2>

      <p class="scene-text">

        벽을 통과하는 순간,
        붉은 증기를 내뿜는 기차가 나타납니다.

      </p>

      <div class="platform-number">
        9¾
      </div>

      <div class="train">
        🚂
      </div>

      <button
        class="next-button"
        onclick="showTrain()">

        기차에 오른다

      </button>

    </div>

  `;

}


/* =========================================================
   TRAIN
========================================================= */

function showTrain() {

  const name =
    player.gender === "남자"
      ? "엘리노어"
      : "에드워드";


  player.romanceFriend.name =
    name;


  const genderText =
    player.gender === "남자"
      ? "여학생"
      : "남학생";


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        호그와트 급행열차
      </div>

      <h2 class="scene-title">
        기차 안
      </h2>

      <div class="character-card">

        <h3>
          ${name}
        </h3>

        <p>
          낯선 ${genderText}이
          객실 문을 열고 당신을 바라봅니다.
        </p>

      </div>

      <p class="scene-text">

        "여기 앉아도 돼?"

      </p>

      <div class="options">

        <button
          class="option"
          onclick="trainChoice(25)">

          <strong>
            "물론이지. 같이 가자."
          </strong>

        </button>

        <button
          class="option"
          onclick="trainChoice(10)">

          <strong>
            "그래. 너도 처음이야?"
          </strong>

        </button>

        <button
          class="option"
          onclick="trainChoice(-20)">

          <strong>
            "……그래."
          </strong>

        </button>

        <button
          class="option"
          onclick="trainReject()">

          <strong>
            "미안한데, 다른 자리 알아보는 게 어때?"
          </strong>

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   TRAIN REJECT
========================================================= */

function trainReject() {

  player.romanceFriend.intimacy -= 40;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        기차 안
      </div>

      <p class="scene-text">

        ${player.romanceFriend.name}의 표정이
        순간 굳습니다.

        <br><br>

        "……아."

        <br><br>

        짧게 대답한 뒤,
        ${player.romanceFriend.name}은
        조용히 객실 문을 닫고 떠납니다.

        <br><br>

        <strong>
          관계가 크게 나빠졌습니다.
        </strong>

      </p>

      <div class="relationship">

        현재 관계

        <br><br>

        ${getRelationshipText(
          player.romanceFriend.intimacy
        )}

      </div>

      <button
        class="next-button"
        onclick="trainAlone()">

        혼자 기차를 탄다

      </button>

    </div>

  `;

}


/* =========================================================
   TRAIN ALONE
========================================================= */

function trainAlone() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        호그와트 급행열차
      </div>

      <h2 class="scene-title">
        혼자 남은 객실
      </h2>

      <p class="scene-text">

        기차는 계속 달립니다.

        <br><br>

        아까 그 학생은 다시 돌아오지 않았습니다.

      </p>

      <button
        class="next-button"
        onclick="showArrival()">

        호그와트에 도착한다

      </button>

    </div>

  `;

}


/* =========================================================
   TRAIN CHOICES
========================================================= */

function trainChoice(amount) {

  player.romanceFriend.intimacy +=
    amount;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        기차 · 대화
      </div>

      <p class="scene-text">

        ${
          amount > 0
            ? `${player.romanceFriend.name}의 얼굴에 미소가 번집니다.`
            : `${player.romanceFriend.name}의 표정이 살짝 굳습니다.`
        }

        <br><br>

        잠시 후
        ${player.romanceFriend.name}이 묻습니다.

        <br><br>

        "호그와트에 가면
        제일 해보고 싶은 게 뭐야?"

      </p>

      <div class="options">

        <button
          class="option"
          onclick="trainChoice2(30)">

          <strong>
            "새로운 친구들을 많이 만나고 싶어."
          </strong>

        </button>

        <button
          class="option"
          onclick="trainChoice2(20)">

          <strong>
            "마법을 제대로 배워보고 싶어."
          </strong>

        </button>

        <button
          class="option"
          onclick="trainChoice2(-20)">

          <strong>
            "난 혼자 있는 게 더 편해."
          </strong>

        </button>

        <button
          class="option"
          onclick="trainChoice2(-35)">

          <strong>
            "솔직히 별 기대 안 돼."
          </strong>

        </button>

      </div>

    </div>

  `;

}


function trainChoice2(amount) {

  player.romanceFriend.intimacy +=
    amount;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        기차
      </div>

      <p class="scene-text">

        ${
          amount > 0
            ? `${player.romanceFriend.name}과의 대화가 자연스럽게 이어집니다.`
            : `${player.romanceFriend.name}과의 대화가 어색하게 끊깁니다.`
        }

        <br><br>

        얼마 후 기차가 천천히 속도를 줄이기 시작합니다.

      </p>

      <button
        class="next-button"
        onclick="showArrival()">

        호그와트에 도착한다

      </button>

    </div>

  `;

}


/* =========================================================
   ARRIVAL
========================================================= */

function showArrival() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        호그와트
      </div>

      <h2 class="scene-title">
        호그와트에 도착했다.
      </h2>

      <p class="scene-text">

        거대한 성이 눈앞에 나타납니다.

      </p>

      <button
        class="next-button"
        onclick="judgeFriend()">

        기숙사 배정식으로

      </button>

    </div>

  `;

}


/* =========================================================
   JUDGE FRIEND
========================================================= */

function judgeFriend() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        기숙사 배정
      </div>

      <h2 class="scene-title">
        나는 저 아이를 어떻게 봤지?
      </h2>

      <p class="scene-text">

        기차에서 이야기를 나눠보니……

        <br><br>

        <em>
          '저 아이는 어떤 사람인 것 같아?'
        </em>

      </p>

      <div class="options">

        <button
          class="option"
          onclick="friendJudgement('gryffindor')">

          <strong>
            대담한 사람인 것 같아.
          </strong>

        </button>

        <button
          class="option"
          onclick="friendJudgement('ravenclaw')">

          <strong>
            지적인 사람인 것 같아.
          </strong>

        </button>

        <button
          class="option"
          onclick="friendJudgement('hufflepuff')">

          <strong>
            착한 사람인 것 같아.
          </strong>

        </button>

        <button
          class="option"
          onclick="friendJudgement('slytherin')">

          <strong>
            야망이 있는 사람인 것 같아.
          </strong>

        </button>

      </div>

    </div>

  `;

}


function friendJudgement(house) {

  player.romanceFriend.house =
    house;

  showFriendSorting();

}


/* =========================================================
   FRIEND SORTING
========================================================= */

function showFriendSorting() {

  game.innerHTML = `

    <div class="scene sorting-scene">

      <div class="sorting-hat">
        🎩
      </div>

      <p class="scene-text">

        분류 모자가 잠시 침묵합니다.

        <br><br>

        그리고—

      </p>

      <div class="house-result">

        <h1>
          ${
            houseNames[
              player.romanceFriend.house
            ]
          }
        </h1>

      </div>

      <p class="scene-text">

        ${player.romanceFriend.name}이
        기숙사 테이블로 걸어갑니다.

        <br><br>

        이제 당신의 이름이 불립니다.

      </p>

      <button
        class="next-button"
        onclick="playerSorting()">

        내 차례다

      </button>

    </div>

  `;

}


/* =========================================================
   PLAYER SORTING
========================================================= */

function playerSorting() {

  const scores =
    getPlayerScores();


  let bestHouse =
    "gryffindor";

  let bestScore =
    scores.gryffindor;


  for (const house in scores) {

    if (
      scores[house] >
      bestScore
    ) {

      bestHouse =
        house;

      bestScore =
        scores[house];

    }

  }


  player.playerHouse =
    bestHouse;


  showPlayerSorting();

}


function showPlayerSorting() {

  game.innerHTML = `

    <div class="scene sorting-scene">

      <div class="sorting-hat">
        🎩
      </div>

      <p class="scene-text">

        모자가 당신의 성격과 특성,
        그리고 취미를 살펴봅니다.

        <br><br>

        "흠……"

        <br><br>

        그리고 마침내—

      </p>

      <div class="house-result">

        <h1>
          ${
            houseNames[
              player.playerHouse
            ]
          }
        </h1>

      </div>

      <button
        class="next-button"
        onclick="afterSorting()">

        기숙사로 간다

      </button>

    </div>

  `;

}


/* =========================================================
   AFTER SORTING
========================================================= */

function afterSorting() {

  if (
    player.playerHouse ===
    player.romanceFriend.house
  ) {

    sameHouseScene();

  }

  else {

    differentHouseScene();

  }

}


/* =========================================================
   SAME HOUSE
========================================================= */

function sameHouseScene() {

  const score =
    player.romanceFriend.intimacy;


  if (score >= 40) {

    game.innerHTML = `

      <div class="scene">

        <div class="progress">
          ${houseNames[player.playerHouse]} · 첫날 밤
        </div>

        <h2 class="scene-title">
          "너도 여기였구나!"
        </h2>

        <p class="scene-text">

          기숙사 휴게실에 들어서자
          ${player.romanceFriend.name}이
          당신을 발견합니다.

          <br><br>

          "진짜 다행이다."

        </p>

        <div class="options">

          <button
            class="option"
            onclick="sameHouseChoice(25)">

            <strong>
              "나도! 같이 앉을래?"
            </strong>

          </button>

          <button
            class="option"
            onclick="sameHouseChoice(15)">

            <strong>
              "기차에서 이야기한 거 재밌었어."
            </strong>

          </button>

        </div>

      </div>

    `;

    return;

  }


  if (score >= 10) {

    game.innerHTML = `

      <div class="scene">

        <div class="progress">
          ${houseNames[player.playerHouse]} · 첫날 밤
        </div>

        <h2 class="scene-title">
          익숙한 얼굴
        </h2>

        <p class="scene-text">

          "아, 너도 여기였구나."

        </p>

        <div class="options">

          <button
            class="option"
            onclick="sameHouseChoice(15)">

            <strong>
              "앞으로 자주 보겠네."
            </strong>

          </button>

          <button
            class="option"
            onclick="sameHouseChoice(-5)">

            <strong>
              "응. 잘 지내보자."
            </strong>

          </button>

        </div>

      </div>

    `;

    return;

  }


  if (score > -20) {

    game.innerHTML = `

      <div class="scene">

        <div class="progress">
          첫날 밤
        </div>

        <h2 class="scene-title">
          조금 어색한 만남
        </h2>

        <p class="scene-text">

          "……같은 기숙사네."

        </p>

        <div class="options">

          <button
            class="option"
            onclick="sameHouseChoice(10)">

            <strong>
              "그래도 잘 지내보자."
            </strong>

          </button>

          <button
            class="option"
            onclick="sameHouseChoice(-10)">

            <strong>
              "뭐…… 어쩔 수 없지."
            </strong>

          </button>

        </div>

      </div>

    `;

    return;

  }


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        첫날 밤
      </div>

      <h2 class="scene-title">
        최악의 재회
      </h2>

      <p class="scene-text">

        ${player.romanceFriend.name}과
        눈이 마주칩니다.

        <br><br>

        "……하필 너랑 같은 기숙사냐."

      </p>

      <div class="options">

        <button
          class="option"
          onclick="sameHouseChoice(-20)">

          <strong>
            "나도 별로 반갑지는 않아."
          </strong>

        </button>

        <button
          class="option"
          onclick="sameHouseChoice(15)">

          <strong>
            "기차에서는 미안했어."
          </strong>

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   SAME HOUSE RESULT
========================================================= */

function sameHouseChoice(amount) {

  player.romanceFriend.intimacy +=
    amount;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        첫날 밤
      </div>

      <h2 class="scene-title">
        기숙사에서의 첫날
      </h2>

      <p class="scene-text">

        ${
          amount > 0
            ? "두 사람의 관계가 조금 가까워졌습니다."
            : "두 사람 사이의 분위기는 여전히 좋지 않습니다."
        }

      </p>

      <div class="relationship">

        ${getRelationshipText(
          player.romanceFriend.intimacy
        )}

      </div>

      <button
        class="next-button"
        onclick="nextMorning()">

        다음 날 아침

      </button>

    </div>

  `;

}


/* =========================================================
   DIFFERENT HOUSE
========================================================= */

function differentHouseScene() {

  const friendName =
    player.gender === "남자"
      ? "토머스"
      : "클라라";


  player.newFriend.name =
    friendName;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        ${houseNames[player.playerHouse]}
      </div>

      <h2 class="scene-title">
        새로운 기숙사
      </h2>

      <p class="scene-text">

        ${player.romanceFriend.name}은
        다른 기숙사로 향합니다.

        <br><br>

        당신의 기숙사에는
        새로운 학생이 있습니다.

      </p>

      <h3>
        ${friendName}
      </h3>

      <button
        class="next-button"
        onclick="newFriendScene()">

        이야기를 나눈다

      </button>

    </div>

  `;

}


/* =========================================================
   NEW FRIEND
========================================================= */

function newFriendScene() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        새로운 친구
      </div>

      <h2 class="scene-title">
        "안녕."
      </h2>

      <p class="scene-text">

        ${player.newFriend.name}이
        당신에게 말을 겁니다.

        <br><br>

        "나랑 이야기할래?"

      </p>

      <div class="options">

        <button
          class="option"
          onclick="newFriendChoice(30)">

          <strong>
            "좋아. 나도 친구가 필요했어."
          </strong>

        </button>

        <button
          class="option"
          onclick="newFriendChoice(15)">

          <strong>
            "그래. 무슨 이야기 할까?"
          </strong>

        </button>

        <button
          class="option"
          onclick="newFriendChoice(-15)">

          <strong>
            "미안한데 나 좀 피곤해서."
          </strong>

        </button>

        <button
          class="option"
          onclick="newFriendChoice(-30)">

          <strong>
            "혼자 있고 싶은데."
          </strong>

        </button>

      </div>

    </div>

  `;

}


function newFriendChoice(amount) {

  player.newFriend.intimacy +=
    amount;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        첫날 밤
      </div>

      <h2 class="scene-title">
        새로운 만남
      </h2>

      <p class="scene-text">

        ${
          amount > 0
            ? `${player.newFriend.name}과의 대화가 자연스럽게 이어집니다.`
            : `${player.newFriend.name}이 조금 당황한 표정을 짓습니다.`
        }

      </p>

      <div class="relationship">

        ${getRelationshipText(
          player.newFriend.intimacy
        )}

      </div>

      <button
        class="next-button"
        onclick="nextMorning()">

        다음 날 아침

      </button>

    </div>

  `;

}


/* =========================================================
   RELATIONSHIP
========================================================= */

function getRelationshipText(score) {

  if (score >= 60)
    return "💗 아주 가까운 사이";

  if (score >= 35)
    return "❤️ 서로 호감이 있는 사이";

  if (score >= 10)
    return "😊 조금 친해진 사이";

  if (score > -10)
    return "😐 아직은 어색한 사이";

  if (score > -35)
    return "😕 서로 불편한 사이";

  return "💢 앙숙에 가까운 사이";

}


/* =========================================================
   MORNING
========================================================= */

function nextMorning() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        다음 날 아침
      </div>

      <h2 class="scene-title">
        새로운 아침
      </h2>

      <p class="scene-text">

        호그와트에서의 첫날 아침이 밝았습니다.

        <br><br>

        오늘부터 본격적으로 수업이 시작됩니다.

      </p>

      <button
        class="next-button"
        onclick="showTalents()">

        학업 적성 확인

      </button>

    </div>

  `;

}


/* =========================================================
   TALENTS
========================================================= */

function showTalents() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        학업 적성 · 1
      </div>

      <h2 class="scene-title">
        자신 있는 과목
      </h2>

      <p class="scene-text">

        공부 효율이 높은 과목입니다.

        <br><br>

        <strong>
          최대 3개 선택
        </strong>

      </p>

      <div class="options">

        ${subjects.map((subject, index) => {

          const selected =
            player.talentedSubjects
              .includes(subject);

          const blocked =
            player.weakSubjects
              .includes(subject);

          return `

            <button
              class="option
              ${selected ? "selected" : ""}
              ${blocked ? "disabled-option" : ""}"
              onclick="${
                blocked
                  ? "return;"
                  : `toggleChoice('talent', ${index})`
              }">

              <strong>
                ${subject.name}
                ${selected ? " ⭐" : ""}
              </strong>

              <small>
                ${
                  blocked
                    ? "이미 약점 과목으로 선택됨"
                    : subject.description
                }
              </small>

            </button>

          `;

        }).join("")}

      </div>

      <button
        class="next-button"
        onclick="showWeaknesses()"
        ${player.talentedSubjects.length === 0
          ? "disabled"
          : ""}>

        다음

      </button>

    </div>

  `;

}


/* =========================================================
   WEAKNESSES
========================================================= */

function showWeaknesses() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        학업 적성 · 2
      </div>

      <h2 class="scene-title">
        약점 과목
      </h2>

      <p class="scene-text">

        공부 효율이 낮은 과목입니다.

        <br><br>

        약점 과목은
        <strong>공부 효율이 25% 감소</strong>합니다.

        <br><br>

        <strong>
          최대 3개 선택
        </strong>

      </p>

      <div class="options">

        ${subjects.map((subject, index) => {

          const selected =
            player.weakSubjects
              .includes(subject);

          const blocked =
            player.talentedSubjects
              .includes(subject);

          return `

            <button
              class="option
              ${selected ? "selected" : ""}
              ${blocked ? "disabled-option" : ""}"
              ${
                blocked
                  ? "disabled"
                  : ""
              }
              onclick="${
                blocked
                  ? "return;"
                  : `toggleChoice('weakness', ${index})`
              }">

              <strong>

                ${subject.name}

                ${selected ? " ⚠️" : ""}

              </strong>

              <small>

                ${
                  blocked
                    ? "⭐ 재능 과목으로 선택했기 때문에 선택할 수 없음"
                    : subject.description
                }

              </small>

            </button>

          `;

        }).join("")}

      </div>

      <button
        class="next-button"
        onclick="confirmAcademicProfile()"
        ${player.weakSubjects.length === 0
          ? "disabled"
          : ""}>

        선택 완료

      </button>

    </div>

  `;

}


/* =========================================================
   ACADEMIC PROFILE
========================================================= */

function confirmAcademicProfile() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        학업 적성
      </div>

      <h2 class="scene-title">
        당신의 학업 성향
      </h2>

      <div class="talent-card">

        <h3>
          ⭐ 재능 과목
        </h3>

        <p>
          ${
            player.talentedSubjects
              .map(s => s.name)
              .join(", ")
          }
        </p>

        <small>
          공부 효율 +25%
        </small>

      </div>

      <div class="talent-card">

        <h3>
          ⚠️ 약점 과목
        </h3>

        <p>
          ${
            player.weakSubjects
              .map(s => s.name)
              .join(", ")
          }
        </p>

        <small>
          공부 효율 -25%
        </small>

      </div>

      <button
        class="next-button"
        onclick="showFirstLesson()">

        첫 수업

      </button>

    </div>

  `;

}


/* =========================================================
   FIRST LESSON
========================================================= */

function showFirstLesson() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        첫 학기
      </div>

      <h2 class="scene-title">
        첫 수업
      </h2>

      <p class="scene-text">

        호그와트에서의 첫 수업이 시작됩니다.

        <br><br>

        시간이 빠르게 흘러갑니다……

      </p>

      <button
        class="next-button"
        onclick="skipToMidterms()">

        몇 달 후……

      </button>

    </div>

  `;

}


/* =========================================================
   MIDTERM
========================================================= */

function skipToMidterms() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        몇 달 후
      </div>

      <h2 class="scene-title">
        중간고사
      </h2>

      <p class="scene-text">

        어느새 몇 달이 지났습니다.

        <br><br>

        첫 번째 중간고사가 찾아왔습니다.

      </p>

      <button
        class="next-button"
        onclick="showMidtermResults()">

        성적표 확인

      </button>

    </div>

  `;

}


/* =========================================================
   LETTER GRADES
========================================================= */

function calculateGrade(subject) {

  /*
    재능 과목 → A+
    약점 과목 → C
    일반 과목 → B
  */

  if (
    player.talentedSubjects
      .includes(subject)
  ) {

    return {
      grade: "A+",
      type: "talent"
    };

  }


  if (
    player.weakSubjects
      .includes(subject)
  ) {

    return {
      grade: "C",
      type: "weak"
    };

  }


  return {
    grade: "B",
    type: "normal"
  };

}


/* =========================================================
   MIDTERM RESULTS
========================================================= */

function showMidtermResults() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        첫 중간고사
      </div>

      <h2 class="scene-title">
        중간고사 성적표
      </h2>

      <div class="grade-list">

        ${subjects.map(subject => {

          const result =
            calculateGrade(subject);

          let label = "";

          if (
            result.type === "talent"
          ) {

            label =
              "⭐ 재능 과목";

          }

          else if (
            result.type === "weak"
          ) {

            label =
              "⚠️ 약점 과목";

          }

          else {

            label =
              "일반";

          }


          return `

            <div class="grade-card">

              <div>

                <strong>
                  ${subject.name}
                </strong>

                <small>
                  ${label}
                </small>

              </div>

              <div class="grade-score">

                <strong>
                  ${result.grade}
                </strong>

              </div>

            </div>

          `;

        }).join("")}

      </div>

      <button
        class="next-button"
        onclick="afterMidterms()">

        성적표를 덮는다

      </button>

    </div>

  `;

}


/* =========================================================
   AFTER MIDTERM
========================================================= */

function afterMidterms() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        중간고사 이후
      </div>

      <h2 class="scene-title">
        첫 시험이 끝났다.
      </h2>

      <p class="scene-text">

        재능 과목에서는
        좋은 결과를 얻었습니다.

        <br><br>

        반면 약점 과목에서는
        조금 고전했습니다.

        <br><br>

        하지만 성적표를 확인하고
        얼마 지나지 않아—

        <br><br>

        기숙사 게시판에
        새로운 공지가 붙습니다.

      </p>

      <div class="letter">

        <h3>
          📜 동아리 모집
        </h3>

        <p>
          관심 있는 학생은
          원하는 동아리에 가입할 수 있습니다.
        </p>

      </div>

      <button
        class="next-button"
        onclick="showClubs()">

        동아리를 알아본다

      </button>

    </div>

  `;

}


/* =========================================================
   CLUB SELECTION
========================================================= */

function showClubs() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        중간고사 이후 · 동아리
      </div>

      <h2 class="scene-title">
        어떤 동아리에 가입할까?
      </h2>

      <p class="scene-text">

        동아리 활동은 앞으로의 학교생활에
        여러 가지 영향을 줄 수 있습니다.

      </p>

      <div class="options">

        ${clubs.map((club, index) => `

          <button
            class="option"
            onclick="chooseClub(${index})">

            <strong>
              ${club.name}
            </strong>

            <small>
              ${club.description}
            </small>

            <small>
              ${club.effect}
            </small>

          </button>

        `).join("")}

      </div>

    </div>

  `;

}


/* =========================================================
   CHOOSE CLUB
========================================================= */

function chooseClub(index) {

  player.club =
    clubs[index];


  showClubResult();

}


/* =========================================================
   CLUB RESULT
========================================================= */

function showClubResult() {

  const club =
    player.club;


  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        동아리 가입 완료
      </div>

      <h2 class="scene-title">
        ${club.name}
      </h2>

      <p class="scene-text">

        당신은
        <strong>${club.name}</strong>
        에 가입했습니다.

        <br><br>

        ${club.description}

        <br><br>

        ${club.effect}

      </p>

      <div class="talent-card">

        <h3>
          현재 동아리 보너스
        </h3>

        <p>
          전투 관련 보너스:
          +${club.power}
        </p>

      </div>

      <button
        class="next-button"
        onclick="gameEndDemo()">

        학교생활을 계속한다

      </button>

    </div>

  `;

}


/* =========================================================
   END OF CURRENT DEMO
========================================================= */

function gameEndDemo() {

  game.innerHTML = `

    <div class="scene">

      <div class="progress">
        1학년 · 초반
      </div>

      <h2 class="scene-title">
        이야기는 계속된다.
      </h2>

      <p class="scene-text">

        첫 중간고사와 첫 동아리 가입까지
        마쳤습니다.

        <br><br>

        당신의 현재 상태:

        <br><br>

        🏰 기숙사:
        <strong>
          ${houseNames[player.playerHouse]}
        </strong>

        <br><br>

        🪄 지팡이:
        <strong>
          ${player.wand.wood}
        </strong>

        <br>

        ⚔️ 지팡이 전투력:
        <strong>
          ${player.wand.power}
        </strong>

        <br><br>

        🏆 동아리:
        <strong>
          ${player.club.name}
        </strong>

        <br><br>

        이제부터 본격적으로
        호그와트 생활이 시작됩니다.

      </p>

    </div>

  `;

}


/* =========================================================
   START
========================================================= */

showGender();