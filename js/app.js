// Full-Stack: site behaviour
(function () {
  var wrap = document.getElementById('interest-buttons');
  if (!wrap) return;
  var out = document.getElementById('interest-result');
  var picks = {
    'History': 'Try Xi\'an and Beijing.',
    'Food': 'Try Chengdu, Hong Kong and Xi\'an.',
    'Scenery': 'Try Guilin and Yangshuo.',
    'Modern city life': 'Try Shanghai and Hong Kong.'
  };
  Object.keys(picks).forEach(function (name) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = name;
    b.addEventListener('click', function () { out.textContent = name + ': ' + picks[name]; });
    wrap.appendChild(b);
  });
})();
