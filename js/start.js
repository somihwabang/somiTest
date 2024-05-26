const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const select = { humanities: 0, science: 0, education: 0 };
let currentQuestionIndex = 0;
let currentQuestionSet = "commonQuestions";
let lastSelected = "";
const selectedOptions = {
    humanitiesDetail: [],
    social: [],
    art: [],
    natural: [],
    engineering: [],
    medical: [],
    education: []
};
let previousRandomImageNumber = null;

// 선택된 값을 기반으로 next 값을 가져오는 함수
function getNextValue(currentSet, qIdx, selectedValue) {
    const question = data[currentSet][qIdx];
    const optionIndex = question.options.indexOf(selectedValue);
    return question.next[optionIndex];
}

function calResult() {
    if (select.education >= 2) {
        return 'education';
    }
    if (select.humanities === select.science) {
        return Math.random() < 0.5 ? 'humanities' : 'science';
    }
    return select.humanities >= select.science ? 'humanities' : 'science';
}

function setResult() {
    // 로딩 GIF 요소 추가
    const resultContainer = document.querySelector('#result');
    const loadingGif = document.createElement('img');
    loadingGif.src = '../image/loading.gif'; // 로딩 GIF 경로 설정
    loadingGif.alt = 'Loading...';
    loadingGif.className = 'loading-gif img-fluid';

    // 로딩 GIF 가운데 정렬
    loadingGif.style.display = 'block'; // 인라인 요소를 블록 요소로 변경
    loadingGif.style.margin = '0 auto'; // 가운데 정렬

    resultContainer.appendChild(loadingGif);

    // 결과를 설정하기 전에 잠시 대기 (예: 2초)
    setTimeout(() => {
        // 로딩 GIF 페이드 아웃
        loadingGif.classList.add('fade-out');

        // 애니메이션이 끝난 후 결과를 설정
        loadingGif.addEventListener('animationend', () => {
            // 로딩 GIF 숨기기
            loadingGif.style.display = 'none';

            // 결과 설정
            const resultName = document.querySelector('.resultname');

			// 결과 이름 설정
            resultName.innerHTML = lastSelected;
			// resultName.innerHTML 글자 크기 조정 bootstrap class 추가
			resultName.classList.add('display-4');
			// resultName.innerHTML 가운데 정렬 bootstrap class 추가
			resultName.classList.add('text-center');
			
			

            const resultDesc = document.querySelector('.resultDesc');
            resultDesc.innerHTML = ''; // 기존 텍스트 지우기

            // 결과 이미지 추가
            const resultImage = document.createElement('img');
            resultImage.src = `../image/results/${lastSelected}.png`; // 결과 이미지 경로 설정
            resultImage.alt = lastSelected;
            resultImage.className = 'img-fluid';

            resultImage.style.maxWidth = '280px';
            resultImage.style.height = 'auto';
            // 이미지 가운데
            resultImage.style.display = 'block'; // 인라인 요소를 블록 요소로 변경
            resultImage.style.margin = '0 auto'; // 가운데 정렬

            // 결과 이미지 삽입
            resultDesc.appendChild(resultImage);

            // Google Forms iframe 추가
            const resultForm = document.createElement('iframe');
            resultForm.src = 'https://docs.google.com/forms/d/e/1FAIpQLSe37Lxv2IXRRp5XsT5geG5JS140kL8nFUnl1Kd3eaLX2BvwsA/viewform?embedded=true';
            resultForm.width = '370';
            resultForm.height = '1600';
            resultForm.frameBorder = '0';
            resultForm.marginHeight = '0';
            resultForm.marginWidth = '0';
            resultForm.style.border = 'none'; // iframe 경계선 제거

            // 폼 가운데 정렬
            resultForm.style.display = 'block'; // 인라인 요소를 블록 요소로 변경
            resultForm.style.margin = '0 auto'; // 가운데 정렬

            // 폼 삽입
            resultDesc.appendChild(resultForm);
        });
    }, 2000); // 2초 대기 (필요에 따라 조정 가능)
}


function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450);
        setResult();
    }, 450);
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            const nextKey = getNextValue(currentQuestionSet, qIdx, answerText);
            lastSelected = nextKey;
            if (currentQuestionSet === "humanitiesDetail") {
                selectedOptions.humanitiesDetail.push(nextKey);
            } else if (currentQuestionSet === "social") {
                selectedOptions.social.push(nextKey);
            } else if (currentQuestionSet === "art") {
                selectedOptions.art.push(nextKey);
            } else if (currentQuestionSet === "natural") {
                selectedOptions.natural.push(nextKey);
            } else if (currentQuestionSet === "engineering") {
                selectedOptions.engineering.push(nextKey);
            } else if (currentQuestionSet === "medical") {
                selectedOptions.medical.push(nextKey);
            } else if (currentQuestionSet === "education") {
                selectedOptions.education.push(nextKey);
            }

            if (nextKey === "education") {
                select.education++;
            } else if (nextKey === "humanities") {
                select.humanities++;
            } else if (nextKey === "science") {
                select.science++;
            }

            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < data[currentQuestionSet].length) {
                goNext();
            } else {
                // 처음 4개의 공통 질문 이후 다음 질문 세트를 결정
                if (currentQuestionSet === "commonQuestions") {
                    if (select.education >= 2) {
                        currentQuestionSet = "education";
                    } else {
                        currentQuestionSet = calResult() + "Common";
                    }
                    currentQuestionIndex = 0;
                    goNext();
                } else if (currentQuestionSet === "humanitiesCommon" || currentQuestionSet === "scienceCommon") {
                    currentQuestionSet = nextKey;
                    currentQuestionIndex = 0;
                    goNext();
                } else {
                    goResult();
                }
            }
        }, 450);
    }, false);
}

function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressCat = document.querySelector('.progress-cat');

	if (currentQuestionSet == "commonQuestions") {
		totalQuestions = 9;
		progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
	}
	else if (currentQuestionSet == "education") {
		totalQuestions = data[currentQuestionSet].length + 4;
		progress = (((currentQuestionIndex + 1) / totalQuestions) + 4 / totalQuestions) * 100;
	}
	else if (currentQuestionSet == "humanitiesCommon" || currentQuestionSet == "scienceCommon") {
		progress = 50;
	}
	else {
		totalQuestions = data[currentQuestionSet].length + 5;
		progress = (((currentQuestionIndex + 1) / totalQuestions) + 5 / totalQuestions) * 100;
	}

    progressBar.style.width = `${progress}%`;
    progressCat.style.left = `calc(${progress}% - 15px)`; // 고양이 이미지의 절반 너비만큼 보정
}

function goNext() {
    if (currentQuestionIndex >= data[currentQuestionSet].length) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = data[currentQuestionSet][currentQuestionIndex].question;

    var answerBox = document.querySelector('.answerBox');
    answerBox.innerHTML = ""; // 이전 답변 지우기

    // 이전 이미지 컨테이너가 있으면 제거
    var previousImgContainer = document.querySelector('.image-container');
    if (previousImgContainer) {
        previousImgContainer.remove();
        addNewImage();
    } else {
        addNewImage();
    }

    function addNewImage() {
        let randomImageNumber;
        do {
            randomImageNumber = Math.floor(Math.random() * 12) + 1; // 1부터 12 사이의 랜덤 숫자 생성
        } while (randomImageNumber === previousRandomImageNumber);

        previousRandomImageNumber = randomImageNumber; // 현재 랜덤 숫자를 이전 숫자로 저장

        // .qBox와 .answerBox 사이에 새로운 이미지 추가
        var imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container', 'fade-in');
        var questionImage = document.createElement('img');
        questionImage.src = `./image/${randomImageNumber}.png`; // 랜덤 이미지 경로 설정
        questionImage.alt = `Question Image ${randomImageNumber}`;
        questionImage.className = 'img-fluid';

        // 이미지 가운데
        questionImage.style.display = 'block'; // 인라인 요소를 블록 요소로 변경
        questionImage.style.margin = '0 auto'; // 가운데 정렬

        questionImage.style.maxWidth = '300px'; // 최대 너비 설정
        questionImage.style.height = 'auto'; // 높이는 자동 조정

        imgContainer.appendChild(questionImage);

        // .qBox와 .answerBox 사이에 이미지 삽입
        q.parentNode.insertBefore(imgContainer, answerBox);
    }

    let options = data[currentQuestionSet][currentQuestionIndex].options;
    if (currentQuestionSet === "humanitiesDetail" && currentQuestionIndex === 3) {
        // Filter options for id 10
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 3, option);
            return selectedOptions.humanitiesDetail.includes(nextValue);
        });
    } else if (currentQuestionSet === "humanitiesDetail" && currentQuestionIndex === 4) {
        // Filter options for id 11 based on id 9 and id 10 selections
        const previousSelections = selectedOptions.humanitiesDetail.slice(-2);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 4, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "social" && currentQuestionIndex === 4) {
        // Filter options for id 16 based on id 12 and id 13 selections
        const previousSelections = selectedOptions.social.slice(0, 2);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 4, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "social" && currentQuestionIndex === 5) {
        // Filter options for id 17 based on id 14 and id 15 selections
        const previousSelections = selectedOptions.social.slice(2, 4);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 5, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "social" && currentQuestionIndex === 6) {
        // Filter options for id 18 based on id 16 and id 17 selections
        const previousSelections = selectedOptions.social.slice(4, 6);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 6, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "art" && currentQuestionIndex === 3) {
        // Filter options for id 22 based on id 19 and id 20 selections
        const previousSelections = selectedOptions.art.slice(0, 2);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 3, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "art" && currentQuestionIndex === 4) {
        // Filter options for id 23 based on id 21 and id 22 selections
        const previousSelections = selectedOptions.art.slice(2, 4);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 4, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "natural" && currentQuestionIndex === 2) {
        // Filter options for id 26 based on id 24 and id 25 selections
        const previousSelections = selectedOptions.natural.slice(0, 2);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 2, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "engineering" && currentQuestionIndex === 4) {
        // Filter options for id 31 based on id 27 and id 28 selections
        const previousSelections = selectedOptions.engineering.slice(0, 2);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 4, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "engineering" && currentQuestionIndex === 5) {
        // Filter options for id 32 based on id 29 and id 30 selections
        const previousSelections = selectedOptions.engineering.slice(2, 4);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 5, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "engineering" && currentQuestionIndex === 6) {
        // Filter options for id 33 based on id 31 and id 32 selections
        const previousSelections = selectedOptions.engineering.slice(4, 6);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 6, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "medical" && currentQuestionIndex === 4) {
        // Filter options for id 38 based on id 34 and id 35 selections
        const previousSelections = selectedOptions.medical.slice(0, 2);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 4, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "medical" && currentQuestionIndex === 5) {
        // Filter options for id 39 based on id 36 and id 37 selections
        const previousSelections = selectedOptions.medical.slice(2, 4);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 5, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "medical" && currentQuestionIndex === 6) {
        // Filter options for id 40 based on id 38 and id 39 selections
        const previousSelections = selectedOptions.medical.slice(4, 6);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 6, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "education" && currentQuestionIndex === 4) {
        // Filter options for id 45 based on id 41 and id 42 selections
        const previousSelections = selectedOptions.education.slice(0, 2);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 4, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "education" && currentQuestionIndex === 5) {
        // Filter options for id 46 based on id 43 and id 44 selections
        const previousSelections = selectedOptions.education.slice(2, 4);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 5, option);
            return previousSelections.includes(nextValue);
        });
    } else if (currentQuestionSet === "education" && currentQuestionIndex === 6) {
        // Filter options for id 47 based on id 45 and id 46 selections
        const previousSelections = selectedOptions.education.slice(4, 6);
        options = options.filter(option => {
            const nextValue = getNextValue(currentQuestionSet, 6, option);
            return previousSelections.includes(nextValue);
        });
    }

    for (let i in options) {
        addAnswer(options[i], currentQuestionIndex, i);
    }

    var count = document.querySelector('.count');
    count.innerHTML = `${currentQuestionIndex + 1} / ${data[currentQuestionSet].length}`;
    
    updateProgressBar(); // 프로그레스 바 업데이트
}

function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450);
        goNext();
    }, 450);
}
