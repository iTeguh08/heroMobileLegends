const heroes = [
  {
      name: "Alucard",
      skin: "Obsidian Blade",
      role: "Fighter/Assassin Chase/Damage",
      video: "heroes/alu.mp4",
      sound: "voiceLine/aluVL.mp3",
      resultImage: "heroes/hasilMatchAlu.jpg",
      abilities: [
          "icons/pursuit.png",
          "icons/thrill.png",
          "icons/seasonedHunter.png",
          "icons/lethalIgnition.png",
          "icons/retriMerah.png",
      ]
  },
  {
      name: "Chou",
      skin: "Iori Yagami",
      role: "Fighter Chase/Control",
      video: "heroes/chou.mp4",
      sound: "voiceLine/chouVL.mp3",
      resultImage: "heroes/hasilMatchChou.jpg",
      abilities: [
          "icons/onlyfast.png",
          "icons/rupture.png",
          "icons/seasonedHunter.png",
          "icons/lethalIgnition.png",
          "icons/fliker.png",
      ]
  },
  {
    name: "Fredrinn",
    skin: "Neobeast Fredrinn",
    role: "Fighter/Tank Damage/Chase",
    video: "heroes/fred.mp4",
    sound: "voiceLine/fredVL.mp3",
    resultImage: "heroes/hasilMatchFred.jpg",
    abilities: [
        "icons/crystallineArmor.png",
        "icons/inspire.png",
        "icons/seasonedHunter.png",
        "icons/braveSmite.png",
        "icons/retriBiru.png",
    ]
  },
  {
    name: "Yu Zhong",
    skin: "Cosmic Dragon",
    role: "Fighter Regen/Damage",
    video: "heroes/yz.mp4",
    sound: "voiceLine/yzVL.mp3",
    resultImage: "heroes/hasilMatchYz.jpg",
    abilities: [
        "icons/cursingTouch.png",
        "icons/agility.png",
        "icons/festOfBlood.png",
        "icons/quantumCharge.png",
        "icons/petrify.png",
    ]
  },
  {
    name: "Zilong",
    skin: "Empyrean Paladin",
    role: "Fighter/Assasin Chase/Damage",
    video: "heroes/zilong.mp4",
    sound: "voiceLine/zilongVL.mp3",
    resultImage: "heroes/hasilMatchZilong.jpg",
    abilities: [
        "icons/dragonFlurry.png",
        "icons/rupture.png",
        "icons/seasonedHunter.png",
        "icons/lethalIgnition.png",
        "icons/retriMerah.png",
    ]
  },
  // Tambahkan data hero lainnya dengan cara yang sama...
];

// Generate HTML for each hero
const manHeroes = document.getElementById("manHeroes");

heroes.forEach(hero => {
  const heroBox = document.createElement("div");
  heroBox.classList.add("box");

  heroBox.innerHTML = `
      <video autoplay muted loop>
          <source src="${hero.video}" type="video/mp4" />
      </video>
      <button class="btnSound">
          <div class="sound-icon-wrapper">
              <img src="icons/mute.png" class="soundIcon" />
          </div>
          <audio src="${hero.sound}"></audio>
      </button>
      <button class="btnArrowDown">
          <img src="icons/TripleArrow.gif" />
      </button>
      <div class="panel-popup">
          <img src="${hero.resultImage}" class="hasilMatch" />
          <div class="icons">
              ${hero.abilities.map(icon => `<img src="${icon}" data-hero="${icon.split('/').pop().split('.')[0]}"/>`).join('')}
              <div class="pentagon-background"></div>
              <div class="pentagon-background2"></div>
              <div class="pentagon-background3"></div>
              <div class="pentagon-background4"></div>
              <div class="pentagon-background5"></div>
          </div>
          <div id="description-container" class="description">
              <p id="description-text"></p>
          </div>
      </div>
      <div class="panel-content">
          <div class="fighterIcon">
              <img src="icons/fighterIcon.png" />
          </div>
          <h3 class="roboto-bold-italic">${hero.name}</h3>
          <p class="roboto-bold">Skin : ${hero.skin}</p>
          <p class="roboto-bold">Role : ${hero.role}</p>
      </div>
  `;

  manHeroes.appendChild(heroBox);

  const boxes = manHeroes.querySelectorAll(".box");

  window.addEventListener("scroll", checkBoxes);
  window.addEventListener("load", checkBoxes);
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 3;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  const soundButton = heroBox.querySelector(".btnSound");
  soundButton.addEventListener("click", () => {
    stopAllAudio(); // Hentikan semua audio
    toggleSound(soundButton); // Panggil fungsi untuk mengganti gambar dan memutar audio
  });
});

const arrowButtons = document.querySelectorAll(".btnArrowDown");

arrowButtons.forEach((arrowButton) => {
  const box = arrowButton.closest(".box");
  const panelPopup = box.querySelector(".panel-popup");
  let isPanelVisible = false;

  arrowButton.addEventListener("click", () => {
    if (isPanelVisible) {
      panelPopup.classList.add("hide");
      panelPopup.classList.remove("show");
      box.classList.remove("active");
    } else {
      panelPopup.classList.remove("hide");
      panelPopup.classList.add("show");
      box.classList.add("active");

      // Trigger the first icon click to show its background and description
    }
    isPanelVisible = !isPanelVisible;
    arrowButton.classList.toggle("rotate");
  });
});


// Add icon click functionality
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.icons');
  const descriptions = {
    pursuit: `<span class="titleIcon"><h1>Passive Pursuit</h1></span> After each skill cast, 
                Alucard next Basic Attack allows him to dash to the target location and deal Physical Damage.
                Alucard passive allows him to deal extra damage and chase down targets.
                Ensure that you are consistently targeting marked enemies to benefit from the enhanced mobility and damage.`,
    onlyfast: `<span class="titleIcon"><h1>Only Fast</h1></span> Chou’s next basic attack deals 180% damage 
                and slows down the enemy by 80% after he moves for 8 yards long.
                This enhanced basic attack cannot deal critical damage to enemies
                and when his passive is triggered you can easily understand it by seeing his glowing hands.`,
    crystallineArmor: `<span class="titleIcon"><h1>Crystalline Armor</h1></span> Fredrinn gains Combo Points each time his skill hits 
                        a non-minion enemy His ultimate costs different numbers of Combo Points 
                        at different skill levels Fredrinn stores large percentage of the damage 
                        he receives as Crystal Energy, which decays after a couple of seconds.`,
    cursingTouch: `<span class="titleIcon"><h1>Cursing Touch</h1></span> Yu Zhong applies Sha Residue 
                    to enemy heroes every time he deals damage to them. Sha Residue erupts upon reaching 5 stacks on a target, 
                    then it begins consuming 1 stack every 0.4 seconds to deal Physical Damage
                    equal to 30 (+20% Extra Physical Attack) plus 2.5% of the target’s Lost HP to the target.
                    Each stack consumed restores 6% of Yu Zhong’s lost HP to the target. When Sha Residue erupts,
                    Yu Zhong also gains 30% Movement Speed for 3s.`,
      dragonFlurry: `<span class="titleIcon"><h1>Dragon Flurry</h1></span> After every 3 Basic Attacks,
                    Zilong gains Dragon Flurry on the next Basic Attack, hitting the target 3 times. 
                    Each hit deals 30 (+40% Total Physical Attack) as Basic Attack Damage and heals himself 
                    for 30 (+20% Total Physical Attack) HP. Remember, Dragon Flurry benefits only one time from Demon Hunter Sword.`,
      yinYangGathering: `<span class="titleIcon"><h1>Yin Yang Gathering</h1></span> Yin Yang Gathering (Passive Skill): When Kagura
                        takes her umbrella, she will get a Shield and cause a stun effect for several seconds to enemies nearby.`,
      symbiosis: `<span class="titleIcon"><h1>Symbiosis</h1></span> Symbiosis is Selena passive skill that slows
                  enemies when they are hit. Selena also gets a magic power bonus when she picks up an orb after casting a skill.`,
      airSuperiority: `<span class="titleIcon"><h1>Air Superiority</h1></span> Based on her flying speed,
                      Fanny damage while flying will increase by 15% to 30% and leave a Prey Mark on the target (up to 2 stacks).
                      Each stack restores 10 energy when she deals damage to an enemy with a Prey Mark.`,
      superMagic: `<span class="titleIcon"><h1>Super Magic</h1></span> Super Magic is Guinevere passive skill that
                  gives her a unique ability. After using her basic skill or ultimate skill, Guinevere 
                  will get a shield that reduces the damage she takes.`,
      dreamlandTwist: `<span class="titleIcon"><h1>Dreamland Twist</h1></span> Lunox is twisted by the powers of Chaos and Order.
                      When she uses Power of Order, she gains a percentage of spell vamp for every percentage of magic penetration.\
                      When she uses Power of Chaos, she gains a percentage of magic penetration for every percentage of spell vamp.`,
      thrill: `<span class="titleIcon"><h1>Thrill</h1></span> Gain extra adaptive attack.`,
      rupture: `<span class="titleIcon"><h1>Rupture</h1></span> Gain extra 5 adaptive penetration.`,
      inspire: `<span class="titleIcon"><h1>Inspire</h1></span> Gain extra 5% extra cooldown reduction.`,
      agility: `<span class="titleIcon"><h1>Agility</h1></span> Gain extra 5% movement speed.`,
      seasonedHunter: `<span class="titleIcon"><h1>Seasoned Hunter</h1></span> Against Lord and Turtle is increased.
                      This bonus is halved against regular creeps and doesn’t affect the damage of Retribution.`,
      festivalOfBlood: `<span class="titleIcon"><h1>Festival of Blood</h1></span> Gain 6% spell vamp.
                      Every kill or assist from an enemy hero will gain 0.5% spell vamp, can be stacked up to 6 times.`,
      weaponMaster: `<span class="titleIcon"><h1>Weapon Master</h1></span> Physical Attack and Magic Power gained from
                    equipment, emblem, talents, and skills are increased by 5%.`,
      lethalIgnition: `<span class="titleIcon"><h1>Lethal Ignition</h1></span> Dealing damage greater than a percentage
                      of an enemy hero’s max HP three times within a duration will scorch the target for an additional Adaptive Damage.`,
      quantumCharge: `<span class="titleIcon"><h1>Quantum Charge</h1></span> Dealing damage using basic attacks
                      will increase movement speed by 30% for 1.5 seconds and restore 75-180 HP (scales with level).`,
      braveSmite: `<span class="titleIcon"><h1>Brave Smite</h1></span> Dealing damage through skills to an enemy will restore 5% of max HP.`,
      flicker: `<span class="titleIcon"><h1>Flicker</h1></span> Moves a certain distance in a designated direction.
                Then gains 6 (+1 × Hero Level) Physical and Magic Defense for 1 second.`,
      retriMerah: `<span class="titleIcon"><h1>Flame Retribution</h1></span> Retribution damage against creeps and minions is increased to 150%.
                  When cast on an enemy hero, deals them 100 True Damage and steals 58-100
                  Physical Attack and Magic Power (scales with level) from them for 4 seconds.`,
      retriBiru: `<span class="titleIcon"><h1>Ice Retribution</h1></span> Retribution damage against creeps and minions
                  is increased to 150%. When cast on an enemy hero, deals them 100 True Damage and steals 72-100 Movement
                  Speed (scales with level) from them for 4 seconds. Retribution is upgraded when the total number of creep kills, hero kills, and assists reaches 5.`
  };
  icons.forEach((icon, idxIcon) => {
    const subIcon = icon.querySelectorAll('img');

    subIcon.forEach((img, idxImg) => {

      img.addEventListener('click', function() {
        // alert(idxImg);
        console.log('Icon clicked:', idxImg);
        const box = icon.closest('.box');
        box.querySelectorAll('.pentagon-background, .pentagon-background2, .pentagon-background3, .pentagon-background4, .pentagon-background5').forEach(bg => {
          bg.classList.remove('active');
        });
        const pentagonBackground = box.querySelector(`.pentagon-background${idxImg === 0 ? '' : idxImg + 1}`);
        if (pentagonBackground) {
          pentagonBackground.classList.add('active');
        }
        const descriptionKey = img.getAttribute('data-hero');
        updateDescription(descriptionKey, box);

        // Remove active class from all icons and add it to the clicked icon
        subIcon.forEach(i => i.classList.remove('active')); // Remove active from all
        img.classList.add('active'); // Add active to the clicked one
      });
    });
    if (subIcon[0]) {
      subIcon[0].click(); // Simulate click on the first icon
    }
  });

  // Function to update description in the respective box
  function updateDescription(key, box) {
    const descriptionText = box.querySelector('.description #description-text');
    descriptionText.innerHTML = descriptions[key] || '';
  }
});

// Sound buttons logic
// Fungsi untuk menangani pemutaran audio dan mengganti gambar
function toggleSound(button) {
  const audio = button.querySelector("audio");
  const onOffIcon = button.querySelector("img");

  // Jika audio sedang diputar
  if (onOffIcon.getAttribute("src") === "icons/mute.png") {
    onOffIcon.setAttribute("src", "icons/volume.png");
    audio.play();
  } else {
    onOffIcon.setAttribute("src", "icons/mute.png");
    audio.pause();
  }
}

// Function to stop all audio
function stopAllAudio() {
  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0; // Reset audio ke awal
  });
}

