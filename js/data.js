const data = {
	"commonQuestions": [
		{
		"id": 1,
		"question": "등굣길에 독서를 다짐한 당신!<br>처음으로 읽을 책은?",
		"options": [
			"222년 만에 회귀했다!<br>판타지 모험을 다루는 소설",
			"어떻게 지정좌표계로 고정하셨죠?<br>흥미로운 이야기를 담은 과학책"
		],
		"next": ["humanities", "science"]
		},
		{
		"id": 2,
		"question": "오늘은 진짜 공부해야지!<br>제일 어려운 과목은?",
		"options": [
			"inevitable..<br>영어 하기 싫어!",
			"39x24^2..<br>으, 수학 어려워"
		],
		"next": ["science", "humanities"]
		},
		{
		"id": 3,
		"question": "내일 특강이래!<br>제일 듣고 싶은 것은?",
		"options": [
			"OO는 과학이다.<br>과학이 일상에 영향을 미치는 것",
			"학생들이 단번에 집중할 수 있게 만드는 방법",
			"유명 작가와 함께하는 작품 그리기"
		],
		"next": ["science", "education", "humanities"]
		},
		{
		"id": 4,
		"question": "동아리 결정하는 날!<br>제일 하고 싶은 동아리는?",
		"options": [
			"히히 로켓 발사! 과학 동아리",
			"예쁘고 귀여운 그림을 감상하는 동아리",
			"이것만은 꺼내지 않으려고 했는데..<br>울어라 교육 동아리"
		],
		"next": ["science", "humanities", "education"]
		}
	],
	"humanitiesCommon": [
		{
		"id": 5,
		"question": "수업시간에 나도 모르게 졸았다..<br>근데 꿈이..?",
		"options": [
			"새로운 영웅은 언제나 환영이야!<br>멋있는 영웅님",
			"연설하는 한 집단의 수장",
			"세상이 환상적으로 보여..<br>색감 너무 이쁘다.."
		],
		"next": ["humanitiesDetail", "social", "art"]
		}
	],
	"scienceCommon": [
		{
		"id": 6,
		"question": "수업시간에 나도 모르게 졸았다..<br>근데 꿈이..?",
		"options": [
			"혁신적인 IT 기기로 세상을 바꿨다!",
			"너밖에 없어..<br>위기에 빠진 친구를 구해줬다",
			"사과가 떨어졌네..? 중력 500배"
		],
		"next": ["engineering", "medical", "natural"]
		}
	],
	"humanitiesDetail": [
		{
		"id": 7,
		"question": "책이 내 앞에 두 권 있다.<br>뭐 읽지..?",
		"options": [
			"영어 원서 <운수 좋은 날>",
			"한국어 <해리 포터>"
		],
		"next": ["영어영문", "국어국문"]
		},
		{
		"id": 8,
		"question": "유럽 여행 갈래! 한 곳만 간다면?",
		"options": [
			"슈바인학세 먹을래요!<br>독일",
			"라따뚜이! 이게 그렇게 맛있다구!<br>프랑스"
		],
		"next": ["독어독문", "불어불문"]
		},
		{
		"id": 9,
		"question": "치파오 vs 기모노",
		"options": [
			"아름다운 디자인의 기모노",
			"다채로운 자수의 치파오"
		],
		"next": ["일어일문", "중어중문"]
		},
		{
		"id": 10,
		"question": "문학 작품 해석 발표를 진행하는데,<br>내가 할 주제는?",
		"options": [
			"브람스를 좋아하세요?<br>프랑스 문학",
			"데미안<br>독일 문학",
			"운수 좋은 날<br>한국 문학",
			"샬롯의 거미줄<br>영어 문학"
		],
		"next": ["불어불문", "독어독문", "국어국문", "영어영문"]
		},
		{
		"id": 11,
		"question": "내일은 교양 수업 날이야!<br>제일 듣고 싶은 수업은?",
		"options": [
			"독일에서 30년 살았습니다.<br>쉽게 가르쳐드림",
			"넷플릭스로 배우는 영어 프리토킹",
			"Wo Xing Shi,<br>중국어로 배우는 요즘 밈",
			"일본 애니메이션과<br>만화 속 일본어",
			"한국의 노래: 조선시대 가사부터<br>현대 K-POP까지",
			"불어로 읽는 프랑스 영화와 연극"
		],
		"next": ["독어독문", "영어영문", "중어중문", "일어일문", "국어국문", "불어불문"]
		}
	],
	"social": [
		{
		"id": 12,
		"question": "봉사활동 시간!<br>어떤 봉사가 제일 좋을까..?",
		"options": [
			"괜찮아..? 할 수 있어!<br>사연 들어주기",
			"우리 도서관 정상영업 합니다.<br>도서관 사서",
			"계산은 제게 맡겨주세요!<br>행정복지센터"
		],
		"next": ["사회복지학과", "문헌정보학과", "세무회계학과"]
		},
		{
		"id": 13,
		"question": "학교 축제를 기획해본다면?",
		"options": [
			"인천시 홍보맨이 될 거야!<br>홍보팀",
			"축제를 하려면.. 어떤 사람이 필요하지?<br>계획팀",
			"저번 축제에선 어떻게 했지?<br>조사팀"
		],
		"next": ["미디어커뮤니케이션학과", "창의인재개발학과", "데이터과학과"]
		},
		{
		"id": 14,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"우리나라가 강대국 사이에서 살아남는 방법",
			"효율적으로 일하고 싶어.. 어떻게 하죠?",
			"전 사업할 건데요? CEO가 되는 방법"
		],
		"next": ["정치외교학과", "행정학과", "경영학과"]
		},
		{
		"id": 15,
		"question": "창업을 마음먹었다!<br>제일 먼저 든 생각은?",
		"options": [
			"수출하려면.. 뭘 해야 하지..?",
			"지금 가진 자본으로는.. 요 정도면 될 것 같아",
			"사람들이 사고 싶어 하는 건 무엇일까!?"
		],
		"next": ["무역학과", "경제학과", "소비자학과"]
		},
		{
		"id": 16,
		"question": "오늘은 일일 반장 시간!<br>어떤 걸 해볼까..?",
		"options": [
			"친구들과 자료 정리 하기!",
			"오늘은 뭐할 거냐면요~<br>VLOG 찍기",
			"반 분위기 최대로!<br>소외된 친구가 없도록 친해지기",
			"우리 진로를 정할 때도 됐잖아..?<br>연사 초청",
			"너가 오늘 청소야!<br>그동안 청소 안 한 친구 대청소 시키기",
			"그동안 지각비 얼마나 모였는지 확인하기"
		],
		"next": ["문헌정보학과", "미디어커뮤니케이션학과", "사회복지학과", "창의인재개발학과", "데이터과학과", "세무회계학과"]
		},
		{
		"id": 17,
		"question": "내가 엔터테인먼트 회사의 사장이라면?",
		"options": [
			"회사가 대중에게 어떻게 보일지 고민하고,<br>진단한다",
			"불필요한 업무를 진단하고 삭제한다",
			"어느 나라에서 잘 팔릴지 고민한다",
			"어떻게 이익을 많이 낼지 고민한다",
			"사람들은 어떤 음악을 좋아할지 생각한다",
			"회사를 구조적으로 안정화시킨다"
		],
		"next": ["정치외교학과", "행정학과", "무역학과", "경제학과", "소비자학과", "경영학과"]
		},
		{
		"id": 18,
		"question": "만약 직업 체험을 한다면?",
		"options": [
			"대출이신가요? 도서관 사서",
			"콘텐츠를 만드는 방송국 PD",
			"따뜻한 말을 해주는 사회복지사",
			"'너 방출' 인사관리",
			"외국의 대사관에서 일하는 외교관",
			"회사의 중심! 행정 관리자",
			"효율적인 수입을 할 수 있는 방법은 뭘까..?<br>수출입 관리자",
			"왜 우리 회사는 돈이 항상 부족한 거야..!<br>경제팀",
			"어서 오세요! 어디까지 알아보셨나요?!",
			"고객의 만족도가 중요해!<br>브랜드 컨설턴트",
			"이쯤이면 슬슬 빠질게..<br>증권 트레이더",
			"우리 회사 제법 탄탄해요,<br>세무사"
		],
		"next": ["문헌정보학과", "미디어커뮤니케이션학과", "사회복지학과", "창의인재개발학과", "정치외교학과", "행정학과", "무역학과", "경제학과", "소비자학과", "경영학과", "데이터과학과", "세무회계학과"]
		}
	],
	"art": [
		{
		"id": 19,
		"question": "일러스트페어에 왔다!<br>내가 선호하는 작품은?",
		"options": [
			"독특한 컬러와 색감을 가진 해외 작품",
			"담담하게 이야기를 풀어내는 한국 작품"
		],
		"next": ["서양화전공", "한국화전공"]
		},
		{
		"id": 20,
		"question": "학교 축제를 기획한다면..",
		"options": [
			"스스로 만들 수 있는 우드 키링 부스지!",
			"축제는 역시 공연이 필수 아니겠어?!"
		],
		"next": ["디자인학부", "공연예술학과"]
		},
		{
		"id": 21,
		"question": "운동을 하려고 한다면..",
		"options": [
			"천천히 내 페이스대로 운동할 거야!",
			"운동을 시작했으면 끝을 봐야지!"
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
			"감각적인 디자인으로 사람들에게 다가가기"
		],
		"next": ["한국화전공", "서양화전공", "공연예술학과", "디자인학부"]
		},
		{
		"id": 23,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"한국의 숨겨진 명소 발견하기",
			"하루 10분 건강한 삶 유지하기",
			"서양의 아름다움과 문화생활",
			"연극 예술과 문화생활",
			"시선을 이끄는 패키지 디자인 15주 완성",
			"한 학기면 5km 달리기 가능!"
		],
		"next": ["한국화전공", "운동건강학부", "서양화전공", "공연예술학과", "디자인학부", "스포츠과학부"]
		}
	],
	"natural": [
		{
		"id": 24,
		"question": "영화 보러 갈래!<br>어떤 영화를 볼까?",
		"options": [
			"난 이제 죽음이요, 세상의 파괴자가 되었다<br>'오펜하이머'",
			"나 자신만의 길이 있어<br>'악마는 프라다를 입는다'"
		],
		"next": ["화학과", "패션산업학과"]
		},
		{
		"id": 25,
		"question": "가장 감명 깊은 말은?",
		"options": [
			"이 세계는 전부 숫자로 이루어져 있어",
			"고도로 발달한 힘은<br>마법과 구분할 수 없다",
			"심해, 우주보다 더 밝혀지지 않은 곳"
		],
		"next": ["수학과", "물리학과", "해양학과"]
		},
		{
		"id": 26,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"30세에 시작하는 미적분 첫 걸음",
			"코스모스를 필독할 이유",
			"pen+apple=?",
			"유행 타지 않는 옷 잘 입는 방법",
			"인류의 난제, 심해 탐사"
		],
		"next": ["수학과", "물리학과", "화학과", "패션산업학과", "해양학과"]
		}
	],
	"engineering": [
		{
		"id": 27,
		"question": "만약 전자제품을 개발한다면..",
		"options": [
			"안전한 전자제품 만들기",
			"움직이는 전자제품 만들기"
		],
		"next": ["전기공학과", "기계공학과"]
		},
		{
		"id": 28,
		"question": "만약 내가 애플 회장이라면?",
		"options": [
			"효율적인 공급망 관리 지시",
			"혁신적인 신소재를 이용한<br>제품 개발 지시",
			"작업자의 안전 관리감독 지시"
		],
		"next": ["산업경영공학과", "신소재공학과", "안전공학과"]
		},
		{
		"id": 29,
		"question": "교수님이 레포트를 내래..<br>뭘 쓰는 게 좋을까?",
		"options": [
			"ESS와 전기차가 앞으로 미칠 영향",
			"효율적인 바이오시밀러 제작을 위한 기기<br>TOP 3",
			"도시와 환경의 융합",
			"게임 개발을 위한 최적의 모델 분석"
		],
		"next": ["에너지화학공학과", "바이오-로봇시스템공학과", "환경공학전공", "컴퓨터공학과"]
		},
		{
		"id": 30,
		"question": "내가 마을을 지어본다면?",
		"options": [
			"수십 년 후에도 문제없는 시설이 가득한 마을",
			"나무가 빽빽한 공원이 가득한 마을",
			"미래적이고 미려한 건물이 가득한 마을"
		],
		"next": ["도시공학과", "건설환경공학과", "도시건축학"]
		},
		{
		"id": 31,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"현장에서 30년 된 컴퓨터가 아직도 쓰이는 이유",
			"피카츄 백만 볼트가 실제로 가능한 걸까",
			"창업에 최적화된 학과는 바로 OO과입니다",
			"한국이 해냈다 초전도체 개발",
			"근골격계 질환을 유발하는 다리 꼬는 자세"
		],
		"next": ["기계공학과", "전기공학과", "산업경영공학과", "신소재공학과", "안전공학과"]
		},
		{
		"id": 32,
		"question": "쉬는 시간에 유튜브로 보고 싶은 영상은?",
		"options": [
			"현대적인 건축 환경에 따른 비용",
			"지금 시대에 가장 핫한 학과 중 하나,<br>에너지의 미래",
			"로봇이 인간을 대체할 수 있을까?",
			"환경 보호 활동이 정말로 의미가 있을까?",
			"효율적인 도시의 모습,<br>설계하는 사람들의 이야기",
			"현대사회에 빼낼 수 없는 소프트웨어 이야기",
			"꼭 새로운 기법이 건축에 올바른 방향성은 아닙니다"
		],
		"next": ["건설환경공학과", "에너지화학공학과", "바이오-로봇시스템공학과", "환경공학전공", "도시공학과", "컴퓨터공학과", "도시건축학"]
		},
		{
		"id": 33,
		"question": "가장 되고 싶은 사람은?",
		"options": [
			"미래의 로봇을 설계하고 관리하는 전문가",
			"혁신적인 전자기기를 발명하는 개발자",
			"회사의 성장 주축이 되는 리더",
			"새로운 소재를 발견하고 개발하는 연구원",
			"안전한 작업 환경을 조성하는 관리자",
			"더욱 가볍고 오래 지속되는 에너지 연구원",
			"인류에 도움이 되는 신약 제조시설 담당 개발자",
			"우리의 일상을 도와주는 소프트웨어 개발자",
			"지구 환경을 보존하는 환경 연구원",
			"도시의 교통 시스템을 계획하는 연구자",
			"미래 도시의 모습을 계획하는 도시 연구자",
			"도시 환경과 조화를 이루는 건축 디자이너"
		],
		"next": ["기계공학과", "전기공학과", "산업경영공학과", "신소재공학과", "안전공학과", "에너지화학공학과", "바이오-로봇시스템공학과", "컴퓨터공학과", "환경공학전공", "도시공학과", "도시건축학", "건설환경공학과"]
		}
	],
	"medical": [
		{
		"id": 34,
		"question": "어떤 게 더 적성에 맞을까..?",
		"options": [
			"응급환자를 치료하는 의사",
			"치과 치료를 담당하는 의사"
		],
		"next": ["의대", "치대"]
		},
		{
		"id": 35,
		"question": "며칠째 머리가 아픈데,<br>집에 한약과 알약이 있다면?",
		"options": [
			"한약을 먹는 게 낫지 않을까?",
			"알약이 직빵이야"
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
			"약, 사실 우리 세포를 파괴하고 있다?",
			"돼지 심장 이식, 최초 성공"
		],
		"next": ["분자의생명전공", "생명공학과"]
		},
		{
		"id": 38,
		"question": "쉬는 시간에 유튜브를 본다면?",
		"options": [
			"의대생이 가르쳐주는 의학 상식",
			"인공지능의 시대,<br>약사가 여전히 필요한 이유",
			"한의학과 과학의 상관관계",
			"잇몸이 우리에게 필요한 3가지 이유"
		],
		"next": ["의대", "약대", "한의대", "치대"]
		},
		{
		"id": 39,
		"question": "과학 탐구 대회 중 제일 흥미로운 제목은?",
		"options": [
			"세상에 나쁜 개는 없다",
			"세포로 만든 미래의 비건 고기",
			"세상에서 가장 작은 분자의 힘",
			"유전자 변형으로 세상에 빛을 본 아기"
		],
		"next": ["수의대", "생명과학과", "분자의생명전공", "생명공학과"]
		},
		{
		"id": 40,
		"question": "가장 들어보고 싶은 강의는?",
		"options": [
			"인공지능과 로봇을 이용한 수술",
			"스케일링, 주기적으로 받아야 하는 이유",
			"브랜드가 달라도 성분이 같다는 약,<br>진짜인가요?",
			"한약이 우리 몸을 건강하게 바꾸는 이유",
			"동물과 사람의 약의 차이",
			"세포가 뇌에 미치는 영향",
			"세포와 분자는 무슨 차이가 있을까?",
			"유전자 혁명, 맞춤형 치료의 가능성"
		],
		"next": ["의대", "치대", "약대", "한의대", "수의대", "생명과학과", "분자의생명전공", "생명공학과"]
		}
	],
	"education": [
		{
		"id": 41,
		"question": "둘 중에 더 재밌는 활동은?",
		"options": [
			"문학 작품을 읽고 의미를 분석하는 것",
			"세계적으로 소통할 수 있는 것"
		],
		"next": ["국어교육과", "영어교육과"]
		},
		{
		"id": 42,
		"question": "내가 더 좋아하는 것은?",
		"options": [
			"다양한 나라의 문화와 역사를 배우는 것",
			"어려운 수학 문제가 이해되고 풀렸을 때"
		],
		"next": ["역사교육과", "수학교육과"]
		},
		{
		"id": 43,
		"question": "더 기억에 남는 수업은?",
		"options": [
			"외국어 시간에 했던 문화 교류 수업",
			"도덕 시간에 했던 토론 수업"
		],
		"next": ["일어교육과", "윤리교육과"]
		},
		{
		"id": 44,
		"question": "더 재미있는 콘텐츠는?",
		"options": [
			"유치원 아이들의 일상 VLOG",
			"축구 골 하이라이트 영상"
		],
		"next": ["유아교육과", "체육교육과"]
		},
		{
		"id": 45,
		"question": "방과 후 무슨 활동을 할까?",
		"options": [
			"소설을 읽으며 감정 이입하기",
			"외국인 친구와 온라인 게임하기",
			"역사적인 날을 기념하는 공모전 참여하기",
			"마트에서 고기를 사며 g당 가격 계산하기"
		],
		"next": ["국어교육과", "영어교육과", "역사교육과", "수학교육과"]
		},
		{
		"id": 46,
		"question": "가장 하고 싶은 활동은?",
		"options": [
			"사회적인 이슈에 대한 가벼운 얘기",
			"일본 애니메이션을 통한 언어 습득",
			"귀여운 아이들을 보며 힐링하기",
			"체계적인 운동 습관을 통해 발전하기"
		],
		"next": ["윤리교육과", "일어교육과", "유아교육과", "체육교육과"]
		},
		{
		"id": 47,
		"question": "다음에 들어보고 싶은 강의는?",
		"options": [
			"고전문학을 통한 심리 분석",
			"동아시아 문화 탐구",
			"글로벌 커뮤니케이션 전략",
			"역사란 승자의 기록이다",
			"'운수 좋은 날'의 설렁탕 중량 계산하기",
			"스포츠도 과학의 일부다",
			"지성이 있다는 것이 과연 좋은 것인가",
			"아이들이 언어를 습득하는 과정"
		],
		"next": ["국어교육과", "일어교육과", "영어교육과", "역사교육과", "수학교육과", "체육교육과", "윤리교육과", "유아교육과"]
		}
	]
}

const infoList = [
	{
	  major: "의대",
	  desc: "의과대학은 의학에 대한 전반적인 지식을 습득하고, 의사로서의 전문성과 윤리의식을 기르며, 환자를 진단하고 치료하는 능력을 함양하는 것을 목표로 합니다.",
	  learning: [
		"해부학",
		"생리학",
		"병리학",
		"약리학",
		"임상의학"
	  ]
	},
	{
	  major: "약대",
	  desc: "약학대학은 의약품의 개발, 제조, 관리, 유통, 사용에 관한 학문을 연구하고, 전문적인 약사로서의 자질을 기르는 것을 목표로 합니다.",
	  learning: [
		"생화학",
		"약리학",
		"생물약제학",
		"임상약학",
		"약물학"
	  ]
	},
	{
	  major: "치대",
	  desc: "치의학과는 구강 및 치아 건강을 다루는 학문으로, 치과 의사로서의 자질을 기르고, 구강 질환의 진단과 치료 능력을 함양하는 것을 목표로 합니다.",
	  learning: [
		"구강 해부학",
		"치과 보철학",
		"치주학",
		"구강 병리학",
		"치과 방사선학"
	  ]
	},
	{
	  major: "바이오-로봇시스템공학과",
	  desc: "바이오-로봇시스템공학과는 로봇과 생명공학의 융합을 통해 첨단 의료기기 및 바이오메카트로닉스 시스템을 연구하고 개발하는 학문을 다룹니다.",
	  learning: [
		"로봇 공학",
		"생명공학",
		"메카트로닉스",
		"의료기기 설계",
		"인공지능"
	  ]
	},
	{
	  major: "수의대",
	  desc: "수의과대학은 동물의 건강과 복지를 증진시키기 위해 질병의 예방, 진단, 치료에 대한 학문을 연구합니다.",
	  learning: [
		"수의 해부학",
		"수의 생리학",
		"수의 병리학",
		"수의 임상학",
		"동물 영양학"
	  ]
	},
	{
	  major: "수학과",
	  desc: "수학과는 수학적 이론과 기법을 연구하며, 논리적 사고와 문제 해결 능력을 기르는 것을 목표로 합니다.",
	  learning: [
		"대수학",
		"해석학",
		"위상수학",
		"통계학",
		"수리논리학"
	  ]
	},
	{
	  major: "한의대",
	  desc: "한의과대학은 전통 한의학을 기반으로 한 진단 및 치료 기법을 연구하며, 한의사로서의 전문성을 기릅니다.",
	  learning: [
		"한의학 기초",
		"본초학",
		"침구학",
		"한방 내과학",
		"한방 부인과학"
	  ]
	},
	{
	  major: "화학과",
	  desc: "화학과는 물질의 구성, 구조, 성질 및 변화를 연구하는 학문으로, 다양한 산업에서 응용되는 화학 지식을 제공합니다.",
	  learning: [
		"유기화학",
		"무기화학",
		"물리화학",
		"분석화학",
		"화학 공학"
	  ]
	},
	{
	  major: "경영학과",
	  desc: "경영학과는 기업의 경영 원리와 전략을 연구하며, 경영 관리와 관련된 전문 지식을 제공합니다.",
	  learning: [
		"마케팅",
		"재무 관리",
		"조직 행동",
		"경영 전략",
		"인사 관리"
	  ]
	},
	{
	  major: "경제학과",
	  desc: "경제학과는 경제 이론과 정책을 연구하며, 경제 문제를 분석하고 해결하는 능력을 기릅니다.",
	  learning: [
		"미시경제학",
		"거시경제학",
		"계량경제학",
		"국제경제학",
		"재정학"
	  ]
	},
	{
	  major: "국어국문",
	  desc: "국어국문학과는 한국어와 한국 문학을 체계적으로 연구하며, 국어학과 국문학을 통해 민족문화의 창달에 기여하는 것을 목표로 합니다.",
	  learning: [
		"국어학",
		"고전문학",
		"현대문학",
		"한국어 문법",
		"문학 이론"
	  ]
	},
	{
	  major: "독어독문",
	  desc: "독어독문학과는 독일어와 독일 문학을 연구하며, 독일어의 언어적 특성과 문학적 작품을 통해 독일 문화를 이해하는 것을 목표로 합니다.",
	  learning: [
		"독일어 문법",
		"독일 문학사",
		"독일어 회화",
		"독일 문화",
		"독일어 번역"
	  ]
	},
	{
	  major: "무역학과",
	  desc: "무역학과는 국제 무역과 관련된 이론과 실무를 연구하며, 글로벌 비즈니스 환경에서 필요한 전문 지식을 제공합니다.",
	  learning: [
		"국제 무역론",
		"무역 실무",
		"국제 경영",
		"무역 법규",
		"글로벌 마케팅"
	  ]
	},
	{
	  major: "물리학과",
	  desc: "물리학과는 자연의 기본 원리를 연구하며, 물질과 에너지의 상호작용을 이해하고 응용하는 능력을 기릅니다.",
	  learning: [
		"고전 역학",
		"양자 역학",
		"전기와 자기",
		"열역학",
		"광학"
	  ]
	},
	{
	  major: "불어불문",
	  desc: "불어불문학과는 프랑스어와 프랑스 문학을 연구하며, 프랑스어의 언어적 특성과 문학적 작품을 통해 프랑스 문화를 이해하는 것을 목표로 합니다.",
	  learning: [
		"프랑스어 문법",
		"프랑스 문학사",
		"프랑스어 회화",
		"프랑스 문화",
		"프랑스어 번역"
	  ]
	},
	{
	  major: "영어영문",
	  desc: "영어영문학과는 영어와 영미 문학을 연구하며, 영어의 언어적 특성과 문학적 작품을 통해 영미 문화를 이해하는 것을 목표로 합니다.",
	  learning: [
		"영어 문법",
		"영미 문학사",
		"영어 회화",
		"영미 문화",
		"영어 번역"
	  ]
	},
	{
	  major: "일어일문",
	  desc: "일어일문학과는 일본어와 일본 문학을 연구하며, 일본어의 언어적 특성과 문학적 작품을 통해 일본 문화를 이해하는 것을 목표로 합니다.",
	  learning: [
		"일본어 문법",
		"일본 문학사",
		"일본어 회화",
		"일본 문화",
		"일본어 번역"
	  ]
	},
	{
	  major: "중어중문",
	  desc: "중어중문학과는 중국어와 중국 문학을 연구하며, 중국어의 언어적 특성과 문학적 작품을 통해 중국 문화를 이해하는 것을 목표로 합니다.",
	  learning: [
		"중국어 문법",
		"중국 문학사",
		"중국어 회화",
		"중국 문화",
		"중국어 번역"
	  ]
	},
	{
	  major: "해양학과",
	  desc: "해양학과는 해양 환경과 생태계를 연구하며, 해양 자원의 관리와 보전을 통해 지속 가능한 해양 개발을 목표로 합니다.",
	  learning: [
		"해양 생물학",
		"해양 화학",
		"해양 물리학",
		"해양 지질학",
		"해양 환경 과학"
	  ]
	},
	{
	  major: "행정학과",
	  desc: "행정학과는 공공 관리와 정책을 연구하며, 공공기관에서의 효율적이고 효과적인 운영을 위한 전문 지식을 제공합니다.",
	  learning: [
		"행정 이론",
		"정책 분석",
		"공공 관리",
		"인사 행정",
		"재무 행정"
	  ]
	},
	{
		major: "국어교육과",
		desc: "국어교육과는 한국어의 이론과 교육 방법을 연구하며, 국어 교사로서의 자질을 기릅니다.",
		learning: [
		"국어학",
		"국문학",
		"국어교육론",
		"문법 교육",
		"문학 교육"
		]
	},
	{
		major: "기계공학과",
		desc: "기계공학과는 기계 시스템의 설계, 제작 및 운용을 연구하며, 다양한 산업 분야에서 활용되는 기계 공학 지식을 제공합니다.",
		learning: [
		"기계 설계",
		"열역학",
		"유체역학",
		"재료공학",
		"제어공학"
		]
	},
	{
		major: "도시건축학",
		desc: "도시건축학과는 도시 환경과 건축물의 설계 및 관리에 대한 종합적인 지식을 습득하는 것을 목표로 합니다.",
		learning: [
		"도시 계획",
		"건축 설계",
		"건축 역사",
		"건축 구조",
		"환경 계획"
		]
	},
	{
		major: "도시공학과",
		desc: "도시공학과는 도시의 계획, 개발 및 관리를 연구하며, 지속 가능한 도시 환경을 구축하는 것을 목표로 합니다.",
		learning: [
		"도시 계획",
		"교통공학",
		"도시 환경",
		"부동산 개발",
		"지역사회 개발"
		]
	},
	{
		major: "디자인학부",
		desc: "디자인학부는 시각, 제품, 환경 등 다양한 분야의 디자인 이론과 실습을 통해 창의적이고 실용적인 디자인 능력을 기릅니다.",
		learning: [
		"시각 디자인",
		"제품 디자인",
		"환경 디자인",
		"디자인 이론",
		"디지털 디자인"
		]
	},
	{
		major: "생명공학과",
		desc: "생명공학과는 생명과학의 원리를 응용하여 생명체와 관련된 기술을 개발하고 연구합니다.",
		learning: [
		"유전공학",
		"세포생물학",
		"생화학",
		"미생물학",
		"생명정보학"
		]
	},
	{
		major: "생명과학과",
		desc: "생명과학과는 생명체의 구조와 기능을 연구하며, 생명과학의 다양한 분야에서 응용 가능한 지식을 제공합니다.",
		learning: [
		"분자생물학",
		"생화학",
		"생리학",
		"유전학",
		"생태학"
		]
	},
	{
		major: "서양화전공",
		desc: "서양화전공은 서양화의 역사와 기법을 연구하며, 창의적인 예술적 표현 능력을 기릅니다.",
		learning: [
		"서양화 기법",
		"미술사",
		"예술 이론",
		"색채학",
		"드로잉"
		]
	},
	{
		major: "소비자학과",
		desc: "소비자학과는 소비자의 행동과 시장 동향을 연구하며, 소비자 보호와 관련된 전문 지식을 제공합니다.",
		learning: [
		"소비자 행동",
		"소비자 법",
		"시장 조사",
		"광고와 마케팅",
		"소비자 교육"
		]
	},
	{
		major: "수학교육과",
		desc: "수학교육과는 수학의 이론과 교육 방법을 연구하며, 수학 교사로서의 자질을 기릅니다.",
		learning: [
		"수학 이론",
		"수학교육론",
		"교수법",
		"교육 심리학",
		"교육 평가"
		]
	},
	{
		major: "안전공학과",
		desc: "안전공학과는 산업 현장에서의 안전을 보장하기 위해 위험 요소를 분석하고 관리하는 방법을 연구합니다.",
		learning: [
		"산업 안전",
		"위험 관리",
		"재난 관리",
		"환경 공학",
		"안전 법규"
		]
	},
	{
		major: "역사교육과",
		desc: "역사교육과는 역사 이론과 교육 방법을 연구하며, 역사 교사로서의 자질을 기릅니다.",
		learning: [
		"역사 이론",
		"역사교육론",
		"고대사",
		"중세사",
		"근현대사"
		]
	},
	{
		major: "영어교육과",
		desc: "영어교육과는 영어의 이론과 교육 방법을 연구하며, 영어 교사로서의 자질을 기릅니다.",
		learning: [
		"영어 문법",
		"영어교육론",
		"교수법",
		"언어학",
		"영문학"
		]
	},
	{
		major: "유아교육과",
		desc: "유아교육과는 유아기의 발달과 교육을 연구하며, 유아 교사로서의 자질을 기릅니다.",
		learning: [
		"유아 발달",
		"유아교육론",
		"놀이 이론",
		"유아 심리학",
		"유아교육 프로그램"
		]
	},
	{
		major: "윤리교육과",
		desc: "윤리교육과는 윤리 이론과 교육 방법을 연구하며, 윤리 교사로서의 자질을 기릅니다.",
		learning: [
		"윤리학",
		"윤리교육론",
		"도덕 철학",
		"교육 심리학",
		"교육 평가"
		]
	},
	{
		major: "일어교육과",
		desc: "일어교육과는 일본어의 이론과 교육 방법을 연구하며, 일본어 교사로서의 자질을 기릅니다.",
		learning: [
		"일본어 문법",
		"일본어교육론",
		"교수법",
		"일본어 회화",
		"일본 문학"
		]
	},
	{
		major: "전기공학과",
		desc: "전기공학과는 전기에 대한 이론과 실습을 통해 전기 분야의 전문 지식을 습득하고, 다양한 산업 분야에서 전기 관련 기술을 응용하는 능력을 기르는 것을 목표로 합니다.",
		learning: [
		"회로 이론",
		"전자기학",
		"디지털 공학",
		"전력 시스템",
		"제어 시스템"
		]
	},
	{
		major: "체육교육과",
		desc: "체육교육과는 체육 이론과 교육 방법을 연구하며, 체육 교사로서의 자질을 기릅니다.",
		learning: [
		"체육 이론",
		"체육교육론",
		"운동 생리학",
		"스포츠 심리학",
		"체육 지도법"
		]
	},
	{
		major: "한국화전공",
		desc: "한국화전공은 한국화의 역사와 기법을 연구하며, 창의적인 예술적 표현 능력을 기릅니다.",
		learning: [
		"한국화 기법",
		"동양 미술사",
		"예술 이론",
		"전통 기법",
		"드로잉"
		]
	},
	{
		major: "공연예술학과",
		desc: "공연예술학과는 연극, 음악, 무용 등 다양한 공연 예술의 이론과 실기를 연구합니다.",
		learning: [
		"연극 이론",
		"연기 실습",
		"음악 이론",
		"무용 실기",
		"공연 기획"
		]
	},
	{
		major: "데이터과학과",
		desc: "데이터과학과는 데이터 분석 및 처리 기법을 연구하며, 빅데이터 시대에 필요한 전문 지식을 제공합니다.",
		learning: [
		"데이터 분석",
		"통계학",
		"머신러닝",
		"데이터베이스",
		"프로그래밍"
		]
	},
	{
		major: "문헌정보학과",
		desc: "문헌정보학과는 정보의 수집, 관리 및 활용 방법을 연구하며, 도서관과 정보기관에서의 정보 서비스를 제공합니다.",
		learning: [
		"정보 관리",
		"도서관 경영",
		"정보 검색",
		"디지털 도서관",
		"정보 서비스"
		]
	},
	{
		major: "사회복지학과",
		desc: "사회복지학과는 사회 문제를 해결하고 사회적 약자를 지원하는 방법을 연구합니다.",
		learning: [
		"사회복지 이론",
		"사회복지 정책",
		"사회조사 방법론",
		"인간행동과 사회환경",
		"사회복지 실천"
		]
	},
	{
		major: "세무회계학과",
		desc: "세무회계학과는 세무와 회계에 대한 전문 지식을 습득하며, 재정 관리와 관련된 다양한 이론과 실무를 배웁니다.",
		learning: [
		"재무 회계",
		"세무 회계",
		"관리 회계",
		"세법",
		"회계 감사"
		]
	},
	{
		major: "스포츠과학부",
		desc: "스포츠과학부는 스포츠와 관련된 이론과 실기를 연구하며, 스포츠 산업에서의 다양한 전문 지식을 제공합니다.",
		learning: [
		"운동 생리학",
		"스포츠 심리학",
		"스포츠 경영",
		"스포츠 의학",
		"운동 처방"
		]
	},
	{
		major: "신소재공학과",
		desc: "신소재공학과는 신소재의 개발과 응용을 연구하며, 첨단 기술 산업에서 중요한 역할을 하는 재료를 다룹니다.",
		learning: [
		"재료 과학",
		"재료 물리학",
		"재료 화학",
		"나노기술",
		"신소재 설계"
		]
	},
	{
		major: "운동건강학부",
		desc: "운동건강학부는 운동과 건강에 대한 이론과 실습을 연구하며, 건강 증진과 관련된 다양한 지식을 제공합니다.",
		learning: [
		"운동 생리학",
		"운동 처방",
		"건강 관리",
		"스포츠 영양학",
		"운동 재활"
		]
	},
	{
		major: "정치외교학과",
		desc: "정치외교학과는 정치 이론과 국제 관계를 연구하며, 정치적 문제를 분석하고 해결하는 능력을 기릅니다.",
		learning: [
		"정치 이론",
		"국제 관계",
		"정치 사상",
		"외교 정책",
		"비교 정치"
		]
	},
	{
		major: "컴퓨터공학과",
		desc: "컴퓨터공학과는 컴퓨터 시스템과 소프트웨어의 이론과 실습을 연구하며, 정보기술 분야에서 필요한 다양한 지식을 제공합니다.",
		learning: [
		"프로그래밍",
		"자료 구조",
		"컴퓨터 네트워크",
		"운영 체제",
		"소프트웨어 공학"
		]
	},
	{
		major: "패션산업학과",
		desc: "패션산업학과는 패션 디자인과 비즈니스의 이론과 실무를 연구하며, 패션 산업 전반에 필요한 전문 지식을 제공합니다.",
		learning: [
		"패션 디자인",
		"패션 마케팅",
		"의류 소재학",
		"패션 트렌드",
		"패션 비즈니스"
		]
	},
	{
		major: "환경공학전공",
		desc: "환경공학전공은 환경 문제를 해결하기 위한 기술과 방법을 연구하며, 지속 가능한 환경을 구축하는 것을 목표로 합니다.",
		learning: [
		"환경 화학",
		"환경 생태학",
		"수질 관리",
		"대기 오염",
		"폐기물 처리"
		]
	},
	{
		major: "건설환경공학과",
		desc: "건설환경공학과는 건설 기술과 환경 공학을 융합하여 지속 가능한 건설 환경을 조성하는 방법을 연구합니다.",
		learning: [
		"건설 관리",
		"구조 공학",
		"토질 공학",
		"환경 공학",
		"교통 공학"
		]
	},
	{
		major: "분자의생명전공",
		desc: "분자의생명전공은 분자 수준에서 생명 현상을 연구하며, 생명 과학의 기초와 응용을 다룹니다.",
		learning: [
		"분자 생물학",
		"생화학",
		"유전학",
		"세포 생물학",
		"생명 정보학"
		]
	},
	{
		major: "산업경영공학과",
		desc: "산업경영공학과는 산업 시스템의 효율성을 향상시키기 위한 이론과 방법을 연구하며, 경영 과학과 공학을 융합합니다.",
		learning: [
		"생산 관리",
		"품질 관리",
		"공정 설계",
		"경영 과학",
		"인간 공학"
		]
	},
	{
		major: "에너지화학공학과",
		desc: "에너지화학공학과는 에너지 자원과 화학 공정을 연구하며, 지속 가능한 에너지 기술을 개발하는 것을 목표로 합니다.",
		learning: [
		"에너지 공학",
		"화학 공정",
		"재료 과학",
		"열역학",
		"촉매 공학"
		]
	},
	{
		major: "창의인재개발학과",
		desc: "창의인재개발학과는 창의적 사고와 문제 해결 능력을 배양하여 다양한 산업 분야에서 요구되는 인재를 양성하는 것을 목표로 합니다.",
		learning: [
		"창의적 사고",
		"문제 해결",
		"리더십 개발",
		"혁신 경영",
		"인재 개발"
		]
	},
	{
		major: "미디어커뮤니케이션학과",
		desc: "미디어커뮤니케이션학과는 미디어와 커뮤니케이션의 이론과 실습을 연구하며, 현대 사회에서의 효과적인 커뮤니케이션을 목표로 합니다.",
		learning: [
		"미디어 이론",
		"커뮤니케이션 이론",
		"저널리즘",
		"광고와 PR",
		"디지털 미디어"
		]
	}	  
];
  