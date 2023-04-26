# 게시글 작성자만 수정과 삭제하기 
  1) template에서 if태그에 user == movie.user 조건을 넣어 감싸준다.  
  2) view에서 if request.user == movie.user 조건을 추가해준다.

# 댓글 기능
- Comment form을 생성하고, Movie테이블과 연결한 외래키 필드를 추가해야 한다. 
- Comment form의 필드는 title, description만 설정했다.
- 댓글 삭제 url은 특정 영화의 특정 댓글 정보이기 때문에 pk가 2개 필요하고, view역시 pk 2개를 파라미터로 넘겨받는다. 
- 댓글 정보를 DB에 저장하기 전에, save메서드의 commit=False옵션을 통해 객체 데이터를 반환해서 movie정보를 담아준다.
- detail함수는 비어있는 CommentForm 정보를 넘겨주고, comments_create함수는 CommentForm에 데이터를 넣어서 처리해준다.  

# 좋아요 기능
- N:M 관계 구현은 ManyToManyField를 사용한다. 이는 좋아요를 누르는 User와 좋아요가 눌리는 Movie(게시글)사이에 중개테이블 역할을 한다. 
- view : 좋아요처리는 기존에 좋아요를 누르지 않은 유저일 때만 이루어지고, 기존에 좋아요를 누른 사람은 좋아요 데이터를 삭제해야 한다. like를 누른 유저 정보에 filter로 request.user.pk를 넣고 exist메서드를 통해 존재여부를 확인한다. 그리고 add와 remove메서드를 통해 데이터를 변경한다.
- template : 좋아요를 누른 유저에게는 '좋아요 취소'버튼이, 좋아요를 누르지 않은 유저에게는 '좋아요'버튼이 보이도록 if태그를 사용해서 request.user in movie,like_users.all조건을 추가해준다. 

# 팔로우 기능
- 팔로우는 User와 User사이의 N:M관계다
- AbstractUser를 상속받은 User모델에 followings라는 ManyToMany필드를 작성하면 accounts_user_followings 중개 테이블이 생성된다.
- User가 User에게 ManyToMany를 사용하기 때문에 첫번째 인자에 자기 자신을 의미하는 self를 작성하고, 팔로우 기능은 비대칭이기 때문에 필드의 symmetrical옵션은 Flase로 지정한다.  
- related_name을 followers로 지정해주었기 때문에 역참조는 followers라는 이름으로 접근한다. 
- view : follow기능은 자기 자신에게 적용되면 안되기 때문에 if person != request.user조건을 추가해준다. 나머지 로직은 likes함수와 유사하다. 
- template : 팔로잉/팔로워 수를 표시하기 위해 length필터를 사용하고, 팔로우/언팔로우 버튼도  if request.user != person 조건에 따라 나타나도록 한다. 
- 프로필 페이지는 불러온 유저모델을 이용해 특정 유저 정보를 가져오고, context를 통해 profile 템플릿으로 넘겨주면 된다. 
- User모델은 get_user_model함수를 통해 내가 정의했던 accounts.User정보(현재 프로젝트에서 활성화된 사용자 모델)를 가져온다.


