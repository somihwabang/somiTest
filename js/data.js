const data = {
	"commonQuestions": [
		{
		"id": 1,
		"question": "등굣길에 독서를 다짐한 당신!<br>처음으로 읽을 책은?",
		"options": [
			"환상적인 세계 속으로 빠져들며 모험을 경험하는 소설",
			"현실과 미래의 과학 기술에 관한 흥미로운 이야기를 담은 과학책"
		],
		"next": ["humanities", "science"]
		},
		{
		"id": 2,
		"question": "아침에 공부하기로 다짐했다.<br>제일 어려운 과목은?",
		"options": [
			"a, b, c 아무래도 영어",
			"3+3=6? 너무 어려워 수학"
		],
		"next": ["science", "humanities"]
		},
		{
		"id": 3,
		"question": "현장체험학습 설문이 나왔다!<br>제일 가고 싶은 현장체험학습은?",
		"options": [
			"과학적 실험을 할 수 있는 과학관!",
			"학생들을 가르치고 도움을 주는 교육 체험 시설",
			"다양한 예술 작품과 문학 작품을 볼 수 있는 박물관"
		],
		"next": ["science", "education", "humanities"]
		},
		{
		"id": 4,
		"question": "오늘은 동아리 결정하는 날!<br>제일 하고 싶은 동아리는?",
		"options": [
			"재밌는 실험과 과학적인 것을 탐구하는 과학 동아리",
			"예쁘고 화려한 그림을 감상하는 동아리",
			"친구들 혹은 동생들에게 도움을 주는 교육 동아리"
		],
		"next": ["science", "humanities", "education"]
		}
	],
	"humanitiesCommon": [
		{
		"id": 5,
		"question": "수업시간에 나도 모르게 졸았다..<br>근데 꿈이..?",
		"options": [
			"주인공으로서 갈등에 맞서 싸우는 용사님",
			"사회 문제를 해결하는 슈퍼히어로",
			"아름다운 풍경을 그리면서 여행하는 탐험가"
		],
		"next": ["humanitiesDetail", "social", "art"]
		}
	],
	"scienceCommon": [
		{
		"id": 6,
		"question": "수업시간에 나도 모르게 졸았다..<br>근데 꿈이..?",
		"options": [
			"새로운 기술을 만드는 제2의 스티브 잡스!",
			"사람을 살리는 제2의 슈바이처!",
			"사과가 떨어졌네..? 제2의 뉴턴!"
		],
		"next": ["engineering", "medical", "natural"]
		}
	],
	"humanitiesDetail": [
		{
		"id": 7,
		"question": "책을 읽으려고 하는데?",
		"options": [
			"헤밍웨이의 <노인과 바다>",
			"한용운의 <동백꽃>"
		],
		"next": ["영어영문", "국어국문"]
		},
		{
		"id": 8,
		"question": "한 나라를 여행한다면",
		"options": [
			"낭만의 도시 베를린이 있는 독일",
			"에펠탑 보고 싶다 프랑스"
		],
		"next": ["독어독문", "불어불문"]
		},
		{
		"id": 9,
		"question": "여러 나라의 옷을 체험하는 전통 체험 시간",
		"options": [
			"아름다운 디자인의 기모노",
			"다채로운 자수의 치파오"
		],
		"next": ["일어일문", "중어중문"]
		},
		{
		"id": 10,
		"question": "문학작품 해석 발표를 진행하는데,<br>내가 할 주제는?",
		"options": [
			"브람스를 좋아하세요? 프랑스 문학",
			"데미안! 독일 문학",
			"운수 좋은 날 한국 문학",
			"샬롯의 거미줄 영어 문학"
		],
		"next": ["불어불문", "독어독문", "국어국문", "영어영문"]
		},
		{
		"id": 11,
		"question": "내일 있을 제일 듣고 싶은 수업은?",
		"options": [
			"Guten Tag. 구텐탁",
			"Hello. 헬로",
			"你好. 니하오",
			"こんにちは. 곤니치와",
			"안녕하세요 국어",
			"Bonjour. 봉주르"
		],
		"next": ["독어독문", "영어영문", "중어중문", "일어일문", "국어국문", "불어불문"]
		}
	],
	"social": [
		{
		"id": 12,
		"question": "봉사활동 시간이다!<br>내가 할 봉사활동은?",
		"options": [
			"몸이 불편한 학생들을 돕자!",
			"도서관에서 책을 정리해볼까?",
			"행정복지센터 봉사"
		],
		"next": ["사회복지학과", "문헌정보학과", "세무회계학과"]
		},
		{
		"id": 13,
		"question": "학교 축제를 기획해본다면?",
		"options": [
			"축제를 어떻게 홍보할까? 홍보팀",
			"축제를 하려면.. 어떤 사람이 필요하지? 계획팀",
			"역대 축제에선 어떻게 했지? 조사팀"
		],
		"next": ["미디어커뮤니케이션학과", "창의인재개발학과", "데이터과학과"]
		},
		{
		"id": 14,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"국제적으로 한국은 어떤 위치일까?",
			"우리나라는 어떻게 돌아갈까?",
			"경영자의 자질"
		],
		"next": ["정치외교학과", "행정학과", "경영학과"]
		},
		{
		"id": 15,
		"question": "물건을 파는 상인이라면?",
		"options": [
			"어떻게 외국과 더 좋게 거래하지..?",
			"내가 돈이 얼마 있지..?",
			"요즘 사람들은 뭘 많이 살까?"
		],
		"next": ["무역학과", "경제학과", "소비자학과"]
		},
		{
		"id": 16,
		"question": "내가 만약 우리 동네의 관리자라면?",
		"options": [
			"주민들에게 동네 관련 이슈를 볼 수 있게 도와주자!",
			"주민들에게 메시지를 전달하는 프로젝트를 기획하자!",
			"동네 취약계층의 지원 서비스를 개발해보자!",
			"주민들의 역량을 발휘하도록 교육 프로그램을 제공하자!",
			"데이터 분석을 통해 우리 동네의 취약점을 찾자!",
			"우리 동네의 세금 현황을 파악한다."
		],
		"next": ["문헌정보학과", "미디어커뮤니케이션학과", "사회복지학과", "창의인재개발학과", "데이터과학과", "세무회계학과"]
		},
		{
		"id": 17,
		"question": "내가 하이브의 사장이라면?",
		"options": [
			"K-pop의 외국 시장 개척을 노력한다!",
			"우리 회사 내부의 문제를 찾아본다!",
			"외국 시장의 법적 문제는 없는지 확인한다!",
			"어떻게 이익을 많이 낼지 고민한다",
			"어떤 것들을 소비자들이 좋아하는지 생각한다!",
			"하이브를 어떤 식으로 운영할지 생각한다!"
		],
		"next": ["정치외교학과", "행정학과", "무역학과", "경제학과", "소비자학과", "경영학과"]
		},
		{
		"id": 18,
		"question": "하루 직업 체험을 간다면?",
		"options": [
			"도서관 관련 업무를 하는 도서관 사서",
			"기사 작성을 해보는 뉴스 기자",
			"취약계층을 위해 대안을 만드는 연구원",
			"어떤 인원을 추가시킬지 결정하는 회사 인사원",
			"한국과 외국의 관계를 파악하는 외교관",
			"내부 구조를 개선하려고 하는 관리자",
			"외국에서 싸게 물건을 사와 파는 판매자",
			"회사의 지출과 수익을 보여주는 회계사",
			"소비자의 관심을 찾아내는 연구원",
			"회사를 운영하는 CEO",
			"데이터 분석을 통해 취약점을 찾는 연구원",
			"회사의 세금 부문을 담당하는 세무사"
		],
		"next": ["문헌정보학과", "미디어커뮤니케이션학과", "사회복지학과", "창의인재개발학과", "정치외교학과", "행정학과", "무역학과", "경제학과", "소비자학과", "경영학과", "데이터과학과", "세무회계학과"]
		}
	],
	"art": [
		{
		  "id": 19,
		  "question": "미술 시간이다!<br>내가 감상한 작품은?",
		  "options": [
			"레오나르도 다 빈치의 모나리자",
			"이중섭의 황소"
		  ],
		  "next": ["서양화전공", "한국화전공"]
		},
		{
		  "id": 20,
		  "question": "학교 축제를 기획한다면?",
		  "options": [
			"여러 가지 재미있는 미술 작품을 전시하는 미술관",
			"연극을 기획해 사람을 즐겁게 하기"
		  ],
		  "next": ["디자인학부", "공연예술학과"]
		},
		{
		  "id": 21,
		  "question": "내가 축구와 관련된 사람이 된다면?",
		  "options": [
			"선수를 트레이닝 시키는 코치",
			"선수를 직접 가르치는 축구 지도자"
		  ],
		  "next": ["운동건강학부", "스포츠과학부"]
		},
		{
		  "id": 22,
		  "question": "내가 예술가가 된다면?",
		  "options": [
			"한국의 아름다움을 연구하기",
			"서양의 다양한 미술 양식을 연구하기",
			"무대 예술로 관객에게 감동 주기",
			"창의적인 디자인으로 사람들을 편리하게 해주기"
		  ],
		  "next": ["한국화전공", "서양화전공", "공연예술학과", "디자인학부"]
		},
		{
		  "id": 23,
		  "question": "학교에서 강연을 듣는다면?",
		  "options": [
			"한국의 아름다움을 표현하는 강의",
			"운동 재활에 관한 강의",
			"서양의 멋짐을 표현하는 강의",
			"무대 예술을 보여주는 강의",
			"디자인의 다채로움을 보여주는 강의",
			"스포츠 지도자에 관한 강의"
		  ],
		  "next": ["한국화전공", "운동건강학부", "서양화전공", "공연예술학과", "디자인학부", "스포츠과학부"]
		}
	  ],
	  "natural": [
		{
		  "id": 24,
		  "question": "대회에 나간다면?",
		  "options": [
			"화학적 반응을 연구하는 실험 대회",
			"다양한 패션을 연구하는 패션쇼"
		  ],
		  "next": ["화학과", "패션산업학과"]
		},
		{
		  "id": 25,
		  "question": "보고서를 작성해본다면?",
		  "options": [
			"현실 세계와 연결되는 수학 관련 보고서",
			"모든 건 물리다! 물리 보고서",
			"심해는 아무도 몰라 바다 보고서"
		  ],
		  "next": ["수학과", "물리학과", "해양학과"]
		},
		{
		  "id": 26,
		  "question": "학교에서 강연을 듣는다면?",
		  "options": [
			"알고 보면 쉬운 수학 강연",
			"걷는 것도 물리다 물리 강연",
			"폭탄 만드는 법 화학 강연",
			"패션의 발달 과정",
			"심해는 뭐가 있을까?"
		  ],
		  "next": ["수학과", "물리학과", "화학과", "패션산업학과", "해양학과"]
		}
	],
	"engineering": [
		{
		  "id": 27,
		  "question": "과학 탐구 대회에서 내가 만들어볼 작품은?",
		  "options": [
			"전기 회로를 만들어볼까?",
			"간단하게 움직이는 로봇을 만들어볼까?"
		  ],
		  "next": ["전기공학과", "기계공학과"]
		},
		{
		  "id": 28,
		  "question": "내가 기업의 대표가 되어본다면?",
		  "options": [
			"생산과 운영을 최적화해서 기업의 이윤을 최대화하자!",
			"새로운 소재를 연구해보자!",
			"안전한 작업 환경을 구축해 안전성을 높여보자"
		  ],
		  "next": ["산업경영공학과", "신소재공학과", "안전공학과"]
		},
		{
		  "id": 29,
		  "question": "과학 보고서를 작성해본다면",
		  "options": [
			"배터리는 어떻게 작동하는 걸까?",
			"의료 로봇은 정말 의학을 아는 걸까?",
			"어떻게 하면 지구가 깨끗해질까?",
			"컴퓨터의 동작 원리는 무엇일까?"
		  ],
		  "next": ["에너지화학공학과", "바이오-로봇시스템공학과", "환경공학전공", "컴퓨터공학과"]
		},
		{
		  "id": 30,
		  "question": "내가 마을을 지어본다면?",
		  "options": [
			"어떻게 사람들이 다닐까 교통 시스템 만들기!",
			"건물을 어떻게 지을까?",
			"이 도시에 공공 공간을 얼마나 넣을까?"
		  ],
		  "next": ["도시공학과", "건설환경공학과", "도시건축학"]
		},
		{
		  "id": 31,
		  "question": "학교에서 강연을 들어본다면?",
		  "options": [
			"기계의 뇌 전기 회로",
			"건물의 내부를 해부해보자",
			"로봇은 어떤 구조를 가질까?",
			"수익을 최대화하는 방법",
			"새롭게 나온 신소재",
			"안전한 작업 환경의 중요성"
		  ],
		  "next": ["기계공학과", "전기공학과", "산업경영공학과", "신소재공학과", "안전공학과"]
		},
		{
		  "id": 32,
		  "question": "쉬는 시간에 유튜브로 보고 싶은 영상은?",
		  "options": [
			"에너지가 변환되어 사용되는 과정",
			"인공근육이 정상으로 움직이는 영상",
			"더러운 지구가 깨끗해져 가는 영상",
			"도시의 교통 시스템을 보여주는 영상",
			"건물이 지어지는 과정",
			"컴퓨터를 통해 발전되어 나가는 세상",
			"도시마다 다른 디자인을 보여주는 영상"
		  ],
		  "next": ["에너지화학공학과", "바이오-로봇시스템공학과", "환경공학전공", "도시공학과", "건설환경공학과", "컴퓨터공학과", "도시건축학"]
		},
		{
		  "id": 33,
		  "question": "가장 되고 싶은 사람은?",
		  "options": [
			"로봇을 관리하는 로봇공학자",
			"전자기술을 활용해 새로운 기기를 만드는 사람",
			"기업의 이윤을 최대화하는 관리자",
			"새로운 소재를 개발하는 연구원",
			"안전한 작업 환경을 조성하는 관리자",
			"배터리의 효율을 연구하는 연구원",
			"지문 인식 등 혁신적인 기술을 개발하는 연구원",
			"컴퓨터 기술을 활용하여 세상에 도움을 주는 개발자",
			"지구 환경을 보존하는 환경 연구원",
			"도시의 교통 시스템을 계획하는 연구자",
			"도시 환경을 고려해서 도시의 미래를 연구하는 연구원",
			"도시의 배경에 따라 달라지는 디자인을 연구하는 연구원"
		  ],
		  "next": ["기계공학과", "전기공학과", "산업경영공학과", "신소재공학과", "안전공학과", "에너지화학공학과", "바이오-로봇시스템공학과", "컴퓨터공학과", "환경공학전공", "도시공학과", "도시건축학", "건설환경공학과"]
		}
	],
	"medical": [
		{
		  "id": 34,
		  "question": "짝꿍이 머리가 일주일째 아프다",
		  "options": [
			"너 감기 걸린 거야?",
			"너 충치가 있어서 아픈 거 아니야?"
		  ],
		  "next": ["의대", "치대"]
		},
		{
		  "id": 35,
		  "question": "조선 시대로 돌아가 열이 난다면..?",
		  "options": [
			"동의보감 보며 한약 제조",
			"서양 의학이 좋아 페니실린"
		  ],
		  "next": ["한의대", "약대"]
		},
		{
		  "id": 36,
		  "question": "보고서로 쓰고 싶은 주제는?",
		  "options": [
			"동물의 질병과 사람의 질병의 차이",
			"쌍둥이는 세포조차 같을까?"
		  ],
		  "next": ["수의대", "생명과학과"]
		},
		{
		  "id": 37,
		  "question": "더욱 흥미로운 기사는?",
		  "options": [
			"약이 우리 세포를 다치게 한다고?",
			"돼지 심장으로 사람을 살리는 법"
		  ],
		  "next": ["분자의생명전공", "생명공학과"]
		},
		{
		  "id": 38,
		  "question": "쉬는 시간에 유튜브를 본다면?",
		  "options": [
			"의사가 환자를 치료하는 영화 리뷰",
			"페니실린의 우연한 발견에 대한 영상",
			"동의보감의 내용과 분석에 대한 영상",
			"잇몸이 우리에게 필요한 이유"
		  ],
		  "next": ["의대", "약대", "한의대", "치대"]
		},
		{
		  "id": 39,
		  "question": "과학 탐구 대회 중 제일 흥미로운 제목은?",
		  "options": [
			"동물의 병은 왜 생길까?",
			"세포란 뭘까?",
			"작은 분자의 힘",
			"유전자 조작으로 태어난 아기"
		  ],
		  "next": ["수의대", "생명과학과", "분자의생명전공", "생명공학과"]
		},
		{
		  "id": 40,
		  "question": "들어보고 싶은 강의는?",
		  "options": [
			"의학 소설 속 의사의 실제 치료 방식",
			"웃음을 연구하는 치과의사의 하루",
			"진통제가 우리 몸 안에서 활동하는 방법",
			"한약이 우리 몸을 건강하게 바꾸는 이유",
			"강아지의 아픔을 느껴보는 법",
			"세포가 뇌에 미치는 영향",
			"세포와 분자는 무슨 차이가 있을까?",
			"유전자 조작으로 암을 치료할 수 있을까"
		  ],
		  "next": ["의대", "치대", "약대", "한의대", "수의대", "생명과학과", "분자의생명전공", "생명공학과"]
		}
	  ],
	  "education": [
		{
		  "id": 41,
		  "question": "내가 제일 자신 있는 과목은?",
		  "options": [
			"한국인은 한국어를 잘해 국어",
			"Apple 애플? 영어"
		  ],
		  "next": ["국어교육과", "영어교육과"]
		},
		{
		  "id": 42,
		  "question": "내가 발표를 한다면",
		  "options": [
			"과거 일이 제일 재밌어 역사 발표",
			"수학은 어디에도 필요해 수학 발표"
		  ],
		  "next": ["역사교육과", "수학교육과"]
		},
		{
		  "id": 43,
		  "question": "다음 수업은 뭘까?",
		  "options": [
			"일본어 수업",
			"생활과 윤리 수업"
		  ],
		  "next": ["일어교육과", "윤리교육과"]
		},
		{
		  "id": 44,
		  "question": "유튜브를 본다면?",
		  "options": [
			"유치원의 아이들의 귀여운 영상",
			"어떻게 하면 슛을 잘 찰까? 축구 강의 영상"
		  ],
		  "next": ["유아교육과", "체육교육과"]
		},
		{
		  "id": 45,
		  "question": "방과 후 내가 할 활동은?",
		  "options": [
			"국어 문학작품을 분석하기",
			"영어 단어 외우기",
			"역사를 통해 나라를 알아보기",
			"수학 문제를 풀어보기"
		  ],
		  "next": ["국어교육과", "영어교육과", "역사교육과", "수학교육과"]
		},
		{
		  "id": 46,
		  "question": "보고서의 숙제는 뭐였을까?",
		  "options": [
			"사형제도는 폐지되어야 하는가?",
			"일본문학의 분석 보고서",
			"아이들과 어른의 차이",
			"농구 슛의 원리"
		  ],
		  "next": ["윤리교육과", "일어교육과", "유아교육과", "체육교육과"]
		},
		{
		  "id": 47,
		  "question": "다음에 들어보고 싶은 강의는?",
		  "options": [
			"문학작품을 쉽게 분석하기",
			"일본 문화에 대해 쉽게 접근하기",
			"영어란 무엇일까?",
			"역사란 과연 진실일까?",
			"수학이 우리 삶에 미치는 영향",
			"체육은 단순히 몸을 움직이는 것이 아니다.",
			"지성이 있다는 것이 과연 좋은 것인가",
			"아이들은 우리의 말을 이해하는가?"
		  ],
		  "next": ["국어교육과", "일어교육과", "영어교육과", "역사교육과", "수학교육과", "체육교육과", "윤리교육과", "유아교육과"]
		}
	]	  
}
