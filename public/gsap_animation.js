gsap.registerPlugin(TextPlugin, EasePack);

var container = $("#demo"),
  _sentenceEndExp = /(\.|\?|!)$/g;

function machineGun(text) {
  var words = text.split(" "),
    tl = gsap.timeline({ delay: 0.6, repeat: 2, repeatDelay: 4 }),
    wordCount = words.length,
    time = 0,
    word,
    element,
    duration,
    isSentenceEnd,
    i;

  for (i = 0; i < wordCount; i++) {
    word = words[i];
    isSentenceEnd = _sentenceEndExp.test(word);
    element = $("<h3>" + word + "</h3>");
    element = i + 1 == wordCount ? element.addClass("active") : element;
    element.appendTo(container);
    duration = Math.max(0.5, word.length * 0.08);
    if (isSentenceEnd) {
      duration += 0.6;
    }
    gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });
    tl.to(element, duration, { scale: 1.2, ease: "slow(0.25, 0.9)" }, time).to(
      element,
      duration,
      { autoAlpha: 1, ease: "slow(0.25, 0.9, true)" },
      time
    );
    time += duration - 0.05;
    if (isSentenceEnd) {
      time += 0.6;
    }
  }
}

machineGun("Manufacturing sounds geeky and tough? Try Printalytix");
