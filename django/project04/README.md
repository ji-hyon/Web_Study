학습한 내용, 어려웠던 부분, 새로 배운 것들, 느낀 점 

# A번
- BASE_DIR에 static디렉토리를 생성해서 이미지파일을 넣고, html파일에서 load static코드를 작성해 이미지를 불러왔다.
- static디렉토리 안에 image디렉토리를 추가적으로 작성하면 settings.py에 STATICFILES_DIRS변수를 추가해서 경로를 작성해줄 필요가 없었다. STATIC_URL은 기본적으로 작성되어 있는 값이다. 

# B번
- 데이터베이스에서 영화데이터를 불러오는 코드를 작성하고, index파일에서 반복문을 통해 데이터를 하나씩 처리해주면서 각 데이터에 해당하는 detail페이지와 연결하는 링크를 작성했다.

# C번
- 상세정보는 models파일에서 Movie클래스를 생성해 원하는 필드를 생성했고, 각 필드의 데이터 특성에 맞는 필드타입을 지정해주었다. 
- Coice필드는 튜플리스트를 작성해야 하는데, 각 튜플의 첫번째 원소는 실제 값, 두번째 요소는 해당 값의 레이블을 의미한다. 

# D번
- ModelForm을 사용해 각 필드에 원하는 옵션을 지정해주었고, model에서 지정한 필드를 html파일에서 form.as_p를 통해 불러와서 화면에 배치시켜주었다. 
- MEDIA_ROOT는 사용자가 업로드한 파일을 보관할 디렉토리의 절대경로이고, MEDIA_URL은 MEDIA_ROOT에서 제공되는 미디어 파일을 처리하는 URL이다(public url). 

# E번
- MovieForm매개변수에 instance=movie를 작성해주어 기존의 정보를 화면에 보여주도록 했다.
-  update함수의 context에 딕셔너리로 form뿐만 아니라 movie의 정보도 넘겨주어야 에러가 발생하지 않았다.

