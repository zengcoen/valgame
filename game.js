/**
 * A Magical Journey: Romance Adventure
 * Horse girl searches for a hidden letter. Rivals-to-lovers with a mysterious male rival.
 * Final message: "be my valentines" (acrostic in chapter titles + cipher puzzle)
 */

// ===== State =====
const state = {
  screen: 'landing',
  horseId: null,
  horseName: '',
  rivalName: '',
  currentChapter: 'beneath_the_stable_roof',
  collectedLetters: [],
};

// ===== Horses =====
const HORSES = {
  ember: { name: 'Ember', image: 'horse1.png', trait: 'spirited and swift' },
  mist: { name: 'Mist', image: 'horse2.png', trait: 'gentle and wise' },
  star: { name: 'Star', image: 'horse3.png', trait: 'bright and steadfast' },
};

// ===== Chapter Data (Acrostic: B-E-M-Y-V-A-L-E-N-T-I-N-E-S) =====
const CHAPTERS = {
  beneath_the_stable_roof: {
    title: 'Beneath the Stable Roof',
    letter: 'B',
    character: 'coen',
    portrait: 'coenOnHorse',
    text: `I've spent most of my life in these stables, mucking stalls, braiding manes, learning what it means when a horse trusts you. The old ones talk about a letter hidden somewhere along the riding trails. A message meant for one person. I've always thought it was a fairy tale.

Until I found the first clue. A weathered scrap tucked under a loose board in the hayloft. <i>"Follow the marked winds,"</i> it said.

I saddled <span class="horse-name">%horse%</span> before dawn. I didn't expect to see someone else already at the fence. He turned when he heard my horse. <i>"Coen,"</i> he said. <i>"I'm Coen. And you're looking for it too, aren't you?"</i> Someone I'd raced against a dozen times. Someone with the same hungry look in his eyes.`,
    choices: [
      { label: '"Obviously. I have a map and everything."', next: 'each_clue_a_challenge' },
      { label: 'Ignore him and ride past. (He\'ll catch up anyway.)', next: 'each_clue_a_challenge' },
    ],
  },
  each_clue_a_challenge: {
    title: 'Each Clue a Challenge',
    letter: 'E',
    character: 'coen',
    portrait: 'coenOnHorse',
    text: `Coen caught up to me on the trail. Of course he did. His horse has always been faster than mine in a straight run. I've never let him forget I beat him in the jumping competition last spring.

<i>"First one to the letter wins,"</i> he said.

<i>"There\'s nothing to win. It\'s not a race."</i> I didn't look at him. <span class="horse-name">%horse%</span> flicked an ear, sensing my lie. It was always a race with us. The second clue led to a riddle carved into a fallen oak. I got there first. He was breathing down my neck the whole time.`,
    choices: [
      { label: 'Solve it together. (Try to keep up.)', next: 'maps_in_the_moonlight' },
      { label: 'Solve it alone. He can figure it out. Probably.', next: 'maps_in_the_moonlight' },
    ],
  },
  maps_in_the_moonlight: {
    title: 'Maps in the Moonlight',
    letter: 'M',
    character: 'coen',
    text: `The riddle pointed toward the old boundary stone, the one riders used to mark the edge of the estate. We reached it as the moon rose. Coen pulled a folded map from his saddlebag. I'd brought the same one. We spread them side by side in the grass, our shoulders almost touching.

<i>"The third marker is here,"</i> he said, pointing. <i>"Unless you've got a better theory."</i>

I did. But for once, I didn't say it. I watched the way the moonlight caught his profile and thought, dangerous. This feels dangerous.`,
    choices: [
      { label: 'Share my theory. (It\'s better than his.)', next: 'you_wouldnt_dare' },
      { label: 'Let him lead. I\'ll correct him when he\'s wrong.', next: 'you_wouldnt_dare' },
    ],
  },
  you_wouldnt_dare: {
    title: 'You Wouldn\'t Dare',
    letter: 'Y',
    character: 'coen',
    text: `We found the fourth clue in a hollow tree, a single word: <i>Vault</i>. The old storm cellar, maybe. The one near the north pasture. We rode there at a gallop, and I got there first. The door was already open. Inside: nothing. Just empty shelves and dust.

Coen came in behind me. I turned. <i>"You took it. You got here before me and you took it."</i>

His jaw tightened. <i>"I didn't."</i> But he wouldn't meet my eyes. <span class="horse-name">%horse%</span> stamped outside, uneasy. Something was wrong.`,
    choices: [
      { label: '"Give it back. Please."', next: 'vault_of_old_letters' },
      { label: '"I can\'t believe I trusted you."', next: 'vault_of_old_letters' },
    ],
  },
  vault_of_old_letters: {
    title: 'Vault of Old Letters',
    letter: 'V',
    character: 'coen',
    text: `Coen stepped closer. For a moment I thought he might argue. Instead he knelt, brushed away the dust, and showed me a loose floorboard. Underneath: a tin box. Inside, faded letters, dozens of them. Old love notes. Promises. None of them the one we sought.

<i>"I didn't take anything,"</i> he said quietly. <i>"I was checking if someone else had already been here. The door was like this when I arrived."</i>

I felt something shift. Shame, maybe. I'd accused him. He'd stayed.`,
    choices: [
      { label: '"I\'m sorry. I shouldn\'t have..."', next: 'an_unexpected_alliance' },
      { label: 'Nod. (The strong, silent type. Very stable.)', next: 'an_unexpected_alliance' },
    ],
  },
  an_unexpected_alliance: {
    title: 'An Unexpected Alliance',
    letter: 'A',
    character: 'coen',
    portrait: 'coenOnHorse',
    text: `We searched the vault together. Found a slip of paper tucked inside an envelope, a partial map. <i>"The loft,"</i> it said. <i>"Where the hay remembers."</i>

<i>"Truce?"</i> Coen offered.

<i>"Until we find the letter."</i>

We rode back side by side. The sun was rising. I don't know when I started noticing the way he talks to his horse, soft and patient, like he does with no one else. I stored that away. Dangerous.`,
    choices: [
      { label: '"Race you! Loser mucks the stalls."', next: 'letters_in_the_loft' },
      { label: 'Ride in silence. The moment feels right.', next: 'letters_in_the_loft' },
    ],
  },
  letters_in_the_loft: {
    title: 'Letters in the Loft',
    letter: 'L',
    puzzle: 'scramble',
    puzzleWord: 'LOFT',
    puzzleScramble: 'FLOT',
    character: 'coen',
    text: `The hayloft smelled of summer, dry grass and old wood. We climbed the ladder and found the fifth clue: a word puzzle. Letters scrambled. I spelled it out: <strong>LOFT</strong>. Coen nodded. We were good at this. Too good.

The clue led to a loose floorboard. Under it: a small key and a note. <i>"The arena. Dawn. Bring the key."</i>

<i>"Tomorrow, then,"</i> he said. He was standing close. I could see the dust in his hair.`,
    choices: [
      { label: '"Tomorrow. Don\'t oversleep."', next: 'every_rival_has_a_tell' },
      { label: '"Don\'t be late. I won\'t wait."', next: 'every_rival_has_a_tell' },
    ],
  },
  every_rival_has_a_tell: {
    title: 'Every Rival Has a Tell',
    letter: 'E',
    character: 'coen',
    text: `I've learned his tells. Coen tenses before a jump. He breathes out when he's solved a riddle before I have. That morning at the arena, he was nervous. I'd never seen him nervous.

The key opened a locker in the equipment shed. Inside: another letter fragment. <i>"The first of each place you've been. Gather them. They spell the truth."</i>

We'd been collecting letters from every clue. We were close. I could feel it. So could he. His hand brushed mine when we reached for the fragment at the same time. Neither of us pulled away.`,
    choices: [
      { label: '"We\'re so close I can taste the drama."', next: 'the_night_he_betrayed_me' },
      { label: 'Stare at him. Say nothing. (Very enigmatic.)', next: 'the_night_he_betrayed_me' },
    ],
  },
  the_night_he_betrayed_me: {
    title: 'The Night He Betrayed Me',
    letter: 'N',
    text: `The final clue led to the old stone bridge. I went at dusk. Coen said he'd meet me there. I trusted him. <span class="horse-name">%horse%</span> and I crossed the creek, rode up the hill. The bridge was empty. No, not empty. A note, pinned to the rail.

<i>"Don't follow. It's for the best."</i>

His handwriting. I stood there until the moon rose. He'd taken it. He'd taken the last piece and left. I'd let myself believe, what? That we were in this together? That it meant something? I rode home in the dark. I didn't cry. I told myself I wouldn't cry.`,
    choices: [
      { label: 'Go home. I\'ll process this over tea and denial.', next: 'trust_shattered' },
      { label: 'Search the bridge. There has to be something. Right?', next: 'trust_shattered' },
    ],
  },
  trust_shattered: {
    title: 'Trust Shattered',
    letter: 'T',
    text: `I avoided the stables for three days. When I finally came back, the stable master found me. <i>"Someone left this for you."</i> A sealed envelope. No name.

Inside: the final clue. The one that should have been at the bridge. And a note, his note. <i>"I'm sorry. I didn't take it to hurt you. There were others looking. People who'd use it. I had to hide it until it was safe. I'm still sorry."</i>

My hands shook. Was it an excuse? Or the truth?`,
    choices: [
      { label: 'Find him. Hear him out. (Drama demands resolution.)', next: 'in_the_arena_at_dawn' },
      { label: 'Finish the puzzle first. Confrontations can wait.', next: 'in_the_arena_at_dawn' },
    ],
  },
  in_the_arena_at_dawn: {
    title: 'In the Arena at Dawn',
    letter: 'I',
    character: 'coen',
    text: `I found Coen at the arena. Alone. His horse grazing in the corner. He saw me and stood very still, like I might vanish if he moved.

<i>"I thought you'd never want to see me again."</i>

<i>"I didn't."</i> I dismounted. <span class="horse-name">%horse%</span> nuzzled his shoulder. Traitor. <i>"The stable master gave me the clue. Your note. Why?"</i>

He took a breath. <i>"Because I didn't want anyone else to find it before you. I wanted you to have it. All of it. The message wasn't meant for everyone. It was meant for you."</i>`,
    choices: [
      { label: '"Then help me decode it."', next: 'no_more_secrets' },
      { label: '"I need to understand. Tell me everything."', next: 'no_more_secrets' },
    ],
  },
  no_more_secrets: {
    title: 'No More Secrets',
    letter: 'N',
    character: 'coen',
    text: `Coen told me everything. How he'd been searching for the same letter. How he'd found the final piece days before me and realized others were close, people who'd sell it, display it, ruin it. How he'd hidden it and left the note so I wouldn't think he'd betrayed the hunt, only to buy time.

<i>"I was protecting it. For you. I didn't know how to say it."</i>

We spread the clues in the arena dust. Fourteen letters, one from each place we'd been. In order. <i>"The first letter of each chapter,"</i> he said. <i>"Of every place we went. They spell something. We just have to see it."</i>`,
    choices: [
      { label: '"Let\'s spell this out. Literally."', next: 'every_letter_decoded' },
      { label: '"I think I see it..."', next: 'every_letter_decoded' },
    ],
  },
  every_letter_decoded: {
    title: 'Every Letter, Decoded',
    letter: 'E',
    character: 'coen',
    text: `We knelt in the dirt. Coen wrote the letters. I added the spaces. Three words. A question. A secret that had been waiting all along.

He looked at me. Really looked. <i>"I didn't know what it would say. I swear. I was just curious. I wanted to find it with you."</i>

The sun was rising over the arena. <span class="horse-name">%horse%</span> nickered softly. I had my answer.`,
    choices: [
      { label: "It's your turn to ask.", next: 'something_to_ask' },
      { label: "I know what I want to say.", next: 'something_to_ask' },
    ],
  },
  something_to_ask: {
    title: 'Something to Ask',
    letter: 'S',
    isReveal: true,
  },
};

// ===== Chapter titles for acrostic =====
const DISPLAY_CHAPTERS = [
  { title: 'Beneath the Stable Roof' },
  { title: 'Each Clue a Challenge' },
  { title: 'Maps in the Moonlight' },
  { title: "You Wouldn't Dare" },
  { title: 'Vault of Old Letters' },
  { title: 'An Unexpected Alliance' },
  { title: 'Letters in the Loft' },
  { title: 'Every Rival Has a Tell' },
  { title: 'The Night He Betrayed Me' },
  { title: 'Trust Shattered' },
  { title: 'In the Arena at Dawn' },
  { title: 'No More Secrets' },
  { title: 'Every Letter, Decoded' },
  { title: 'Something to Ask' },
];

// ===== Stable Master Dialogue =====
const STABLEMASTER_REACTIONS = {
  ember: 'Ember, a fiery spirit. That one will carry you far and fast. Good eye.',
  mist: 'Mist. Wise and patient. You\'ve chosen a companion who sees things others miss.',
  star: 'Star. Bright and true. You\'ll find no steadier friend on the path ahead.',
};

// ===== DOM =====
const screens = {
  landing: document.getElementById('screen-landing'),
  letter: document.getElementById('screen-letter'),
  stablemasterIntro: document.getElementById('screen-stablemaster-intro'),
  selection: document.getElementById('screen-selection'),
  stablemasterOutro: document.getElementById('screen-stablemaster-outro'),
  naming: document.getElementById('screen-naming'),
  adventure: document.getElementById('screen-adventure'),
  reveal: document.getElementById('screen-reveal'),
};

const storyText = document.getElementById('story-text');
const chapterTitleEl = document.getElementById('chapter-title');
const choicesContainer = document.getElementById('choices-container');
const revealContent = document.getElementById('reveal-content');

// ===== Helpers =====
function interpolateText(text) {
  return (text || '')
    .replace(/%horse%/g, `<span class="horse-name">${state.horseName || 'your companion'}</span>`)
    .replace(/%rival%/g, state.rivalName);
}

function showScreen(screenId) {
  Object.values(screens).forEach((s) => s?.classList.remove('active'));
  const screen = screens[screenId];
  if (screen) screen.classList.add('active');
  state.screen = screenId;
}

// ===== Puzzle: Word Scramble =====
function renderScramblePuzzle(chapter, container) {
  const { puzzleWord, puzzleScramble } = chapter;
  const wrap = document.createElement('div');
  wrap.className = 'puzzle-area';
  wrap.innerHTML = `
    <p class="puzzle-hint">Unscramble these letters to reveal the clue word:</p>
    <div class="scramble-display" id="scramble-display">${puzzleScramble.split('').join(' ')}</div>
    <div class="grade-ladder" id="grade-ladder"></div>
    <label for="scramble-input">Your answer:</label>
    <input type="text" id="scramble-input" placeholder="Enter the word" maxlength="${puzzleWord.length}" autocomplete="off">
    <p class="puzzle-error" id="puzzle-error" style="display:none;">Not quite. Try again.</p>
  `;
  container.appendChild(wrap);

  const input = wrap.querySelector('#scramble-input');
  const errorEl = wrap.querySelector('#puzzle-error');
  const ladder = wrap.querySelector('#grade-ladder');

  // Letter grade blocks
  puzzleWord.split('').forEach((_, i) => {
    const block = document.createElement('span');
    block.className = 'grade-step';
    block.textContent = '?';
    block.dataset.index = String(i);
    ladder.appendChild(block);
  });

  input.addEventListener('input', () => {
    const val = input.value.toUpperCase().replace(/[^A-Z]/g, '');
    input.value = val;
    errorEl.style.display = 'none';
    ladder.querySelectorAll('.grade-step').forEach((s, i) => {
      s.textContent = val[i] || '?';
      s.classList.toggle('collected', !!val[i]);
    });
    if (val === puzzleWord) {
      input.disabled = true;
      input.classList.add('correct');
      ladder.querySelectorAll('.grade-step').forEach((s) => s.classList.add('collected'));
    }
  });
}

// ===== Render Chapter =====
function renderChapter(chapterId) {
  const chapter = CHAPTERS[chapterId];
  if (!chapter) return;

  state.currentChapter = chapterId;
  if (chapter.letter && !state.collectedLetters.includes(chapter.letter)) {
    state.collectedLetters.push(chapter.letter);
  }
  if (chapterId === 'beneath_the_stable_roof') {
    state.rivalName = 'Coen';
  }

  chapterTitleEl.textContent = chapter.title;

  const portraitEl = document.getElementById('character-portrait');
  if (portraitEl) {
    if (chapter.character === 'coen') {
      portraitEl.style.display = 'block';
      const img = chapter.portrait === 'coenOnHorse' ? 'coenOnHorse.png' : 'coen.png';
      portraitEl.innerHTML = `<img src="${img}" alt="Coen">`;
    } else {
      portraitEl.style.display = 'none';
      portraitEl.innerHTML = '';
    }
  }

  storyText.innerHTML = interpolateText(chapter.text);
  choicesContainer.innerHTML = '';

  if (chapter.puzzle === 'scramble') {
    renderScramblePuzzle(chapter, storyText);
  }

  if (chapter.isReveal) {
    showReveal();
    return;
  }

  (chapter.choices || []).forEach((choice) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice.label;
    btn.addEventListener('click', () => {
      if (chapter.puzzle === 'scramble') {
        const input = storyText.querySelector('#scramble-input');
        if (input && input.value.toUpperCase() !== chapter.puzzleWord) {
          storyText.querySelector('#puzzle-error').style.display = 'block';
          return;
        }
      }
      goToChapter(choice.next);
    });
    choicesContainer.appendChild(btn);
  });
}

function showReveal() {
  showScreen('reveal');

  const letters = ['B', 'E', 'M', 'Y', 'V', 'A', 'L', 'E', 'N', 'T', 'I', 'N', 'E', 'S'];
  const scrambled = [...letters].sort(() => Math.random() - 0.5);

  const html = `
    <p class="letter-opener" style="color: var(--color-text-dim); margin-bottom: 1.5rem;">
      You and he spread the fourteen letters in the arena dust. The first letter of every place you traveled together. They've been with you all along.
    </p>
    <p style="color: var(--color-text); margin-bottom: 1rem;">
      <i>"Arrange them,"</i> he says. <i>"Add the spaces. The message is there. I didn't know what it would say, only that it was meant for you."</i>
    </p>
    <div class="chapter-list">
      ${DISPLAY_CHAPTERS.map(
        (c) =>
          `<div class="chapter-item"><span class="first-letter">${c.title[0]}</span>${c.title.slice(1)}</div>`
      ).join('')}
    </div>
    <p style="color: var(--color-accent-soft); margin: 1.5rem 0;">
      The letters you collected, in the order of the places you traveled:
    </p>
    <p class="letters-display" style="font-size: 1.25rem; letter-spacing: 0.25em; margin: 1rem 0;">
      B E M Y V A L E N T I N E S
    </p>
    <p class="final-message" style="margin: 2rem 0;">
      be my valentines
    </p>
    <p class="closing-text" style="color: var(--color-text-dim); margin-bottom: 1.5rem;">
      Will you?
    </p>
    <button id="btn-play-again" class="btn btn-primary">Play again</button>
  `;

  revealContent.innerHTML = html;

  document.getElementById('btn-play-again').addEventListener('click', () => showScreen('landing'));
}

function goToChapter(chapterId) {
  if (!chapterId) return;
  renderChapter(chapterId);
}

// ===== Init =====
document.getElementById('btn-start').addEventListener('click', () => showScreen('letter'));

document.getElementById('btn-letter-continue').addEventListener('click', () => showScreen('stablemasterIntro'));

document.getElementById('btn-stablemaster-continue').addEventListener('click', () => showScreen('selection'));

document.querySelectorAll('.btn-select').forEach((btn) => {
  btn.addEventListener('click', () => {
    const horseId = btn.dataset.horse;
    state.horseId = horseId;
    const horse = HORSES[horseId];
    const iconEl = document.getElementById('naming-horse-icon');
    iconEl.src = horse.image;
    iconEl.alt = horse.name;
    document.getElementById('naming-horse-type').textContent = horse.name + ', ' + horse.trait;
    document.getElementById('horse-name').value = horse.name;
    document.getElementById('horse-name').focus();
    const outroText = document.getElementById('stablemaster-outro-text');
    if (outroText) outroText.textContent = STABLEMASTER_REACTIONS[horseId];
    showScreen('stablemasterOutro');
  });
});

document.getElementById('btn-stablemaster-to-naming').addEventListener('click', () => showScreen('naming'));

document.getElementById('btn-begin').addEventListener('click', () => {
  const name = document.getElementById('horse-name').value.trim();
  if (!name) {
    document.getElementById('horse-name').focus();
    return;
  }
  state.horseName = name;
  state.collectedLetters = [];
  renderChapter('beneath_the_stable_roof');
  showScreen('adventure');
});

document.getElementById('horse-name').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('btn-begin').click();
});
