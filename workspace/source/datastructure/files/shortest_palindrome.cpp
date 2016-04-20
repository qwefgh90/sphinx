#include <stdio.h>
#include <stdlib.h>
#include <memory.h>
#include <string.h>

int table[1] = {0,};

int main(){
	int testcase;
	scanf("%d",&testcase);
	char result[2048] = {0, };
	char input[1024] = {0,};
		
	for (int i = 0; i < testcase; i++){
		printf("#testcase%d\n", i+1);
		char input[1024] = {0,};
		scanf("%s",input);
		//초기 문자열 + 역 문자열 합치기
		strcpy(result,input,strlen(input));
		int length = strlen(input);
		for(int j = length - 1; j >= 0; j--){
			result[length + (length-1 - j)] = input[j]; //문자열 완성
		}
		//접두어와 접미어 둘다 되는 최대 길이를 항목으로 갖는 테이블 생성
		int max = 0;

		for(int j = 0; j < length; j++){
			if(result[j] == result[length*2 - 1 - j]){
				max++;	
			}
		}

		//홀수개는 -1 짝수개는 -0 까지 찾아서 테이블 생성
		table[0] = max;
		
		//뒤에 붙일 길이 계산
		int offset = length - table[0];
		for(int j = offset - 1; j >= 0; j--){
			result[length + (offset - 1 - j)] = input[j];
		}
		printf("%s\n",result);
	}


	return 1;
}

//부분 매치 JAVA코드
//변수 테이블을 그린 후 알고리즘을 수행해본다.
//해당 알고리즘은 기존의 항상 -1부터 시작하던 pattern table과 다르다. 
//최대경계너비가 측정된 구간의 마지막 문자의 인덱스에 너비를 저장한다.
//출처 - http://crack-tech-interview.com/2015/01/19/kmp-concept%EC%9D%84-%ED%86%B5%ED%95%9C-string-partial-match/
public static int[] getPartialMatch(String str) {
  int len = checkNotNull(str).length();
  checkArgument(len > 0);
  // Prefix와 suffix가 동시에 되는 substring의 길이를 담는 저장소
  int[] pi = new int[len]; 
  int begin = 1, matched = 0; 
  while (begin + matched < len) {
    if (str.charAt(begin + matched) == str.charAt(matched)) {
      // 둘이 같으면 계속 match가 일어나고 있다는 말, 이를 통해서 pi를 update
      ++matched;
      pi[begin + matched - 1] = matched;
    } else {
      // 매치가 안 됬을 때, matched가 0이면 begin을 +1 늘려준다 -> 아무것도 pre 정보가 없으면
      // 한 칸 가는 수 밖에 없죠?
      if (matched == 0) {
        ++begin;
      } else {
      // Move only the partially matched portion -> 왜냐 기존에 매치된 부분은 재 매치 될 것이므로!
        begin += (matched - pi[matched -1]);
        // Update the match
        matched = pi[matched - 1];
      }
    }
  }
  return pi;
}