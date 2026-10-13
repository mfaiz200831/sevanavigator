/* =====================================================
   SEVANAVIGATOR - sources.js
   "Where did this information come from?" transparency
   -----------------------------------------------------
   Adds a small source button next to key claims
   (eligibility, documents, fees, steps). Clicking it
   shows the official source, section note, and last
   reviewed date. Pure front-end, no backend.
   ===================================================== */

(function () {
  'use strict';

  var HI = {
    'Where did this come from?': 'यह जानकारी कहाँ से आई?',
    'Official source': 'आधिकारिक स्रोत',
    'Section / note': 'अनुभाग / नोट',
    'Last reviewed by SevaNavigator': 'SevaNavigator द्वारा अंतिम जाँच',
    'This is general guidance only. Always confirm on the official website.': 'यह केवल सामान्य मार्गदर्शन है। हमेशा आधिकारिक वेबसाइट पर पुष्टि करें।',
    'Close': 'बंद करें',
    'Open official page': 'आधिकारिक पेज खोलें',
    'Source': 'स्रोत',
    'Not yet verified against a specific page section. Confirm on the official site.': 'अभी किसी विशिष्ट पेज अनुभाग के विरुद्ध सत्यापित नहीं। आधिकारिक साइट पर पुष्टि करें।'
  };

  function t(key) {
    return document.documentElement.lang === 'hi' && HI[key] ? HI[key] : key;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  /* Default source data when a service has no custom sources */
  function defaultSource(service) {
    return {
      url: service.url || '',
      label: service.department || 'Official portal',
      note: 'Confirm the latest rules, fees and documents on the official website.',
      reviewed: 'October 2026'
    };
  }

  function getSource(service, key) {
    if (service.sources && service.sources[key]) {
      return service.sources[key];
    }
    return defaultSource(service);
  }

  /* Popup */
  var activePopup = null;

  function closePopup() {
    if (activePopup) {
      activePopup.remove();
      activePopup = null;
    }
    document.removeEventListener('keydown', onEsc);
  }

  function onEsc(e) {
    if (e.key === 'Escape') closePopup();
  }

  function showPopup(anchor, source, service) {
    closePopup();

    var popup = el('div', 'sn-source-popup');
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-label', t('Where did this come from?'));

    var header = el('div', 'sn-source-header');
    header.appendChild(el('strong', '', t('Where did this come from?')));
    var closeBtn = el('button', 'sn-source-close', '×');
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', t('Close'));
    closeBtn.addEventListener('click', closePopup);
    header.appendChild(closeBtn);
    popup.appendChild(header);

    var body = el('div', 'sn-source-body');
    body.appendChild(el('p', 'sn-source-label', t('Official source')));
    if (source.url) {
      var link = el('a', 'sn-source-link');
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = source.label || source.url;
      body.appendChild(link);
    } else {
      body.appendChild(el('p', '', source.label || '—'));
    }

    body.appendChild(el('p', 'sn-source-label', t('Section / note')));
    body.appendChild(el('p', '', source.note || t('Not yet verified against a specific page section. Confirm on the official site.')));

    body.appendChild(el('p', 'sn-source-label', t('Last reviewed by SevaNavigator')));
    body.appendChild(el('p', '', source.reviewed || '—'));

    body.appendChild(el('p', 'sn-source-disclaimer', t('This is general guidance only. Always confirm on the official website.')));

    if (source.url) {
      var open = el('a', 'button button-secondary sn-source-open');
      open.href = source.url;
      open.target = '_blank';
      open.rel = 'noopener noreferrer';
      open.textContent = t('Open official page');
      body.appendChild(open);
    }

    popup.appendChild(body);

    // Position near the button
    document.body.appendChild(popup);
    activePopup = popup;

    var rect = anchor.getBoundingClientRect();
    var top = rect.bottom + window.scrollY + 8;
    var left = Math.min(rect.left + window.scrollX, window.innerWidth - 320);
    if (left < 12) left = 12;
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';

    document.addEventListener('keydown', onEsc);

    // Click outside to close
    setTimeout(function () {
      document.addEventListener('click', function outside(e) {
        if (activePopup && !activePopup.contains(e.target) && e.target !== anchor) {
          closePopup();
          document.removeEventListener('click', outside);
        }
      });
    }, 0);
  }

  function makeSourceButton(service, key) {
    var btn = el('button', 'sn-source-btn');
    btn.type = 'button';
    btn.title = t('Where did this come from?');
    btn.setAttribute('aria-label', t('Where did this come from?'));
    btn.innerHTML = '<span aria-hidden="true">ⓘ</span> <span class="sn-source-btn-text">' + t('Source') + '</span>';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      showPopup(btn, getSource(service, key), service);
    });
    return btn;
  }

  function addSourceButtons(service) {
    // Remove old ones
    document.querySelectorAll('.sn-source-btn, .sn-source-wrap').forEach(function (n) { n.remove(); });

    // Eligibility card
    var eligTitle = document.getElementById('eligibility-title');
    if (eligTitle) {
      var wrap = el('span', 'sn-source-wrap');
      wrap.appendChild(makeSourceButton(service, 'eligibility'));
      eligTitle.appendChild(wrap);
    }

    // Documents card
    var docsTitle = document.getElementById('documents-title');
    if (docsTitle) {
      var wrap2 = el('span', 'sn-source-wrap');
      wrap2.appendChild(makeSourceButton(service, 'documents'));
      docsTitle.appendChild(wrap2);
    }

    // Steps card
    var stepsTitle = document.getElementById('steps-title');
    if (stepsTitle) {
      var wrap3 = el('span', 'sn-source-wrap');
      wrap3.appendChild(makeSourceButton(service, 'steps'));
      stepsTitle.appendChild(wrap3);
    }

    // Fees card
    var feesTitle = document.getElementById('fees-title');
    if (feesTitle) {
      var wrap4 = el('span', 'sn-source-wrap');
      wrap4.appendChild(makeSourceButton(service, 'fees'));
      feesTitle.appendChild(wrap4);
    }
  }

  /* Styles */
  function addStyles() {
    if (document.getElementById('sn-source-styles')) return;
    var css = '' +
      '.sn-source-wrap{display:inline-flex;margin-left:8px;vertical-align:middle;}' +
      '.sn-source-btn{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border:1px solid var(--border,#d6dde1);border-radius:999px;background:#f8fafc;color:var(--navy,#142B3B);font-size:12px;font-weight:600;cursor:pointer;transition:background .15s,border-color .15s,transform .15s;}' +
      '.sn-source-btn:hover{background:#eef2f7;border-color:#94a3b8;transform:translateY(-1px);}' +
      '.sn-source-btn:active{transform:translateY(0);}' +
      '.sn-source-btn-text{line-height:1;}' +
      '.sn-source-popup{position:absolute;z-index:9999;width:min(300px,calc(100vw - 24px));background:#fff;border:1px solid #e2e8f0;border-radius:12px;box-shadow:0 12px 40px rgba(15,23,42,.14);padding:0;overflow:hidden;animation:snSourceIn .18s ease;}' +
      '@keyframes snSourceIn{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);}}' +
      '.sn-source-header{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;}' +
      '.sn-source-header strong{font-size:14px;}' +
      '.sn-source-close{border:none;background:transparent;font-size:20px;line-height:1;cursor:pointer;color:#64748b;padding:0 4px;}' +
      '.sn-source-close:hover{color:#0f172a;}' +
      '.sn-source-body{padding:14px;}' +
      '.sn-source-label{margin:0 0 2px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#64748b;}' +
      '.sn-source-body p{margin:0 0 12px;font-size:13px;line-height:1.45;}' +
      '.sn-source-link{display:inline-block;margin-bottom:12px;color:#0b57d0;font-size:13px;word-break:break-all;}' +
      '.sn-source-disclaimer{font-size:12px!important;color:#64748b;}' +
      '.sn-source-open{display:inline-flex;margin-top:4px;font-size:13px;}';
    var style = document.createElement('style');
    style.id = 'sn-source-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* Hook into renderDetail */
  var previousRenderDetail = window.renderDetail;
  window.renderDetail = function (service) {
    previousRenderDetail(service);
    addSourceButtons(service);
  };

  new MutationObserver(function () {
    if (typeof state !== 'undefined' && state.openId) {
      var service = findService(state.openId);
      if (service) addSourceButtons(service);
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  if (typeof state !== 'undefined' && state.openId) {
    var openNow = findService(state.openId);
    if (openNow) setTimeout(function () { addSourceButtons(openNow); }, 30);
  }

  addStyles();
}());
