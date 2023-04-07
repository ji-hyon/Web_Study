# A번 (base.html)
- 모든 템플릿이 상속받을 base.html을 최상단 디렉토리 template안에 위치시키고, settings.py에 경로를 작성해주었다.
- 로그인, 비로그인 상태에 따라서 네이게이션바를 다르게 나타내기 위해 user.is_authenticated 조건을 추가했다.
- 네비게이션바의 회원 관련 버튼들은 form 태그로 감싸서 accounts앱의 url로 연결시켰다.

# B번 (index.html)
- 제목과 내용 필드가 있는 Movie모델을 생성하고, 모델의 데이터를 전부 index.html로 넘겨준 후(movies = Movie.objects.all()), DTL for태그를 사용하여 데이터를 하나씩 꺼내서 출력하도록 코드를 작성했다.
- 제목에 상세페이지를 연결시키기 위해 url태그를 사용해 detail과 연결시키고, pk를 넘겨주었다.

# C번 (detail.html)
- index에서 특정 데이터(movie = Movie.objects.get(pk=pk))를 넘겨받은 후, detail.html에서 제목과 내용을 표시할 수 있도록 코드를 작성했다.
- 수정과 삭제버튼은 url태그를 사용해 movies앱의 update, delete와 연결시켰다. 

# D번 (create.html)
- create함수는 POST로 요청이 들어올 때(DB변경)는 MovieForm의 인자로 request.POST를 담아 데이터를 넘겨주고, GET으로 요청이 들어올 때는(생성페이지 보여주기) 데이터 없이 MovieForm을 보여주도록 했다.
- 폼(입력 형식)은 ModelForm을 사용해서, Form클래스를 따로 적지 않고 Model의 필드를 참조해 자동으로 생성하도록 했다.  
- create함수는 url태그를 사용하여 html의 제출버튼과 연결시켰다. 

# E번 (update.html)
- update함수는 기존 데이터가 필요하기 때문에, MovieForm의 인자로 인스턴스를 넘겨주어야 한다(1.Movie.objects.get(pk=pk) --> 2.instance=movie). 
- 사용자의 입력을 초기값으로 재설정하는 버튼을 사용하려면, type을 reset으로 설정한 input태그를 입력해주면 된다. 
- 제출버튼은 url태그로 update와 연결시킨다.

# F-I번
- 로그인/로그아웃/회원가입 등 회원 관련 기능은 모두 accounts앱에서 구현한다.
- accounts앱에서 사용하는 모델은 AbstractUser모델 클래스를 상속받는 커스텀 모델을 사용했다.
- accounts앱에서 form은 CustomUserModel을 사용했다.
 
 # F번 (login.html)
 - login뷰는 AuthenticationForm을 사용하고, POST와 GET방식을 따로 처리하도록 함수를 구현했다. form정보는 login템플릿에 context를 통해 전달된다.
 - login.html에서는 전달받은 form을 {{form.as_p}} 옵션을 통해 나타낸다. 
 - POST방식은 유효성 검증 후(is_valid) auth_login함수를 사용하여 로그인 기능을 구현하였다.  

# G번 (signup.html)
- signup뷰는 CustomUserCreationForm을 사용하고, POST와 GET방식을 따로 처리하도록 함수를 구현했다. 
- POST방식은 유효성 검증 후 form정보를 DB에 저장하고(save), 로그인(auth_login)하는 코드를 작성했다. 

# H번 (update.html)
- update뷰는 CustomUserChangeForm을 사용하고, POST와 GET방식을 따로 처리하도록 함수를 구현했다. 
- update뷰의 GET방식 처리는, 기존 데이터를 화면에 띄워줘야 하기 때문에 Form인자에 instance를 추가 작성해준다(instance=request.user). 

# I번 (change_password.html)
- change_password뷰는 PasswordChangeForm을 사용하고, POST와 GET방식을 따로 처리하도록 함수를 구현했다. 
- change_password도 마찬가지로 기존의 정보가 필요하기 때문에 
request.user를 인자로 넘겨준다.
- 비밀번호를 변경해도 로그아웃이 되지 않도록 update_session_auth_hash함수를 사용해야 한다. 비밀번호가 변경되면 기존 세션과의 회원 인증 정보가 일치하지 않게 돼버려 로그인 상태가 유지되지 못하기 때문이다. 