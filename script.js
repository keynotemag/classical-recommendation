const questions=[
["친구가 갑자기 ‘이 곡 진짜 좋다’며 음악을 보내왔다면?", "나도 바로 들어보고 친구에게 반응을 보낸다", "일단 혼자 여러 번 들어보고 내 생각을 정리한다"],
["공연장에 예상보다 일찍 도착했다면?", "주변 사람들과 공연 이야기를 나누며 기다린다", "공연장 분위기를 혼자 천천히 구경하며 기다린다"],
["처음 듣는 음악에서 눈앞에 장면이 떠오른다면?", "어떤 악기와 소리가 이런 장면을 만들었는지 궁금하다", "이 음악이 어떤 세계나 이야기를 그리고 있는지 궁금하다"],
["누군가 아무 설명 없이 낯선 클래식 한 곡을 들려준다면?", "귀에 들리는 선율과 리듬부터 따라가 본다", "음악이 주는 분위기와 내가 떠올린 이미지를 따라가 본다"],
["공연이 끝난 뒤 친구와 가장 먼저 나누고 싶은 이야기는?", "연주가 어떻게 만들어졌고 무엇이 인상적이었는지", "그 음악을 들으며 어떤 기분이 들었는지"],
["두 번의 같은 곡 연주 중 하나를 다시 듣는다면?", "연주가 얼마나 정교하고 완성도 높은지 비교해본다", "어떤 연주가 더 마음에 오래 남는지 느껴본다"],
["공연 하루 전, 갑자기 빈자리가 생겼다면?", "시간과 좌석을 확인하고 갈 수 있는지 차근차근 정리한다", "일단 가기로 하고 그날 상황에 맞춰 움직인다"],
["새로운 음악을 플레이리스트에 넣는 순간, 당신은?", "앞뒤 곡과 어울리도록 순서를 정리해둔다", "일단 넣어두고 그날 기분에 따라 듣는다"]];
const results={"INTJ": {"name": "바흐형", "title": "음악의 설계자", "composer": "J. S. Bach", "main": "Goldberg Variations", "rec": ["The Art of Fugue", "The Well-Tempered Clavier"], "tags": ["구조적인", "집중하는", "깊이있는"], "reason": "정교하게 쌓이는 구조와 깊이 있는 흐름을 따라가며 음악을 발견하는 당신에게 어울려요.", "style": "구조가 촘촘하고 한 번 들을수록 새로운 부분이 보이는 음악을 좋아하는 편이에요.", "pieceDesc": "여러 개의 선율이 정교하게 얽히는 피아노 변주곡이에요. 같은 주제가 조금씩 다른 모습으로 반복되어, 집중해서 들을수록 재미가 커져요.", "dna": [62, 68, 42, 78], "songs": [["J. S. Bach — Goldberg Variations", "https://www.youtube.com/results?search_query=J.+S.+Bach+Goldberg+Variations", "KEYNOTE PICK"], ["The Art of Fugue", "https://www.youtube.com/results?search_query=The+Art+of+Fugue", "MORE TO DISCOVER"], ["The Well-Tempered Clavier", "https://www.youtube.com/results?search_query=The+Well-Tempered+Clavier", "MORE TO DISCOVER"]]}, "INTP": {"name": "라벨형", "title": "소리의 실험가", "composer": "Maurice Ravel", "main": "Piano Trio in A minor", "rec": ["Gaspard de la nuit", "Le tombeau de Couperin"], "tags": ["탐구하는", "세련된", "독창적인"], "reason": "익숙한 방식에 머무르기보다 새로운 음색과 아이디어를 발견하는 과정을 즐겨요.", "style": "익숙한 소리보다 새로운 음색과 예상하지 못한 조합을 발견하는 것을 즐기는 편이에요.", "pieceDesc": "피아노·바이올린·첼로가 서로 대화하듯 이어지는 실내악이에요. 섬세한 색채와 독특한 분위기를 느껴볼 수 있어요.", "dna": [70, 86, 48, 94], "songs": [["Maurice Ravel — Piano Trio in A minor", "https://www.youtube.com/results?search_query=Maurice+Ravel+Piano+Trio+in+A+minor", "KEYNOTE PICK"], ["Gaspard de la nuit", "https://www.youtube.com/results?search_query=Gaspard+de+la+nuit", "MORE TO DISCOVER"], ["Le tombeau de Couperin", "https://www.youtube.com/results?search_query=Le+tombeau+de+Couperin", "MORE TO DISCOVER"]]}, "ENTJ": {"name": "베토벤형", "title": "음악의 개척자", "composer": "Ludwig van Beethoven", "main": "Symphony No. 7", "rec": ["Coriolan Overture", "Symphony No. 5"], "tags": ["대담한", "추진력", "강렬한"], "reason": "강한 추진력과 선명한 에너지가 음악 전체를 끌고 가는 작품에 매력을 느껴요.", "style": "힘 있게 앞으로 나아가는 음악과 선명한 에너지가 있는 음악을 좋아하는 편이에요.", "pieceDesc": "빠르고 강한 리듬이 인상적인 교향곡이에요. 여러 악기가 함께 몰아치는 에너지를 느끼며 듣기 좋은 곡이에요.", "dna": [66, 60, 92, 72], "songs": [["Ludwig van Beethoven — Symphony No. 7", "https://www.youtube.com/results?search_query=Ludwig+van+Beethoven+Symphony+No.+7", "KEYNOTE PICK"], ["Coriolan Overture", "https://www.youtube.com/results?search_query=Coriolan+Overture", "MORE TO DISCOVER"], ["Symphony No. 5", "https://www.youtube.com/results?search_query=Symphony+No.+5", "MORE TO DISCOVER"]]}, "ENTP": {"name": "스트라빈스키형", "title": "틀을 깨는 혁신가", "composer": "Igor Stravinsky", "main": "The Rite of Spring", "rec": ["Pulcinella", "Symphony of Psalms"], "tags": ["실험적인", "대담한", "호기심"], "reason": "예상 가능한 흐름보다 낯선 리듬과 강렬한 변화가 있는 음악에서 재미를 발견해요.", "style": "예상 밖의 변화와 독특한 아이디어가 있는 음악에서 재미를 찾는 편이에요.", "pieceDesc": "강렬한 리듬과 낯선 소리가 충돌하는 발레 음악이에요. 처음에는 조금 낯설어도 변화가 많아 계속 귀가 가는 작품이에요.", "dna": [58, 92, 88, 98], "songs": [["Igor Stravinsky — The Rite of Spring", "https://www.youtube.com/results?search_query=Igor+Stravinsky+The+Rite+of+Spring", "KEYNOTE PICK"], ["Pulcinella", "https://www.youtube.com/results?search_query=Pulcinella", "MORE TO DISCOVER"], ["Symphony of Psalms", "https://www.youtube.com/results?search_query=Symphony+of+Psalms", "MORE TO DISCOVER"]]}, "INFJ": {"name": "말러형", "title": "깊은 사색가", "composer": "Gustav Mahler", "main": "Symphony No. 5 — Adagietto", "rec": ["Elgar — Cello Concerto", "Rückert-Lieder"], "tags": ["사색적인", "깊은여운", "섬세한"], "reason": "한 번 들은 뒤에도 오래 남는 감정과 서사를 천천히 음미하는 음악과 잘 맞아요.", "style": "조용히 시작해 깊은 감정으로 이어지고, 오래 생각하게 만드는 음악을 좋아하는 편이에요.", "pieceDesc": "현악기의 부드러운 선율이 중심이 되는 매우 서정적인 음악이에요. 말없이 감정을 전하는 듯한 분위기를 느껴보세요.", "dna": [94, 91, 54, 72], "songs": [["Gustav Mahler — Symphony No. 5 — Adagietto", "https://www.youtube.com/results?search_query=Gustav+Mahler+Symphony+No.+5+%E2%80%94+Adagietto", "KEYNOTE PICK"], ["Elgar — Cello Concerto", "https://www.youtube.com/results?search_query=Elgar+%E2%80%94+Cello+Concerto", "MORE TO DISCOVER"], ["Rückert-Lieder", "https://www.youtube.com/results?search_query=R%C3%BCckert-Lieder", "MORE TO DISCOVER"]]}, "INFP": {"name": "쇼팽형", "title": "감성의 시인", "composer": "Frédéric Chopin", "main": "Nocturne Op. 9 No. 2", "rec": ["Fauré — Pavane", "Ballade No. 1"], "tags": ["감성적인", "상상력", "섬세한"], "reason": "멜로디의 작은 변화와 음악이 남기는 여운을 따라가며 자기만의 장면을 떠올리는 편이에요.", "style": "멜로디를 들으며 자신만의 장면이나 감정을 떠올릴 수 있는 음악을 좋아하는 편이에요.", "pieceDesc": "피아노로 연주하는 짧고 서정적인 곡이에요. 밤이나 혼자 있는 시간에 들으면 음악의 여운을 천천히 느끼기 좋아요.", "dna": [96, 93, 38, 74], "songs": [["Frédéric Chopin — Nocturne Op. 9 No. 2", "https://www.youtube.com/results?search_query=Fr%C3%A9d%C3%A9ric+Chopin+Nocturne+Op.+9+No.+2", "KEYNOTE PICK"], ["Fauré — Pavane", "https://www.youtube.com/results?search_query=Faur%C3%A9+%E2%80%94+Pavane", "MORE TO DISCOVER"], ["Ballade No. 1", "https://www.youtube.com/results?search_query=Ballade+No.+1", "MORE TO DISCOVER"]]}, "ENFJ": {"name": "드보르자크형", "title": "이야기를 전하는 사람", "composer": "Antonín Dvořák", "main": "Symphony No. 8", "rec": ["Symphony No. 7", "Elgar — Enigma Variations"], "tags": ["따뜻한", "서사적인", "풍부한"], "reason": "따뜻한 선율과 풍부한 색채가 큰 흐름을 만들며 이야기를 들려주는 음악에 끌려요.", "style": "따뜻한 선율과 풍부한 분위기 속에서 하나의 이야기가 펼쳐지는 음악을 좋아하는 편이에요.", "pieceDesc": "밝고 따뜻한 선율이 반복되며 점점 풍성해지는 교향곡이에요. 자연과 고향의 풍경을 떠올리며 듣기 좋아요.", "dna": [86, 78, 78, 68], "songs": [["Antonín Dvořák — Symphony No. 8", "https://www.youtube.com/results?search_query=Anton%C3%ADn+Dvo%C5%99%C3%A1k+Symphony+No.+8", "KEYNOTE PICK"], ["Symphony No. 7", "https://www.youtube.com/results?search_query=Symphony+No.+7", "MORE TO DISCOVER"], ["Elgar — Enigma Variations", "https://www.youtube.com/results?search_query=Elgar+%E2%80%94+Enigma+Variations", "MORE TO DISCOVER"]]}, "ENFP": {"name": "프로코피예프형", "title": "예측할 수 없는 음악 탐험가", "composer": "Sergei Prokofiev", "main": "Classical Symphony", "rec": ["Piano Concerto No. 2", "Romeo and Juliet"], "tags": ["생동감", "자유로운", "재치있는"], "reason": "장난기 있는 리듬과 빠르게 바뀌는 분위기처럼 예상 밖의 즐거움을 주는 음악을 좋아해요.", "style": "변화가 많고 장난기 있는 음악처럼 다음 순간이 궁금해지는 음악을 좋아하는 편이에요.", "pieceDesc": "짧고 경쾌한 분위기의 교향곡이에요. 익숙한 클래식의 느낌을 비틀어 만든 듯한 재치가 있어 가볍게 듣기 좋아요.", "dna": [68, 86, 94, 96], "songs": [["Sergei Prokofiev — Classical Symphony", "https://www.youtube.com/results?search_query=Sergei+Prokofiev+Classical+Symphony", "KEYNOTE PICK"], ["Piano Concerto No. 2", "https://www.youtube.com/results?search_query=Piano+Concerto+No.+2", "MORE TO DISCOVER"], ["Romeo and Juliet", "https://www.youtube.com/results?search_query=Romeo+and+Juliet", "MORE TO DISCOVER"]]}, "ISTJ": {"name": "하이든형", "title": "균형의 장인", "composer": "Joseph Haydn", "main": "Symphony No. 44 “Trauer”", "rec": ["Symphony No. 92 “Oxford”", "String Quartet Op. 76 No. 3"], "tags": ["균형있는", "정교한", "안정감"], "reason": "정돈된 구조 속에서도 작은 변화가 선명하게 살아 있는 음악의 완성도를 좋아해요.", "style": "정돈된 흐름과 균형 속에서 작은 변화까지 또렷하게 들리는 음악을 좋아하는 편이에요.", "pieceDesc": "차분하게 시작해 긴장감과 깊이를 더해가는 교향곡이에요. 깔끔한 구조와 묵직한 분위기를 함께 느낄 수 있어요.", "dna": [60, 54, 62, 58], "songs": [["Joseph Haydn — Symphony No. 44 “Trauer”", "https://www.youtube.com/results?search_query=Joseph+Haydn+Symphony+No.+44+%E2%80%9CTrauer%E2%80%9D", "KEYNOTE PICK"], ["Symphony No. 92 “Oxford”", "https://www.youtube.com/results?search_query=Symphony+No.+92+%E2%80%9COxford%E2%80%9D", "MORE TO DISCOVER"], ["String Quartet Op. 76 No. 3", "https://www.youtube.com/results?search_query=String+Quartet+Op.+76+No.+3", "MORE TO DISCOVER"]]}, "ISFJ": {"name": "슈만형", "title": "따뜻한 이야기꾼", "composer": "Robert Schumann", "main": "Kinderszenen", "rec": ["Piano Quartet in E-flat major", "Delius — On Hearing the First Cuckoo in Spring"], "tags": ["따뜻한", "다정한", "서정적인"], "reason": "익숙한 일상의 순간을 섬세하게 들려주는 음악에서 따뜻한 감정과 위로를 느껴요.", "style": "따뜻하고 친근한 멜로디에서 일상의 기억이나 편안한 감정을 떠올리는 음악을 좋아하는 편이에요.", "pieceDesc": "아이들의 놀이와 상상을 떠올리게 하는 짧은 피아노 곡 모음이에요. 소박하고 따뜻한 장면들이 음악으로 이어져요.", "dna": [89, 78, 44, 55], "songs": [["Robert Schumann — Kinderszenen", "https://www.youtube.com/results?search_query=Robert+Schumann+Kinderszenen", "KEYNOTE PICK"], ["Piano Quartet in E-flat major", "https://www.youtube.com/results?search_query=Piano+Quartet+in+E-flat+major", "MORE TO DISCOVER"], ["Delius — On Hearing the First Cuckoo in Spring", "https://www.youtube.com/results?search_query=Delius+%E2%80%94+On+Hearing+the+First+Cuckoo+in+Spring", "MORE TO DISCOVER"]]}, "ESTJ": {"name": "헨델형", "title": "장엄한 에너지", "composer": "George Frideric Handel", "main": "Water Music", "rec": ["Music for the Royal Fireworks", "Organ Concerto Op. 4 No. 4"], "tags": ["장엄한", "명확한", "힘있는"], "reason": "명확한 흐름과 힘 있는 앙상블이 공간 전체를 채우는 음악에서 에너지를 얻는 편이에요.", "style": "명확한 흐름과 힘 있는 소리가 공간을 가득 채우는 음악을 좋아하는 편이에요.", "pieceDesc": "여러 악기가 화려하게 어우러지는 모음곡이에요. 축제나 야외 공연 같은 장면을 떠올리며 듣기 좋은 음악이에요.", "dna": [60, 58, 90, 58], "songs": [["George Frideric Handel — Water Music", "https://www.youtube.com/results?search_query=George+Frideric+Handel+Water+Music", "KEYNOTE PICK"], ["Music for the Royal Fireworks", "https://www.youtube.com/results?search_query=Music+for+the+Royal+Fireworks", "MORE TO DISCOVER"], ["Organ Concerto Op. 4 No. 4", "https://www.youtube.com/results?search_query=Organ+Concerto+Op.+4+No.+4", "MORE TO DISCOVER"]]}, "ESFJ": {"name": "모차르트형", "title": "음악의 사교가", "composer": "Wolfgang Amadeus Mozart", "main": "Piano Concerto No. 21", "rec": ["Piano Concerto No. 23", "Divertimento K. 136"], "tags": ["밝은", "친근한", "우아한"], "reason": "밝고 선명한 선율 속에서 사람들과 함께 즐길 수 있는 음악적 매력을 발견해요.", "style": "밝고 친근한 멜로디처럼 누구와 함께 들어도 즐거운 음악을 좋아하는 편이에요.", "pieceDesc": "피아노와 오케스트라가 주고받으며 밝고 우아한 분위기를 만드는 협주곡이에요. 처음 듣는 클래식으로도 부담이 적어요.", "dna": [72, 70, 72, 62], "songs": [["Wolfgang Amadeus Mozart — Piano Concerto No. 21", "https://www.youtube.com/results?search_query=Wolfgang+Amadeus+Mozart+Piano+Concerto+No.+21", "KEYNOTE PICK"], ["Piano Concerto No. 23", "https://www.youtube.com/results?search_query=Piano+Concerto+No.+23", "MORE TO DISCOVER"], ["Divertimento K. 136", "https://www.youtube.com/results?search_query=Divertimento+K.+136", "MORE TO DISCOVER"]]}, "ISTP": {"name": "생상스형", "title": "감각적인 탐험가", "composer": "Camille Saint-Saëns", "main": "Bassoon Sonata, Op. 168", "rec": ["Septet, Op. 65", "Cello Concerto No. 1"], "tags": ["감각적인", "개성있는", "유연한"], "reason": "익숙한 클래식 안에서도 새로운 음색과 기교를 발견하는 순간을 즐기는 편이에요.", "style": "악기의 개성과 선명한 연주 기교처럼 직접 듣는 재미가 있는 음악을 좋아하는 편이에요.", "pieceDesc": "바순의 낮고 부드러운 음색을 중심으로 한 곡이에요. 오케스트라에서는 잘 들리지 않던 바순의 매력을 가까이 느낄 수 있어요.", "dna": [68, 72, 76, 90], "songs": [["Camille Saint-Saëns — Bassoon Sonata, Op. 168", "https://www.youtube.com/results?search_query=Camille+Saint-Sa%C3%ABns+Bassoon+Sonata%2C+Op.+168", "KEYNOTE PICK"], ["Septet, Op. 65", "https://www.youtube.com/results?search_query=Septet%2C+Op.+65", "MORE TO DISCOVER"], ["Cello Concerto No. 1", "https://www.youtube.com/results?search_query=Cello+Concerto+No.+1", "MORE TO DISCOVER"]]}, "ISFP": {"name": "드뷔시형", "title": "빛과 색의 탐험가", "composer": "Claude Debussy", "main": "La mer", "rec": ["Images pour orchestre", "Ravel — Daphnis et Chloé"], "tags": ["색채감", "감각적인", "몽환적인"], "reason": "음악을 선율보다 하나의 풍경처럼 느끼며 색채와 질감을 감각적으로 받아들여요.", "style": "음악을 하나의 풍경처럼 느끼며 색감과 분위기에 빠져드는 음악을 좋아하는 편이에요.", "pieceDesc": "바다의 움직임과 빛을 오케스트라의 색채로 표현한 작품이에요. 선율보다 전체적인 풍경을 느끼며 들어보세요.", "dna": [91, 96, 48, 88], "songs": [["Claude Debussy — La mer", "https://www.youtube.com/results?search_query=Claude+Debussy+La+mer", "KEYNOTE PICK"], ["Images pour orchestre", "https://www.youtube.com/results?search_query=Images+pour+orchestre", "MORE TO DISCOVER"], ["Ravel — Daphnis et Chloé", "https://www.youtube.com/results?search_query=Ravel+%E2%80%94+Daphnis+et+Chlo%C3%A9", "MORE TO DISCOVER"]]}, "ESTP": {"name": "차이콥스키형", "title": "극적인 에너지", "composer": "Pyotr Ilyich Tchaikovsky", "main": "Violin Concerto", "rec": ["Piano Trio in A minor", "Sibelius — Violin Concerto"], "tags": ["극적인", "대담한", "몰입하는"], "reason": "강렬한 대비와 극적인 선율처럼 감정을 크게 끌어올리는 음악에서 짜릿함을 느껴요.", "style": "강한 대비와 극적인 순간처럼 음악이 감정을 크게 끌어올리는 것을 좋아하는 편이에요.", "pieceDesc": "바이올린 독주와 오케스트라가 팽팽하게 주고받는 협주곡이에요. 화려한 선율과 강한 감정의 변화가 인상적이에요.", "dna": [84, 76, 94, 78], "songs": [["Pyotr Ilyich Tchaikovsky — Violin Concerto", "https://www.youtube.com/results?search_query=Pyotr+Ilyich+Tchaikovsky+Violin+Concerto", "KEYNOTE PICK"], ["Piano Trio in A minor", "https://www.youtube.com/results?search_query=Piano+Trio+in+A+minor", "MORE TO DISCOVER"], ["Sibelius — Violin Concerto", "https://www.youtube.com/results?search_query=Sibelius+%E2%80%94+Violin+Concerto", "MORE TO DISCOVER"]]}, "ESFP": {"name": "라흐마니노프형", "title": "감정의 드라마티스트", "composer": "Sergei Rachmaninoff", "main": "Piano Concerto No. 2", "rec": ["Symphony No. 2", "Korngold — Violin Concerto"], "tags": ["극적인", "화려한", "감정적인"], "reason": "넓게 펼쳐지는 선율과 극적인 감정의 흐름처럼 음악이 주는 몰입감을 강하게 즐겨요.", "style": "화려한 선율과 큰 감정의 흐름처럼 음악에 깊게 몰입할 수 있는 작품을 좋아하는 편이에요.", "pieceDesc": "피아노가 중심에서 강렬한 선율을 연주하고 오케스트라가 함께 감정을 크게 확장하는 협주곡이에요. 영화 같은 드라마를 느낄 수 있어요.", "dna": [95, 84, 88, 70], "songs": [["Sergei Rachmaninoff — Piano Concerto No. 2", "https://www.youtube.com/results?search_query=Sergei+Rachmaninoff+Piano+Concerto+No.+2", "KEYNOTE PICK"], ["Symphony No. 2", "https://www.youtube.com/results?search_query=Symphony+No.+2", "MORE TO DISCOVER"], ["Korngold — Violin Concerto", "https://www.youtube.com/results?search_query=Korngold+%E2%80%94+Violin+Concerto", "MORE TO DISCOVER"]]}};
let step=0, answers=[];
const app=document.getElementById("app");

function intro(){
 app.innerHTML=`<section class="screen intro">
 <div class="top"><div class="brand">KEYNOTE</div><div class="small">MUSIC TYPE</div></div>
 <div class="hero"><div class="eyebrow">FIND YOUR MUSIC</div>
 <h1>당신은 어떤 음악을 좋아할까요?</h1>
 <p>몇 가지 질문을 통해<br>당신의 음악 취향과 어울리는 클래식을 만나보세요.</p>
 <button class="cta" onclick="start()">START</button></div>
 <div class="intro-foot"><span>KEYNOTE</span><span>DISCOVER CLASSICAL MUSIC</span></div></section>`;
}
function start(){step=0;answers=[];renderQ()}
function renderQ(){
 const q=questions[step];
 app.innerHTML=`<section class="screen question">
 <div class="top"><div class="brand">KEYNOTE</div><div class="small">${step+1} / ${questions.length}</div></div>
 <div class="progress"><span style="width:${((step+1)/questions.length)*100}%"></span></div>
 <div class="qnum">QUESTION ${String(step+1).padStart(2,"0")}</div>
 <h2>${q[0]}</h2><div class="answers">
 <button class="answer ${answers[step]===0?'selected':''}" onclick="selectA(0)"><span class="pole">A</span>${q[1]}</button>
 <button class="answer ${answers[step]===1?'selected':''}" onclick="selectA(1)"><span class="pole">B</span>${q[2]}</button>
 </div>
 <div class="next">
 <button class="cta" ${answers[step]===undefined?'disabled':''} onclick="next()">${step===questions.length-1?"RESULT":"NEXT"}</button>
 ${step>0?'<button class="cta back-question" onclick="previous()">← 이전 질문</button>':''}
 </div>
 </section>`;
}
function selectA(i){answers[step]=i;renderQ()}
function next(){if(answers[step]===undefined)return;if(step<questions.length-1){step++;renderQ()}else loading()}
function previous(){if(step>0){step--;renderQ();window.scrollTo(0,0)}}
function loading(){
 app.innerHTML=`<section class="screen loading"><div><div class="spinner"></div><div class="eyebrow">FINDING YOUR MUSIC TYPE</div><h2>당신에게 어울리는<br>클래식을 찾고 있어요.</h2><p>음악 취향을 정리하는 중입니다.</p></div></section>`;
 setTimeout(showResult,850);
}
function axis(idxs,a,b){
 let score=idxs.reduce((s,i)=>s+(answers[i]===0?1:-1),0);
 if(score===0){const last=idxs[idxs.length-1];return answers[last]===0?a:b}
 return score>0?a:b;
}
function mbti(){
 return axis([0,1],"E","I")+axis([2,3],"S","N")+axis([4,5],"T","F")+axis([6,7],"J","P");
}
function ytLink(label){return label}
function calculateMusicDNA(){
 const e=answers.slice(0,2).filter(v=>v===0).length/2;
 const i=1-e;
 const s=answers.slice(2,4).filter(v=>v===0).length/2;
 const n=1-s;
 const t=answers.slice(4,6).filter(v=>v===0).length/2;
 const f=1-t;
 const j=answers.slice(6,8).filter(v=>v===0).length/2;
 const p=1-j;
 return [
   Math.round(50+f*30+n*20),
   Math.round(50+n*35+p*15),
   Math.round(50+e*15+p*35),
   Math.round(50+i*30+t*20)
 ];
}
function resultMarkup(type,shared=false){
 const r=results[type];
 const dnaValues=shared ? r.dna : calculateMusicDNA();
 const dnaNames=["감성","상상","에너지","탐색"];
 const dna=dnaValues.map((v,i)=>`<div class="dna-row"><span>${dnaNames[i]}</span><div class="dna-bar"><i style="width:${v}%"></i></div><b>${v}</b></div>`).join("");
 const recs=r.songs.slice(1).map((s,i)=>`<div class="track"><div class="track-copy"><small>RECOMMENDATION ${i+1}</small><b>${s[0]}</b></div><a class="play" href="${s[1]}" target="_blank" rel="noopener">▶ YouTube</a></div>`).join("");
 const why=r.reason;
 const whyExtra=(r.tags||[]).slice(0,3);
 return `<section class="screen result">
 <div class="top"><div class="brand">KEYNOTE</div><div class="small">${shared?"SHARED RESULT":"YOUR RESULT"}</div></div>
 <div class="result-hero"><div class="type-label">YOUR MUSIC TYPE</div><h2>${r.name}</h2><div class="type-title">${r.title}</div>
 <div class="tags">${r.tags.map(t=>`<span class="tag">#${t}</span>`).join("")}</div></div>
 <div class="result-card"><div class="section-kicker">01 · KEYNOTE PICK</div>
 <div class="composer">${r.composer}</div><div class="piece">${r.main}</div><p class="piece-desc">${r.pieceDesc}</p><div class="style-box"><b>이런 음악을 좋아해요</b><span>${r.style}</span></div><p class="reason">${r.reason}</p>
 <div class="listen-note"><b>LISTEN FOR</b><span>처음 들을 때 멜로디와 음색, 그리고 곡의 흐름에 집중해보세요.</span></div>
 <a class="cta orange listen-btn" href="${r.songs[0][1]}" target="_blank" rel="noopener">▶ YouTube에서 듣기</a>
 <div class="rec-title">02 · MORE TO DISCOVER</div>${recs}</div>
 <div class="result-insight"><h3>왜 이런 결과가 나왔을까요?</h3><p>${why}</p><ul class="insight-list">${whyExtra.map(x=>`<li>${x}</li>`).join("")}</ul></div>
 <div class="dynamic-dna"><div class="dynamic-dna-title">🎧 나의 음악 DNA</div><p>8개 질문에 대한 실제 응답을 바탕으로 계산한 음악 성향 지표입니다.</p>${dna}</div>
 <div class="actions"><button class="cta orange" onclick="shareResult('${type}')">공유하기</button><button class="ghost" onclick="start()">↻ 다시 테스트</button></div>
 <div class="instagram-cta">
  <p>클래식이 더 궁금해졌다면</p>
  <div class="ig-handle">@keynote.mag</div>
  <a class="instagram-btn" href="https://www.instagram.com/keynote.mag/" target="_blank" rel="noopener noreferrer">KEYNOTE 인스타그램 방문하기</a>
 </div>
 <p class="disclaimer">이 테스트는 MBTI 성향을 바탕으로 KEYNOTE가 만든 재미용 음악 추천 콘텐츠입니다.</p>
 </section>`;
}
function showResult(){const type=mbti();history.replaceState({},'',`?type=${type}`);app.innerHTML=resultMarkup(type)}
async function shareResult(type){
 const r=results[type],url=location.href,text=`나는 ${r.name} · ${r.title} 🎼\nKEYNOTE Music Type`;
 if(navigator.share){try{await navigator.share({title:`KEYNOTE · ${r.name}`,text,url});return}catch(e){}}
 try{await navigator.clipboard.writeText(url);alert("결과 링크가 복사됐어요!")}catch(e){alert(url)}
}
function loadShared(){const t=new URLSearchParams(location.search).get("type");if(t&&results[t])app.innerHTML=resultMarkup(t,true);else intro()}
loadShared();
