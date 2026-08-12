let currentLanguage = 'ar';

function toggleLanguage() {
    const htmlEl = document.documentElement;
    const langLabel = document.getElementById('lang-label');
    const translatableElems = document.querySelectorAll('[data-ar]');

    if (currentLanguage === 'ar') {
        currentLanguage = 'en';
        htmlEl.setAttribute('lang', 'en');
        htmlEl.setAttribute('dir', 'ltr');
        langLabel.textContent = 'ÚÑÈí';

        translatableElems.forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
    } else {
        currentLanguage = 'ar';
        htmlEl.setAttribute('lang', 'ar');
        htmlEl.setAttribute('dir', 'rtl');
        langLabel.textContent = 'English';

        translatableElems.forEach(el => {
            el.textContent = el.getAttribute('data-ar');
        });
    }
}

function copyPhone(number) {
    navigator.clipboard.writeText(number).then(() => {
        showToast(currentLanguage === 'ar' ? 'Êã äÓÎ ÇáÑÞã ÈäÌÇÍ!' : 'Phone number copied!');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}