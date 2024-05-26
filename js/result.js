window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultType = urlParams.get('result');
    const lastSelected = urlParams.get('selected');

    const resultNameElement = document.querySelector('.resultname');
    const resultDescElement = document.querySelector('.resultDesc');
    const resultImgContainer = document.querySelector('#resultImg');

    // 결과 이름 설정
    resultNameElement.innerHTML = lastSelected;

    // 결과 이미지 추가
    const resultImage = document.createElement('img');
    resultImage.src = `../image/results/${lastSelected}.png`; // 결과 이미지 경로 설정
    resultImage.alt = lastSelected;
    resultImage.className = 'img-fluid';
    resultImage.style.maxWidth = '80%'; // 최대 너비를 화면의 80%로 설정
    resultImage.style.height = 'auto';
    resultImage.style.display = 'block';
    resultImage.style.margin = '0 auto';
    resultImgContainer.appendChild(resultImage);

    // Google Forms iframe 추가
    const resultForm = document.createElement('iframe');
    resultForm.src = 'https://docs.google.com/forms/d/e/1FAIpQLSe37Lxv2IXRRp5XsT5geG5JS140kL8nFUnl1Kd3eaLX2BvwsA/viewform?embedded=true';
    resultForm.width = '100%';
    resultForm.height = window.innerHeight * 0.8 + 'px'; // 높이를 화면 높이의 80%로 설정
    resultForm.frameBorder = '0';
    resultForm.marginHeight = '0';
    resultForm.marginWidth = '0';
    resultForm.style.border = 'none';
    resultForm.style.display = 'block';
    resultForm.style.margin = '20px auto'; // 폼 상하 여백 추가
    resultDescElement.appendChild(resultForm);
    
    // 화면 크기 변경 시 iframe 높이 조정
    window.addEventListener('resize', () => {
        resultForm.height = window.innerHeight * 0.8 + 'px';
    });
});
