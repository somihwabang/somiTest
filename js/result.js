window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultType = urlParams.get('result');
    const lastSelected = urlParams.get('selected');

    const resultNameElement = document.querySelector('.resultname');
    const resultDescElement = document.querySelector('.resultDesc');
    const resultImgContainer = document.querySelector('#resultImg');

    // Set result name
    if (resultNameElement && lastSelected) {
        resultNameElement.innerHTML = lastSelected;
    }

    // Add result image
    let imageUrl = '';
    if (resultImgContainer && lastSelected) {
        const resultImage = document.createElement('img');
        imageUrl = `../image/results/${lastSelected}.png`; // Path to result image
        resultImage.src = imageUrl;
        resultImage.alt = lastSelected;
        resultImage.className = 'img-fluid'; // Add Bootstrap class for responsive image
        resultImage.style.maxWidth = '100%'; // Ensure the image does not exceed the container width
        resultImage.style.height = 'auto'; // Maintain aspect ratio
        resultImage.style.display = 'block'; // Center the image
        resultImage.style.margin = '0 auto'; // Center the image
        resultImgContainer.appendChild(resultImage);
    }

    // Find the selected major's details from infoList
    const selectedMajorInfo = infoList.find(majorInfo => majorInfo.major === lastSelected);

    // Add result description and subjects
    if (selectedMajorInfo && resultDescElement) {
        const resultContainer = document.createElement('div');
        resultContainer.className = 'result-container';

        const descHeading = document.createElement('h2');
        descHeading.innerText = `${selectedMajorInfo.major}는요`;
        descHeading.style.whiteSpace = "nowrap"; // Prevent line break
        descHeading.style.display = "block";
        descHeading.style.width = "100%"; // Adjust width as needed
        descHeading.style.overflow = "hidden"; // Ensure text stays within the container
        descHeading.style.fontFamily = 'Maplestory Light'; // Set font

        resultContainer.appendChild(descHeading);

        const descParagraph = document.createElement('p');
        descParagraph.innerText = selectedMajorInfo.desc;
        descParagraph.style.fontFamily = 'Maplestory Light'; // Set font
        resultContainer.appendChild(descParagraph);

        const learningHeading = document.createElement('h2');
        learningHeading.innerText = '이런 학과도 어울려요!';
        learningHeading.style.whiteSpace = "nowrap"; // Prevent line break
        learningHeading.style.display = "block";
        learningHeading.style.width = "100%"; // Adjust width as needed
        learningHeading.style.overflow = "hidden"; // Ensure text stays within the container
        learningHeading.style.fontFamily = 'Maplestory Light'; // Set font

        resultContainer.appendChild(learningHeading);

        const learningList = document.createElement('ul');
        learningList.style.listStyle = 'none'; // Remove list bullets

        selectedMajorInfo.learning.forEach(subject => {
            const listItem = document.createElement('li');
            listItem.style.display = 'flex';
            listItem.style.flexWrap = 'wrap';
            listItem.style.fontFamily = 'Maplestory Light'; // Set font

            const nameElement = document.createElement('strong');
            nameElement.style.flex = '0 0 auto';
            nameElement.style.marginRight = '5px';
            nameElement.innerText = `${subject.name}:`;
            nameElement.style.fontFamily = 'Maplestory Light'; // Set font

            const descElement = document.createElement('span');
            descElement.style.flex = '1 1 auto';
            descElement.innerText = subject.desc;
            descElement.style.fontFamily = 'Maplestory Light'; // Set font

            listItem.appendChild(nameElement);
            listItem.appendChild(descElement);
            learningList.appendChild(listItem);
        });

        resultContainer.appendChild(learningList);
        resultDescElement.appendChild(resultContainer);
    }

    // Add retry button and download button in a flex container
    if (resultDescElement) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const retryButton = document.createElement('button');
        retryButton.innerHTML = '다시하기';
        retryButton.className = 'btn retry-button'; // Reuse existing styles
        retryButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Navigate to index.html to retry
        });
        buttonContainer.appendChild(retryButton);

        // Add download button
        if (imageUrl) {
            const downloadButton = document.createElement('a');
            downloadButton.href = imageUrl;
            downloadButton.download = `소미화방_${lastSelected}.jpg`; // Custom file name
            downloadButton.className = 'btn download-button'; // Reuse existing styles
            downloadButton.innerHTML = '이미지 다운로드';
            buttonContainer.appendChild(downloadButton);
        }

        resultDescElement.appendChild(buttonContainer);
    }

    // Adjust iframe height on window resize
    window.addEventListener('resize', () => {
        resultForm.height = window.innerHeight * 0.8 + 'px';
    });

    // Add Google Forms iframe
    const resultForm = document.createElement('iframe');
    resultForm.src = 'https://docs.google.com/forms/d/e/1FAIpQLSe37Lxv2IXRRp5XsT5geG5JS140kL8nFUnl1Kd3eaLX2BvwsA/viewform?embedded=true';
    resultForm.width = '100%';
    resultForm.height = window.innerHeight * 0.8 + 'px'; // Height set to 80% of the window height
    resultForm.frameBorder = '0';
    resultForm.marginHeight = '0';
    resultForm.marginWidth = '0';
    resultForm.style.border = 'none';
    resultForm.style.display = 'block';
    resultForm.style.margin = '20px auto'; // Add margin to top and bottom
    resultDescElement.appendChild(resultForm);
});
